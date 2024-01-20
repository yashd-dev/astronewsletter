import './404_f_G-s7jO.mjs';
import { e as createAstro, f as createComponent, r as renderTemplate, i as renderHead, n as defineScriptVars, h as addAttribute } from '../astro_lYKR0LMG.mjs';
import 'kleur/colors';
import 'clsx';
import { I as Is } from './_slug__E1IWKSQk.mjs';

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(raw || cooked.slice()) }));
var _a;
const $$Astro = createAstro("https://newsletter.yashd.tech");
const $$Latest = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Latest;
  const latestSlug = await Is().fetch(
    `*[_type == "post" && archived == false] | order(publishedAt desc)[0].slug.current`
  );
  return renderTemplate(_a || (_a = __template(['<html style="background-color: #111;" lang="en"> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><meta http-equiv="refresh"', "><title>Chronicles | ACM MPSTME</title><script>(function(){", "\n      window.onload = function () {\n        window.location.href = `/posts/${latestSlug}`;\n      };\n\n      function redirectToNgrok() {\n        window.location.href = `/posts/${latestSlug}`;\n      }\n    })();<\/script>", "</head> </html>"], ['<html style="background-color: #111;" lang="en"> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><meta http-equiv="refresh"', "><title>Chronicles | ACM MPSTME</title><script>(function(){", "\n      window.onload = function () {\n        window.location.href = \\`/posts/\\${latestSlug}\\`;\n      };\n\n      function redirectToNgrok() {\n        window.location.href = \\`/posts/\\${latestSlug}\\`;\n      }\n    })();<\/script>", "</head> </html>"])), addAttribute(`0; url="/posts/${latestSlug}"`, "content"), defineScriptVars({ latestSlug }), renderHead());
}, "/home/yashd-dev/Documents/astronewsletter/src/pages/latest.astro", void 0);

const $$file = "/home/yashd-dev/Documents/astronewsletter/src/pages/latest.astro";
const $$url = "/latest";

export { $$Latest as default, $$file as file, $$url as url };
