import { cn } from "@/lib/utils";

interface SpinnerProps {
  size: string;
}
const Spinner = ({ size }: SpinnerProps) => {
  return (
    <div
      className={cn(
        "w-12 h-12 border-2 rounded-full border-t-foreground animate-spin",
        size === "large" && "w-20 h-20"
      )}
    />
  );
};

export default Spinner;
