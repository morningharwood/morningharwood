import { component$ } from "@builder.io/qwik";

const HomeTitle = component$(() => {
  return (
    <div class="text-primary-default dark:text-secondary-default grid font-display uppercase">
      <h1 class="releative inline-block text-2xl leading-6">
        Good <br />
        Morning <br />
        Harwood
      </h1>
      <span slot="year">2023</span>
      <div class="flex"></div>
    </div>
  );
});

export { HomeTitle };
