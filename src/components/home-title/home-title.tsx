import { component$ } from "@builder.io/qwik";

const HomeTitle = component$(() => {
  return (
    <div class="grid font-display uppercase text-primary-default dark:text-secondary-default">
      <h1 class="releative inline-block text-2xl leading-6">
        Good <br />
        Morning <br />
        Harwood
      </h1>
    </div>
  );
});

export { HomeTitle };
