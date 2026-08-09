import React, { useCallback, useEffect, useRef, useState } from "react";
import {
  AnimatePresence,
  motion as Motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from "framer-motion";
import {
  ArrowUpRight,
  Award,
  Check,
  ChevronLeft,
  ChevronRight,
  ExternalLink,
  GraduationCap,
  MapPin,
  Medal,
  Trophy,
} from "lucide-react";

const competitions = [
  {
    id: 1,
    title: "Awardee Bakti Champions Scholarship 2025",
    location: "Bank Central Asia (BCA)",
    image: "/img/Bca.jpeg",
    badge: "Scholarship",
  },
  {
    id: 2,
    title: "1st Place I/O Fest Business Plan",
    location: "Tarumanagara University",
    image: "/img/Untar.jpeg",
    badge: "Winner",
  },
  {
    id: 3,
    title: "1st Place Bizznovation Business Plan",
    location: "Pradita University",
    image: "/img/Bizzno.jpg",
    badge: "Winner",
  },
  {
    id: 4,
    title: "2nd Place Business Plan Recursion",
    location: "University of Hasanuddin",
    image: "/img/Recursion.jpg",
    badge: "Winner",
  },
  {
    id: 5,
    title: "2nd Place Business Plan ITCC",
    location: "University of Udayana",
    image: "/img/Udayana.jpg",
    badge: "Winner",
  },
  {
    id: 6,
    title: "1st Place Business Plan TechX",
    location: "President University",
    image: "/img/President.jpg",
    badge: "Winner",
  },
  {
    id: 7,
    title: "1st Place Business Plan IT Convert",
    location: "University of Jember",
    image: "/img/ITC.jpg",
    badge: "Winner",
  },
  {
    id: 8,
    title: "1st Place Business Plan SEMET",
    location: "University of Gadjah Mada",
    image: "/img/UGM.jpg",
    badge: "Winner",
  },
  {
    id: 9,
    title: "2nd Place Business Idea Proposal",
    location: "UPN Veteran",
    image: "/img/Ilpol.jpg",
    badge: "Winner",
  },
];

const certifications = [
  {
    name: "Belajar Dasar Pemrograman Web",
    issuer: "Dicoding Indonesia",
    issued: "April 2026",
    id: "JMZV0DL8RXN9",
    image: "/img/Certif1.png",
    href: "https://www.dicoding.com/certificates/JMZV0DL8RXN9",
  },
  {
    name: "Belajar Dasar AI",
    issuer: "Dicoding Indonesia",
    issued: "October 2025",
    id: "53XEKYQ4KXRN",
    image: "/img/Certif2.png",
    href: "https://www.dicoding.com/certificates/53XEKYQ4KXRN",
  },
  {
    name: "Introduction to Software Engineering",
    issuer: "RevoU Indonesia",
    issued: "May 2025",
    id: "SEFC210425-01-1-00018",
    image: "/img/Certif3.png",
    href: "/img/Certif3.png",
  },
  {
    name: "Web Design for Beginners: HTML & CSS",
    issuer: "Udemy",
    issued: "April 2025",
    id: "UC-1ff77b45-e8cd-4eb4-bfe7-9a81c25be704",
    image: "/img/Certif4.png",
    href: "/img/Certif4.png",
  },
  {
    name: "Design for Impact: Design Thinking & UI/UX",
    issuer: "MyEduSolve",
    issued: "April 2025",
    id: "Certificate of Participation",
    image: "/img/Certif5.png",
    href: "/img/Certif5.png",
  },
];

const FadeUp = ({ children, delay = 0, className = "" }) => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <Motion.div
      className={className}
      initial={shouldReduceMotion ? false : { opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
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

const Achievements = () => {
  const sectionRef = useRef(null);
  const certificateTrackRef = useRef(null);
  const shouldReduceMotion = useReducedMotion();
  const [activeId, setActiveId] = useState(competitions[0].id);
  const [certificateRange, setCertificateRange] = useState({ start: 0, end: 3 });

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const watermarkY = useTransform(scrollYProgress, [0, 1], ["0%", "18%"]);
  const headY = useTransform(scrollYProgress, [0, 1], ["0px", "-36px"]);

  const activeCompetition =
    competitions.find((competition) => competition.id === activeId) ??
    competitions[0];
  const activeCompetitionIndex = competitions.findIndex(
    (competition) => competition.id === activeCompetition.id,
  );
  const scholarshipCount = competitions.filter(
    (competition) => competition.badge === "Scholarship",
  ).length;

  const updateCertificateRange = useCallback(() => {
    const track = certificateTrackRef.current;
    const card = track?.querySelector("[data-certificate-card]");
    if (!track || !card) return;

    const gap = Number.parseFloat(window.getComputedStyle(track).columnGap) || 16;
    const step = card.getBoundingClientRect().width + gap;
    const start = Math.min(
      certifications.length - 1,
      Math.max(0, Math.round(track.scrollLeft / step)),
    );
    const visibleCount = Math.max(
      1,
      Math.floor((track.clientWidth + gap) / step),
    );

    setCertificateRange({
      start,
      end: Math.min(certifications.length, start + visibleCount),
    });
  }, []);

  useEffect(() => {
    const frame = window.requestAnimationFrame(updateCertificateRange);
    window.addEventListener("resize", updateCertificateRange);

    return () => {
      window.cancelAnimationFrame(frame);
      window.removeEventListener("resize", updateCertificateRange);
    };
  }, [updateCertificateRange]);

  const scrollCertificates = (direction) => {
    const track = certificateTrackRef.current;
    const card = track?.querySelector("[data-certificate-card]");
    if (!track || !card) return;

    const gap = Number.parseFloat(window.getComputedStyle(track).columnGap) || 16;
    track.scrollBy({
      left: direction * (card.getBoundingClientRect().width + gap),
      behavior: shouldReduceMotion ? "auto" : "smooth",
    });
  };

  return (
    <section
      id="achievements"
      ref={sectionRef}
      className="theme-section relative w-full overflow-hidden bg-canvas py-24 font-sans text-ink selection:bg-primary selection:text-ink md:py-40"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-48 top-28 h-96 w-96 rounded-full bg-secondary/25 blur-[120px]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 top-[38%] h-[28rem] w-[28rem] rounded-full bg-primary/15 blur-[130px]"
      />

      <Motion.div
        aria-hidden="true"
        style={{ y: shouldReduceMotion ? 0 : watermarkY }}
        className="pointer-events-none absolute left-0 right-0 top-[8%] z-0 flex select-none justify-center overflow-hidden opacity-[0.025]"
      >
        <span className="whitespace-nowrap text-[clamp(10rem,30vw,30rem)] font-black uppercase leading-none tracking-tighter">
          Honors
        </span>
      </Motion.div>

      <div className="relative z-10 mx-auto w-full max-w-[1800px] px-6 md:px-12">
        <FadeUp>
          <Motion.div
            style={{ y: shouldReduceMotion ? 0 : headY }}
            className="grid items-end gap-10 border-b border-line pb-12 lg:grid-cols-12 lg:gap-14"
          >
            <div className="lg:col-span-7">
              <div className="mb-6 flex items-center gap-4">
                <span className="h-2 w-2 rounded-full bg-primary" />
                <span className="h-px w-12 bg-primary" />
              </div>

              <h2 className="max-w-[9ch] text-[clamp(4rem,9vw,8.5rem)] font-black uppercase leading-[0.82] tracking-[-0.07em] text-ink">
                Honors,
                <br />
                <span className="relative isolate inline-block px-3 text-accentInk md:px-5">
                  <span className="absolute inset-x-0 bottom-[0.04em] top-[0.08em] -z-10 -rotate-1 bg-primary" />
                  earned.
                </span>
              </h2>

              <p className="mt-8 max-w-2xl border-l-2 border-primary pl-5 text-base leading-relaxed text-ink/75 md:text-lg">
                A record of ideas tested under pressure, teams pushed further,
                and the recognition that followed the work.
              </p>
            </div>

            <div className="grid overflow-hidden rounded-3xl border border-line bg-line shadow-[var(--shadow-md)] sm:grid-cols-3 lg:col-span-5 dark:border-primary/25">
              <div className="flex min-h-36 flex-col justify-between bg-primary p-5 text-accentInk md:p-6">
                <Trophy aria-hidden="true" className="h-6 w-6" />
                <div className="mt-8">
                  <p className="text-5xl font-black tracking-[-0.06em]">
                    {String(competitions.length).padStart(2, "0")}
                  </p>
                  <p className="mt-1 font-mono text-[9px] font-bold uppercase tracking-[0.18em] text-accentInk/70">
                    Competition honors
                  </p>
                </div>
              </div>

              <div className="flex min-h-36 flex-col justify-between bg-white p-5 md:p-6">
                <Award aria-hidden="true" className="h-6 w-6 text-primaryInk" />
                <div className="mt-8">
                  <p className="text-5xl font-black tracking-[-0.06em]">
                    {String(certifications.length).padStart(2, "0")}
                  </p>
                  <p className="mt-1 font-mono text-[9px] font-bold uppercase tracking-[0.18em] text-muted">
                    Credentials
                  </p>
                </div>
              </div>

              <div className="flex min-h-36 flex-col justify-between bg-secondary p-5 text-secondaryInk md:p-6">
                <GraduationCap aria-hidden="true" className="h-6 w-6" />
                <div className="mt-8">
                  <p className="text-5xl font-black tracking-[-0.06em]">
                    {String(scholarshipCount).padStart(2, "0")}
                  </p>
                  <p className="mt-1 font-mono text-[9px] font-bold uppercase tracking-[0.18em] text-secondaryInk/70">
                    Scholarship
                  </p>
                </div>
              </div>
            </div>
          </Motion.div>
        </FadeUp>

        <section aria-labelledby="awards-heading" className="mt-20 md:mt-28">
          <FadeUp className="mb-8 grid gap-6 md:grid-cols-12 md:items-end">
            <div className="md:col-span-8">
              <h3
                id="awards-heading"
                className="mt-4 max-w-[12ch] text-[clamp(2.8rem,5.5vw,5.5rem)] font-black uppercase leading-[0.9] tracking-[-0.055em]"
              >
                Achievements
              </h3>
            </div>
            <p className="max-w-md border-l border-primary pl-5 text-sm leading-relaxed text-ink/70 md:col-span-4 md:text-base">
              Select an entry to explore the people, institutions, and moments
              behind each result.
            </p>
          </FadeUp>

          <div className="grid items-start gap-6 xl:grid-cols-[minmax(0,1.2fr)_minmax(25rem,0.8fr)] xl:gap-8">
            <FadeUp className="xl:sticky xl:top-28">
              <div
                id="honor-spotlight"
                aria-live="polite"
                className="overflow-hidden rounded-3xl border border-line bg-white shadow-[var(--shadow-lg)] dark:border-primary/25"
              >
                <div className="flex items-center justify-between border-b border-line bg-surface-soft px-5 py-4 font-mono text-[9px] font-bold uppercase tracking-[0.18em] md:px-6">
                  <span className="inline-flex items-center gap-2 text-primaryInk">
                    <span className="h-2 w-2 rounded-full bg-primary" />
                    Award spotlight
                  </span>
                  <span className="text-muted">
                    {String(activeCompetitionIndex + 1).padStart(2, "0")} / {String(competitions.length).padStart(2, "0")}
                  </span>
                </div>

                <div className="bg-primary p-2 sm:p-3">
                  <AnimatePresence mode="wait" initial={false}>
                    <Motion.figure
                      key={activeCompetition.id}
                      initial={shouldReduceMotion ? false : { opacity: 0, y: 14 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={shouldReduceMotion ? undefined : { opacity: 0, y: -10 }}
                      transition={{
                        duration: shouldReduceMotion ? 0 : 0.32,
                        ease: [0.22, 1, 0.36, 1],
                      }}
                      className="aspect-[4/3] overflow-hidden rounded-2xl border border-accentInk/40 bg-surface-soft sm:aspect-video"
                    >
                      <img
                        src={activeCompetition.image}
                        alt={activeCompetition.title}
                        className="h-full w-full object-cover object-center"
                        loading="lazy"
                        decoding="async"
                      />
                    </Motion.figure>
                  </AnimatePresence>
                </div>

                <div className="grid gap-5 border-t border-line p-5 sm:grid-cols-[auto_1fr_auto] sm:items-center md:p-7">
                  <span className="grid h-14 w-14 place-items-center rounded-2xl border border-accentInk/40 bg-primary text-accentInk">
                    <Medal aria-hidden="true" className="h-6 w-6" />
                  </span>

                  <div>
                    <span className="inline-flex rounded-full border border-line bg-surface-soft px-3 py-1 font-mono text-[9px] font-bold uppercase tracking-[0.18em] text-primaryInk">
                      {activeCompetition.badge}
                    </span>
                    <h4 className="mt-3 text-2xl font-black uppercase leading-tight tracking-[-0.04em] md:text-3xl">
                      {activeCompetition.title}
                    </h4>
                  </div>

                  <div className="flex items-center gap-2 text-sm text-ink/70 sm:max-w-48 sm:justify-end sm:text-right">
                    <MapPin aria-hidden="true" className="h-4 w-4 shrink-0 text-primaryInk" />
                    {activeCompetition.location}
                  </div>
                </div>
              </div>
            </FadeUp>

            <FadeUp delay={0.06}>
              <div className="overflow-hidden rounded-3xl border border-line bg-white shadow-[var(--shadow-md)] dark:border-primary/25">
                <div className="flex items-center justify-between border-b border-line bg-surface-soft px-5 py-5 md:px-6">
                  <div>
                    <p className="font-mono text-[9px] font-bold uppercase tracking-[0.2em] text-primaryInk">
                      Gallery
                    </p>
                    <p className="mt-1 text-sm text-ink/70">
                      Tap a result to bring it into focus.
                    </p>
                  </div>
                  <span className="rounded-full border border-line bg-white px-3 py-1.5 font-mono text-[9px] font-bold uppercase tracking-[0.14em] text-muted">
                    {competitions.length} records
                  </span>
                </div>

                <div>
                  {competitions.map((competition, index) => {
                    const isActive = activeCompetition.id === competition.id;

                    return (
                      <button
                        key={competition.id}
                        type="button"
                        aria-controls="honor-spotlight"
                        aria-pressed={isActive}
                        onClick={() => setActiveId(competition.id)}
                        className={`group grid w-full grid-cols-[auto_1fr_auto] items-center gap-4 border-b border-line p-4 text-left transition-colors duration-200 last:border-b-0 focus-visible:relative focus-visible:z-10 focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-primaryInk md:p-5 ${
                          isActive
                            ? "bg-primary text-accentInk"
                            : "bg-white text-ink hover:bg-surface-soft"
                        }`}
                      >
                        <span
                          className={`font-mono text-[10px] font-bold tracking-[0.16em] ${
                            isActive ? "text-accentInk/60" : "text-muted"
                          }`}
                        >
                          {String(index + 1).padStart(2, "0")}
                        </span>

                        <span className="min-w-0">
                          <span className="block text-base font-black uppercase leading-tight tracking-[-0.025em] md:text-lg">
                            {competition.title}
                          </span>
                          <span
                            className={`mt-1.5 block text-xs leading-relaxed ${
                              isActive ? "text-accentInk/70" : "text-muted"
                            }`}
                          >
                            {competition.location}
                          </span>
                        </span>

                        <span className="flex flex-col items-end gap-3">
                          <span
                            className={`rounded-full border px-2.5 py-1 font-mono text-[8px] font-bold uppercase tracking-[0.16em] ${
                              isActive
                                ? "border-accentInk/35 text-accentInk"
                                : "border-line text-muted"
                            }`}
                          >
                            {competition.badge}
                          </span>
                          <span
                            className={`grid h-8 w-8 place-items-center rounded-full border transition-colors duration-200 ${
                              isActive
                                ? "border-accentInk bg-accentInk text-primary"
                                : "border-line text-muted group-hover:border-primary group-hover:text-primaryInk"
                            }`}
                          >
                            <ArrowUpRight aria-hidden="true" className="h-4 w-4" />
                          </span>
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>
            </FadeUp>
          </div>
        </section>

        <FadeUp className="mt-28 md:mt-40">
          <section
            id="credentials"
            aria-labelledby="credentials-heading"
            className="relative z-10 overflow-hidden rounded-[2rem] border border-line bg-surface-soft px-5 py-10 sm:px-8 md:py-14 lg:px-16 dark:border-primary/20"
          >
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -right-24 -top-20 h-72 w-72 rounded-full bg-primary/20 blur-3xl"
            />

            <div className="relative grid gap-8 border-b border-line pb-10 lg:grid-cols-12 lg:items-end">
              <div className="lg:col-span-8">
                <h3
                  id="credentials-heading"
                  className="mt-4 max-w-[13ch] text-[clamp(2.8rem,5vw,5rem)] font-black uppercase leading-[0.92] tracking-[-0.055em] text-ink"
                >
                  Proof that keeps compounding.
                </h3>
              </div>

              <div className="lg:col-span-4">
                <p className="text-base leading-relaxed text-ink/70">
                  Focused learning across engineering, AI, web development,
                  and product design, applied directly in project work.
                </p>
                <span className="mt-5 inline-flex items-center gap-2 rounded-full border border-line bg-white px-4 py-2 font-mono text-[9px] font-bold uppercase tracking-[0.16em] text-primaryInk">
                  <Award aria-hidden="true" className="h-4 w-4" />
                  {certifications.length} verified credentials
                </span>
              </div>
            </div>

            <div className="relative mt-10 md:mt-14">
              <button
                type="button"
                onClick={() => scrollCertificates(-1)}
                disabled={certificateRange.start === 0}
                className="absolute -left-11 top-1/2 z-20 hidden h-12 w-12 -translate-y-1/2 place-items-center rounded-full border border-line bg-white text-ink shadow-[var(--shadow-sm)] transition-colors duration-200 hover:border-primary hover:bg-primary hover:text-accentInk focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primaryInk disabled:cursor-not-allowed disabled:opacity-35 md:grid lg:-left-14"
                aria-label="Show previous certificates"
              >
                <ChevronLeft className="h-5 w-5" aria-hidden="true" />
              </button>

              <div
                ref={certificateTrackRef}
                onScroll={updateCertificateRange}
                onKeyDown={(event) => {
                  if (event.key === "ArrowLeft" || event.key === "ArrowRight") {
                    event.preventDefault();
                    scrollCertificates(event.key === "ArrowLeft" ? -1 : 1);
                  }
                }}
                className={`flex snap-x snap-mandatory gap-4 overflow-x-auto overflow-y-hidden px-0 pb-5 sm:px-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden ${
                  shouldReduceMotion ? "" : "scroll-smooth"
                }`}
                role="region"
                aria-label="Certificate gallery"
                tabIndex={0}
              >
                {certifications.map((certificate, index) => (
                  <Motion.article
                    key={certificate.id}
                    data-certificate-card
                    className="group flex w-full shrink-0 snap-start flex-col overflow-hidden rounded-3xl border border-line bg-white shadow-[var(--shadow-sm)] transition-[border-color,box-shadow] duration-300 hover:border-primary hover:shadow-[var(--shadow-lg)] sm:w-[calc((100%_-_1rem)/2)] lg:w-[calc((100%_-_2rem)/3)]"
                    initial={shouldReduceMotion ? false : { opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{
                      duration: shouldReduceMotion ? 0 : 0.5,
                      delay: shouldReduceMotion ? 0 : Math.min(index * 0.06, 0.24),
                    }}
                  >
                    <div className="relative aspect-[4/3] overflow-hidden border-b border-line bg-white p-2 sm:p-3">
                      <img
                        src={certificate.image}
                        alt={`${certificate.name} certificate issued by ${certificate.issuer}`}
                        className="h-full w-full rounded-2xl object-contain transition-transform duration-300 group-hover:scale-[1.02]"
                        loading="lazy"
                        decoding="async"
                      />

                      <span className="absolute left-4 top-4 rounded-full border border-line bg-white/95 px-3 py-1.5 font-mono text-[9px] font-bold uppercase tracking-wider text-muted shadow-[var(--shadow-sm)] backdrop-blur-sm">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <span className="absolute right-4 top-4 inline-flex items-center gap-1.5 rounded-full border border-line bg-white/95 px-3 py-1.5 font-mono text-[9px] font-bold uppercase tracking-wider text-secondaryInk shadow-[var(--shadow-sm)] backdrop-blur-sm">
                        <Check className="h-3 w-3" aria-hidden="true" />
                        Verified
                      </span>
                    </div>

                    <div className="flex flex-1 flex-col p-5 md:p-6">
                      <p className="font-mono text-[10px] font-bold uppercase tracking-[0.18em] text-primaryInk">
                        {certificate.issuer}
                      </p>
                      <h4 className="mt-3 min-h-[3.5rem] text-xl font-black leading-tight tracking-tight text-ink md:text-2xl">
                        {certificate.name}
                      </h4>

                      <dl className="mt-5 space-y-2 border-t border-line pt-4 text-sm">
                        <div className="flex items-start justify-between gap-4">
                          <dt className="text-muted">Issued</dt>
                          <dd className="text-right font-bold text-ink">
                            {certificate.issued}
                          </dd>
                        </div>
                        <div className="flex items-start justify-between gap-4">
                          <dt className="text-muted">Credential</dt>
                          <dd className="max-w-[65%] break-all text-right font-mono text-[10px] font-bold text-ink">
                            {certificate.id}
                          </dd>
                        </div>
                      </dl>

                      <a
                        href={certificate.href}
                        target="_blank"
                        rel="noreferrer"
                        className="mt-6 inline-flex min-h-11 w-fit items-center gap-3 rounded-full border border-line bg-surface-soft px-4 py-2 font-mono text-[10px] font-bold uppercase tracking-[0.14em] text-ink transition-colors duration-200 hover:border-primary hover:bg-primary hover:text-accentInk focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primaryInk"
                        aria-label={`View ${certificate.name} credential`}
                      >
                        View credential
                        <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
                      </a>
                    </div>
                  </Motion.article>
                ))}
              </div>

              <button
                type="button"
                onClick={() => scrollCertificates(1)}
                disabled={certificateRange.end >= certifications.length}
                className="absolute -right-11 top-1/2 z-20 hidden h-12 w-12 -translate-y-1/2 place-items-center rounded-full border border-line bg-white text-ink shadow-[var(--shadow-sm)] transition-colors duration-200 hover:border-primary hover:bg-primary hover:text-accentInk focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primaryInk disabled:cursor-not-allowed disabled:opacity-35 md:grid lg:-right-14"
                aria-label="Show next certificates"
              >
                <ChevronRight className="h-5 w-5" aria-hidden="true" />
              </button>
            </div>

            <div className="relative mt-2 flex items-center justify-between gap-4 md:justify-center">
              <button
                type="button"
                onClick={() => scrollCertificates(-1)}
                disabled={certificateRange.start === 0}
                className="grid h-11 w-11 place-items-center rounded-full border border-line bg-white text-ink transition-colors duration-200 hover:border-primary hover:bg-primary hover:text-accentInk focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primaryInk disabled:cursor-not-allowed disabled:opacity-35 md:hidden"
                aria-label="Show previous certificates"
              >
                <ChevronLeft className="h-5 w-5" aria-hidden="true" />
              </button>

              <p
                className="font-mono text-[10px] font-bold uppercase tracking-[0.18em] text-muted"
                aria-live="polite"
              >
                Showing {certificateRange.start + 1}–{certificateRange.end} / {certifications.length}
              </p>

              <button
                type="button"
                onClick={() => scrollCertificates(1)}
                disabled={certificateRange.end >= certifications.length}
                className="grid h-11 w-11 place-items-center rounded-full border border-line bg-white text-ink transition-colors duration-200 hover:border-primary hover:bg-primary hover:text-accentInk focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primaryInk disabled:cursor-not-allowed disabled:opacity-35 md:hidden"
                aria-label="Show next certificates"
              >
                <ChevronRight className="h-5 w-5" aria-hidden="true" />
              </button>
            </div>
          </section>
        </FadeUp>
      </div>
    </section>
  );
};

export default Achievements;
