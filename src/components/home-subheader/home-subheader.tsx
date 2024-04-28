import { component$, useStylesScoped$ } from "@builder.io/qwik";

const HomeSubheader = component$(() => {
  useStylesScoped$(`
  .hp-subheader {
  flex: 1;
  align-items: flex-end;

  @media (orientation: portrait) {
    display: none;
  }

  @media (orientation: landscape) {
    display: flex;
  }
}

.hp-subheader-grid {
  display: grid;
  gap: 2rem;
  grid-template-columns: auto 1fr;
}

.hp-subheader-info-wrapper {
  display: grid;
  gap: .125rem;
  position: relative;

  &:after {
    content: "";
    position: absolute;
    height: 100%;
    width: .375rem;
    top: calc(.0625rem * -1);
    left: calc(1.1rem * -1);
  }
}

.hp-subheader-video-wrapper {
  width: 3.5rem;
  height: 3.5rem;
  overflow: hidden;
  border-radius: 3.5rem;
}

.hp-subheader-video {
  width: 100%;
}

.hp-subheader-desc {
  font-size: .5rem;
}

.hp-subheader-position {
  font-size: 1rem;
}

.hp-subheader-company {
  font-size: .625rem;
}
  `);
  return (
    <div class="hp-subheader font-display uppercase text-primary-default dark:text-secondary-default">
      <div class="hp-subheader-grid">
        <div class="hp-subheader-video-wrapper shadow-2xl outline outline-4 outline-primary-default dark:outline-secondary-default">
          <video autoplay class="hp-subheader-video" loop muted>
            <source
              src="https://res.cloudinary.com/morningharwood/video/upload/f_auto:video,q_auto/v1/Profile/matthew-harwood-wavy_q68pdb"
              type="video/webm"
            />
          </video>
        </div>
        <div class="hp-subheader-info-wrapper after:bg-primary-default after:dark:bg-secondary-default">
          <p class="hp-subheader-desc">A portfolio by Matthew Harwood </p>
          <p class="hp-subheader-position">Engineering Manager</p>
          <p class="hp-subheader-company">@ UBER | PRESENT</p>
        </div>
      </div>
    </div>
  );
});

export { HomeSubheader };
