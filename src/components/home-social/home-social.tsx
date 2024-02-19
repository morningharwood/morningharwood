import { component$, useStylesScoped$ } from "@builder.io/qwik";


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
    background: conic-gradient(from 90deg at 40% -25%, #ffd700, #f79d03, #ee6907, #e6390a, #de0d0d, #d61039, #cf1261, #c71585, #cf1261, #d61039, #de0d0d, #ee6907, #f79d03, #ffd700, #ffd700, #ffd700);
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
  `)
  return (
    <div class="mh-social font-display uppercase text-primary-default dark:text-secondary-default">
      <ul >
        <li >
          <a href="">
            <img width="12" height="12" alt="Linkedin social icon" src="./img/linkedin.svg" />
            <span>LinkedIn</span>
          </a>
        </li>
        <li>
          <a href="">
            <img width="12" height="12" alt="X formally Twitter social icon" src="./img/x.svg" class="-rotate-90"/>
            <span>Twitter</span>
          </a>
        </li>
        <li>
          <a href="">
            <img width="12" height="12" alt="Facebook social icon" src="./img/facebook.svg" class="-rotate-90"/>
            <span>Facebook</span>
          </a>
        </li>
        <li>
          <a href="">
            <img width="12" height="12" alt="Gmail social icon" src="./img/gmail.svg" class="-rotate-90"/>
            <span>Gmail</span>
          </a>
        </li>
        <li>
          <a href="">
            <img width="12" height="12" alt="Instagram social icon" src="./img/instagram.svg" class="-rotate-90"/>
            <span>Instagram</span>
          </a>
        </li>
        <li>
          <a href="">
            <img width="12" height="12" alt="Discord social icon" src="./img/discord.svg" class="-rotate-90"/>
            <span >Discord</span>
          </a>
        </li>
      </ul>
    </div>
)
});

export { HomeSocial }