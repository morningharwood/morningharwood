import { $, component$, useSignal } from "@builder.io/qwik";
import { SiteNavigation } from "#components/site-navigation/site-navigation";
import { Button } from "#components/button/button";
import { Dialog } from "#components/dialog/dialog";

const Profile = component$(() => {
  const isOpen = useSignal(false);
  const onClick = $(() => (location.href = "mailto:matthhar12@gmail.com"));
  const openUberWork = $(() => (isOpen.value = true));
  const closeUberWork = $(() => (isOpen.value = false));
  return (
    <>
      <SiteNavigation />
      <article class="h-full">
        <section class="h-full bg-secondary-default dark:bg-primary-default">
          <section
            class="border-box relative mx-auto flex h-full bg-inherit pb-12 text-current lg:px-5 lg:pb-48 lg:pt-0"
            data-title="Highlight Container"
          >
            <div class="container mx-auto h-full text-primary-default dark:text-secondary-default">
              <div class="h-full w-full opacity-100 transition duration-500 ease-in-out">
                <div class="grid-rows-auto grid h-full grid-cols-12 gap-4 md:gap-10">
                  <div class="col-span-12  mt-8 h-full px-8 lg:col-span-6 lg:mt-0 lg:px-0">
                    <div class="flex h-full flex-col items-start justify-center ">
                      <h2 class="text-left font-display text-3xl uppercase text-current">
                        Engineering Manager
                      </h2>
                      <div class="test font-seriflg:text-lg mb-10 mt-6 text-left">
                        <p>
                          👋🏻 I thrive on the opportunities to lead teams, mentor
                          others, transform careers, inspire creativity and
                          foster great relationships. I am a passionate engineer
                          with 10+ years of experience delivering innovative and
                          high quality products for some of the world’s most
                          well known brands. I am a specialist in web
                          technologies, with a deep understanding of web
                          performance and a laser sharp focus to for beautiful
                          designs and user experience. My professional goals are
                          simple: surround myself by smart, diverse, energetic,
                          creative people while working on solving problems that
                          matter.
                        </p>
                      </div>
                      <Button
                        kind="secondary"
                        shape="square"
                        size="large"
                        onClick={onClick}
                      >
                        <span>Email Me</span>
                      </Button>
                    </div>
                  </div>
                  <div class="order-first  col-span-12 max-h-screen overflow-hidden lg:order-none lg:col-span-6 ">
                    <video
                      class=" h-full w-full overflow-hidden object-cover"
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
                    </video>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </section>
        <section class="bg-secondary-default dark:bg-primary-default">
          <div
            class="border-box relative mx-auto flex bg-inherit px-8 py-12 text-current lg:px-5 lg:py-16 "
            data-title="Line Break"
          >
            <div class="container mx-auto">
              <div class="h-full w-full opacity-100 transition duration-500 ease-in-out">
                <div class="mx-auto border-t border-gray-400 pb-0">
                  <span class="text-left font-serif text-xs  uppercase text-primary-default dark:text-secondary-default">
                    Resume
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section class="h-screen bg-secondary-default text-primary-default dark:bg-primary-default dark:text-secondary-default">
          <section
            class="border-box relative mx-auto flex bg-inherit px-8 py-12 text-current lg:px-5 lg:py-16 "
            data-title="Resume Container"
          >
            <div class="container mx-auto">
              <div class="h-full w-full opacity-100 transition duration-500 ease-in-out">
                <section class="container relative grid grid-cols-6 gap-10 lg:grid-cols-12 lg:gap-14">
                  <div class="col-span-6 lg:col-span-4">
                    <h3 class="currentColor text-left font-display text-xl uppercase  ">
                      Experiences
                    </h3>
                    <ul>
                      <li class="mt-8 flex flex-col">
                        <span class="currentColor text-left font-serif text-base  ">
                          Uber
                        </span>
                        <span class="text-accent-default mb-5 text-left font-serif text-base">
                          Engineering Manager
                        </span>
                        <span class="currentColor text-left font-serif text-base  ">
                          May 2022 ~ Today
                        </span>
                        <span class="currentColor text-left font-serif text-base  ">
                          People Managing 10+ amazing software engineers that
                          build and maintain uber.com.
                        </span>
                        <span class="mt-2">
                          <Button
                            kind="secondary"
                            shape="default"
                            size="small"
                            onClick={openUberWork}
                          >
                            Learn More
                          </Button>
                        </span>
                        <Dialog isOpen={isOpen} close={closeUberWork}>
                          <ul>
                            <li class={"mb-4"}>
                              <h2 class={"font-bold"}>
                                Creative Optimization: Maximizing Marketing and
                                Engineering Efficiencies Through Machine
                                Learning Experimentation
                              </h2>
                              <a
                                class={"underline"}
                                target={"_BLANK"}
                                href={
                                  "https://docs.google.com/document/d/17oDsg15pvYq8mgwzfRvhgQo2YHld8btSqil9-RY6yaE"
                                }
                              >
                                Learn More →
                              </a>
                            </li>
                            <li>
                              <h2 class={"font-bold"}>
                                Dynamic Templates: Empowering SEO and Web Page
                                Creation
                              </h2>
                              <a
                                class={"underline"}
                                target={"_BLANK"}
                                href={
                                  "https://docs.google.com/document/d/17oDsg15pvYq8mgwzfRvhgQo2YHld8btSqil9-RY6yaE"
                                }
                              >
                                Learn More →
                              </a>
                            </li>
                          </ul>
                        </Dialog>
                      </li>
                      <li class="mt-8 flex flex-col">
                        <span class="currentColor text-left font-serif text-base  ">
                          Uber
                        </span>
                        <span class="text-accent-default mb-5 text-left font-serif text-base">
                          Senior Software Engineer
                        </span>
                        <span class="currentColor text-left font-serif text-base  ">
                          June 2021 ~ May 2022
                        </span>
                        <span class="currentColor text-left font-serif text-base  ">
                          Works on building and maintaining uber.com.
                        </span>
                      </li>
                      <li class="mt-8 flex flex-col">
                        <span class="currentColor text-left font-serif text-base  ">
                          Uber
                        </span>
                        <span class="text-accent-default mb-5  text-left font-serif text-base">
                          Senior Design Engineer
                        </span>
                        <span class="currentColor text-left font-serif text-base  ">
                          December 2018 ~ Present
                        </span>
                        <span class="currentColor text-left font-serif text-base  ">
                          Works on building and maintaining uber.com. Conversion
                          Rate Optimization for UberEats.
                        </span>
                      </li>
                      <li class="mt-8 flex flex-col">
                        <span class="currentColor text-left font-serif text-base  ">
                          R/GA @ Google Mountain View
                        </span>
                        <span class="text-accent-default mb-5 text-left font-serif text-base">
                          Senior Software Engineer
                        </span>
                        <span class="currentColor text-left font-serif text-base  ">
                          August 2015 ~ December 2018
                        </span>
                        <span class="currentColor text-left font-serif text-base  ">
                          Worked as an embedded Software Engineer for Google’s
                          Interactive Marketing Division.
                        </span>
                      </li>
                      <li class="mt-8 flex flex-col">
                        <span class="currentColor text-left font-serif text-base  ">
                          AKQA S.F
                        </span>
                        <span class="text-accent-default mb-5  text-left font-serif text-base">
                          Creative Developer
                        </span>
                        <span class="currentColor text-left font-serif text-base  ">
                          August 2014 ~ August 2015
                        </span>
                        <span class="currentColor text-left font-serif text-base  ">
                          Worked as a Designer and Developer for physical and
                          digital brand experiences e.g. Target and Nike. Also,
                          worked as an embedded Web Developer for Apple’s
                          Interactive Marcom division.
                        </span>
                      </li>
                      <li class="mt-8 flex flex-col">
                        <span class="currentColor text-left font-serif text-base  ">
                          QOMO HiteVision
                        </span>
                        <span class="text-accent-default mb-5  text-left font-serif text-base">
                          Web Developer
                        </span>
                        <span class="currentColor text-left font-serif text-base  ">
                          January 2010 ~ January 2012
                        </span>
                        <span class="currentColor text-left font-serif text-base  ">
                          Created comprehensive marketing materials through web,
                          print, and video for businesses, educational, and
                          governmental establishments.
                        </span>
                      </li>
                    </ul>
                  </div>
                  <div class="col-span-6 lg:col-span-4">
                    <h3 class="currentColor text-left font-display text-xl uppercase  ">
                      Education
                    </h3>
                    <ul>
                      <li class="mt-8 flex flex-col">
                        <span class="currentColor text-left font-serif text-base  ">
                          Simon Fraser University
                        </span>
                        <span class="text-accent-default mb-5  text-left font-serif text-base">
                          B.S. Interactive Systems
                        </span>
                        <span class="currentColor text-left font-serif text-base  ">
                          September 2011 ~ January 2014
                        </span>
                        <span class="currentColor text-left font-serif text-base  ">
                          Studied how to design, develop, and apply interactive
                          systems with particular emphasis on how people use
                          them through a combination of computing foundations,
                          user-centred design principles, and programming
                          practice.
                        </span>
                      </li>
                      <li class="mt-8 flex flex-col">
                        <span class="currentColor text-left font-serif text-base  ">
                          Oakland Community College
                        </span>
                        <span class="text-accent-default mb-5 text-left font-serif text-base">
                          Software Engineering Associate’s Degree
                        </span>
                        <span class="currentColor text-left font-serif text-base  ">
                          September 2008 ~ December 2010
                        </span>
                        <span class="currentColor text-left font-serif text-base  "></span>
                      </li>
                      <li class="mt-8 flex flex-col">
                        <span class="currentColor text-left font-serif text-base  ">
                          Wayne State University
                        </span>
                        <span class="text-accent-default mb-5  text-left font-serif text-base">
                          B.A. Asian Studies
                        </span>
                        <span class="currentColor text-left font-serif text-base  ">
                          September 2005 ~ January 2008
                        </span>
                        <span class="currentColor text-left font-serif text-base  ">
                          To prepare students for the increasing demand for
                          professionals with training in Chinese and Japanese.
                        </span>
                      </li>
                      <li class="mt-8 flex flex-col">
                        <span class="currentColor text-left font-serif text-base  ">
                          Oakland Community College
                        </span>
                        <span class="text-accent-default mb-5 text-left font-serif text-base">
                          Liberal Arts Associate’s Degree
                        </span>
                        <span class="currentColor text-left font-serif text-base  ">
                          January 2004 ~ December 2005
                        </span>
                        <span class="currentColor text-left font-serif text-base  "></span>
                      </li>
                    </ul>
                    <h3 class="currentColor mt-10  text-left font-display text-xl uppercase">
                      Awards
                    </h3>
                    <ul>
                      <li class="mt-8 flex flex-col">
                        <span class="currentColor text-left font-serif text-base  ">
                          R/GA
                        </span>
                        <span class="text-accent-default mb-5  text-left font-serif text-base">
                          BotBot
                        </span>
                        <span class="currentColor text-left font-serif text-base  ">
                          2017
                        </span>
                        <span class="currentColor text-left font-serif text-base  ">
                          Voice Actor &amp; Hand Model.
                        </span>
                      </li>
                    </ul>
                  </div>
                  <div class="col-span-6 lg:col-span-4">
                    <h3 class="currentColor text-left font-display text-xl uppercase  ">
                      Technical
                    </h3>
                    <p class="currentColor mt-8 text-left font-serif text-base">
                      Object Oriented/FP Javascript, UI, Development React,
                      Angular, Typescript/Flow, CSS, HTML, i18n, a11y, NodeJS,
                      Rust, Motion Graphics, AWS/GCP, and Build Systems
                    </p>
                    <h3 class="currentColor mt-10  text-left font-display text-xl uppercase">
                      Interests
                    </h3>
                    <p class="currentColor mt-8 text-left font-serif text-base">
                      Web Performance, Interaction Design, Demo 4k, GLSL,
                      Typography, Entrepreneurship, Architecture, Skateboarding,
                      Guitar
                    </p>
                  </div>
                </section>
              </div>
            </div>
          </section>
        </section>
      </article>
    </>
  );
});

export default Profile;
