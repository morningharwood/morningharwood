import { component$ } from "@builder.io/qwik";

const XTwitter = component$(() => {
  const fillClasses = "fill-primary-default dark:fill-secondary-default";
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="12"
      height="12"
      viewBox="0 0 12 12"
      class="-rotate-90"
    >
      <g clip-path="url(#clip0_121_471)">
        <path
          d="M9.45044 0.576508H11.2904L7.27044 5.17151L11.9999 11.423H8.29694L5.39694 7.63101L2.07794 11.423H0.236939L4.53694 6.50801L-6.10352e-05 0.577008H3.79694L6.41844 4.04301L9.45044 0.576508ZM8.80494 10.322H9.82444L3.24294 1.62001H2.14894L8.80494 10.322Z"
          class={fillClasses}
        />
      </g>
      <defs>
        <clipPath id="clip0_121_471">
          <rect width="12" height="12" class={fillClasses} />
        </clipPath>
      </defs>
    </svg>
  );
});

export { XTwitter };
