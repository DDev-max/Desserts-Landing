import { emptyStarColorCode, starColorCode } from "@/app/data/consts";
import { ColorStarProps } from "@/app/data/types";


export   function colorStar({idx,isRated,setColor,color}: ColorStarProps) {
    if (!isRated.current) {
      const newColors = color.map((_, i) => (i <= idx ? starColorCode : emptyStarColorCode));
      setColor(newColors);
    }
  }
