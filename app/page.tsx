export default function Home() {
  return (
    <div className="flex min-h-screen w-full flex-col bg-zinc-50 font-sans dark:bg-black">
      <main className="flex min-h-screen w-full flex-1 flex-col justify-center bg-linear-to-t from-[#020B18] via-[#0A2540] to-[#0E3D6E] px-6 py-16 text-white sm:px-10 md:px-14 lg:px-16 lg:py-24">
        <div className="flex w-full max-w-2xl flex-col items-center gap-6 text-center sm:items-start sm:text-left">
          <h1 className="max-w-xs text-3xl font-semibold leading-10 tracking-tight text-white">
            The background finna be a nice color, but I don&apos;t know what color yet.
          </h1>
        </div>
      </main>
    </div>
  );
}
