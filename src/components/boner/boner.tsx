import anime from "animejs";
import { component$, useOnDocument,$, useSignal } from "@builder.io/qwik";
import { DateCounter } from "./date-counter";

const Boner = component$(() => {
  const ref = useSignal<Element>();
  const ref2 = useSignal<Element>();
  const inView = useSignal(false);

  useOnDocument('load', $( ()=> {
    const isNotPortrait = window.innerWidth / window.innerHeight >= 1;
    const rotateZValue = isNotPortrait
      ? -((Math.atan(window.innerHeight / window.innerWidth) * 180) / Math.PI)
      : -30;

    anime({
      targets: ref.value,
      transformOrigin: ["0 50%", "50% 50%"],
      scaleX: [
        { value: 0, duration: 0 },
        { value: 1, duration: 1000 },
      ],
      rotateZ: [
        { value: 0, duration: 0, delay: 800 },
        {
          value: rotateZValue,
          duration: 2000,
          delay: 800,
          easing: "spring(1, 100, 5, 5)",
        },
      ],
      duration: 4000,
      easing: "easeInOutSine",
    });
    anime({
      targets: ref2.value,
      delay: 4000,
      translateY: [
        { value: -50, duration: 0 },
        { value: 1, duration: 550 },
      ],
      opacity: [
        { value: 0, duration: 0 },
        { value: 1, duration: 1650 },
      ],
      duration: 350,
      easing: "easeInOutSine",
      update(anim: { progress: number }) {
        if (anim.progress >= 100) {
          inView.value = true;
        }
      },
    });
  })
);

  return (
    <div
      class="pointer-events-none absolute inset-0 z-0 flex items-center justify-center px-6 py-4 lg:px-20 lg:py-16"
      data-name="Boner"
    >
      <div
        class="bg-primary-default dark:bg-secondary-default elevation-24 relative h-16 w-3/4 md:h-40 md:w-3/4 xl:w-1/2"
        ref={ref}
      >
        <p
          class="text-primary-default dark:text-secondary-default absolute -bottom-6 right-0 mt-14 flex font-mono text-xs"
          ref={ref2}
        >
          <span class="flex translate-y-1 transform items-center">©</span>
          <DateCounter inView={inView.value} />
          <span class="uppercase">MorningHarwood</span>
        </p>
      </div>
    </div>
  );
});

export { Boner };
