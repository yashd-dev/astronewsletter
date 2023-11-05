export function Newrow({ img, title, desc, link }) {
  return (
    <div class="bg-transparent">
      <div class=" growwcards flex flex-col  py-5 pb-4 md:flex-row lg:max-w-[135ch] lg:rounded-3xl">
        <img
          src={img}
          class=" bg max-w-[70%} m-auto min-w-[50%] overflow-clip bg-inherit object-cover pb-8 pr-4 lg:h-72 lg:px-11"
        ></img>

        <div class=" bg-inherit">
          <a
            href={link}
            class=" link-underline link-underline-black groww bg-inherit font-robotomono text-4xl font-extrabold underline lg:text-5xl lg:no-underline"
          >
            {title}
          </a>

          <p class=" max-w-[70ch] bg-inherit py-7 text-lg font-medium text-slate-500 lg:text-xl">
            {desc}
          </p>
        </div>
      </div>
      <div class=" bg-transparent p-5 "></div>
    </div>
  );
}
