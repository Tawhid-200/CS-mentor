import { HeroActions as HeroAction } from "./constants";
import { Button } from "../ui/button";

export const HeroActions = () => {
  return (
    <div className="flex flex-wrap items-center justify-center gap-3 gap-2 ">
      {HeroAction.map((action, i) => (
        <Button
          key={i}
          variant="outline"
          className="bg-transparent backdrop-blur-2xl md:text-sm text-xs"
        >
          <span>
            <action.icon />
          </span>
          {action.lable}
        </Button>
      ))}
    </div>
  );
};
