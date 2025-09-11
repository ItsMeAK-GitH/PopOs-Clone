import { cn } from "@/lib/utils";
import type { SVGProps } from "react";

export function System76Logo(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 256 256"
      fill="currentColor"
      className={cn("h-8 w-auto", props.className)}
      {...props}
    >
      <path d="M128 0C57.308 0 0 57.308 0 128s57.308 128 128 128 128-57.308 128-128S198.692 0 128 0zm0 236.8c-60.05 0-108.8-48.75-108.8-108.8S67.95 19.2 128 19.2s108.8 48.75 108.8 108.8-48.75 108.8-108.8 108.8z" />
      <g transform="rotate(45 128 128)">
        <path d="M189.44 118.4H137.6v-51.84h-19.2v51.84H66.56v19.2h51.84v51.84h19.2v-51.84h51.84z" />
      </g>
    </svg>
  );
}
