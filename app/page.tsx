"use client";

import Navbar from "./_components/Navbar";
import About from "./_components/About";
import Skills from "./_components/Skills";
import Projects from "./_components/Projects";
import Contact from "./_components/Contact";
import RotatingWords from "./_components/RotatingWords";

export default function Home() {
  return (
    <div className="flex min-h-screen w-full flex-col bg-zinc-50 font-sans dark:bg-black">
      <Navbar />

      <main id="home" className="flex min-h-screen w-full flex-1 items-center justify-center bg-[linear-gradient(180deg,_var(--surface)_0%,_var(--turquoise)_28%,_var(--ocean)_58%,_var(--deep-blue)_78%,_var(--midnight)_100%)] px-6 py-16 text-white sm:px-10 md:px-14 lg:px-16 lg:py-24">
        <div className="flex w-full max-w-2xl flex-col items-center justify-center gap-6 text-center">
          <h1 className="hero-title text-3xl font-semibold leading-9 tracking-tight text-[#071A3D] drop-shadow-[0_2px_12px_rgba(2,8,18,0.25)]">
            <span>Hello,</span>{" "}
            <span>I&apos;m</span>{" "}
            <span>Temi</span>{" "}
            <span>Bankole</span>
          </h1>
          <RotatingWords />
          <p className="max-w-xs text-lg leading-7 text-white/80">
            A software development student, varsity athlete, and builder creating solutions that make a positive impact. Always chasing the next challenge.</p>
          <div className="flex w-full max-w-xs flex-col gap-4 sm:flex-row">
            <a
              href="/docs"
              className="flex w-full items-center justify-center rounded-lg bg-white px-4 py-2 text-sm font-medium text-[#071A3D] shadow-md transition duration-200 hover:scale-105 hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-[#7FE7E3] focus:ring-offset-2"
            >
              View Projects
            </a>
            <a
              href="/examples"
              className="flex w-full items-center justify-center rounded-lg bg-[#071A3D] px-4 py-2 text-sm font-medium text-white shadow-md transition duration-200 hover:scale-105 hover:bg-[#102F6B] focus:outline-none focus:ring-2 focus:ring-[#29B6D1] focus:ring-offset-2"
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
