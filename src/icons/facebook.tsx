import { component$ } from "@builder.io/qwik";

const Facebook = component$(() => {
  const fillClasses = "fill-primary-default dark:fill-secondary-default";
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="12"
      height="12"
      viewBox="0 0 12 12"
      class="-rotate-90"
    >
      <g clip-path="url(#clip0_121_474)">
        <path
          class={fillClasses}
          d="M11.9999 6.0365C11.9999 2.723 9.31344 0.036499 5.99994 0.036499C2.68644 0.036499 -6.10352e-05 2.723 -6.10352e-05 6.0365C-6.10352e-05 9.0315 2.19394 11.5135 5.06244 11.9635V7.771H3.53894V6.036H5.06244V4.715C5.06244 3.2115 5.95844 2.3805 7.32894 2.3805C7.98494 2.3805 8.67194 2.498 8.67194 2.498V3.9745H7.91494C7.16944 3.9745 6.93694 4.437 6.93694 4.9115V6.0365H8.60094L8.33494 7.7715H6.93694V11.964C9.80594 11.5135 11.9999 9.031 11.9999 6.0365Z"
        />
      </g>
      <defs>
        <clipPath id="clip0_121_474">
          <rect class={fillClasses} width="12" height="12" />
        </clipPath>
      </defs>
    </svg>
  );
});

export { Facebook };
