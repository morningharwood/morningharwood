import {component$} from "@builder.io/qwik";
import type {DocumentHead} from "@builder.io/qwik-city";
import {metadataDefaults} from "~/data/meta-factory";


const Work = component$(() => {

  return (
    <div>
      <h1>Work</h1>
    </div>
  )
});

export default Work;

metadataDefaults.title = "Work Page";
export const head: DocumentHead = metadataDefaults;
