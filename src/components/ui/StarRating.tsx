import { Star } from "lucide-react";
import { cn } from "@/lib/utils";

type StarRatingProps = {
  rating: number;
  className?: string;
};

export function StarRating({ rating, className }: StarRatingProps) {
  return (
    <div className={cn("flex items-center gap-0.5", className)}>
      <span className="sr-only">{`Rated ${rating} out of 5`}</span>
      {Array.from({ length: 5 }, (_, i) => (
        <Star
          key={i}
          aria-hidden="true"
          className={cn(
            "size-4",
            i < rating ? "fill-highlight text-highlight" : "fill-navy-200 text-navy-200",
          )}
        />
      ))}
    </div>
  );
}
