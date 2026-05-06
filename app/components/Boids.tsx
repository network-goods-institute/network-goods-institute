"use client";

import { useEffect, useRef } from "react";

type Boid = {
  x: number;
  y: number;
  vx: number;
  vy: number;
};

const FLOCK = 6;
const NEIGHBOR_RADIUS = 140;
const SEPARATION_RADIUS = 50;
const MAX_SPEED = 1.6;
const MIN_SPEED = 0.45;
const CURSOR_PULL = 0.045;
const CURSOR_TIMEOUT = 1800;

export function Boids() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const parent = canvas.parentElement;
    if (!parent) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const reduceMotion =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    let width = 0;
    let height = 0;
    let dpr = 1;

    const resize = () => {
      const rect = parent.getBoundingClientRect();
      width = rect.width;
      height = rect.height;
      dpr = window.devicePixelRatio || 1;
      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };
    resize();

    const boids: Boid[] = Array.from({ length: FLOCK }, () => {
      const angle = Math.random() * Math.PI * 2;
      return {
        x: Math.random() * width,
        y: Math.random() * height,
        vx: Math.cos(angle) * MAX_SPEED * 0.6,
        vy: Math.sin(angle) * MAX_SPEED * 0.6,
      };
    });

    const cursor = { x: width / 2, y: height / 2, t: 0 };
    let scrollImpulse = 0;
    let lastScrollY =
      typeof window !== "undefined" ? window.scrollY : 0;

    const onPointerMove = (e: PointerEvent) => {
      const rect = canvas.getBoundingClientRect();
      cursor.x = e.clientX - rect.left;
      cursor.y = e.clientY - rect.top;
      cursor.t = performance.now();
    };
    const onScroll = () => {
      const dy = window.scrollY - lastScrollY;
      scrollImpulse += dy * 0.18;
      lastScrollY = window.scrollY;
    };
    window.addEventListener("pointermove", onPointerMove);
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", resize);

    let raf = 0;
    const tick = () => {
      ctx.clearRect(0, 0, width, height);

      const cursorActive =
        !reduceMotion && performance.now() - cursor.t < CURSOR_TIMEOUT;

      for (let i = 0; i < boids.length; i++) {
        const b = boids[i];

        let alignX = 0;
        let alignY = 0;
        let cohX = 0;
        let cohY = 0;
        let sepX = 0;
        let sepY = 0;
        let neighbors = 0;

        for (let j = 0; j < boids.length; j++) {
          if (i === j) continue;
          const o = boids[j];
          const dx = o.x - b.x;
          const dy = o.y - b.y;
          const d2 = dx * dx + dy * dy;
          if (d2 < NEIGHBOR_RADIUS * NEIGHBOR_RADIUS) {
            neighbors++;
            alignX += o.vx;
            alignY += o.vy;
            cohX += o.x;
            cohY += o.y;
            if (d2 < SEPARATION_RADIUS * SEPARATION_RADIUS && d2 > 0.001) {
              const d = Math.sqrt(d2);
              sepX -= dx / d;
              sepY -= dy / d;
            }
          }
        }

        if (neighbors > 0) {
          alignX = alignX / neighbors - b.vx;
          alignY = alignY / neighbors - b.vy;
          cohX = cohX / neighbors - b.x;
          cohY = cohY / neighbors - b.y;
        }

        b.vx += alignX * 0.04 + cohX * 0.0008 + sepX * 0.18;
        b.vy += alignY * 0.04 + cohY * 0.0008 + sepY * 0.18;

        if (cursorActive) {
          const dx = cursor.x - b.x;
          const dy = cursor.y - b.y;
          const d = Math.sqrt(dx * dx + dy * dy);
          if (d > 1) {
            b.vx += (dx / d) * CURSOR_PULL;
            b.vy += (dy / d) * CURSOR_PULL;
          }
        }

        b.vy += scrollImpulse * 0.06;

        const speed = Math.sqrt(b.vx * b.vx + b.vy * b.vy);
        if (speed > MAX_SPEED) {
          b.vx = (b.vx / speed) * MAX_SPEED;
          b.vy = (b.vy / speed) * MAX_SPEED;
        } else if (speed < MIN_SPEED && speed > 0) {
          b.vx = (b.vx / speed) * MIN_SPEED;
          b.vy = (b.vy / speed) * MIN_SPEED;
        }

        b.x += b.vx;
        b.y += b.vy;

        const margin = 16;
        if (b.x < -margin) b.x = width + margin;
        else if (b.x > width + margin) b.x = -margin;
        if (b.y < -margin) b.y = height + margin;
        else if (b.y > height + margin) b.y = -margin;

        const angle = Math.atan2(b.vy, b.vx);
        ctx.save();
        ctx.translate(b.x, b.y);
        ctx.rotate(angle);
        ctx.fillStyle = "rgba(29, 85, 89, 0.7)";
        ctx.beginPath();
        ctx.moveTo(9, 0);
        ctx.lineTo(-6, 4.5);
        ctx.lineTo(-3, 0);
        ctx.lineTo(-6, -4.5);
        ctx.closePath();
        ctx.fill();
        ctx.restore();
      }

      scrollImpulse *= 0.88;
      if (Math.abs(scrollImpulse) < 0.01) scrollImpulse = 0;

      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("pointermove", onPointerMove);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 h-full w-full pointer-events-none"
      aria-hidden="true"
    />
  );
}
