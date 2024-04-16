import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { HomeTitle } from "~/components/home-title/home-title";
import { Boner } from "~/components/boner/boner";
import { RunningHeader } from "~/components/running-header/running-header";
import { HomeSocial } from "~/components/home-social/home-social";
import { HomeMenu } from "~/components/menu-naivgation/home-menu";
import { HomeSubheader } from "~/components/home-subheader/home-subheader";
import { DateTicker } from "~/components/date-ticker/date-ticker";
import type { RouteData } from "~/components/types";
import { ThemeSwitcher } from "~/components/theme-switcher/theme-switcher";

export default component$(() => {
  const data: RouteData = {
    value: {
      links: [
        {
          title: "Work",
          href: "/work/",
          ariaLabel: "Click to read my works",
        },
        {
          title: "Lab",
          href: "/lab/",
          ariaLabel: "Click to read my experimental",
        },
        {
          title: "Profile",
          href: "/profile/",
          ariaLabel: "Click to read my profile",
        },
      ],
    },
  };
  return (
    <main class="parent border border-primary-default p-4 dark:border-secondary-default md:border-4 md:p-16">
      <div class="div1 flex md:items-end">
        <HomeTitle />
      </div>
      <div class="div2 z-5 relative">
        <DateTicker />
      </div>
      <div class="div3 hidden md:block">
        <HomeSocial />
      </div>
      <div class="div4  flex items-end">
        <HomeSubheader />
      </div>
      <div class="div5">
        {" "}
        <Boner />
      </div>
      <div class="div6 relative flex hidden items-start justify-center md:flex">
        <RunningHeader />
      </div>
      <div class="div7 flex items-end justify-end">
        <HomeMenu data={data} />
      </div>
      <div class="div8 relative">
        <ThemeSwitcher />
      </div>
    </main>
  );
});

export const head: DocumentHead = {
  title: "GOOD MORNING HARWOOD",
  meta: [
    {
      name: "description",
      content: "A portfolio for Matthew Harwood - Engineering Manager",
    },
    {
      name: "keywords",
      content: "Engineering Manager, Designer",
    },
    {
      name: "twitter:card",
      content: "summary_large_image",
    },
    {
      name: "twitter:site",
      content: "Matty0187",
    },
    {
      name: "twitter:creator",
      content: "@Matty0187",
    },
    {
      name: "og:url",
      content: "https://morningharwood.com/",
    },
    {
      name: "og:title",
      content: "Good Morning Harwood",
    },
    {
      name: "og:description",
      content:
        "A digital portfolio created by and for Matthew Harwood to showcase his thoughts and his interests",
    },
    {
      name: "og:image:type",
      content: "image/jpeg",
    },
    {
      name: "og:image",
      content:
        "https://res.cloudinary.com/morningharwood/image/upload/v1708273924/social.jpg",
    },
    {
      name: "og:image:width",
      content: "600",
    },
    {
      name: "og:image:height",
      content: "314",
    },
    {
      name: "og:image:alt",
      content: "Morning Harwood: A Portfolio for Matthew Harwood",
    },
    {
      name: "generator",
      content: "Qwik",
    },
  ],
};
