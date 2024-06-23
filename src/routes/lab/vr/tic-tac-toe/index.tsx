import { component$ } from "@builder.io/qwik";
import { SiteNavigation } from "#components/site-navigation/site-navigation";

const TicTacToeVR = component$(() => {
  return (
    <>
      <SiteNavigation />
      <article class="container mx-auto px-6 py-12 text-primary-default dark:text-secondary-default">
        <h1>Tic Tac Toe VR</h1>
        <p>
          For some time now I've really wanted to learn XR Design & Development.
          I'veI've been spending a ton of time reading books like: Brave NUI
          World and take a class How to Design for AR/VR
        </p>
      </article>
    </>
  );
});

export default TicTacToeVR;
