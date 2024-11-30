import { emptyStarColorCode, starColorCode } from "@/app/data/consts";
import { DefaultColorProps } from "@/app/data/types";

export function defaultColor({idx,qtty}: DefaultColorProps) {
    return Math.round(qtty) >= idx ? starColorCode : emptyStarColorCode
  }

