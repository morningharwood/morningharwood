import { component$ } from "@builder.io/qwik";

const SiteNavigation = component$(() => {
  return (
    <nav class="sticky top-0 z-30 w-full transform bg-secondary-default py-6 text-primary-default shadow-md transition duration-150 ease-in-out">
      <div class="flex px-4 lg:px-12">
        <div class="flex flex-1">
          <a class="pr-8 no-underline" href="/">
            <span class="text-md whitespace-no-wrap pl-3 font-mono font-bold uppercase capitalize sm:flex">
              <span class="logo text-primary-default ">/</span>
              <span class="hidden pl-4 font-mono font-bold uppercase tracking-widest sm:flex">
                Morning Harwood
              </span>
            </span>
          </a>
        </div>
        <ul class="flex -translate-x-1 transform">
          <li class="ml-1 list-none py-1 sm:ml-2 md:my-0 md:ml-4 md:py-0">
            <a
              aria-label=""
              class="hover:text-on-primary-hover bg-transparent px-3 py-2 font-mono font-normal uppercase tracking-wide hover:bg-primary-hover"
              href="/lab"
            >
              Lab
            </a>
          </li>
          <li class="ml-1 list-none py-1 sm:ml-2 md:my-0 md:ml-4 md:py-0">
            <a
              aria-label=""
              class="cursor-default bg-transparent px-3 py-2 font-mono font-bold uppercase tracking-wide line-through"
              href="/profile"
            >
              Profile
            </a>
          </li>
          <li class="ml-1 list-none py-1 sm:ml-2 md:my-0 md:ml-4 md:py-0">
            <a
              aria-label=""
              class="hover:text-on-primary-hover bg-transparent px-3 py-2 font-mono font-normal uppercase tracking-wide hover:bg-primary-hover"
              href="/work"
            >
              Work
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
});

export { SiteNavigation };
