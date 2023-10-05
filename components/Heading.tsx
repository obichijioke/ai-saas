import { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface HeadingProps {
  title: string;
  description?: string;
}
export const Heading = ({ title, description }: HeadingProps) => {
  return (
    <div className="md:px-2 flex items-center gap-x-3 mb-8">
      <div>
        <h2 className="text-xl md:text-3xl font-bold">{title}</h2>
        <p className="text-muted-foreground text-xs md:text-sm">
          {description}
        </p>
      </div>
    </div>
  );
};
