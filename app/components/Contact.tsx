'use client';

import { useState } from "react";

export function Contact() {
    const [email, setEmail] = useState("");

    const handleSubscribe = (e: React.FormEvent) => {
        e.preventDefault();
        const trimmed = email.trim();
        if (!trimmed) return;
        const subject = encodeURIComponent("Subscribe — NGI investor updates");
        const body = encodeURIComponent(
            `Please add ${trimmed} to the monthly investor updates list.`
        );
        window.location.href = `mailto:connor@networkgoods.institute?subject=${subject}&body=${body}`;
    };

    return (
        <section
            id="contact"
            className="w-full max-w-5xl mx-auto px-6 md:px-10"
            itemScope
            itemType="https://schema.org/Organization"
        >
            <div className="grid grid-cols-1 md:grid-cols-5 gap-12 md:gap-20 border-t border-rule pt-16 md:pt-24">
                <div className="md:col-span-2">
                    <div className="text-xs uppercase tracking-[0.18em] text-ink-muted mb-4">
                        Stay in touch
                    </div>
                    <h2 className="font-display text-4xl md:text-5xl text-ink leading-tight mb-6">
                        Monthly briefing
                    </h2>
                    <p className="text-ink-soft text-base md:text-lg leading-relaxed max-w-md">
                        A short letter each month on what we&apos;re building, what we&apos;re reading, and where we&apos;d welcome help. Sent to investors, collaborators, and friends.
                    </p>
                </div>

                <div className="md:col-span-3 flex flex-col gap-10">
                    <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-3">
                        <label htmlFor="email" className="sr-only">Email address</label>
                        <input
                            id="email"
                            type="email"
                            required
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="you@domain.com"
                            className="flex-1 px-4 py-3 bg-paper-soft border border-rule rounded-sm text-ink placeholder:text-ink-muted focus:outline-none focus:border-[var(--accent)] transition-colors"
                        />
                        <button
                            type="submit"
                            className="px-6 py-3 bg-[var(--accent)] hover:bg-[var(--accent-soft)] text-[var(--paper)] rounded-sm font-medium transition-colors"
                        >
                            Subscribe
                        </button>
                    </form>

                    <div className="border-t border-rule pt-10">
                        <div className="text-xs uppercase tracking-[0.18em] text-ink-muted mb-3">
                            Or reach out directly
                        </div>
                        <a
                            href="mailto:connor@networkgoods.institute"
                            className="font-display text-2xl md:text-3xl accent-link"
                            aria-label="Email Network Goods Institute"
                        >
                            connor@networkgoods.institute
                        </a>
                    </div>
                </div>
            </div>

            <meta itemProp="name" content="Network Goods Institute" />
            <meta itemProp="description" content="Network Goods Institute builds coordination mechanisms for collective intelligence and public-goods funding." />
            <meta itemProp="url" content="https://networkgoods.institute" />
            <meta itemProp="email" content="connor@networkgoods.institute" />
        </section>
    );
}
