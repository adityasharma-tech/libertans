import "./App.css";
import { ArrowDown, ArrowRight, MoveRight } from "lucide-react";
import logo from "./assets/logo.png";
import landBackImg from "./assets/landing-background.png";
import cosmetics from "./assets/cosmetics.jpg";
import shoes from "./assets/shoes.png";
import profile from "./assets/profile.png";

export default function App() {
  return (
    <div className="px-8 h-screen w-screen relative overflow-y-auto">
      <main className="h-full w-full border-x-2 border-neutral-200">
        <header className="px-16 py-5 border-b-2 border-neutral-200 flex justify-between items-center">
          <nav>
            <ul className="flex gap-x-10 text-xl font-medium">
              <li>How it works</li>
              <li>Service</li>
              <li>Client</li>
            </ul>
          </nav>
          <img className="object-contain h-16" src={logo} alt="logo" />
          <ul className="flex gap-x-10 items-center">
            <li className="text-xl font-medium">FAQ</li>
            <button className="flex gap-x-4 items-center justify-center border-2 border-lime-500 rounded-full px-6 py-3 text-xl font-semibold">
              Get Started
              <MoveRight className="text-violet-700" />
            </button>
          </ul>
        </header>
        <div className="flex flex-col justify-center relative">
          <div className="absolute left-10 top-16 size-[300px] z-10 -rotate-6">
            <svg
              className="fill-violet-600 absolute -top-8 left-8 -rotate-[60deg] size-16"
              viewBox="0 0 118 118"
              fill="none"
            >
              <path d="M59 0l.016.508C59.723 20.328 72.788 58.603 118 59c-47.957 3.17-58.49 39.984-58.03 58.492C59.263 97.663 46.197 58.897.986 58.5c47.957-3.17 58.49-39.493 58.03-57.992C59.009.338 59.004.168 59 0z" />
            </svg>
            <img src={shoes} className="rounded-4xl rounded-b-[200px]" />
          </div>

          <div className="absolute bottom-10 left-10 z-10 flex flex-col gap-y-8">
            <div>
              <img
                src={profile}
                className="size-24 object-cover rounded-full ring-4 ring-lime-300"
              />
            </div>
            <div>
              <span className="text-xl font-medium text-neutral-400">
                Amplify brands by crafting unique and compelling <br /> brand
                identities that leave a lasting impact.
              </span>
            </div>
          </div>

          <div className="absolute right-0 bottom-0">
            <svg
              className="fill-lime-400 z-10 absolute -top-8 left-20 rotate-[60deg] size-16"
              viewBox="0 0 118 118"
              fill="none"
            >
              <path d="M59 0l.016.508C59.723 20.328 72.788 58.603 118 59c-47.957 3.17-58.49 39.984-58.03 58.492C59.263 97.663 46.197 58.897.986 58.5c47.957-3.17 58.49-39.493 58.03-57.992C59.009.338 59.004.168 59 0z" />
            </svg>
            <img
              src={cosmetics}
              className="rounded-4xl rounded-tr-[500px] h-[300px] w-[280px] w rotate-[8deg]"
            />
          </div>

          <div className="absolute -z-10 left-0 right-0 flex justify-center items-center fade-container">
            <img src={landBackImg} className="opacity-90" />
          </div>
          <div className="flex w-full flex-col px-20 pt-16">
            <span className="bg-violet-600 ml-auto rounded-full px-4 py-2.5 text-xl text-lime-300">
              35 N Dearborn ST
            </span>
            <span className="bg-violet-600 ml-auto rounded-full px-4 py-2.5 text-xl text-lime-300">
              Chicago
            </span>
          </div>
          <div className="text-center text-3xl text-neutral-400 mb-10">
            Crafting Experiences that inspire:
          </div>
          <div className="w-full flex flex-col justify-center items-center">
            <h1
              className="leading-[1] flex flex-col text-center relative z-5"
              style={{
                fontFamily: "Almarena Neue",
                fontWeight: 700,
                fontSize: 150,
              }}
            >
              <div>Elevate Your </div>{" "}
              <div className="flex gap-x-8 justify-center">
                Brand{" "}
                <span className="size-30 ring-4 ring-offset-4 ring-lime-400 bg-[#6020EA] flex justify-center items-center rounded-full">
                  <svg
                    className="size-40 scale-125 animate-spin duration-700"
                    viewBox="0 0 1200 1200"
                    fill="none"
                  >
                    <path
                      fill="#6020EA"
                      stroke="#000"
                      d="M477.707 600.037l122.33-122.33 122.329 122.33-122.33 122.33z"
                    />
                    <rect
                      x={282}
                      y={541.508}
                      width={367}
                      height={185}
                      rx={92.5}
                      transform="rotate(-45 282 541.508)"
                      fill="#fff"
                    />
                    <rect
                      x={345.64}
                      y={535.851}
                      width={265}
                      height={107}
                      rx={53.5}
                      transform="rotate(-45 345.64 535.851)"
                      fill="#6020EA"
                    />
                    <rect
                      x={918.323}
                      y={658.815}
                      width={367}
                      height={185}
                      rx={92.5}
                      transform="rotate(135 918.323 658.815)"
                      fill="#fff"
                    />
                    <rect
                      x={854.683}
                      y={664.472}
                      width={265}
                      height={107}
                      rx={53.5}
                      transform="rotate(135 854.683 664.472)"
                      fill="#6020EA"
                    />
                    <rect
                      x={787.508}
                      y={672.323}
                      width={367}
                      height={185}
                      rx={92.5}
                      transform="rotate(-135 787.508 672.323)"
                      fill="#fff"
                    />
                    <rect
                      x={781.851}
                      y={608.683}
                      width={265}
                      height={107}
                      rx={53.5}
                      transform="rotate(-135 781.851 608.683)"
                      fill="#6020EA"
                    />
                    <rect
                      x={541.508}
                      y={918.323}
                      width={367}
                      height={185}
                      rx={92.5}
                      transform="rotate(-135 541.508 918.323)"
                      fill="#fff"
                    />
                    <rect
                      x={535.851}
                      y={854.683}
                      width={265}
                      height={107}
                      rx={53.5}
                      transform="rotate(-135 535.851 854.683)"
                      fill="#6020EA"
                    />
                  </svg>
                </span>{" "}
                with Our{" "}
              </div>{" "}
              <div className="flex justify-center">
                <span className="relative rotate-0.5 block overflow-visible text-white">
                  <span className="bg-[#b9e901] rotate-3 left-1 -top-1 bottom-4 rounded-4xl right-2 -z-10 absolute" />
                  Creative
                </span>{" "}
                Magic
              </div>
            </h1>
            <div className="flex gap-x-2 items-center my-10 mt-20">
              <span className="text-xl text-neutral-400">Scroll down</span>
              <span className="bg-violet-700 rounded-full p-1.5">
                <ArrowDown className="text-lime-300 size-5" />
              </span>
            </div>
          </div>
        </div>
        <div className="bg-neutral-900 rounded-4xl p-10 px-10 mt-20">
          <div className="w-full text-white flex justify-between py-5 border-b-2 border-neutral-700">
            <span
              className="text-4xl font-semibold"
              style={{
                fontFamily: "Almarena Neue",
              }}
            >
              Our Expertise
            </span>
            <span className="text-xl text-neutral-400">
              Transform ideas into reality by combining <br /> creativity,
              strategy and expertise.
            </span>
          </div>
          <div className="grid grid-cols-3 gap-x-5 mt-14">
            <div className="p-10 rounded-4xl bg-neutral-800">
              <div className="flex justify-between items-center">
                <span
                  className="text-6xl font-medium text-lime-400"
                  style={{
                    fontFamily: "Almarena Neue",
                  }}
                >
                  Market <br /> research
                </span>
                <span className="p-3 bg-neutral-700 rounded-full">
                  <ArrowRight className="size-18 rotate-[-45deg] text-white" />
                </span>
              </div>
              <div className="h-0.5 w-full bg-neutral-700 my-5" />
              <div className="text-neutral-500 font-medium text-xl">
                Blend consumer behaviour and economics <br />
                trends to confirm and improve business idea
              </div>
              <div className="mt-6">
                <img src="/src/assets/grid-1.png" className="rounded-3xl" />
              </div>
            </div>
            <div className="p-10 rounded-4xl bg-violet-800 rounded-bl-[300px] relative">
              <span className="p-8 absolute left-0 bottom-0 bg-lime-300 rounded-full ring-[8px] ring-neutral-900">
                <ArrowRight className="size-24 rotate-[-45deg] text-violet-600" />
              </span>
              <div className="flex justify-between items-center">
                <span
                  className="text-6xl font-medium text-white"
                  style={{
                    fontFamily: "Almarena Neue",
                  }}
                >
                  Ads <br /> Production
                </span>
              </div>
              <div className="h-0.5 w-full bg-violet-600 my-5" />
              <div className="text-white font-medium text-xl">
                Creative consultation, Pre-production, <br /> Production and
                Post-production
              </div>
              <div className="mt-6">
                <img
                  src="/src/assets/grid-2.png"
                  className="rounded-3xl h-[288px] w-full object-cover rounded-bl-[280px]"
                />
              </div>
            </div>
            <div className="p-10 rounded-4xl bg-neutral-800">
              <div className="flex justify-between items-center">
                <span
                  className="text-6xl font-medium text-lime-400"
                  style={{
                    fontFamily: "Almarena Neue",
                  }}
                >
                  Branding <br /> strategies
                </span>
                <span className="p-3 bg-neutral-700 rounded-full">
                  <ArrowRight className="size-18 rotate-[-45deg] text-white" />
                </span>
              </div>
              <div className="h-0.5 w-full bg-neutral-700 my-5" />
              <div className="text-neutral-500 font-medium text-xl">
                Build identification and favourability with <br />
                customers and potental customers
              </div>
              <div className="mt-6">
                <img src="/src/assets/grid-3.png" className="rounded-3xl" />
              </div>
            </div>
          </div>
          <div className="border-b-2 border-neutral-700 my-20" />
          <div className="flex relative">
            <div
              className="w-9/12 text-7xl uppercase leading-[1.1] font-semibold text-lime-400"
              style={{
                fontFamily: "Almarena Neue",
              }}
            >
              we create <br /> impactful <br /> experiences for our <br />{" "}
              clients' customers <br /> every time they <br /> engage with a{" "}
              <br /> brand
            </div>
            <div className="w-3/12">
              <div className="font-bold relative text-right px-8" style={{
                fontFamily: "Almarena Neue",
              }}>
                <span className="text-white text-6xl">700</span>
                <span className="absolute text-5xl -top-1 right-0 text-violet-600">+</span>
              </div>
              <div className="text-lime-300 text-right text-xl">Project Completed</div>
            </div>
            <div className="text-xl text-neutral-400 absolute right-0 bottom-0">
              We take pride in our client success stories, where our creative{" "}
              <br /> strategies and execution have played a vital role in
              achiving their <br /> business goals and surpassing expectations.
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
