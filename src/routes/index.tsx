import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { Button } from "~/components/button/button";

export default component$(() => {
  return (
    <>
      <Button kind={"primary"} size={"medium"} shape={"default"}>Hello World</Button>
    </>
  );
});

export const head: DocumentHead = {
  title: "Welcome to Qwik",
  meta: [
    {
      name: "description",
      content: "Qwik site description",
    },
  ],
};
