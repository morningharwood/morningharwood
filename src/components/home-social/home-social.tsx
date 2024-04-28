import { component$, useStylesScoped$ } from "@builder.io/qwik";
import { Discord } from "~/icons/discord";
import { Facebook } from "~/icons/facebook";
import { Gmail } from "~/icons/gmail";
import { Instagram } from "~/icons/instagram";
import { Linkedin } from "~/icons/linkedin";
import { XTwitter } from "~/icons/x";

const HomeSocial = component$(() => {
  useStylesScoped$(`
  .mh-social {
    display: block;
  
    & ul {
      display: flex;
      gap: .375rem;
      list-style-type: none;
      padding: 0;
      margin: 0;
    }
  
    & li {
      display: flex;
      gap: .375rem;
      padding: .375rem;
      width: 1.5rem;
    }
  
    & a {
      display: inline-flex;
      gap: .375rem;
      text-decoration: none;
     
      transform-origin: left;
      padding: .375rem;
      transform: rotate(90deg);
      box-sizing: border-box;
      border: solid 1px transparent;
      position: relative;
  
    }

    & img {
      transform: rotate(-90deg);
      width: .75rem;
      height: .75rem;
    }
  
    & span {
      display: flex;
   
      font-size: .625rem;
      letter-spacing: .125rem;
      line-height: 1.25;
      transition: all ease-in 100ms;
      opacity: 0;
    }
  
    & a:before {
      content: "";
      position: absolute;
      inset: -5px;
      transform: translate(10px, 8px);
      z-index: -1;
      
      filter: blur(10px);
      opacity: 0;
      transition: opacity ease-in 100ms;
      animation: pulse 1000ms infinite;
    }
  
    & a:hover {
      border-radius: 3px;
      border: 1px solid var(--secondary);
  
      &:before {
        opacity: 1;
      }
  
      & span {
        opacity: 1;
      }
    }
  }
  `);
  return (
    <div class="mh-social font-display uppercase text-primary-default dark:text-secondary-default">
      <ul>
        <li>
          <a href="">
            <Linkedin />
            <span>LinkedIn</span>
          </a>
        </li>
        <li>
          <a href="">
            <XTwitter />
            <span>Twitter</span>
          </a>
        </li>
        <li>
          <a href="">
            <Facebook />
            <span>Facebook</span>
          </a>
        </li>
        <li>
          <a href="">
            <Gmail />
            <span>Gmail</span>
          </a>
        </li>
        <li>
          <a href="">
            <Instagram />
            <span>Instagram</span>
          </a>
        </li>
        <li>
          <a href="">
            <Discord />
            <span>Discord</span>
          </a>
        </li>
      </ul>
    </div>
  );
});

export { HomeSocial };
