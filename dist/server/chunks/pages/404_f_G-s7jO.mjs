import '@astrojs/internal-helpers/path';
/* empty css                          */
import client from '@sanity/client';
import { A as AstroError, c as InvalidImageService, d as ExpectedImageOptions, E as ExpectedImage, e as createAstro, f as createComponent, g as ImageMissingAlt, r as renderTemplate, m as maybeRenderHead, h as addAttribute, s as spreadAttributes, i as renderHead, j as createTransitionScope, k as renderComponent, l as renderSlot } from '../astro_lYKR0LMG.mjs';
import 'kleur/colors';
import 'clsx';
/* empty css                           */
import { i as isESMImportedImage, a as isLocalService, b as isRemoteImage, D as DEFAULT_HASH_PROPS } from '../astro/assets-service_JtNUMCJJ.mjs';

async function getConfiguredImageService() {
  if (!globalThis?.astroAsset?.imageService) {
    const { default: service } = await import(
      // @ts-expect-error
      '../astro/assets-service_JtNUMCJJ.mjs'
    ).then(n => n.s).catch((e) => {
      const error = new AstroError(InvalidImageService);
      error.cause = e;
      throw error;
    });
    if (!globalThis.astroAsset)
      globalThis.astroAsset = {};
    globalThis.astroAsset.imageService = service;
    return service;
  }
  return globalThis.astroAsset.imageService;
}
async function getImage$1(options, imageConfig) {
  if (!options || typeof options !== "object") {
    throw new AstroError({
      ...ExpectedImageOptions,
      message: ExpectedImageOptions.message(JSON.stringify(options))
    });
  }
  if (typeof options.src === "undefined") {
    throw new AstroError({
      ...ExpectedImage,
      message: ExpectedImage.message(
        options.src,
        "undefined",
        JSON.stringify(options)
      )
    });
  }
  const service = await getConfiguredImageService();
  const resolvedOptions = {
    ...options,
    src: typeof options.src === "object" && "then" in options.src ? (await options.src).default ?? await options.src : options.src
  };
  const originalPath = isESMImportedImage(resolvedOptions.src) ? resolvedOptions.src.fsPath : resolvedOptions.src;
  const clonedSrc = isESMImportedImage(resolvedOptions.src) ? (
    // @ts-expect-error - clone is a private, hidden prop
    resolvedOptions.src.clone ?? resolvedOptions.src
  ) : resolvedOptions.src;
  resolvedOptions.src = clonedSrc;
  const validatedOptions = service.validateOptions ? await service.validateOptions(resolvedOptions, imageConfig) : resolvedOptions;
  const srcSetTransforms = service.getSrcSet ? await service.getSrcSet(validatedOptions, imageConfig) : [];
  let imageURL = await service.getURL(validatedOptions, imageConfig);
  let srcSets = await Promise.all(
    srcSetTransforms.map(async (srcSet) => ({
      transform: srcSet.transform,
      url: await service.getURL(srcSet.transform, imageConfig),
      descriptor: srcSet.descriptor,
      attributes: srcSet.attributes
    }))
  );
  if (isLocalService(service) && globalThis.astroAsset.addStaticImage && !(isRemoteImage(validatedOptions.src) && imageURL === validatedOptions.src)) {
    const propsToHash = service.propertiesToHash ?? DEFAULT_HASH_PROPS;
    imageURL = globalThis.astroAsset.addStaticImage(validatedOptions, propsToHash, originalPath);
    srcSets = srcSetTransforms.map((srcSet) => ({
      transform: srcSet.transform,
      url: globalThis.astroAsset.addStaticImage(srcSet.transform, propsToHash, originalPath),
      descriptor: srcSet.descriptor,
      attributes: srcSet.attributes
    }));
  }
  return {
    rawOptions: resolvedOptions,
    options: validatedOptions,
    src: imageURL,
    srcSet: {
      values: srcSets,
      attribute: srcSets.map((srcSet) => `${srcSet.url} ${srcSet.descriptor}`).join(", ")
    },
    attributes: service.getHTMLAttributes !== void 0 ? await service.getHTMLAttributes(validatedOptions, imageConfig) : {}
  };
}

