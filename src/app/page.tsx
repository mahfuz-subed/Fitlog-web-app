
import Image from "next/image"
import heroImg from "@/assets/banner.png"
import LibrarySection from "./librarySection/library"
import { Suspense } from "react"

export default function Home() {
  return (
    <div className="bg-[#15171d]">

      {/* Hero Section */}
      <section className="px-4 sm:px-[5%]">
        <div
          className="
            my-8 grid grid-cols-1 items-center gap-8
            rounded-2xl border border-white/5
            bg-[#222630] p-6
            shadow-lg
            sm:my-10 sm:p-8
            md:grid-cols-2 md:gap-10 md:p-10
            lg:p-12
          "
        >

          {/* Hero Content */}
          <div className="flex flex-col items-start">

            <p className="mb-3 text-sm font-semibold tracking-widest text-[#c2f800] md:text-base">
              WORKOUT LIBRARY
            </p>

            <h1
              className="
                text-3xl font-extrabold leading-tight
                text-white
                sm:text-4xl
                lg:text-5xl
              "
            >
              TRAIN WITH INTENT.
              <br className="hidden sm:block" />
              LOG EVERY SET.
            </h1>

            <p
              className="
                mt-4 max-w-xl
                text-sm leading-6 text-[#9ca3af]
                sm:text-base sm:leading-7
                lg:text-lg
              "
            >
              FitLog is a dark, no-nonsense gym companion: pick a lift,
              lock it into today's plan, and watch the weeks' work add up.
            </p>

            <a
              href="#workouts"
              className="
                group mt-6 inline-flex w-auto items-center
                rounded-lg border-none
                bg-[#c2f800] px-5 py-3
                text-sm font-bold text-black
                no-underline
                transition-all duration-200
                hover:scale-[1.02]
                hover:bg-[#d2ff33]
                hover:shadow-[0_0_20px_rgba(194,248,0,0.2)]
                active:scale-95
                sm:px-6 sm:py-3.5
              "
            >
              BROWSE WORKOUTS
              <span className="ml-2 transition-transform duration-200 group-hover:translate-y-1">
                ↓
              </span>
            </a>
          </div>

          {/* Hero Image */}
          <div className="flex justify-center md:justify-end">
            <Image
              src={heroImg}
              alt="FitLog workout illustration"
              priority
              className="
                h-auto w-full max-w-[280px]
                transition-transform duration-300
                hover:scale-[1.03]
                sm:max-w-[340px]
                md:max-w-[400px]
                lg:max-w-[460px]
              "
            />
          </div>
        </div>
      </section>

      {/* Workout Library */}
      <section id="workouts" className="scroll-mt-20">
        <Suspense
          fallback={
            <div className="flex min-h-[200px] items-center justify-center px-4">
              <div className="flex flex-col items-center gap-3 text-center">
                <h2 className="text-lg font-bold text-white sm:text-xl">
                  Hold tight. The data is being loaded.
                </h2>

                <span className="loading loading-lg text-[#c2f800]" />
              </div>
            </div>
          }
        >
          <LibrarySection />
        </Suspense>
      </section>

    </div>
  )
}

