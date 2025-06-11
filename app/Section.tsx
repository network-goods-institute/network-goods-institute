import { cn } from "@/lib/utils";

export interface SectionProps extends React.HTMLAttributes<HTMLDivElement> {
  title?: string;
}

export const Section: React.FC<SectionProps> = ({
  title,
  children,
  className,
  ...props
}) => {
  return (
    <section
      className={cn("w-full max-w-7xl mx-auto px-8", className)}
      {...props}
    >
      <div className="text-center mb-16">
        <h2 className="text-5xl font-bold text-gray-900 mb-4">
          {title}
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-gray-400 to-gray-600 mx-auto rounded-full"></div>
      </div>
      {children}
    </section>
  );
};
