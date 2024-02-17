import { component$, Slot } from "@builder.io/qwik";
import classNames from "classnames";
export interface ButtonProps {
  size: "small" | "medium" | "large" | "xl" | "xxl";
  kind: "primary" | "secondary";
  shape: "default" | "pill" | "square";
}

export const Button = component$<ButtonProps>((props) => {
  const {kind = "primary", size = "medium", shape = "default" } = props;
  const sharedClasses = "shadow-sm font-display";
  const shapeClasses = {
    default: "rounded",
    pill: "rounded-full",
    square: "rounded-none"
  }
  const kindClasses = {
    primary: "bg-indigo-600 text-white hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600",
    secondary: "bg-white text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50",
  }
  const sizeClasses = {
    "small": "px-2 py-1 text-xs",
    "medium": "px-2 py-1 text-sm",
    "large": "px-2.5 py-1.5 text-sm ",
    "xl": "px-3 py-2 text-sm",
    "xxl": "px-3.5 py-2.5 text-sm"
  }
  return (
      <button
          type="button"
          class={classNames(sharedClasses, shapeClasses[shape], sizeClasses[size], kindClasses[kind])}
      >
        <Slot></Slot>
      </button>
  )
      ;
});
