import { component$ } from "@builder.io/qwik";
import { HomeTitleSpan } from "#components/home-title/home-title-span";

const HomeTitle = component$(() => {
  return (
    <div class="grid font-display uppercase text-primary-default dark:text-secondary-default">
      <h1 class="relative inline-block  text-2xl leading-6">
        <div class="overflow-hidden">
          <HomeTitleSpan delay={1}>Good</HomeTitleSpan>
        </div>
        <div class="overflow-hidden">
          <HomeTitleSpan delay={2}>Morning</HomeTitleSpan>
        </div>
        <div class="overflow-hidden">
          <HomeTitleSpan delay={3}>Harwood</HomeTitleSpan>
        </div>
      </h1>
    </div>
  );
});

export { HomeTitle };
