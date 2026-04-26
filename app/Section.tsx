import { cn } from "@/lib/utils";

export interface SectionProps extends React.HTMLAttributes<HTMLDivElement> {
  title?: string;
  eyebrow?: string;
  align?: "left" | "center";
}

export const Section: React.FC<SectionProps> = ({
  title,
  eyebrow,
  align = "left",
  children,
  className,
  ...props
}) => {
  return (
    <section
      className={cn("w-full max-w-5xl mx-auto px-6 md:px-10", className)}
      {...props}
    >
      {(title || eyebrow) && (
        <header
          className={cn(
            "mb-12 md:mb-16",
            align === "center" && "text-center"
          )}
        >
          {eyebrow && (
            <div className="text-xs uppercase tracking-[0.18em] text-ink-muted mb-4">
              {eyebrow}
            </div>
          )}
          {title && (
            <h2 className="font-display text-4xl md:text-5xl text-ink leading-tight text-balance">
              {title}
            </h2>
          )}
        </header>
      )}
      {children}
    </section>
  );
};
