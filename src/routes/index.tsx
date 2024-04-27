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
import {metadataDefaults} from "~/data/meta-factory";

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
      <div class="div8 relative flex justify-center items-center md:translate-x-16 md:translate-y-16">
        <ThemeSwitcher />
      </div>
    </main>
  );
});

export const head: DocumentHead = metadataDefaults;
