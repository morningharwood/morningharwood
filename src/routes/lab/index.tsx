import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { metadataDefaults } from "~/data/meta-factory";
import { SiteNavigation } from "#components/site-navigation/site-navigation";

const Lab = component$(() => {
  return (
    <>
      <SiteNavigation />
    </>
  );
});

export default Lab;

metadataDefaults.title = "Lab Page";
export const head: DocumentHead = metadataDefaults;
