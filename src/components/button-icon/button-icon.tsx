import { component$, Slot } from "@builder.io/qwik";

export interface ButtonIconProps {
  size: "small" | "medium" | "large" | "xl" | "xxl";
}
const ButtonIcon = component$<ButtonIconProps>((props) => {
  const { size } = props;
  let sizeClasses = "";
  switch (size) {
    case "small":
      sizeClasses = "h-6 w-6";
      break;
    case "medium":
      sizeClasses = "h-8 w-8";
      break;
    case "large":
      sizeClasses = "h-10 w-10";
      break;

    case "xl":
      sizeClasses = "h-12 w-12";
      break;

    case "xxl":
      sizeClasses = "h-14 w-14";
      break;
    default:
      sizeClasses = "h-6 w-6";
      break;
  }
  return (
    <button
      type="button"
      class={`${sizeClasses} rounded-full bg-primary-default p-1 text-secondary-default hover:bg-primary-hover dark:bg-secondary-default dark:text-primary-default dark:hover:bg-secondary-hover`}
    >
      <Slot />
    </button>
  );
});

export { ButtonIcon };
