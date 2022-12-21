import { NextPage } from "next";

const HomePage: NextPage = () => {
  return (
    <div className="w-full min-h-screen h-full bg-[url('/beams.png')] bg-center bg-no-repeat bg-contain relative flex justify-center items-center">
      <div className="absolute w-full h-full bg-white/50 z-0" />
      <div className="z-50 max-w-5xl w-full px-4 py-10 text-center tracking-tight leading-tight text-slate-500 flex flex-col justify-center items-center">
        <div className="flex justify-center items-center mx-auto gap-8 mb-12">
          <a href="https://nextjs.org/" target="_blank">
            <img src="/next.svg" alt="" className="h-6" />
          </a>
          <p className="text-sky-900 font-bold text-xl">+</p>
          <a href="https://tailwindcss.com/" target="_blank">
            <img src="/tailwind.svg" alt="" className="h-6" />
          </a>
        </div>
        <h1 className="text-slate-900 font-extrabold text-4xl sm:text-5xl lg:text-6xl">
          Thanks for using{" "}
          <span className="bg-gradient-to-r from-sky-500 to-fuchsia-500 text-transparent bg-clip-text">
            next-tailwind
          </span>{" "}
          as your starting point!
        </h1>

        <p className="mt-6 text-lg max-w-3xl mx-auto">
          This repository serves as a template for new projects to be created
          with Next.js and Tailwindcss. It contains all the necessary files and
          configurations to quickly and easily start developing Next.js
          applications with Tailwindcss styling.
        </p>

        <div className="mt-10 flex flex-col space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
          <a
            className="inline-flex justify-center rounded-lg text-sm font-semibold py-3 px-4 bg-primary-600 text-white hover:bg-primary-500"
            href="https://github.com/chris23lngr/next-tailwind"
            target="_blank"
          >
            <span>
              Read the Documentation{" "}
              <span
                aria-hidden="true"
                className="hidden text-slate-400 sm:inline"
              >
                →
              </span>
            </span>
          </a>
          <a
            className="inline-flex justify-center rounded-lg text-sm font-semibold py-3 px-4 bg-white/0 text-slate-900 ring-1 ring-slate-900/10 hover:bg-white/25 hover:ring-slate-900/15 "
            href="https://github.com/chris23lngr/next-tailwind/.github/CONTRIBUTING.md"
            target="_blank"
          >
            <span>
              Contribute to the project{" "}
              <span
                aria-hidden="true"
                className="hidden text-black/25 sm:inline"
              >
                →
              </span>
            </span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
