import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { metadataDefaults } from "~/data/meta-factory";
import { SiteNavigation } from "#components/site-navigation/site-navigation";
import { useContent, Link } from "@builder.io/qwik-city";

const Lab = component$(() => {
  const { menu } = useContent();
  console.log(JSON.stringify(menu, null, 2));
  return (
    <>
      <SiteNavigation />
      <div class="container mx-auto my-8 w-full">
        <h1 class="mb-8 text-primary-default dark:text-secondary-default">
          Labs
        </h1>
        <div class="grid w-full grid-cols-4">
          {menu
            ? menu.items?.map((item, k0) => (
                <div key={k0}>
                  {item.items?.map((item, k1) => (
                    <div
                      key={k1}
                      class="border-1 col-span-1 border dark:border-secondary-default"
                    >
                      <div class="max-w-sm overflow-hidden rounded shadow-lg">
                        <div class="px-6 py-4">
                          <h3 class="mb-2 text-xl font-bold text-primary-default dark:text-secondary-default">
                            {item.text}
                          </h3>
                          {item.items?.map((item, k2) => {
                            return (
                              <p
                                key={k2}
                                class="text-base text-primary-default dark:text-secondary-default"
                              >
                                {item.text}
                              </p>
                            );
                          })}
                          <Link
                            href={item.href}
                            class="block pt-6 font-serif text-primary-default underline dark:text-secondary-default"
                          >
                            Learn More
                          </Link>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              ))
            : null}
        </div>
      </div>
    </>
  );
});

export default Lab;

metadataDefaults.title = "Lab Page";
export const head: DocumentHead = metadataDefaults;
