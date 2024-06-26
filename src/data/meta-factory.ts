
interface MetadataDefaults {
  title: string;
  meta: Metadata[]
}
interface Metadata {
  name: string;
  content: string;
}



export const metadataDefaults: MetadataDefaults  = {
  title: "GOOD MORNING HARWOOD",
  meta: [
    {
      name: "description",
      content: "A portfolio for Matthew Harwood - Engineering Manager",
    },
    {
      name: "keywords",
      content: "Engineering Manager, Designer",
    },
    {
      name: "twitter:card",
      content: "summary_large_image",
    },
    {
      name: "twitter:site",
      content: "Matty0187",
    },
    {
      name: "twitter:creator",
      content: "@Matty0187",
    },
    {
      name: "og:url",
      content: "https://morningharwood.com/",
    },
    {
      name: "og:title",
      content: "Good Morning Harwood",
    },
    {
      name: "og:description",
      content:
        "A digital portfolio created by and for Matthew Harwood to showcase his thoughts and his interests",
    },
    {
      name: "og:image:type",
      content: "image/jpeg",
    },
    {
      name: "og:image",
      content:
        "https://res.cloudinary.com/morningharwood/image/upload/v1708273924/social.jpg",
    },
    {
      name: "og:image:width",
      content: "600",
    },
    {
      name: "og:image:height",
      content: "314",
    },
    {
      name: "og:image:alt",
      content: "Morning Harwood: A Portfolio for Matthew Harwood",
    },
    {
      name: "generator",
      content: "Qwik",
    },
  ],
};