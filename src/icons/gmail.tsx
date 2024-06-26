import { component$ } from "@builder.io/qwik";

const Gmail = component$(() => {
  const fillClasses = "fill-primary-default dark:fill-secondary-default";
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="12"
      height="12"
      viewBox="0 0 12 12"
      class="-rotate-90"
    >
      <g clip-path="url(#clip0_121_476)">
        <path
          d="M11.9999 2.72851V9.68301C11.9999 10.135 11.6339 10.501 11.1819 10.501H9.27244V5.86501L5.99994 8.32001L2.72744 5.86501V10.5015H0.817939C0.710476 10.5015 0.604066 10.4803 0.504789 10.4392C0.405512 10.3981 0.315314 10.3378 0.239349 10.2618C0.163384 10.1857 0.103141 10.0955 0.0620621 9.9962C0.0209832 9.8969 -0.000126569 9.79048 -6.08823e-05 9.68301V2.72851C-6.08823e-05 1.71701 1.15444 1.13951 1.96344 1.74651L2.72744 2.32001L5.99994 4.77401L9.27244 2.31901L10.0364 1.74651C10.8449 1.14001 11.9999 1.71701 11.9999 2.72851Z"
          class={fillClasses}
        />
      </g>
      <defs>
        <clipPath id="clip0_121_476">
          <rect width="12" height="12" class={fillClasses} />
        </clipPath>
      </defs>
    </svg>
  );
});

export { Gmail };