const $$Astro$3 = createAstro("https://newsletter.yashd.tech");
const $$Image = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$Image;
  const props = Astro2.props;
  if (props.alt === void 0 || props.alt === null) {
    throw new AstroError(ImageMissingAlt);
  }
  if (typeof props.width === "string") {
    props.width = parseInt(props.width);
  }
  if (typeof props.height === "string") {
    props.height = parseInt(props.height);
  }
  const image = await getImage(props);
  const additionalAttributes = {};
  if (image.srcSet.values.length > 0) {
    additionalAttributes.srcset = image.srcSet.attribute;
  }
  return renderTemplate`${maybeRenderHead()}<img${addAttribute(image.src, "src")}${spreadAttributes(additionalAttributes)}${spreadAttributes(image.attributes)}>`;
}, "/home/yashd-dev/Documents/astronewsletter/node_modules/astro/components/Image.astro", void 0);

const $$Astro$2 = createAstro("https://newsletter.yashd.tech");
const $$Picture = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Picture;
  const defaultFormats = ["webp"];
  const defaultFallbackFormat = "png";
  const specialFormatsFallback = ["gif", "svg", "jpg", "jpeg"];
  const { formats = defaultFormats, pictureAttributes = {}, fallbackFormat, ...props } = Astro2.props;
  if (props.alt === void 0 || props.alt === null) {
    throw new AstroError(ImageMissingAlt);
  }
  const optimizedImages = await Promise.all(
    formats.map(
      async (format) => await getImage({ ...props, format, widths: props.widths, densities: props.densities })
    )
  );
  let resultFallbackFormat = fallbackFormat ?? defaultFallbackFormat;
  if (!fallbackFormat && isESMImportedImage(props.src) && specialFormatsFallback.includes(props.src.format)) {
    resultFallbackFormat = props.src.format;
  }
  const fallbackImage = await getImage({
    ...props,
    format: resultFallbackFormat,
    widths: props.widths,
    densities: props.densities
  });
  const imgAdditionalAttributes = {};
  const sourceAdditionaAttributes = {};
  if (props.sizes) {
    sourceAdditionaAttributes.sizes = props.sizes;
  }
  if (fallbackImage.srcSet.values.length > 0) {
    imgAdditionalAttributes.srcset = fallbackImage.srcSet.attribute;
  }
  return renderTemplate`${maybeRenderHead()}<picture${spreadAttributes(pictureAttributes)}> ${Object.entries(optimizedImages).map(([_, image]) => {
    const srcsetAttribute = props.densities || !props.densities && !props.widths ? `${image.src}${image.srcSet.values.length > 0 ? ", " + image.srcSet.attribute : ""}` : image.srcSet.attribute;
    return renderTemplate`<source${addAttribute(srcsetAttribute, "srcset")}${addAttribute("image/" + image.options.format, "type")}${spreadAttributes(sourceAdditionaAttributes)}>`;
  })} <img${addAttribute(fallbackImage.src, "src")}${spreadAttributes(imgAdditionalAttributes)}${spreadAttributes(fallbackImage.attributes)}> </picture>`;
}, "/home/yashd-dev/Documents/astronewsletter/node_modules/astro/components/Picture.astro", void 0);

const imageConfig = {"service":{"entrypoint":"astro/assets/services/sharp","config":{}},"domains":[],"remotePatterns":[],"endpoint":"astro/assets/endpoint/node"};
					const assetsDir = new URL("file:///home/yashd-dev/Documents/astronewsletter/dist/client/");
					const getImage = async (options) => await getImage$1(options, imageConfig);

const sanityClient = client({"projectId":"cql3n56o","dataset":"production","apiVersion":"2021-03-25","useCdn":true});

globalThis.sanityClient = sanityClient;

