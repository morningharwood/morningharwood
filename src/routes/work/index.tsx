import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { metadataDefaults } from "~/data/meta-factory";

const Work = component$(() => {
  return (
    <article class="prose text-primary-default lg:prose-xl dark:text-secondary-default">
      <h1 class=" text-primary-default dark:text-secondary-default">
        Garlic bread with cheese: What the science tells us
      </h1>
      <p>
        For years parents have espoused the health benefits of eating garlic
        bread with cheese to their children, with the food earning such an
        iconic status in our culture that kids will often dress up as warm,
        cheesy loaf for Halloween.
      </p>
      <p>
        But a recent study shows that the celebrated appetizer may be linked to
        a series of rabies cases springing up around the country.
      </p>
    </article>
  );
});

export default Work;

metadataDefaults.title = "Work Page";
export const head: DocumentHead = metadataDefaults;
