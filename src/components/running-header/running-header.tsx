import {
  component$,
  useOnDocument,
  $,
  useSignal,
  useStylesScoped$,
} from "@builder.io/qwik";
import { shuffle } from "~/utils/shuffle";
import { interests } from "./interests";

const RunningHeader = component$(() => {
  const count = useSignal(0);
  const play = useSignal(true);
  const shuffledInterests = shuffle(interests);
  const interestsMaxIndex = shuffledInterests.length - 1;
  useStylesScoped$(`
    .line {
      right: calc(-100% + 2rem);
    }
    .line:before {
      content: "";
      position: absolute;
      left: -3.25rem;
      top: .875rem;
      width: 2rem;
      height: .25rem;
    }
  `);
  useOnDocument(
    "DOMContentLoaded",
    $(() => {
      setInterval(() => {
        if (play.value) {
          const next = count.value + 1;
          count.value = next % interestsMaxIndex;
        }
      }, 1000);
    }),
  );

  return (
    <p
      class="line absolute -top-8 flex w-full origin-left rotate-90 items-center justify-start font-display text-xs before:bg-primary-default dark:before:bg-secondary-default"
      onMouseEnter$={() => (play.value = false)}
      onMouseLeave$={() => (play.value = true)}
    >
      <span class="pr-2 text-xs text-primary-default no-underline dark:text-secondary-default">
        Contact me about
      </span>
      <a
        href="mailto:matthhar12@gmail.com"
        class="max-w-[200px] overflow-hidden text-ellipsis whitespace-pre rounded-full bg-primary-default px-2 py-2 text-xs capitalize text-secondary-default no-underline dark:bg-secondary-default dark:text-primary-default"
      >
        {shuffledInterests[count.value].name || "......."}
      </a>
    </p>
  );
});

export { RunningHeader };
