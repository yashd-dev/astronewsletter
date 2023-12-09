import { useSanityClient, groq } from "astro-sanity";
import { portableTextToHtml } from "astro-sanity";
import imageUrlBuilder from "@sanity/image-url";
import { Image } from "astro:assets";

export async function getFirstBlogPost() {
  const query = groq`*[_type == "post"][0]`; // Get the first post
  const firstPost = await useSanityClient().fetch(query);
  return firstPost;
}

// Get a pre-configured url-builder from your sanity client
const builder = imageUrlBuilder(useSanityClient());

// Then we like to make a simple function like this that gives the
// builder an image and returns the builder for you to specify additional
// parameters:
function urlFor(source) {
  return builder.image(source);
}
const customComponents = {
  types: {
    image: ({ value }) => {
      return `
          <figure>
                <Image
                class="max-w-full rounded-lg md:max-h-[30vw] mx-auto"
                src="${urlFor(value.asset).url()}"
                alt="${value.alt}"
                width=""
                height=""
              />
            <figcaption class="flex items-center justify-center">${
              value.caption
            }</figcaption>
          </figure>
      `;
    },
  },
};

export function sanityPortableText(portabletext) {
  return portableTextToHtml(portabletext, customComponents);
}
