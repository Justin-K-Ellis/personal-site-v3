import type { JSX } from "react";
import type { ButtonType, UIColor } from "../../../../shared/types";

interface ButtonProps {
  variant: UIColor;
  type: ButtonType;
  children: string | JSX.Element | JSX.Element[];
}

export default function Button(props: ButtonProps) {
  const bgColors: Record<string, string> = {
    primary: "bg-sky-500",
    secondary: "bg-blue-600",
    accent: "bg-teal-300",
    primaryHover: "hover:bg-sky-400",
    secondaryHover: "hover:bg-blue-500",
    accentHover: "hover:bg-teal-400",
  };
  const bg = bgColors[props.variant] ?? bgColors.primary;
  const bgHover = bgColors[`${props.variant}Hover`];

  return (
    <button
      type={props.type ?? "button"}
      className={`${bg} ${bgHover} rounded shadow-sm p-1 text-white border border-zinc-100`}
    >
      {props.children}
    </button>
  );
}
