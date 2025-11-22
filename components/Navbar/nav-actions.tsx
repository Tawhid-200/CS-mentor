import { NavActions } from "./constants";
import { cn } from "@/lib/utils";

export const NavAction = ({ className }: { className?: string }) => {
  return (
    <div className={cn("flex items-center justify-between gap-4", className)}>
      {NavActions.map((nav, i) => (
        <button key={i}>
          <nav.icon size={18} />
        </button>
      ))}
    </div>
  );
};
