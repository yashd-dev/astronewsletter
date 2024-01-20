import { $ as $$Layout, a as $$Image } from './404_f_G-s7jO.mjs';
import { e as createAstro, f as createComponent, r as renderTemplate, k as renderComponent, m as maybeRenderHead, h as addAttribute, F as Fragment } from '../astro_lYKR0LMG.mjs';
import 'kleur/colors';
import 'clsx';
import { M as MyForm, I as Is } from './_slug__E1IWKSQk.mjs';
import imageUrlBuilder from '@sanity/image-url';
/* empty css                          */

const $$Astro$3 = createAstro("https://newsletter.yashd.tech");
const $$Index$1 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$Index$1;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {}, { "default": ($$result2) => renderTemplate`  ${maybeRenderHead()}<div class="flex flex-col items-center justify-center text-center my-auto min-h-[80vh]"> <h1 class="text-8xl font-bold mb-4">307 Redirecting 🤖</h1> <p class="text-2xl text-gray-600 mb-8">Redirecting You to Archives</p> <a href="/#Archives" class="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
Redirect Me Now!
</a> </div> ` })}`;
}, "/home/yashd-dev/Documents/astronewsletter/src/pages/posts/index.astro", void 0);

const $$file$1 = "/home/yashd-dev/Documents/astronewsletter/src/pages/posts/index.astro";
const $$url$1 = "/posts";

const index$1 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index$1,
  file: $$file$1,
  url: $$url$1
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro$2 = createAstro("https://newsletter.yashd.tech");
const $$HomeHero = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$HomeHero;
  return renderTemplate`${maybeRenderHead()}<div class="relative m-auto md:min-h-screen w-full overflow-hidden bg-transparent px-8 py-8 lg:grid lg:grid-cols-2 lg:content-stretch lg:items-center lg:justify-between lg:py-10"> <div class="order-last bg-transparent lg:pl-48">  <picture class="hidden md:block m-auto top-2 w-full lg:w-[min(100%,65rem)] bg-transparent overflow-clip lg:absolute"> <source srcset="HomeHeroImage.svg" media="(min-width: 768px)"> <img data-rel="570" fetchpriority="high" loading="eager"> </picture> </div> <div class="bg-transparent md:px-10 leading-10"> <h1 class="lg:pt-30 intro py-10 lg:pb-14 text-5xl xl:text-6xl bg-transparent paytone text-chronicles-primary font-bold uppercase lg:max-w-[20ch] px-2 md:tracking-wide">
Welcome to ACM Chronicles <span class="sparkles">✨</span> </h1> <a href="/latest" class="text-2xl lg:py-5 xl:text-3xl text-chronicles-primary hover:text-blue-200 lg:max-w-[20ch] groww intro inline-block bg-transparent px-2">
Have a Look at our Latest Edition➚
</a> <div class="intro mt-10 bg-chronicles-surface rounded-lg p-5 lg:max-w-[65ch] text-left"> <h2 class="intro text-lg md:text-2xl font-light lg:py-10 lg:text-3xl bg-transparent text-chronicles-primary">
Enjoyed reading that 👀? Consider Subscribing, we'll send out monthly
        email intimations of our latest editions!
