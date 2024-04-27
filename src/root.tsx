import { component$ } from "@builder.io/qwik";
import {
  QwikCityProvider,
  RouterOutlet,
  ServiceWorkerRegister,
} from "@builder.io/qwik-city";
import { RouterHead } from "./components/router-head/router-head";

import "./global.css";

export const CSSThemeScript = () => {
  const themeScript = `
        document.documentElement
            .setAttribute('class',
                localStorage.getItem('theme') ??
                (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light')
            ); `;
  return <script dangerouslySetInnerHTML={themeScript} />;
};

export default component$(() => {
  return (
    <QwikCityProvider>
      <head>
        <meta charSet="utf-8" />
        <CSSThemeScript/>
        <link rel="manifest" href="/manifest.json" />
        <RouterHead />
      </head>
      <body lang="en" class="bg-secondary-default dark:bg-primary-default">
        <RouterOutlet />
        <ServiceWorkerRegister />
      </body>
    </QwikCityProvider>
  );
});
