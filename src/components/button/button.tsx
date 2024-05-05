import { $, component$, Slot } from "@builder.io/qwik";
export interface ButtonProps {
  size: "small" | "medium" | "large" | "xl" | "xxl";
  kind: "primary" | "secondary";
  shape: "default" | "pill" | "square";
  // @ts-ignore
  onClick: () => void;
}

export const Button = component$<ButtonProps>((props) => {
  const {
    kind = "primary",
    size = "medium",
    shape = "default",
    onClick,
  } = props;
  const sharedClasses = "shadow-sm font-serif";
  const shapeClasses = {
    default: "rounded",
    pill: "rounded-full",
    square: "rounded-none",
  };
  const kindClasses = {
    primary:
      "bg-primary-default dark:text-secondary-default hover:bg-primary-hover focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-default",
    secondary:
      "bg-primary-default dark:text-secondary-default border border-1 dark:border-secondary-default dark:hover:bg-primary-hover",
  };
  const sizeClasses = {
    small: "px-2 py-1 text-xs",
    medium: "px-2 py-1 text-sm",
    large: "px-2.5 pb-1.5 py-2.5 text-sm ",
    xl: "px-3 py-2 text-sm",
    xxl: "px-3.5 py-2.5 text-sm",
  };

  return (
    <button
      type="button"
      class={[
        sharedClasses,
        shapeClasses[shape],
        sizeClasses[size],
        kindClasses[kind],
      ]}
      onClick$={$(onClick)}
    >
      <Slot></Slot>
    </button>
  );
});
