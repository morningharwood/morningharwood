import { component$, Slot } from "@builder.io/qwik";
import { useFlyInOnce } from "#hooks/use-fly-in-once";

type HomeTitleSpanProps = {
  delay: number;
};
const HomeTitleSpan = component$<HomeTitleSpanProps>((props) => {
  const { delay } = props;
  const flyRef = useFlyInOnce(delay);
  return (
    <div ref={flyRef}>
      <Slot />
    </div>
  );
});

export { HomeTitleSpan };
