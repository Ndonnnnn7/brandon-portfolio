import React, { useEffect, useMemo } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { motion as Motion, useReducedMotion } from "framer-motion";
import {
  ArrowLeft,
  ArrowRight,
  BriefcaseBusiness,
  CalendarDays,
  ExternalLink,
  Github,
  Layers3,
  MoveUpRight,
} from "lucide-react";
import { projectsData } from "../data/projects";

const visibleProjects = projectsData.filter(
  (item) => item.showInGrid !== false,
);

const FadeUp = ({ children, delay = 0, className = "" }) => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <Motion.div
      className={className}
      initial={shouldReduceMotion ? false : { opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-64px" }}
      transition={{
        duration: shouldReduceMotion ? 0 : 0.65,
        ease: [0.22, 1, 0.36, 1],
        delay: shouldReduceMotion ? 0 : delay,
      }}
    >
      {children}
    </Motion.div>
  );
};

const ProjectDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const shouldReduceMotion = useReducedMotion();

  const project = useMemo(
    () => projectsData.find((item) => item.id === Number.parseInt(id, 10)),
    [id],
  );

  const projectIndex = visibleProjects.findIndex(
    (item) => item.id === project?.id,
  );
  const nextProject =
    projectIndex >= 0
      ? visibleProjects[(projectIndex + 1) % visibleProjects.length]
      : null;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!project) {
    return (
      <main className="theme-section flex min-h-screen items-center justify-center bg-canvas px-6 text-ink">
        <div className="w-full max-w-xl rounded-3xl border-2 border-ink bg-white p-8 text-center shadow-[12px_12px_0_var(--color-primary)] md:p-12">
          <p className="font-mono text-xs font-bold uppercase tracking-[0.24em] text-primaryInk">
            Error / Project not found
          </p>
          <h1 className="mt-5 font-display text-5xl font-black uppercase tracking-tighter md:text-7xl">
            Lost in the archive.
          </h1>
          <button
            type="button"
            onClick={() => navigate("/#projects")}
            className="mt-8 inline-flex min-h-12 items-center gap-3 rounded-full border-2 border-ink bg-primary px-6 py-3 font-mono text-xs font-bold uppercase tracking-[0.16em] text-ink transition-colors duration-200 hover:bg-secondary focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primaryInk"
          >
            <ArrowLeft aria-hidden="true" className="h-4 w-4" />
            Back to projects
          </button>
        </div>
      </main>
    );
  }

  const projectNumber = String(project.id).padStart(3, "0");
  const projectPosition = String(projectIndex + 1).padStart(2, "0");
  const projectTotal = String(visibleProjects.length).padStart(2, "0");
  const heroImageSrc = project.image || "";
  const techList = project.detailTech?.length
    ? project.detailTech
    : (project.tech ?? []);
  const actionLinks = [
    {
      key: "demo",
      href: project.links?.demo,
      label: "View live project",
      icon: ExternalLink,
      primary: true,
    },
    {
      key: "github",
      href: project.links?.github,
      label: "View source code",
      icon: Github,
      primary: false,
    },
    {
      key: "figma",
      href: project.links?.figma,
      label: "View design file",
      icon: MoveUpRight,
      primary: false,
    },
  ].filter((link) => link.href && link.href !== "#");

  return (
    <article className="theme-section relative min-h-screen overflow-hidden bg-canvas pb-24 text-ink selection:bg-primary selection:text-ink md:pb-36">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.055]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(11,18,20,0.45) 1px, transparent 1px), linear-gradient(90deg, rgba(11,18,20,0.45) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 top-20 h-[32rem] w-[32rem] rounded-full bg-primary/25 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-40 top-[46rem] h-[28rem] w-[28rem] rounded-full bg-secondary/40 blur-3xl"
      />

      <header className="relative z-10 mx-auto flex w-full max-w-[1320px] items-center justify-between px-6 pb-8 pt-6 md:px-10 md:pt-8">
        <Motion.button
          type="button"
          initial={shouldReduceMotion ? false : { opacity: 0, x: -16 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{
            duration: shouldReduceMotion ? 0 : 0.45,
            ease: "easeOut",
          }}
          onClick={() => navigate("/#projects")}
          className="group inline-flex min-h-11 items-center gap-3 rounded-full border border-line bg-white px-4 py-2 font-mono text-[10px] font-bold uppercase tracking-[0.18em] text-ink shadow-[var(--shadow-sm)] transition-colors duration-200 hover:border-primaryInk hover:bg-primary/20 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primaryInk md:text-xs"
          aria-label="Back to all projects"
        >
          <span className="flex h-7 w-7 items-center justify-center rounded-full bg-ink text-canvas transition-colors duration-200 group-hover:bg-primaryInk">
            <ArrowLeft aria-hidden="true" className="h-4 w-4" />
          </span>
          All projects
        </Motion.button>

        <div className="flex items-center gap-3 font-mono text-[10px] font-bold uppercase tracking-[0.18em] text-muted md:text-xs">
          <span className="hidden sm:inline">Case study</span>
          <span className="h-px w-8 bg-line sm:w-12" />
          <span className="text-ink">
            {projectPosition} / {projectTotal}
          </span>
        </div>
      </header>

      <main className="relative z-10">
        <section className="mx-auto w-full max-w-[1320px] px-6 pb-12 pt-10 md:px-10 md:pb-20 md:pt-16">
          <FadeUp>
            <div className="mb-8 flex flex-wrap items-center gap-3 font-mono text-[10px] font-bold uppercase tracking-[0.2em] md:text-xs">
              <span className="rounded-full border border-primaryInk bg-primary px-4 py-2 text-ink">
                {project.category}
              </span>
              <span className="rounded-full border border-line bg-white px-4 py-2 text-muted">
                Project year {project.year}
              </span>
              <span className="ml-auto hidden text-primaryInk md:inline">
                Archive / {projectNumber}
              </span>
            </div>
          </FadeUp>

          <div className="grid items-end gap-10 lg:grid-cols-12 lg:gap-12">
            <FadeUp className="lg:col-span-8">
              <p className="mb-4 font-mono text-xs font-bold uppercase tracking-[0.24em] text-primaryInk">
                Selected case study
              </p>
              <h1 className="break-words font-display text-[clamp(3.4rem,9vw,8.5rem)] font-black uppercase leading-[0.82] tracking-[-0.065em] text-ink">
                {project.title}
              </h1>
            </FadeUp>

            <FadeUp delay={0.08} className="lg:col-span-4">
              <div className="rounded-3xl border border-line bg-white p-6 shadow-[var(--shadow-md)] md:p-8">
                <div className="mb-5 flex items-center justify-between">
                  <span className="font-mono text-[10px] font-bold uppercase tracking-[0.22em] text-muted">
                    Project summary
                  </span>
                  <span className="h-3 w-3 rounded-full border border-primaryInk bg-primary" />
                </div>
                <p className="text-base font-medium leading-relaxed text-ink md:text-lg">
                  {project.description}
                </p>

                {actionLinks.length > 0 && (
                  <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:flex-wrap lg:flex-col">
                    {actionLinks.map(({ key, href, label, icon, primary }) => (
                      <a
                        key={key}
                        href={href}
                        target="_blank"
                        rel="noreferrer"
                        className={`inline-flex min-h-12 items-center justify-between gap-4 rounded-full border-2 border-ink px-5 py-3 font-mono text-[10px] font-bold uppercase tracking-[0.16em] text-ink transition-[background-color,border-color,box-shadow] duration-200 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primaryInk ${
                          primary
                            ? "bg-primary hover:bg-secondary hover:shadow-[5px_5px_0_var(--color-ink)]"
                            : "bg-white hover:border-primaryInk hover:bg-primary/20"
                        }`}
                      >
                        {label}
                        {React.createElement(icon, {
                          "aria-hidden": true,
                          className: "h-4 w-4 shrink-0",
                        })}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            </FadeUp>
          </div>
        </section>

        <FadeUp className="mx-auto w-full max-w-[1500px] px-3 sm:px-6 md:px-10">
          <section
            aria-label={`${project.title} project preview`}
            className="relative rounded-3xl border-2 border-ink bg-primary p-2 shadow-[10px_10px_0_var(--color-secondary)] md:p-3 md:shadow-[16px_16px_0_var(--color-secondary)]"
          >
            <div className="overflow-hidden rounded-[1.1rem] border border-ink bg-white md:rounded-[1.25rem]">
              <div className="flex min-h-11 items-center justify-between border-b border-line bg-surface-soft px-4 py-2 font-mono text-[10px] font-bold uppercase tracking-[0.18em] text-muted md:px-6">
                <div className="flex items-center gap-2" aria-hidden="true">
                  <span className="h-2.5 w-2.5 rounded-full border border-ink bg-primary" />
                  <span className="h-2.5 w-2.5 rounded-full border border-ink bg-secondary" />
                  <span className="h-2.5 w-2.5 rounded-full border border-ink bg-tertiary" />
                </div>
                <span className="truncate px-3">
                  {project.title} / Main preview
                </span>
                <span className="hidden text-primaryInk sm:inline">
                  Project frame
                </span>
              </div>

              <div className="relative aspect-[4/3] w-full bg-surface-soft md:aspect-[16/9]">
                {heroImageSrc ? (
                  <img
                    src={heroImageSrc}
                    alt={`Preview of ${project.title}`}
                    decoding="async"
                    fetchPriority="high"
                    className="h-full w-full bg-surface-soft object-contain object-center"
                  />
                ) : (
                  <div className="flex h-full flex-col items-center justify-center gap-4 px-6 text-center">
                    <Layers3
                      aria-hidden="true"
                      className="h-10 w-10 text-primaryInk"
                    />
                    <span className="font-display text-3xl font-black uppercase tracking-tighter text-ink/20 md:text-6xl">
                      Visual pending
                    </span>
                  </div>
                )}
              </div>

              <div className="flex items-center justify-between gap-4 border-t border-line bg-white px-4 py-3 font-mono text-[10px] font-bold uppercase tracking-[0.16em] text-muted md:px-6">
                <span>Viewport / Responsive</span>
                <span className="text-primaryInk">Status / Selected</span>
              </div>
            </div>
          </section>
        </FadeUp>

        <section className="mx-auto w-full max-w-[1320px] px-6 py-24 md:px-10 md:py-36">
          <FadeUp>
            <div className="overflow-hidden rounded-3xl border-2 border-ink bg-white shadow-[10px_10px_0_var(--color-secondary)] md:shadow-[14px_14px_0_var(--color-secondary)]">
              <div className="grid lg:grid-cols-[0.8fr_1.2fr]">
                <div className="relative flex min-h-[22rem] flex-col justify-between overflow-hidden bg-primary p-7 md:min-h-[27rem] md:p-10 lg:min-h-[34rem] lg:border-r-2 lg:border-ink lg:p-12">
                  <div className="relative z-10 flex items-center justify-between gap-4">
                    <span className="rounded-full border border-ink bg-white px-4 py-2 font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-ink md:text-xs">
                      01 / The brief
                    </span>
                    <span className="font-mono text-[10px] font-bold uppercase tracking-[0.18em] text-ink/60 md:text-xs">
                      Archive {projectNumber}
                    </span>
                  </div>

                  <div className="relative z-10 max-w-lg">
                    <span className="mb-6 block h-2 w-20 rounded-full bg-ink" />
                    <h2 className="font-display text-[clamp(3rem,6vw,5.5rem)] font-black uppercase leading-[0.86] tracking-[-0.055em] text-ink">
                      Behind
                      <br />
                      the build.
                    </h2>
                  </div>

                  <span
                    aria-hidden="true"
                    className="pointer-events-none absolute -bottom-16 -right-3 font-display text-[13rem] font-black leading-none tracking-[-0.08em] text-ink/[0.07] md:text-[18rem]"
                  >
                    01
                  </span>
                </div>

                <div className="flex flex-col justify-between border-t-2 border-ink p-7 md:p-10 lg:border-t-0 lg:p-12">
                  <div>
                    <div className="mb-8 flex items-center gap-4">
                      <span className="h-3 w-3 rounded-full border border-primaryInk bg-primary" />
                      <span className="font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-primaryInk md:text-xs">
                        Context / Overview
                      </span>
                      <span className="h-px flex-1 bg-line" />
                    </div>

                    <p className="max-w-[66ch] text-lg font-medium leading-[1.7] text-ink md:text-xl lg:text-[1.4rem]">
                      {project.fullDescription || project.description}
                    </p>
                  </div>

                  <div className="mt-12 flex items-center gap-4 border-t border-line pt-6 font-mono text-[10px] font-bold uppercase tracking-[0.16em] text-muted md:text-xs">
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-secondary text-secondaryInk">
                      <BriefcaseBusiness
                        aria-hidden="true"
                        className="h-4 w-4"
                      />
                    </span>
                    <span>
                      Contribution
                      <br />
                      <strong className="font-bold text-ink">
                        {project.role}
                      </strong>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </FadeUp>
        </section>

        <section className="mx-auto w-full max-w-[1320px] px-6 pb-24 md:px-10 md:pb-36">
          <FadeUp className="mb-8 flex items-end justify-between gap-6">
            <div>
              <span className="font-mono text-xs font-bold uppercase tracking-[0.22em] text-primaryInk">
                02 / Project DNA
              </span>
              <h2 className="mt-4 font-display text-4xl font-black uppercase tracking-tighter md:text-6xl">
                The details.
              </h2>
            </div>
            <span className="hidden font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-muted md:inline">
              System / Overview
            </span>
          </FadeUp>

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-12">
            <FadeUp className="lg:col-span-7">
              <div className="flex h-full min-h-72 flex-col justify-between rounded-3xl border-2 border-ink bg-primary p-7 shadow-[8px_8px_0_var(--color-ink)] md:p-10">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-[10px] font-bold uppercase tracking-[0.22em] text-ink/65 md:text-xs">
                    Role / Responsibility
                  </span>
                  <BriefcaseBusiness aria-hidden="true" className="h-6 w-6" />
                </div>
                <p className="mt-12 max-w-2xl font-display text-4xl font-black uppercase leading-[0.92] tracking-tighter md:text-6xl">
                  {project.role}
                </p>
              </div>
            </FadeUp>

            <FadeUp delay={0.06} className="lg:col-span-5">
              <div className="flex h-full min-h-72 flex-col justify-between rounded-3xl border border-line bg-secondary p-7 shadow-[var(--shadow-sm)] md:p-10">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-[10px] font-bold uppercase tracking-[0.22em] text-secondaryInk md:text-xs">
                    Project / Year
                  </span>
                  <CalendarDays
                    aria-hidden="true"
                    className="h-6 w-6 text-secondaryInk"
                  />
                </div>
                <p className="font-display text-7xl font-black tracking-[-0.06em] text-ink md:text-8xl">
                  {project.year}
                </p>
              </div>
            </FadeUp>

            <FadeUp delay={0.1} className="md:col-span-2 lg:col-span-12">
              <div className="rounded-3xl border border-line bg-white p-7 shadow-[var(--shadow-md)] md:p-10">
                <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
                  <div className="flex items-center gap-4">
                    <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary text-ink">
                      <Layers3 aria-hidden="true" className="h-5 w-5" />
                    </span>
                    <div>
                      <p className="font-mono text-[10px] font-bold uppercase tracking-[0.22em] text-muted md:text-xs">
                        Tools & technologies
                      </p>
                      <p className="mt-1 text-sm font-medium text-ink">
                        The stack behind the experience.
                      </p>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2 md:max-w-2xl md:justify-end">
                    {techList.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-full border border-line bg-surface-soft px-4 py-2 font-mono text-[10px] font-bold uppercase tracking-[0.12em] text-ink transition-colors duration-200 hover:border-primaryInk hover:bg-primary/20 md:text-xs"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </FadeUp>
          </div>
        </section>
      </main>
    </article>
  );
};

export default ProjectDetail;