const $$Astro$1 = createAstro("https://newsletter.yashd.tech");
const $$Layout = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Layout;
  return renderTemplate`<html lang="en"> <head><!-- Primary Meta Tags --><title>Chronicles | ACM MPSTME</title><meta name="title" content="A Monthly Newsletter By ACM MPSTME!"><meta name="description" content="A Monthly Technical Newsletter By ACM MPSTME!"><!-- Open Graph / Facebook --><meta property="og:type" content="website"><meta property="og:url" content="https://newsletter.yashd.tech/"><meta property="og:title" content="Chronicles | ACM MPSTME"><meta property="og:description" content="A Monthly Newsletter By ACM MPSTME!"><meta property="og:image" content="https://newsletter.yashd.tech/preview.png"><!-- Twitter --><meta property="twitter:card" content="summary_large_image"><meta property="twitter:url" content="https://newsletter.yashd.tech/"><meta property="twitter:title" content="Chronicles | ACM MPSTME"><meta property="twitter:description" content="A Monthly Newsletter By ACM MPSTME!"><meta property="twitter:image" content="https://newsletter.yashd.tech/preview.png"><!-- Meta Tags Generated with https://metatags.io --><meta charset="UTF-8"><link rel="sitemap" href="/sitemap-index.xml"><meta name="viewport" content="width=device-width"><link rel="icon" type="image/png" href="/logo.png"><meta name="generator"${addAttribute(Astro2.generator, "content")}>${renderHead()}</head> <body> <div class="sticky top-0 z-40 mx-auto flex w-full items-center justify-between border-b-2 p-5 text-base font-extrabold backdrop-blur-lg bg-opacity-10 backdrop-filter"${addAttribute(createTransitionScope($$result, "jff22cma"), "data-astro-transition-persist")}> <div class="flex gap-3"> ${renderComponent($$result, "Image", $$Image, { "src": "/logo.png", "class": "w-12 lg:w-16 rounded-full", "alt": "Logo", "height": "400", "width": "400" })} <div class="pt-2"> <a href="/" class="link-underline link-underline-black groww bg-transparent font-robotomono text-base md:text-lg text-chronicles-blue lg:text-xl">
ACM CHRONICLES
</a> <p class="text-chronicles-subtletext text-sm md:text-md lg:text-lg font-light">
A Monthly Newsletter
</p> </div> </div> <a href="/#Archives" class="link-underline link-underline-black bg-transparent groww font-robotomono text-lg lg:text-xl">
ARCHIVES
</a> </div> ${renderSlot($$result, $$slots["default"])} <div class="sticky mx-auto mb-5 flex w-full items-center justify-between bg-transparent p-5 text-base font-extrabold max-w-[95vw] md:max-w-7xl border-2 rounded-full"> <div class="flex flex-row flex-wrap font-robotomono text-lg lg:text-xl md:gap-2"> <a href="https://www.instagram.com/acm_mpstme/" class="bg-transparent" target="_blank"> ${renderComponent($$result, "Image", $$Image, { "src": "/instagramdark.svg", "class": "groww h-7 w-7 lg:h-10 lg:w-10", "alt": "Instagram Logo", "height": "400", "width": "400", "loading": "lazy" })} </a> <div class="p-2 lg:p-4"></div> <a href="https://discord.gg/V8sgnZP3YU" class="bg-transparent" target="_blank"> ${renderComponent($$result, "Image", $$Image, { "src": "/discorddark.svg", "class": "groww h-7 w-7 lg:h-10 lg:w-10", "alt": "Discord Logo", "loading": "lazy", "height": "400", "width": "400" })} </a> <div class="p-2 lg:p-4"></div> <a href="https://www.linkedin.com/company/acm-nmims-mpstme/" class="bg-transparent" target="_blank"> ${renderComponent($$result, "Image", $$Image, { "src": "/linkedindark.svg", "alt": "Linkedin Logo", "loading": "lazy", "height": "400", "width": "400", "class": "groww h-7 w-7 lg:h-10 lg:w-10" })} </a> <div class="p-2 lg:p-4"></div> <a href="https://github.com/acm-mpstme-tech" class="bg-transparent" target="_blank"> ${renderComponent($$result, "Image", $$Image, { "src": "/square-githubdark.svg", "alt": "Github Logo", "height": "400", "width": "400", "loading": "lazy", "class": "groww h-7 w-7 lg:h-10 lg:w-10" })} </a> </div> <a href="/About" class="bg-transparent link-underline link-underline-black groww font-robotomono text-lg lg:text-2xl">
ABOUT US
</a> </div> </body></html>`;
}, "/home/yashd-dev/Documents/astronewsletter/src/layouts/Layout.astro", "self");

const $$Astro = createAstro("https://newsletter.yashd.tech");
const $$404 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$404;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {}, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="flex flex-col items-center justify-center text-center my-auto min-h-[80vh]"> <h1 class="text-8xl font-bold mb-4">404 🤖</h1> <p class="text-2xl text-gray-600 mb-8">
Oops! Page not found. Looks like your lost!
</p> <a href="/" class="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
Go back to home
</a> </div> ` })}`;
}, "/home/yashd-dev/Documents/astronewsletter/src/pages/404.astro", void 0);

const $$file = "/home/yashd-dev/Documents/astronewsletter/src/pages/404.astro";
const $$url = "/404";

const _404 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$404,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { $$Layout as $, _404 as _, $$Image as a, assetsDir as b, getConfiguredImageService as g, imageConfig as i };
