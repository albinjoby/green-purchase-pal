
import { cn } from "@/lib/utils";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

interface SustainabilityScoreProps {
  score: number;
  showLabel?: boolean;
  size?: "sm" | "md" | "lg";
  className?: string;
}

const SustainabilityScore = ({ 
  score, 
  showLabel = true, 
  size = "md",
  className
}: SustainabilityScoreProps) => {
  const getColor = (score: number) => {
    if (score >= 8.5) return "bg-eco-500";
    if (score >= 7) return "bg-eco-400";
    if (score >= 5) return "bg-yellow-500";
    if (score >= 3) return "bg-orange-500";
    return "bg-red-500";
  };

  const sizeClasses = {
    sm: "w-10 h-10 text-xs",
    md: "w-14 h-14 text-sm",
    lg: "w-20 h-20 text-base"
  };

  return (
    <div className={cn("flex flex-col items-center", className)}>
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <div 
              className={cn(
                "rounded-full flex items-center justify-center font-medium text-white cursor-help", 
                getColor(score),
                sizeClasses[size]
              )}
            >
              {score.toFixed(1)}
            </div>
          </TooltipTrigger>
          <TooltipContent side="top">
            <p>Sustainability score: {score.toFixed(1)}/10</p>
            <p className="text-xs text-muted-foreground">Higher is better for the environment</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
      {showLabel && (
        <span className="mt-1 text-xs text-muted-foreground">
          Eco Score
        </span>
      )}
    </div>
  );
};

export default SustainabilityScore;
