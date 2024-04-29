import { component$ } from "@builder.io/qwik";
import { useDocumentHead, useLocation } from "@builder.io/qwik-city";

/**
 * The RouterHead component is placed inside of the document `<head>` element.
 */
export const RouterHead = component$(() => {
  const head = useDocumentHead();
  const loc = useLocation();

  return (
    <>
      <title>{head.title}</title>

      <link rel="canonical" href={loc.url.href} />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicon-dark.png"
        media="(prefers-color-scheme: dark)"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicon.png"
        media="(prefers-color-scheme: light)"
      />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="Matty0187" />
      <meta name="twitter:creator" content="@Matty0187" />
      <meta property="og:url" content="https://morningharwood.com/" />
      <meta property="og:title" content="Good Morning Harwood" />
      <meta
        property="og:description"
        content="A digital portfolio created by and for Matthew Harwood to showcase his thoughts and his interests"
      />
      <meta property="og:image:type" content="image/jpeg" />
      <meta
        property="og:image"
        content="https://res.cloudinary.com/morningharwood/image/upload/v1588954497/og-homepage.jpg"
      />
      <meta property="og:image:width" content="600" />
      <meta property="og:image:height" content="314" />
      <meta
        property="og:image:alt"
        content="Morning Harwood: A Portfolio for Matthew Harwood"
      />
      <meta name="generator" content="Qwik" />

      {head.meta.map((m) => (
        <meta key={m.key} {...m} />
      ))}

      {head.links.map((l) => (
        <link key={l.key} {...l} />
      ))}

      {head.styles.map((s) => (
        <style
          key={s.key}
          {...s.props}
          {...(s.props?.dangerouslySetInnerHTML
            ? {}
            : { dangerouslySetInnerHTML: s.style })}
        />
      ))}

      {head.scripts.map((s) => (
        <script
          key={s.key}
          {...s.props}
          {...(s.props?.dangerouslySetInnerHTML
            ? {}
            : { dangerouslySetInnerHTML: s.script })}
        />
      ))}
    </>
  );
});