</h2> ${renderComponent($$result, "MyForm", MyForm, { "client:idle": true, "client:component-hydration": "idle", "client:component-path": "/home/yashd-dev/Documents/astronewsletter/src/components/forms", "client:component-export": "default" })} </div> </div> </div>`;
}, "/home/yashd-dev/Documents/astronewsletter/src/components/HomeHero.astro", void 0);

const $$Astro$1 = createAstro("https://newsletter.yashd.tech");
const $$HomeArchives = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$HomeArchives;
  const colours = [
    "bg-chronicles-blue",
    "bg-chronicles-red",
    "bg-chronicles-purple",
    "bg-chronicles-turquoise",
    "bg-chronicles-yellow",
    "bg-chronicles-orange"
  ];
  let colourIndex = Math.floor(Math.random() * colours.length);
  const getRandomIndex = (() => {
    const indexes = [...Array(colours.length).keys()];
    let currentIndex = indexes.length;
    return () => {
      if (currentIndex === 0) {
        currentIndex = indexes.length;
      }
      const randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
      const temp = indexes[currentIndex];
      indexes[currentIndex] = indexes[randomIndex];
      indexes[randomIndex] = temp;
      return indexes[currentIndex];
    };
  })();
  let tilt = "tilt-container";
  let liltcard = "tilt-card";
  const posts = await Is().fetch(
    `*[_type == "post" && archived == false] | order(_updatedAt desc)`
  );
  const builder = imageUrlBuilder(Is());
  function urlFor(source) {
    return String(builder.image(source));
  }
  return renderTemplate`${maybeRenderHead()}<div class="lg:-mt-32 z-50 sticky gap-12 mx-auto min-h-[70vh] w-full md:px-20 leading-10 bg-chronicles-surface m-auto px-8 py-8 lg:py-10" data-astro-cid-hc4yz2is> <h1 id="Archives" class="lg:pt-30 intro py-10 lg:pb-14 text-6xl md:text-5xl xl:text-6xl bg-transparent paytone text-chronicles-primary font-bold uppercase lg:max-w-[20ch] px-2" data-astro-cid-hc4yz2is>
