import { component$, useStylesScoped$ } from "@builder.io/qwik";
import type { Signal } from "@builder.io/qwik";
import type { RouteData } from "~/components/types";

type HomeMenuProps = {
  data: RouteData;
  activeMenuItem: Signal<string>;
};

const HomeMenu = component$<HomeMenuProps>((props) => {
  const { data, activeMenuItem } = props;
  useStylesScoped$(`
  .home-nav {
    & ul {
      list-style-type: none;
      padding: 0;
      margin: 0;
      text-align: right;
      display: grid;
      gap: .5rem;
      background-blend-mode: exclusion;
  
      & a {
        display: inline-block;
        padding: .5rem 1rem;
        position: relative;
        text-decoration: none;
      }
  
      & a:hover:after {
        content: "";
        position: absolute;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
        z-index: 0;
        opacity: 1;
      }
  
      & span {
        position: relative;
        z-index: 1;
        font-size: 2rem;
        display: inline-block;
        @media (orientation: landscape) {
          font-size: 3.75rem;
        }
      }
  
      & .hp-nav-number {
        position: relative;
        z-index: 1;
        transform: rotate(90deg);
        font-size: .5rem;
      }
    }
  }

  @media (orientation: landscape) {
    .home-nav ul a:hover:after {
      right: -4rem;
    }
  }
}
  `);
  return (
    <div class="home-nav">
      <nav class="font-display ">
        <ul class="-md:hover:after:right-16">
          {data.value.links.map((link, idx) => {
            return (
              <div key={idx}>
                <a
                  href={link.href}
                  class="text-primary-default hover:text-secondary-default after:hover:bg-primary-default dark:text-secondary-default hover:dark:text-primary-default after:hover:dark:bg-secondary-default"
                  onMouseEnter$={() => (activeMenuItem.value = link.title)}
                  onMouseLeave$={() => (activeMenuItem.value = "")}
                >
                  <span>{link.title}</span>{" "}
                  <span class="hp-nav-number font-mono">0{idx + 1}</span>
                </a>
              </div>
            );
          })}
        </ul>
      </nav>
    </div>
  );
});

export { HomeMenu };
