"use client";

import Navbar from "./_components/Navbar";
import About from "./_components/About";
import Skills from "./_components/Skills";
import Projects from "./_components/Projects";
import Contact from "./_components/Contact";

export default function Home() {
  return (
    <div className="flex min-h-screen w-full flex-col bg-zinc-50 font-sans dark:bg-black">
      <Navbar />

      <main id="home" className="flex min-h-screen w-full flex-1 items-center justify-center bg-linear-to-t from-[#020B18] via-[#0A2540] to-[#0E3D6E] px-6 py-16 text-white sm:px-10 md:px-14 lg:px-16 lg:py-24">
        <div className="flex w-full max-w-2xl flex-col items-center justify-center gap-6 text-center">
          <h1 className="max-w-xs text-4xl font-semibold leading-9 tracking-tight text-white">
            Hello, I&apos;m Temi Bankole
          </h1>
          <p className="max-w-xs text-lg leading-7 text-white/80">
            A software development student, varsity athlete, and builder creating solutions that make aspositive impact. Always chasing the next challenge.</p>
          <div className="flex w-full max-w-xs flex-col gap-4 sm:flex-row">
            <a
              href="/docs"
              className="flex w-full items-center justify-center rounded-lg bg-white px-4 py-2 text-sm font-medium text-black shadow-md transition hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-500 dark:focus:ring-offset-gray-900"
            >
              View Projects
            </a>
            <a
              href="/examples"
              className="flex w-full items-center justify-center rounded-lg bg-gray-800 px-4 py-2 text-sm font-medium text-white shadow-md transition hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-500 dark:focus:ring-offset-gray-900"
            >
              Contact Me
            </a>
          </div>
        </div>
      </main>
      <About />
      <Skills />
      <Projects />
      <Contact />

    </div>
  );
}
