import { component$, useStylesScoped$ } from "@builder.io/qwik";

const DateTicker = component$(() => {
  useStylesScoped$(`
  .hp-grid-info-hr {
    display: flex;
    width: 100%;
    height: .375rem;
  }
  .date-ticker {
    position: absolute;
    font-size: .625rem;
    bottom: calc(.375rem * -1);
    padding: 0 0 0 .625rem;
    right: 0;
    text-align: right;
    letter-spacing: .125rem;
    cursor: wait;
  }
  `);
  return (
    <div class="relative inline-flex w-[3rem] font-display md:w-[3rem] ">
      <div class="hp-grid-info-hr  bg-primary-default dark:bg-secondary-default"></div>
    </div>
  );
});
export { DateTicker };
