import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { metadataDefaults } from "~/data/meta-factory";
import { SiteNavigation } from "#components/site-navigation/site-navigation";
import { useContent, Link } from "@builder.io/qwik-city";

const Work = component$(() => {
  const { menu } = useContent();

  const buttonClassesAlt =
    "text-primary-default border border-1 border-primary-default hover:bg-secondary-hover";
  const buttonClassesAltDark =
    "dark:text-secondary-default border border-1 dark:border-secondary-default dark:hover:bg-primary-hover";
  return (
    <>
      <SiteNavigation />
      <ul>
        {/** @ts-ignore */}
        {menu.items.map((item, key) => {
          return (
            <li key={key}>
              <div class="relative h-screen px-4 pb-4 md:px-16 md:pb-16">
                <div
                  class={[
                    `border-1 relative flex h-full w-full flex-col items-center  justify-center border border-primary-default text-center dark:border-secondary-default`,
                    {
                      "border-t-0": key === 0,
                    },
                  ]}
                >
                  <div class="relative flex w-full flex-col items-center justify-center px-4 md:w-10/12 md:px-16 lg:w-8/12">
                    <h2 class="tracking-tightest font-display text-3xl font-medium uppercase text-primary-default dark:text-secondary-default md:text-5xl lg:text-6xl">
                      {item.text}
                    </h2>
                    {/** @ts-ignore */}
                    {item.items?.map((i, k) => {
                      return (
                        <p
                          key={k}
                          class="text-md md:text-md font-body mb-10 mt-3 font-normal text-primary-default dark:text-secondary-default md:font-normal xl:w-6/12"
                        >
                          {i.text}
                        </p>
                      );
                    })}

                    <Link
                      href={item.href}
                      target="_BLANK"
                      class={`cursor-pointer  px-10 py-4 font-sans uppercase tracking-widest no-underline ${buttonClassesAlt} ${buttonClassesAltDark}`}
                    >
                      Enter
                    </Link>
                  </div>
                </div>
              </div>
            </li>
          );
        })}
      </ul>
    </>
  );
});

export default Work;

metadataDefaults.title = "Work Page";
export const head: DocumentHead = metadataDefaults;
