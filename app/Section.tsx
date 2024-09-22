import { cn } from "@/lib/utils";

export interface SectionProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string;
}

export const Section: React.FC<SectionProps> = ({
  title,
  children,
  className,
  ...props
}) => {
  return (
    <section className={cn("p-16 w-full min-h-screen", className)} {...props}>
      <h2 className="font-bold text-3xl text-muted-foreground mb-24  after:left-0 after:-z-10 after:block after:h-1 after:w-full  after:shadow-sm">
        {title}
      </h2>
      {children}
    </section>
  );
};
