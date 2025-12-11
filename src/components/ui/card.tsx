import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const cardVariants = cva(
  "rounded-xl text-card-foreground transition-all duration-500",
  {
    variants: {
      variant: {
        default: "bg-card border border-border/50 shadow-lg",
        premium: "bg-card/90 backdrop-blur-xl border border-primary/20 shadow-[0_0_20px_hsl(45_93%_47%/0.1),0_25px_50px_-12px_hsl(0_0%_0%/0.5)] hover:border-primary/40 hover:shadow-[0_0_40px_hsl(45_93%_47%/0.2),0_25px_50px_-12px_hsl(0_0%_0%/0.5)]",
        glass: "bg-card/50 backdrop-blur-xl border border-border/30",
        glow: "bg-card/90 border border-primary/30 shadow-[0_0_30px_hsl(45_93%_47%/0.2)] hover:shadow-[0_0_50px_hsl(45_93%_47%/0.4)]",
        stats: "bg-card/90 backdrop-blur-xl border border-primary/20 shadow-[0_0_20px_hsl(45_93%_47%/0.1)] hover:-translate-y-2 hover:shadow-[0_0_40px_hsl(45_93%_47%/0.3)]",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

export interface CardProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof cardVariants> {}

const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ className, variant, ...props }, ref) => (
    <div ref={ref} className={cn(cardVariants({ variant, className }))} {...props} />
  )
);
Card.displayName = "Card";

const CardHeader = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn("flex flex-col space-y-1.5 p-6", className)} {...props} />
  ),
);
CardHeader.displayName = "CardHeader";

const CardTitle = React.forwardRef<HTMLParagraphElement, React.HTMLAttributes<HTMLHeadingElement>>(
  ({ className, ...props }, ref) => (
    <h3 ref={ref} className={cn("text-2xl font-semibold leading-none tracking-tight font-display", className)} {...props} />
  ),
);
CardTitle.displayName = "CardTitle";

const CardDescription = React.forwardRef<HTMLParagraphElement, React.HTMLAttributes<HTMLParagraphElement>>(
  ({ className, ...props }, ref) => (
    <p ref={ref} className={cn("text-sm text-muted-foreground", className)} {...props} />
  ),
);
CardDescription.displayName = "CardDescription";

const CardContent = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => <div ref={ref} className={cn("p-6 pt-0", className)} {...props} />,
);
CardContent.displayName = "CardContent";

const CardFooter = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn("flex items-center p-6 pt-0", className)} {...props} />
  ),
);
CardFooter.displayName = "CardFooter";

export { Card, CardHeader, CardFooter, CardTitle, CardDescription, CardContent };
