import { component$ } from "@builder.io/qwik";
import { Link, useLocation } from "@builder.io/qwik-city";

const SiteNavigation = component$(() => {
  const location = useLocation();

  const linkClass =
    "hover:text-on-secondary-hover dark:hover:text-on-primary-hover bg-transparent px-3 py-2 font-mono uppercase tracking-wide dark:hover:bg-primary-hover hover:bg-secondary-hover";
  const linkHoverClass =
    "cursor-not-allowed dark:bg-primary-hover bg-transparent line-through dark:border-secondary-default";
  return (
    <nav class=" sticky top-0 z-30 w-full transform border border-l-0 border-r-0 border-t-0 border-primary-default bg-secondary-default py-6 text-primary-default shadow-md transition duration-150 ease-in-out dark:border-secondary-default dark:bg-primary-default dark:text-secondary-default">
      <div class="flex px-4 lg:px-12">
        <div class="flex flex-1">
          <Link class="flex pr-8 no-underline" href="/">
            <span class="text-md whitespace-no-wrap font-displayf flex items-center pl-3">
              <span class="h-1.5 w-7 bg-primary-default dark:bg-secondary-default"></span>
              <span class="hidden pl-4 font-display uppercase tracking-widest sm:flex">
                MorningHarwood
              </span>
            </span>
          </Link>
        </div>
        <ul class="flex -translate-x-1 transform font-mono">
          <li class="ml-1 list-none py-1 sm:ml-2 md:my-0 md:ml-4 md:py-0">
            <Link
              aria-label=""
              class={[
                linkClass,
                {
                  [linkHoverClass]: location.url.pathname === "/lab/",
                },
              ]}
              href="/lab"
            >
              Lab
            </Link>
          </li>
          <li class="ml-1 list-none py-1 sm:ml-2 md:my-0 md:ml-4 md:py-0">
            <Link
              aria-label=""
              class={[
                linkClass,
                {
                  [linkHoverClass]: location.url.pathname === "/profile/",
                },
              ]}
              href="/profile"
            >
              Profile
            </Link>
          </li>
          <li class="ml-1 list-none py-1 sm:ml-2 md:my-0 md:ml-4 md:py-0">
            <Link
              aria-label=""
              class={[
                linkClass,
                {
                  [linkHoverClass]: location.url.pathname === "/work/",
                },
              ]}
              href="/work"
            >
              Work
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
});

export { SiteNavigation };
