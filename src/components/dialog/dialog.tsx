import { component$, Slot } from "@builder.io/qwik";
import type { Signal } from "@builder.io/qwik";
import { Button } from "#components/button/button";

type PropsType = {
  isOpen: Signal<boolean>;
  close: () => void;
};

const Dialog = component$<PropsType>((props) => {
  const { isOpen, close } = props;
  return isOpen.value ? (
    <dialog
      open
      class="border-1 border border-secondary-default bg-primary-default p-6 text-secondary-default"
    >
      <Slot />
      <form method="dialog" class={"mt-4"}>
        <Button
          kind={"secondary"}
          shape={"default"}
          size={"small"}
          onClick={close}
        >
          Close
        </Button>
      </form>
    </dialog>
  ) : null;
});

export { Dialog };
