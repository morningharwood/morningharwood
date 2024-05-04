import { component$ } from "@builder.io/qwik";
import { SiteNavigation } from "#components/site-navigation/site-navigation";

const Profile = component$(() => {
  return (
    <>
      <SiteNavigation />
      <article class="h-full">
        <section class="container m-auto grid h-full grid-cols-4 gap-6">
          <div class="col-span-2 grid items-center justify-center text-primary-default dark:text-secondary-default">
            <div>
              <h1 class="pb-5 text-5xl">Engineering Manager</h1>
              <p class="">
                👋🏻 I thrive on the opportunities to lead teams, mentor others,
                transform careers, inspire creativity and foster great
                relationships. I am a passionate engineer with 10 years of
                experience delivering innovative and high quality products for
                some of the world’s most well known brands. I am a specialist in
                web technologies, with a deep understanding of web performance
                and a laser sharp focus to for beautiful designs and user
                experience. My professional goals are simple: surround myself by
                smart, diverse, energetic, creative people while working on
                solving problems that matter.
              </p>
            </div>
          </div>
          <div class="col-span-2">
            <video
              class="h-full w-full object-cover"
              poster="https://res.cloudinary.com/morningharwood/image/upload/f_auto,q_auto/v1590168964/.png"
              muted
              autoplay
              loop
            >
              <source
                src="https://res.cloudinary.com/morningharwood/video/upload/f_auto,q_auto/v1590168964/Profile/matthew-harwood-wavy_q68pdb.webm"
                type="video/webm"
              />
              <source
                src="https://res.cloudinary.com/morningharwood/video/upload/f_auto,q_auto/v1590168964/Profile/matthew-harwood-wavy_q68pdb.mp4"
                type="video/mp4"
              />
              <source
                src="https://res.cloudinary.com/morningharwood/video/upload/f_auto,q_auto/v1590168964/Profile/matthew-harwood-wavy_q68pdb.webm"
                type="video/webm"
              />
              <source
                src="https://res.cloudinary.com/morningharwood/video/upload/f_auto,q_auto/v1590168964/Profile/matthew-harwood-wavy_q68pdb.mp4"
                type="video/mp4"
              />
            </video>
          </div>
        </section>
      </article>
    </>
  );
});

export default Profile;
