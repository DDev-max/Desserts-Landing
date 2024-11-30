import { OverwriteColorProps } from "@/app/data/types";

export function overwriteColor({color,idx}: OverwriteColorProps) {
    return color[idx] ? color[idx] : ""
  }
