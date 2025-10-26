import "./App.css";
import gsap from "gsap";
import { ArrowDown, ArrowRight, MoveRight } from "lucide-react";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// assets import
import logo from "./assets/logo.png";
import landBackImg from "./assets/landing-background.png";
import cosmetics from "./assets/cosmetics.jpg";
import shoes from "./assets/shoes.png";
import profile from "./assets/profile.png";
import cosmetics2 from "./assets/cosmetics-2.png";
import googleImg from "./assets/google.png";
import iphoneImg from "./assets/iphone.png";
import cococola from "./assets/cococola.png";
import backgroundAbsoluteLogo from "./assets/BackgroundAbsoluteCropped.png";
import backgroundAbsoluteLogo2 from "./assets/BackgroundAbsoluteLogo2.png";

gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);

export default function App() {
  const objectRotatingTrigger = useRef<SVGSVGElement>(null);
  const objectRotatingContainer = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.to(".rotate-logo", {
      rotation: "+=360",
      duration: 3,
      repeat: -1,
      ease: "linear",
    });
    gsap.to(".circular-text", {
      rotation: "360",
      duration: 4,
      repeat: -1,
      transformOrigin: "50% 50%",
      ease: "linear",
    });
  }, [objectRotatingContainer]);

  return (
    <div className="px-8 h-screen w-screen relative overflow-y-auto">
      <main className="h-auto w-full border-x-2 border-neutral-200">
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
        <section className="flex flex-col justify-center relative">
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
                    className="size-40 scale-125 rotate-logo"
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
        </section>
        <section className="bg-neutral-900 rounded-4xl p-10 px-10 mt-20">
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
            <div className="w-3/12 relative">
              <img src={landBackImg} className="absolute opacity-0" />
              <div
                ref={objectRotatingContainer}
                className="flex justify-end mb-10"
              >
                <svg
                  ref={objectRotatingTrigger}
                  className="size-[300px] relative"
                  viewBox="0 0 300 300"
                >
                  <defs>
                    <path
                      id="circlePath"
                      d="M 150, 150 m -100, 0 a 100,100 0 1,1 200,0 a 100,100 0 1,1 -200,0"
                    />
                  </defs>

                  <circle
                    cx="150"
                    cy="150"
                    r="140"
                    className="fill-violet-700"
                    stroke="none"
                  />

                  <svg
                    viewBox="0 0 1200 1200"
                    fill="none"
                    className="rotate-color-logo"
                  >
                    <rect
                      x={282}
                      y={541.508}
                      width={367}
                      height={185}
                      rx={92.5}
                      transform="rotate(-45 282 541.508)"
                      className="fill-lime-300"
                    />
                    <rect
                      x={345.64}
                      y={535.851}
                      width={265}
                      height={107}
                      rx={53.5}
                      transform="rotate(-45 345.64 535.851)"
                      className="fill-violet-700"
                    />
                    <rect
                      x={918.323}
                      y={658.815}
                      width={367}
                      height={185}
                      rx={92.5}
                      transform="rotate(135 918.323 658.815)"
                      className="fill-lime-300"
                    />
                    <rect
                      x={854.683}
                      y={664.472}
                      width={265}
                      height={107}
                      rx={53.5}
                      transform="rotate(135 854.683 664.472)"
                      className="fill-violet-700"
                    />
                    <rect
                      x={787.508}
                      y={672.323}
                      width={367}
                      height={185}
                      rx={92.5}
                      transform="rotate(-135 787.508 672.323)"
                      className="fill-lime-300"
                    />
                    <rect
                      x={781.851}
                      y={608.683}
                      width={265}
                      height={107}
                      rx={53.5}
                      transform="rotate(-135 781.851 608.683)"
                      className="fill-violet-700"
                    />
                    <rect
                      x={541.508}
                      y={918.323}
                      width={367}
                      height={185}
                      rx={92.5}
                      transform="rotate(-135 541.508 918.323)"
                      className="fill-lime-300"
                    />
                    <rect
                      x={535.851}
                      y={854.683}
                      width={265}
                      height={107}
                      rx={53.5}
                      transform="rotate(-135 535.851 854.683)"
                      className="fill-violet-700"
                    />
                  </svg>

                  <text
                    fill="#fff"
                    fontSize={28}
                    className="font-medium circular-text"
                  >
                    <textPath href="#circlePath">LET'S GET STARTED</textPath>
                    <textPath
                      href="#circlePath"
                      className="fill-lime-300 text-4xl"
                      startOffset={"44.5%"}
                    >
                      •
                    </textPath>
                    <textPath
                      href="#circlePath"
                      className="fill-lime-300 text-4xl"
                      startOffset={"94.5%"}
                    >
                      •
                    </textPath>
                    <textPath href="#circlePath" startOffset={"50%"}>
                      LET'S GET STARTED
                    </textPath>
                  </text>
                </svg>
              </div>
              <div
                className="font-bold relative text-right pr-9"
                style={{
                  fontFamily: "Almarena Neue",
                }}
              >
                <span className="text-white text-7xl">700</span>
                <span className="absolute text-5xl -top-1 right-0 text-violet-600">
                  +
                </span>
              </div>
              <div className="text-lime-300 text-right text-xl">
                Project Completed
              </div>
            </div>
            <div className="text-xl text-neutral-400 absolute right-0 bottom-0">
              We take pride in our client success stories, where our creative{" "}
              <br /> strategies and execution have played a vital role in
              achiving their <br /> business goals and surpassing expectations.
            </div>
          </div>
        </section>
        <div className="h-0.5 bg-neutral-200 w-full mt-15" />
        <section className="mt-15 px-10 relative overflow-x-visible">
          <img
            src={backgroundAbsoluteLogo}
            className="absolute -right-8 w-140"
          />
          <img
            src={backgroundAbsoluteLogo2}
            className="absolute -left-8 opacity-10 bottom-0 w-140"
          />

          <div
            className="uppercase text-violet-600 font-medium text-xl"
            style={{
              fontFamily: "Almarena Neue",
            }}
          >
            recent work
          </div>
          <div
            className="text-5xl font-semibold mt-7"
            style={{
              fontFamily: "Almarena Neue",
            }}
          >
            Through meticulous planning, seamless execution, <br /> and creative
            problem-solving, we achieved <br /> remarkable project success.
          </div>
          <div className="w-full flex py-20">
            <div className="w-1/2 pr-15 flex flex-col gap-y-25">
              <div className="relative">
                <svg
                  className="fill-lime-300 absolute -top-14 right-8 -rotate-[60deg] size-26"
                  viewBox="0 0 118 118"
                  fill="none"
                >
                  <path d="M59 0l.016.508C59.723 20.328 72.788 58.603 118 59c-47.957 3.17-58.49 39.984-58.03 58.492C59.263 97.663 46.197 58.897.986 58.5c47.957-3.17 58.49-39.493 58.03-57.992C59.009.338 59.004.168 59 0z" />
                </svg>
                <img
                  src={cosmetics2}
                  className="rounded-[50px] h-[70vh] w-full object-cover"
                />
                <div
                  style={{
                    fontFamily: "Almarena Neue",
                  }}
                  className="text-3xl font-semibold text-violet-600 mt-5 px-3"
                >
                  The Ordinary
                </div>
                <div className="font-medium mt-3 text-neutral-400 px-3">
                  DesignDigital, WebContent, Campaigns Events & Activations
                </div>
              </div>
              <div className="relative">
                <svg
                  className="fill-lime-300 absolute bottom-[30%] -left-10 rotate-[60deg] size-20"
                  viewBox="0 0 118 118"
                  fill="none"
                >
                  <path d="M59 0l.016.508C59.723 20.328 72.788 58.603 118 59c-47.957 3.17-58.49 39.984-58.03 58.492C59.263 97.663 46.197 58.897.986 58.5c47.957-3.17 58.49-39.493 58.03-57.992C59.009.338 59.004.168 59 0z" />
                </svg>
                <img
                  src={iphoneImg}
                  className="rounded-[50px] h-[70vh] w-full object-cover"
                />
                <div
                  style={{
                    fontFamily: "Almarena Neue",
                  }}
                  className="text-3xl font-semibold text-violet-600 mt-5 px-3"
                >
                  Apple Inc
                </div>
                <div className="font-medium mt-3 text-neutral-400 px-3">
                  DesignDigital, WebContent, Campaigns Events & Activations,
                  Brand <br /> Strategy, VoiceBranding
                </div>
              </div>
            </div>
            <div className="w-1/2 pl-15 flex flex-col gap-y-25">
              <div className="relative first:mt-36">
                <img
                  src={googleImg}
                  className="rounded-[50px] h-[70vh] w-full object-cover"
                />
                <div
                  style={{
                    fontFamily: "Almarena Neue",
                  }}
                  className="text-3xl font-semibold text-violet-600 mt-5 px-3"
                >
                  Google LLC
                </div>
                <div className="font-medium mt-3 text-neutral-400 px-3">
                  Brand Strategy, VoiceBranding, DesignDigital, WebContent,{" "}
                  <br /> Campaigns Events & Activations
                </div>
              </div>
              <div className="relative first:mt-36">
                <div
                  ref={objectRotatingContainer}
                  className="flex justify-end mb-10 absolute scale-80 right-0"
                >
                  <svg
                    ref={objectRotatingTrigger}
                    className="size-[300px] relative"
                    viewBox="0 0 300 300"
                  >
                    <defs>
                      <path
                        id="circlePath"
                        d="M 150, 150 m -100, 0 a 100,100 0 1,1 200,0 a 100,100 0 1,1 -200,0"
                      />
                    </defs>

                    <circle
                      cx="150"
                      cy="150"
                      r="140"
                      className="fill-lime-300"
                      stroke="none"
                    />
                    <circle
                      cx="150"
                      cy="150"
                      r="131"
                      className="stroke-white fill-none stroke-[2px]"
                    />

                    <ArrowDown
                      color="#fff"
                      size={120}
                      className="-rotate-[145deg] -translate-x-5 -translate-y-[125px]"
                      style={{
                        transformOrigin: "50% 50%",
                      }}
                    />

                    <text
                      fontSize={28}
                      className="font-semibold circular-text fill-violet-600"
                    >
                      <textPath href="#circlePath">VIEW MORE</textPath>
                      <textPath href="#circlePath" startOffset={"32%"}>
                        VIEW MORE
                      </textPath>
                      <textPath href="#circlePath" startOffset={"65%"}>
                        VIEW MORE
                      </textPath>
                      <textPath
                        href="#circlePath"
                        className="fill-white text-4xl"
                        startOffset={"94%"}
                      >
                        •
                      </textPath>
                      <textPath
                        href="#circlePath"
                        className="fill-white text-4xl"
                        startOffset={"27.5%"}
                      >
                        •
                      </textPath>
                      <textPath
                        href="#circlePath"
                        className="fill-white text-4xl"
                        startOffset={"60%"}
                      >
                        •
                      </textPath>
                    </text>
                  </svg>
                </div>
                <img
                  src={cococola}
                  className="rounded-[50px] rounded-tr-[550px] h-[70vh] w-full object-cover"
                />
                <div
                  style={{
                    fontFamily: "Almarena Neue",
                  }}
                  className="text-3xl font-semibold text-violet-600 mt-5 px-3"
                >
                  The Coca-Cola Company
                </div>
                <div className="font-medium mt-3 text-neutral-400 px-3">
                  Brand Strategy, VoiceBranding, DesignDigital, WebContent,{" "}
                  <br /> Content & Campaigns
                </div>
              </div>
            </div>
          </div>
        </section>
        <div className="h-0.5 bg-neutral-200 w-full"></div>
        <section className="w-full grid-cols-5 grid gap-10 p-10 py-20">
          {[
            "KelloggsLogo.png",
            "LorealLogo.png",
            "HeinkenLogo.png",
            "JeepLogo.png",
            "ChampionLogo.png",
            "SpotifyLogo.png",
            "AllianzLogo.png",
            "CocoColaLogo.png",
            "GilletteLogo.png",
            "NetflixLogo.png",
          ].map((img) => (
            <div className="px-10">
              <img className="scale-75" src={`/src/assets/${img}`} />
            </div>
          ))}
        </section>
        <div className="h-0.5 bg-neutral-200 w-full"></div>
        <section className="pt-26">
          <div className="bg-neutral-900 rounded-4xl text-neutral-50 py-20 px-10">
            <div className="w-full flex flex-col justify-center items-center">
              <div
                style={{
                  fontFamily: "Almarena Neue",
                }}
                className="text-lime-300 font-medium text-3xl py-6"
              >
                Start crafting your branding story
              </div>
              <h1
                className="gap-y-5 flex flex-col text-center relative z-5"
                style={{
                  fontFamily: "Almarena Neue",
                  fontWeight: 600,
                }}
              >
                <div className="uppercase text-8xl">
                  partner with us to create{" "}
                </div>{" "}
                <div className="flex justify-center text-8xl uppercase">
                  a
                  <span className="relative rotate-[0.1deg] block overflow-visible text-neutral-900">
                    <span className="bg-[#b9e901] rotate-2 left-1 -top-1 bottom-4 rounded-xl right-2 -z-10 absolute" />
                    compelling
                  </span>{" "}
                  narrative
                </div>
                <div className="uppercase text-8xl">for your brand!</div>{" "}
              </h1>
              <div
                className="text-neutral-400 py-6 text-center text-lg"
                style={{
                  fontFamily: "Almarena Neue",
                }}
              >
                Let's bring your ideas to life, start collaborating with our
                creative <br />
                agency and turn your vision into reality.
              </div>
            </div>
            <div className="h-0.5 bg-neutral-700 w-full"></div>
            <div
              style={{
                fontFamily: "Almarena Neue",
              }}
              className="flex justify-between pt-10 items-center"
            >
              <div>
                <div className="text-3xl font-medium text-lime-300 mb-1">
                  Libertans
                </div>
                <div className="text-white">
                  35 N Deaborn ST, Chicago, IL 60601, USA <br />
                  +1-202-555-616 (555) 555-1234 <br />
                  info@libertans.com
                </div>
              </div>
              <div>
                <div className="flex gap-x-3">
                  {[
                    "Market research",
                    "Ads Production",
                    "Branding strategies",
                  ].map((v) => (
                    <button className="text-lg border px-5 py-2 border-neutral-600 rounded-full">
                      {v}
                    </button>
                  ))}
                </div>
                <div className="gap-x-10 flex py-4 text-neutral-400 justify-end">
                  <span>Privacy & Cookie Policy</span>
                  <span>Libertans © 2023</span>
                </div>
              </div>
            </div>
          </div>
        </section>
        <div className="p-5"></div>
      </main>
    </div>
  );
}
