import React from "react";
import { motion as Motion } from "framer-motion";
import {
  ArrowUpRight,
  BriefcaseBusiness,
  Code2,
  GraduationCap,
  Layers3,
  MapPin,
  Palette,
  PenTool,
  Trophy,
} from "lucide-react";

const educationData = [
  {
    year: "2020—2023",
    title: "ST. ALBERTUS",
    role: "Science Major",
    description:
      "Built an analytical foundation and a systematic approach to solving complex problems.",
    type: "Academic",
    icon: GraduationCap,
    logo: "/img/logo-dempo.webp",
    logoAlt: "SMAK St. Albertus Malang logo",
  },
  {
    year: "2023—Present",
    title: "BRAWIJAYA",
    role: "Informatics Engineering",
    description:
      "Exploring front-end development, interface design, and modern web architecture.",
    type: "Academic",
    icon: Layers3,
    logo: "/img/Logo_Universitas_Brawijaya.svg",
    logoAlt: "Universitas Brawijaya logo",
  },
  {
    year: "2026—Present",
    title: "DOT INDONESIA",
    role: "Front-End Developer Intern",
    description:
      "Building dynamic interfaces, improving performance, and shipping products with a collaborative team.",
    type: "Internship",
    icon: BriefcaseBusiness,
    logo: "/img/dot.png",
    logoAlt: "DOT Indonesia logo",
  },
];

const storyChapters = [
  {
    id: "01",
    label: "Design",
    title: "Starting with people",
    icon: Palette,
    tone: "bg-primary",
    text: "I am an Informatics Engineering student at Brawijaya University with a strong interest in design, particularly UI/UX design. I am passionate about creating intuitive, user-centered, and visually engaging digital experiences.",
  },
  {
    id: "02",
    label: "Build",
    title: "Turning ideas into products",
    icon: Code2,
    tone: "bg-secondary",
    text: "Beyond designing interfaces, I enjoy bringing my ideas to life by implementing them as a Front-End Developer, turning concepts and prototypes into functional, responsive, and interactive applications. I continuously strive to improve both my technical and creative skills, ensuring that every project I work on is not only aesthetically pleasing but also highly usable.",
  },
  {
    id: "03",
    label: "Compete",
    title: "Growing through challenge",
    icon: Trophy,
    tone: "bg-primary",
    text: "I am also highly enthusiastic about participating in competitions, as they challenge me to think critically, innovate, and push my limits. These experiences motivate me to grow, achieve excellence, and strive to win in every opportunity I pursue.",
  },
];

const focusAreas = [
  {
    id: "01",
    title: "UI/UX Design",
    note: "Human-centered thinking",
    icon: Palette,
  },
  {
    id: "02",
    title: "Front-End",
    note: "Responsive implementation",
    icon: Code2,
  },
  {
    id: "03",
    title: "Competitions",
    note: "Ambition through challenge",
    icon: Trophy,
  },
];

