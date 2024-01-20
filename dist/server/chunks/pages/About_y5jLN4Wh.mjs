import { $ as $$Layout } from './404_f_G-s7jO.mjs';
import { e as createAstro, f as createComponent, r as renderTemplate, k as renderComponent, m as maybeRenderHead } from '../astro_lYKR0LMG.mjs';
import 'kleur/colors';
import 'clsx';

const $$Astro = createAstro("https://newsletter.yashd.tech");
const $$About = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$About;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {}, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="intro min-h-screen"> <div class="relative m-auto min-h-screen items-center justify-between gap-48 overflow-hidden px-8 pt-8 lg:grid lg:grid-cols-2 lg:px-0 lg:pl-8 lg:pt-12"> <!-- Gradients on the side --> <div class="animate-spin-slow absolute -right-1/4 top-64 h-80 w-1/2 opacity-50 blur-[120px] filter block bg-transparent">  <div class="relative z-0"> <div class="z-0 h-60 w-full rounded-full bg-sky-600"></div> <div class="absolute -left-24 bottom-24 z-0 h-60 w-full rounded-full bg-cyan-700"></div> <div class="absolute left-24 top-24 z-0 h-60 w-full rounded-full bg-violet-600"></div> </div> </div> <div class="animate-spin-slow absolute -left-1/2 top-64 h-64 w-1/2 opacity-50 blur-[120px] filter block">  <div class="relative z-0"> <div class="z-0 h-60 w-full rounded-full bg-blue-600"></div> <div class="absolute -left-24 bottom-24 z-0 h-60 w-full rounded-full bg-blue-700"></div> <div class="absolute left-24 top-24 z-0 h-60 w-full rounded-full bg-pink-700"></div> </div> </div> <img src="/team checklist-amico.svg" width="0" height="0" sizes="100vw" class="order-last h-auto w-[45rem] bgimage bg-transparent md:px-10">${" "} <div class="pb-10 md:px-10 bg-chronicles-surface opacity-100 rounded-xl p-4"> <h1 class="lg:pt-30 intro py-10 lg:pb-14 text-4xl lg:text-5xl bg-inherit paytone text-[#f9f4da] font-bold uppercase lg:max-w-[20ch]">
About ACM MPSTME <span class="sparkles">✨</span> </h1> <h3 class="intro text-lg md:text-2xl sm:font-light font-medium lg:py-10 bg-inherit text-[#f9f4da]"> ${" "}
The ACM Student Chapter at MPSTME is a community empowering students
          with tech-driven learning and networking opportunities, facilitating
          skill development and exploration of the latest technology trends.
          Through coding competitions, workshops, and seminars, it fosters skill
          development and networking in computer science.
</h3> </div> </div> </div> ` })}`;
}, "/home/yashd-dev/Documents/astronewsletter/src/pages/About.astro", void 0);

const $$file = "/home/yashd-dev/Documents/astronewsletter/src/pages/About.astro";
const $$url = "/About";

export { $$About as default, $$file as file, $$url as url };
