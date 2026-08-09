import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion as Motion, useReducedMotion } from "framer-motion";
import { ArrowRight, ArrowUpRight, Menu, Moon, Sun, X } from "lucide-react";
import { useTheme } from "../theme/useTheme";

const NAV_LINKS = [
  { id: 1, link: "home", label: "Home", index: "01" },
  { id: 2, link: "about", label: "About", index: "02" },
  { id: 3, link: "skills", label: "Skills", index: "03" },
  { id: 4, link: "projects", label: "Projects", index: "04" },
  { id: 5, link: "achievements", label: "Honors", index: "05" },
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const menuButtonRef = useRef(null);
  const mobileMenuRef = useRef(null);
  const programmaticScrollRef = useRef(false);
  const scrollUnlockTimerRef = useRef(null);
  const shouldReduceMotion = useReducedMotion();
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    let animationFrame = null;

    const handleScroll = () => {
      if (animationFrame !== null) return;

      animationFrame = window.requestAnimationFrame(() => {
        setScrolled(window.scrollY > 50);
        animationFrame = null;
      });
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (animationFrame !== null) window.cancelAnimationFrame(animationFrame);
    };
  }, []);

  useEffect(() => {
    const sections = [...NAV_LINKS.map(({ link }) => link), "contact"]
      .map((id) => document.getElementById(id))
      .filter(Boolean);

    if (!sections.length) return undefined;

    let animationFrame = null;

    const updateActiveSection = () => {
      animationFrame = null;
      if (programmaticScrollRef.current) return;

      const activationLine = Math.min(160, window.innerHeight * 0.22);
      let nextSection = sections[0].id;

      sections.forEach((section) => {
        if (section.getBoundingClientRect().top <= activationLine) {
          nextSection = section.id;
        }
      });

      const reachedPageEnd = window.scrollY + window.innerHeight >= document.documentElement.scrollHeight - 2;
      if (reachedPageEnd) nextSection = "contact";

      setActiveSection((current) => (current === nextSection ? current : nextSection));
    };

    const requestActiveSectionUpdate = () => {
      if (animationFrame !== null) return;
      animationFrame = window.requestAnimationFrame(updateActiveSection);
    };

    requestActiveSectionUpdate();
    window.addEventListener("scroll", requestActiveSectionUpdate, { passive: true });
    window.addEventListener("resize", requestActiveSectionUpdate);

    return () => {
      window.removeEventListener("scroll", requestActiveSectionUpdate);
      window.removeEventListener("resize", requestActiveSectionUpdate);
      if (animationFrame !== null) window.cancelAnimationFrame(animationFrame);
      if (scrollUnlockTimerRef.current !== null) window.clearTimeout(scrollUnlockTimerRef.current);
    };
  }, []);

  useEffect(() => {
    const desktopQuery = window.matchMedia("(min-width: 1024px)");
    const closeMenuOnDesktop = (event) => {
      if (event.matches) setMenuOpen(false);
    };

    desktopQuery.addEventListener("change", closeMenuOnDesktop);
    return () => desktopQuery.removeEventListener("change", closeMenuOnDesktop);
  }, []);

  useEffect(() => {
    if (!menuOpen) return undefined;

    const menu = mobileMenuRef.current;
    const menuButton = menuButtonRef.current;
    const focusableElements = menu?.querySelectorAll('a[href], button:not([disabled])');
    const firstElement = focusableElements?.[0];
    const lastElement = focusableElements?.[focusableElements.length - 1];

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    menu?.scrollTo({ top: 0 });

    const focusTimer = window.setTimeout(() => {
      menu?.scrollTo({ top: 0 });
      firstElement?.focus({ preventScroll: true });
    }, 460);

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setMenuOpen(false);
        return;
      }

      if (event.key !== "Tab" || !firstElement || !lastElement) return;

      if (event.shiftKey && document.activeElement === firstElement) {
        event.preventDefault();
        lastElement.focus();
      } else if (!event.shiftKey && document.activeElement === lastElement) {
        event.preventDefault();
        firstElement.focus();
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.clearTimeout(focusTimer);
      document.removeEventListener("keydown", handleKeyDown);
      menuButton?.focus();
    };
  }, [menuOpen]);

  const handleNavClick = (event, link) => {
    event.preventDefault();
    setMenuOpen(false);
    setActiveSection(link);
    programmaticScrollRef.current = true;

    if (scrollUnlockTimerRef.current !== null) {
      window.clearTimeout(scrollUnlockTimerRef.current);
    }

    const section = document.getElementById(link);
    if (section) {
      window.requestAnimationFrame(() => {
        window.scrollTo({
          top: section.getBoundingClientRect().top + window.scrollY - 88,
          behavior: shouldReduceMotion ? "auto" : "smooth",
        });
      });

      scrollUnlockTimerRef.current = window.setTimeout(() => {
        programmaticScrollRef.current = false;
        scrollUnlockTimerRef.current = null;
      }, shouldReduceMotion ? 0 : 1000);
    } else {
      programmaticScrollRef.current = false;
    }
  };

  return (
    <>
      <nav
        aria-label="Primary navigation"
        style={{ zIndex: 1000 }}
        className={`fixed left-0 top-0 w-full border-b transition-[background-color,border-color,padding,box-shadow] duration-300 ${
          menuOpen
            ? "border-line bg-canvas py-4 shadow-none"
            : scrolled
            ? "border-line bg-surface/95 py-4 shadow-[var(--shadow-sm)]"
            : "border-transparent bg-surface/90 py-6"
        }`}
      >
        <div className="mx-auto flex w-full max-w-[1800px] items-center justify-between px-6 md:px-12">
          <a
            href="#home"
            onClick={(event) => handleNavClick(event, "home")}
            className="flex items-center gap-4"
            aria-label="Brandon portfolio home"
          >
            <span
              className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-ink text-xl font-black leading-none text-canvas transition-colors duration-200"
            >
              B
            </span>
            <span className={`${menuOpen ? "hidden" : "hidden sm:flex"} flex-col`}>
              <span className="text-lg font-black uppercase leading-none tracking-tighter text-ink">Brandon</span>
              <span className="mt-1 font-mono text-[8px] font-bold uppercase tracking-[0.2em] text-primaryInk">Profile</span>
            </span>
          </a>

          <ul className="hidden items-center gap-2 lg:flex">
            {NAV_LINKS.map(({ id, link, label, index }) => {
              const isActive = activeSection === link;

              return (
                <li key={id}>
                  <a
                    href={`#${link}`}
                    onClick={(event) => handleNavClick(event, link)}
                    aria-current={isActive ? "page" : undefined}
                    className={`relative isolate flex items-center gap-3 rounded-full border-2 px-4 py-2 font-mono text-[10px] font-bold uppercase tracking-widest transition-colors duration-200 ${
                      isActive
                        ? "border-transparent text-accentInk"
                        : "border-transparent bg-transparent text-muted hover:border-line hover:bg-surface/70 hover:text-ink"
                    }`}
                  >
                    {isActive && (
                      <Motion.span
                        layoutId="navbar-active-pill"
                        className="absolute inset-0 -z-10 rounded-full border-2 border-primary bg-primary"
                        transition={
                          shouldReduceMotion
                            ? { duration: 0 }
                            : { type: "spring", stiffness: 360, damping: 32 }
                        }
                        aria-hidden="true"
                      />
                    )}
                    <span className={`relative z-10 ${isActive ? "text-accentInk/55" : "text-muted/60"}`}>{index}</span>
                    <span className="relative z-10">{label}</span>
                  </a>
                </li>
              );
            })}
          </ul>

          <div className="flex items-center gap-4">
            <button
              type="button"
              onClick={toggleTheme}
              className="grid h-11 w-11 place-items-center rounded-full border border-line bg-surface/90 text-ink shadow-[var(--shadow-sm)] transition-colors duration-200 hover:border-primaryInk hover:bg-primary/20 focus-visible:outline-primaryInk"
              aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
              aria-pressed={theme === "dark"}
              title={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
            >
              {theme === "dark" ? (
                <Sun className="h-4.5 w-4.5" aria-hidden="true" />
              ) : (
                <Moon className="h-4.5 w-4.5" aria-hidden="true" />
              )}
            </button>

            <a
              href="#contact"
              onClick={(event) => handleNavClick(event, "contact")}
              aria-current={activeSection === "contact" ? "page" : undefined}
              className={`hidden h-9 items-center gap-3 rounded-full border-2 px-6 font-mono text-[10px] font-bold uppercase tracking-widest transition-colors duration-200 lg:flex ${
                activeSection === "contact"
                  ? "border-primary bg-primary text-accentInk"
                  : "border-ink bg-surface/35 text-ink hover:bg-primary hover:text-accentInk"
              }`}
            >
              Contact me
              <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
            </a>

            <button
              ref={menuButtonRef}
              type="button"
              onClick={() => setMenuOpen((current) => !current)}
              className={`relative z-[70] grid h-11 w-11 place-items-center rounded-full border-2 transition-colors duration-200 lg:hidden ${
                menuOpen
                  ? "border-ink bg-primary text-accentInk focus-visible:outline-primaryInk focus-visible:shadow-[0_0_0_4px_rgba(143,232,246,0.5)]"
                  : "border-ink/20 bg-surface text-ink hover:border-ink hover:bg-primary hover:text-accentInk"
              }`}
              aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
              aria-expanded={menuOpen}
              aria-controls="mobile-menu"
            >
              {menuOpen ? <X className="h-5 w-5" aria-hidden="true" /> : <Menu className="h-5 w-5" aria-hidden="true" />}
            </button>
          </div>
        </div>
      </nav>

      <AnimatePresence>
        {menuOpen && (
          <Motion.div
            ref={mobileMenuRef}
            id="mobile-menu"
            role="dialog"
            aria-modal="true"
            aria-label="Mobile navigation"
            initial={{ y: "-100%" }}
            animate={{ y: 0 }}
            exit={{ y: "-100%" }}
            transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-[55] flex min-h-[100dvh] flex-col justify-between overflow-y-auto overscroll-contain border-b-8 border-primary bg-canvas px-6 pb-12 pt-32 text-ink md:px-12 lg:hidden"
          >
            <span aria-hidden="true" className="pointer-events-none absolute left-4 top-1/2 z-0 h-px w-4 bg-ink/30" />
            <span aria-hidden="true" className="pointer-events-none absolute right-4 top-1/2 z-0 h-px w-4 bg-ink/30" />

            <ul className="relative z-10 mt-8 flex shrink-0 flex-col gap-2">
              {NAV_LINKS.map(({ id, link, label, index }, itemIndex) => {
                const isActive = activeSection === link;

                return (
                  <Motion.li
                    key={id}
                    initial={{ opacity: 0, x: -24 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.08 + itemIndex * 0.05, duration: 0.3 }}
                  >
                    <a
                      href={`#${link}`}
                      onClick={(event) => handleNavClick(event, link)}
                      aria-current={isActive ? "page" : undefined}
                      className="group flex min-h-20 items-end gap-5 border-b border-line py-4 transition-colors duration-200 focus-visible:outline-primaryInk focus-visible:shadow-[0_0_0_4px_rgba(143,232,246,0.4)] md:min-h-24 md:gap-6 md:py-5"
                    >
                      <span className="mb-1 font-mono text-xs font-bold text-primaryInk md:mb-2 md:text-sm">{index}</span>
                      <span
                        className={`text-[clamp(2.625rem,12vw,4.75rem)] font-black uppercase leading-none tracking-tighter transition-colors duration-200 group-hover:text-ink ${
                          isActive ? "text-ink" : "text-muted"
                        }`}
                      >
                        {label}
                      </span>
                    </a>
                  </Motion.li>
                );
              })}
            </ul>

            <Motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.3 }}
              className="relative z-10 mt-12 flex shrink-0 flex-col gap-8"
            >
              <a
                href="#contact"
                onClick={(event) => handleNavClick(event, "contact")}
                aria-label="Contact me"
                className="flex min-h-[70px] w-full items-center justify-center gap-1 rounded-full bg-primary px-5 text-center text-xl font-black uppercase tracking-tighter text-accentInk transition-colors duration-200 hover:bg-secondary focus-visible:outline-primaryInk focus-visible:shadow-[0_0_0_4px_rgba(143,232,246,0.5)]"
              >
                Contactme
                <ArrowRight className="h-5 w-5" aria-hidden="true" />
              </a>

              <div className="flex items-center justify-between gap-4 font-mono text-[9px] font-bold uppercase tracking-[0.16em] text-muted sm:text-[10px]">
                <span>Status: online</span>
                <span>Lat: -7.98 // Lng: 112.62</span>
              </div>
            </Motion.div>
          </Motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