const FadeUp = ({ children, className = "", delay = 0 }) => (
  <Motion.div
    className={className}
    initial={{ opacity: 0, y: 24 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-60px" }}
    transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
  >
    {children}
  </Motion.div>
);

const About = () => {
  return (
    <section className="theme-section relative w-full overflow-hidden bg-canvas py-24 text-ink selection:bg-primary selection:text-ink md:py-36">
      <div className="pointer-events-none absolute inset-0 opacity-60">
        <div className="absolute -left-24 top-40 h-80 w-80 rounded-full bg-secondary/35 blur-[110px]" />
        <div className="absolute -right-24 bottom-28 h-80 w-80 rounded-full bg-primary/25 blur-[110px]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(11,18,20,0.025)_1px,transparent_1px),linear-gradient(to_bottom,rgba(11,18,20,0.025)_1px,transparent_1px)] bg-[size:4rem_4rem]" />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-[1600px] px-5 md:px-12">
        <FadeUp>

          <div className="mb-10 grid items-end gap-8 md:mb-16 xl:grid-cols-12 xl:gap-12">
            <div className="xl:col-span-9">
              <p className="mb-5 max-w-xl text-sm font-semibold uppercase tracking-[0.16em] text-muted md:text-base">
                Informatics student · UI/UX designer · Front-end developer
              </p>
              <h2 className="max-w-[12ch] text-[clamp(3rem,8.5vw,8.5rem)] font-black uppercase leading-[0.82] tracking-[-0.07em]">
                Design. Build.
                <br />
                <span className="relative inline-block px-3 md:px-5">
                  <span className="absolute inset-x-0 bottom-[0.04em] top-[0.08em] -z-10 -rotate-1 bg-primary" />
                  Compete.
                </span>
              </h2>
            </div>
            <p className="max-w-md border-l-2 border-primary pl-5 text-base leading-relaxed text-muted md:text-lg xl:col-span-3 xl:mb-2">
              I combine empathy, visual thinking, and code, then keep raising the
              standard through every challenge I take on.
            </p>
          </div>
        </FadeUp>

        <div className="grid min-w-0 gap-6 xl:grid-cols-12 xl:gap-8">
          <FadeUp className="min-w-0 xl:col-span-5">
            <figure className="overflow-hidden rounded-[2rem] border border-line bg-white shadow-[0_22px_70px_rgba(11,18,20,0.09)]">
              <div className="relative min-h-[30rem] overflow-hidden bg-primary sm:min-h-[40rem] xl:min-h-[48rem]">
                <div className="absolute -right-12 top-20 h-52 w-52 rotate-12 rounded-[3rem] bg-secondary/90 sm:h-72 sm:w-72" />
                <div className="absolute -left-16 bottom-28 h-48 w-48 -rotate-12 rounded-full border-[2rem] border-white/35 sm:h-64 sm:w-64" />
                <div className="absolute inset-x-0 bottom-0 z-10 text-center text-[clamp(5rem,13vw,11rem)] font-black uppercase leading-none tracking-[-0.08em] text-white/45">
                  Brandon
                </div>
                <img
                  src="/img/Profile.png"
                  alt="Brandon Geraldo Adji wearing a blue blazer"
                  loading="lazy"
                  decoding="async"
                  className="absolute inset-x-0 bottom-0 z-10 h-[91%] w-full object-contain object-bottom"
                />
              </div>
              <figcaption className="grid gap-4 border-t border-line p-5 sm:grid-cols-[1fr_auto] sm:items-center md:p-7">
                <div>
                  <p className="text-2xl font-black uppercase tracking-[-0.04em] md:text-3xl">
                    Brandon Geraldo Adji
                  </p>
                  <p className="mt-1 text-sm text-muted">
                    Designing with intent. Building with precision.
                  </p>
                </div>
                <div className="flex items-center gap-2 font-mono text-[9px] font-bold uppercase tracking-[0.16em] text-muted sm:justify-end">
                  <MapPin className="h-4 w-4 text-[#087F90]" />
                  Malang, Indonesia
                </div>
              </figcaption>
            </figure>
          </FadeUp>

          <FadeUp delay={0.06} className="min-w-0 xl:col-span-7">
            <div className="flex h-full flex-col overflow-hidden rounded-[2rem] border border-line bg-white shadow-[0_22px_70px_rgba(11,18,20,0.07)]">
              <div className="flex flex-col gap-4 border-b border-line bg-surface-soft p-5 sm:flex-row sm:items-end sm:justify-between md:p-8">
                <div>
                  <span className="font-mono text-[9px] font-bold uppercase tracking-[0.24em] text-[#087F90]">
                    Description
                  </span>
                  <h3 className="mt-3 text-3xl font-black uppercase tracking-[-0.05em] md:text-5xl">
                    About Me
                  </h3>
                </div>
              </div>

              <div className="flex flex-1 flex-col">
                {storyChapters.map((chapter, index) => {
                  const Icon = chapter.icon;
                  return (
                    <article
                      key={chapter.id}
                      className={`group grid gap-5 p-5 sm:grid-cols-[5.5rem_1fr] md:gap-7 md:p-8 ${
                        index < storyChapters.length - 1
                          ? "border-b border-line"
                          : ""
                      }`}
                    >
                      <div className="flex items-center gap-3 sm:block">
                        <span
                          className={`${chapter.tone} grid h-12 w-12 place-items-center rounded-2xl text-ink transition-transform duration-200 group-hover:-rotate-3`}
                        >
                          <Icon className="h-5 w-5" aria-hidden="true" />
                        </span>
                      </div>
                      <div>
                        <h4 className="text-xl font-black uppercase tracking-[-0.03em] md:text-2xl">
                          {chapter.title}
                        </h4>
                        <p className="mt-3 text-[0.95rem] leading-[1.8] text-muted md:text-base xl:text-[1.02rem]">
                          {chapter.text}
                        </p>
                      </div>
                    </article>
                  );
                })}
              </div>
            </div>
          </FadeUp>
        </div>

        <FadeUp
          delay={0.08}
          className="mt-6 grid overflow-hidden rounded-[2rem] border border-line bg-white sm:grid-cols-3 md:mt-8"
        >
          {focusAreas.map((area, index) => {
            const Icon = area.icon;
            return (
              <div
                key={area.id}
                className={`group flex items-center gap-4 p-5 transition-colors duration-200 hover:bg-primary/20 md:p-7 ${
                  index < focusAreas.length - 1
                    ? "border-b border-line sm:border-b-0 sm:border-r"
                    : ""
                }`}
              >
                <span className="grid h-12 w-12 shrink-0 place-items-center rounded-full border border-line bg-surface-soft transition-colors duration-200 group-hover:border-primary group-hover:bg-primary">
                  <Icon className="h-5 w-5" aria-hidden="true" />
                </span>
                <div className="min-w-0">
                  <p className="mt-1 text-lg font-black uppercase tracking-[-0.03em]">
                    {area.title}
                  </p>
                  <p className="text-sm text-muted">{area.note}</p>
                </div>
              </div>
            );
          })}
        </FadeUp>

        <div id="pathway" className="mt-24 md:mt-40">
          <FadeUp className="mx-auto max-w-3xl text-center">
            <span className="inline-flex items-center gap-3 font-mono text-[10px] font-bold uppercase tracking-[0.3em] text-[#087F90]">
            </span>
            <h3 className="mt-5 text-[clamp(3rem,7vw,7rem)] font-black uppercase leading-[0.86] tracking-[-0.07em]">
              Learning by
              <br />
              <span className="relative inline-block px-3 md:px-5">
                <span className="absolute inset-x-0 bottom-[0.05em] top-[0.1em] -z-10 -rotate-1 bg-primary" />
                building.
              </span>
            </h3>
            <p className="mx-auto mt-7 max-w-xl text-base leading-relaxed text-muted md:text-lg">
              A path from analytical thinking to product design and
              production-ready front-end work.
            </p>
          </FadeUp>

          <ol className="relative mx-auto mt-20 hidden max-w-6xl lg:block">
            <div
              aria-hidden="true"
              className="absolute bottom-36 left-1/2 top-36 -translate-x-1/2 border-l border-dashed border-[#087F90]/45"
            />
            {educationData.map((item, index) => {
              const Icon = item.icon;
              return (
                <li
                  key={item.id}
                  className="relative grid min-h-[18rem] grid-cols-[1fr_7rem_1fr] items-center"
                >
                  <FadeUp delay={index * 0.07} className="pr-16">
                    <article className="relative border-t border-line pt-7">
                      <span className="absolute right-0 top-3 text-7xl font-black leading-none tracking-[-0.08em] text-primary/30">
                        {item.id}
                      </span>
                      <div className="relative">
                        <span className="font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-[#087F90]">
                          {item.id} // {item.type}
                        </span>
                        <div className="mt-8 flex items-center gap-4">
                          <span className="grid h-11 w-11 shrink-0 place-items-center overflow-hidden rounded-2xl border border-line bg-white p-1.5">
                            <img
                              src={item.logo}
                              alt={item.logoAlt}
                              className="h-full w-full object-contain"
                              loading="lazy"
                              decoding="async"
                            />
                          </span>
                          <div>
                            <h4 className="text-3xl font-black uppercase tracking-[-0.04em]">
                              {item.title}
                            </h4>
                            <p className="mt-1 font-mono text-[10px] font-bold uppercase tracking-[0.14em] text-muted">
                              {item.year}
                            </p>
                          </div>
                        </div>
                      </div>
                    </article>
                  </FadeUp>

                  <FadeUp
                    delay={0.04 + index * 0.07}
                    className="relative z-10 flex items-center justify-center"
                  >
                    <span
                      aria-hidden="true"
                      className="absolute left-0 right-0 top-1/2 h-px bg-line"
                    />
                    <span className="relative grid h-[4.5rem] w-[4.5rem] place-items-center rounded-full border border-dashed border-[#087F90] bg-white shadow-[0_8px_24px_rgba(11,18,20,0.08)]">
                      <span className="grid h-11 w-11 place-items-center rounded-full border-4 border-white bg-primary text-ink shadow-[0_0_0_1px_#DCEAEA]">
                        <Icon className="h-5 w-5" aria-hidden="true" />
                      </span>
                    </span>
                  </FadeUp>

                  <FadeUp delay={0.08 + index * 0.07} className="pl-16">
                    <article className="border-t border-line pt-7">
                      <h4 className="mt-5 text-3xl font-black uppercase tracking-[-0.04em]">
                        {item.role}
                      </h4>
                      <p className="mt-4 max-w-md text-base leading-[1.75] text-muted">
                        {item.description}
                      </p>
                    </article>
                  </FadeUp>
                </li>
              );
            })}
          </ol>

          <ol className="relative mt-14 space-y-6 pl-12 lg:hidden">
            <div
              aria-hidden="true"
              className="absolute bottom-8 left-[1.35rem] top-8 border-l border-dashed border-[#087F90]/45"
            />
            {educationData.map((item, index) => {
              return (
                <li key={item.id} className="relative">
                  <span className="absolute -left-12 top-7 z-10 grid h-11 w-11 place-items-center overflow-hidden rounded-full border-4 border-white bg-white p-1 shadow-[0_0_0_1px_#DCEAEA]">
                    <img
                      src={item.logo}
                      alt={item.logoAlt}
                      className="h-full w-full object-contain"
                      loading="lazy"
                      decoding="async"
                    />
                  </span>
                  <FadeUp delay={index * 0.06}>
                    <article className="overflow-hidden rounded-3xl border border-line bg-white shadow-[0_14px_36px_rgba(11,18,20,0.06)]">
                      <div className="flex items-center justify-between gap-4 border-b border-line bg-surface-soft px-5 py-4 md:px-7">
                        <span className="font-mono text-[10px] font-bold uppercase tracking-[0.18em] text-[#087F90]">
                          {item.id} / {item.type}
                        </span>
                        <span className="font-mono text-[10px] font-bold uppercase tracking-[0.12em] text-muted">
                          {item.year}
                        </span>
                      </div>
                      <div className="p-5 md:grid md:grid-cols-2 md:gap-10 md:p-7">
                        <div>
                          <p className="font-mono text-[9px] font-bold uppercase tracking-[0.18em] text-muted">
                            Institution
                          </p>
                          <h4 className="mt-3 text-2xl font-black uppercase tracking-[-0.04em] md:text-3xl">
                            {item.title}
                          </h4>
                        </div>
                        <div className="mt-6 border-t border-line pt-6 md:mt-0 md:border-l md:border-t-0 md:pl-10 md:pt-0">
                          <p className="font-mono text-[9px] font-bold uppercase tracking-[0.18em] text-muted">
                            Role / Focus
                          </p>
                          <h4 className="mt-3 text-xl font-black uppercase tracking-[-0.03em] md:text-2xl">
                            {item.role}
                          </h4>
                          <p className="mt-4 leading-relaxed text-muted">
                            {item.description}
                          </p>
                        </div>
                      </div>
                    </article>
                  </FadeUp>
                </li>
              );
            })}
          </ol>
        </div>
      </div>
    </section>
  );
};

export default About;