Archives
</h1> <section class="grid sm:grid-cols-2 lg:grid-cols-3 gap-20 bg-transparent min-w-full" data-astro-cid-hc4yz2is> ${posts.map((post) => {
    colourIndex = getRandomIndex();
    if (tilt == "tilt-container") {
      tilt = "tilt-container-pos";
    } else {
      tilt = "tilt-container";
    }
    if (liltcard == "tilt-card") {
      liltcard = "tilt-card-pos";
    } else {
      liltcard = "tilt-card";
    }
    return renderTemplate`<a${addAttribute(`/posts/${post.slug.current}`, "href")}${addAttribute(tilt, "class")} data-astro-cid-hc4yz2is> <div${addAttribute(`relative flex md:max-w-sm flex-col rounded-3xl text-gray-700 shadow-md p-6 bg-clip-padding drop-shadow-[16px_16px_0px_#111] md:drop-shadow-[32px_32px_0px_#111] ${colours[colourIndex]} border-8 border-slate-100 ${liltcard}`, "class")} data-astro-cid-hc4yz2is> <div class="rounded-3xl relative m-0 overflow-hidden text-gray-700 bg-transparent shadow-none bg-clip-border max-h-[10rem] md:max-h-[17rem] lg:max-h-[15rem]" data-astro-cid-hc4yz2is> ${renderComponent($$result, "Image", $$Image, { "src": urlFor(post.mainImage), "alt": "Post Title", "height": "400", "width": "400", "loading": "lazy", "data-astro-cid-hc4yz2is": true })} </div> <div class="p-2 pt-3 bg-transparent rounded-br-3xl rounded-bl-3xl w-full" data-astro-cid-hc4yz2is> <h3 class="bg-transparent font-sans text-xl antialiased font-black text-black w-full" data-astro-cid-hc4yz2is> ${post.cardTitle} </h3> </div> </div> </a>`;
  })} ${(posts.length == 2 || posts.length == null || (posts.length + 1) % 3 == 0) && renderTemplate`<div${addAttribute(`relative flex md:max-w-sm flex-col rounded-3xl text-gray-700 shadow-md p-6 bg-clip-padding drop-shadow-[16px_16px_0px_#111] md:drop-shadow-[32px_32px_0px_#111]  border-8 border-slate-100 ${liltcard}`, "class")} data-astro-cid-hc4yz2is> <div class="rounded-3xl relative m-0 overflow-hidden text-gray-700 bg-transparent shadow-none bg-clip-border max-h-[10rem] md:max-h-[17rem] lg:max-h-[15rem]" data-astro-cid-hc4yz2is> ${renderComponent($$result, "Image", $$Image, { "src": "/questionMark.jpg", "alt": "descriptive text", "width": "400", "height": "400", "loading": "lazy", "data-astro-cid-hc4yz2is": true })} </div> <div class="p-2 pt-3 bg-transparent rounded-br-3xl rounded-bl-3xl w-full" data-astro-cid-hc4yz2is> <h4 class="bg-transparent font-sans text-lg sm:text-xl lg:text-2xl antialiased font-bold text-white w-full" data-astro-cid-hc4yz2is>
More Posts Comming Soon! Stay Tuned!
</h4> </div> </div>`} ${(posts.length == 1 || (posts.length + 1) % 2 == 0) && renderTemplate`${renderComponent($$result, "Fragment", Fragment, { "data-astro-cid-hc4yz2is": true }, { "default": ($$result2) => renderTemplate` <div${addAttribute(`relative flex md:max-w-sm flex-col h-fit rounded-3xl text-gray-700 shadow-md p-6 bg-clip-padding drop-shadow-[16px_16px_0px_#111] md:drop-shadow-[32px_32px_0px_#111]  border-8 border-slate-100 ${liltcard}`, "class")} data-astro-cid-hc4yz2is> <div class="rounded-3xl relative m-0 overflow-hidden text-gray-700 bg-transparent shadow-none bg-clip-border max-h-[10rem] md:max-h-[17rem] lg:max-h-[15rem]" data-astro-cid-hc4yz2is> ${renderComponent($$result2, "Image", $$Image, { "src": "/questionMark.jpg", "alt": "descriptive text", "width": "400", "height": "400", "loading": "lazy", "data-astro-cid-hc4yz2is": true })}${" "} </div> <div class="p-2 pt-3 bg-transparent rounded-br-3xl rounded-bl-3xl w-full" data-astro-cid-hc4yz2is> <h4 class="bg-transparent font-sans text-base sm:text-lg lg:text-xl antialiased font-bold text-white w-full" data-astro-cid-hc4yz2is>
More Posts Comming Soon! Stay Tuned
</h4> </div> </div> <div id="deepThoughtsContainer"${addAttribute(`relative flex md:max-w-sm h-fit flex-col rounded-3xl text-gray-700 shadow-md p-6 bg-clip-padding drop-shadow-[16px_16px_0px_#111] md:drop-shadow-[32px_32px_0px_#111]  border-8 border-slate-100  ${liltcard}`, "class")} data-astro-cid-hc4yz2is> <div class="p-2 pt-3 bg-transparent rounded-br-3xl rounded-bl-3xl w-full select-none " data-astro-cid-hc4yz2is> <h2 class="bg-transparent font-sans text-lg sm:text-xl lg:text-2xl antialiased font-bold text-white w-full pb-5" data-astro-cid-hc4yz2is>
Some Thoughts
</h2> <h4 id="thoughtText" class="bg-transparent font-sans text-base sm:text-lg lg:text-2xl antialiased font-normal text-white w-full" data-astro-cid-hc4yz2is>
Debugging: where even the best coders navigate the mysteries of
                unexpected bugs and wonder, 'What on earth is going on here?'
</h4> </div> </div> ` })}`} </section>   </div>`;
}, "/home/yashd-dev/Documents/astronewsletter/src/components/HomeArchives.astro", void 0);

const $$Astro = createAstro("https://newsletter.yashd.tech");
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {}, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "HomeHero", $$HomeHero, {})} ${maybeRenderHead()}<img src="/wavie.svg" alt="A Divider wave SVG" class="min-w-full z-50 sticky bg-transparent"> ${renderComponent($$result2, "HomeArchives", $$HomeArchives, {})} <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" class="w-full h-[5vh] lg:h-[20vh] object-cover" preserveAspectRatio="none"> <path fill="#231f20" fill-opacity="1" d="M0,192L48,170.7C96,149,192,107,288,112C384,117,480,171,576,186.7C672,203,768,181,864,149.3C960,117,1056,75,1152,74.7C1248,75,1344,117,1392,138.7L1440,160L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path> </svg> ` })}`;
}, "/home/yashd-dev/Documents/astronewsletter/src/pages/index.astro", void 0);

const $$file = "/home/yashd-dev/Documents/astronewsletter/src/pages/index.astro";
const $$url = "";

const index = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { index as a, index$1 as i };
