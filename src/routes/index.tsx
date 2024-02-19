import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { HomeTitle } from "~/components/home-title/home-title";
import { Boner } from "~/components/boner/boner";
import { MenuNavigation } from "~/components/menu-naivgation/menu-navigation";
import { MenuNavigationItem } from "~/components/menu-naivgation/menu-navigation-item";
import type { MenuItem } from "~/components/menu-naivgation/types";
import { RunningHeader } from "~/components/running-header/running-header";
import { HomeSocial } from "~/components/home-social/home-social";

export default component$(() => {
  const data = {
    value: {
      links: [
        {
          title: 'Work',
          href: '/work/',
          ariaLabel: 'Click to read my works',
        },
        {
          title: 'Lab',
          href: '/lab/',
          ariaLabel: 'Click to read my experimental',
        },
        {
          title: 'Profile',
          href: '/profile/',
          ariaLabel: 'Click to read my profile',
        },
      ]
    }
  }
  return (
    <main class="parent">
      <div class="div1">
        <HomeTitle />
      </div>
      <div class="div2"><HomeSocial /></div>
      <div class="div3"></div>
      <div class="div4"></div>
      <div class="div5"></div>
      <div class="div6">
        <RunningHeader />
      </div>
      <div class="div7">
        <MenuNavigation>
          {data.value.links.map((item: MenuItem, index: number) => {
            return (
              <MenuNavigationItem
                key={item.title}
                href={item.href}
                ariaLabel={item.ariaLabel}
                index={index}
                title={item.title}
              />
            );
          })}
        </MenuNavigation>

      </div>
      <div class="div8"><Boner /></div>
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
