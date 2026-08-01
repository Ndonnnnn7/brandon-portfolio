import { useState } from "react";
import { motion as Motion } from "framer-motion";
import {
  SiCanva,
  SiFigma,
  SiFramer,
  SiGit,
  SiHtml5,
  SiJavascript,
  SiNextdotjs,
  SiReact,
  SiTailwindcss,
  SiTypescript,
  SiVite,
} from "react-icons/si";

const categories = [
  {
    id: "languages",
    index: "001",
    title: "Languages",
    description: "The foundations I use to structure interfaces, express logic, and build reliable experiences.",
  },
  {
    id: "frameworks",
    index: "002",
    title: "Frameworks",
    description: "The systems that help me move from an interface concept to a responsive, production-ready product.",
  },
  {
    id: "tools",
    index: "003",
    title: "Tools",
    description: "The creative and development workflow behind every prototype, iteration, and shipped release.",
  },
];

const skillTools = [
  { name: "JavaScript", category: "languages", icon: SiJavascript },
  { name: "TypeScript", category: "languages", icon: SiTypescript },
  { name: "HTML5", category: "languages", icon: SiHtml5 },
  { name: "React", category: "frameworks", icon: SiReact },
  { name: "Next.js", category: "frameworks", icon: SiNextdotjs },
  { name: "Tailwind CSS", category: "frameworks", icon: SiTailwindcss },
  { name: "Framer Motion", category: "frameworks", icon: SiFramer },
  { name: "Figma", category: "tools", icon: SiFigma },
  { name: "Git", category: "tools", icon: SiGit },
  { name: "Vite", category: "tools", icon: SiVite },
  { name: "Canva", category: "tools", icon: SiCanva },
];

const FadeUp = ({ children, delay = 0, className = "" }) => (
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

const Skills = () => {
  const [hoveredCategory, setHoveredCategory] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const activeCategory = hoveredCategory ?? selectedCategory;
  const activeDetails = categories.find((category) => category.id === activeCategory);

  const handleCategoryClick = (categoryId) => {
    setSelectedCategory((current) => (current === categoryId ? null : categoryId));
  };

  return (
    <section className="theme-section relative w-full overflow-hidden bg-canvas py-24 text-ink selection:bg-primary selection:text-ink md:py-36">
      <div className="pointer-events-none absolute inset-0 opacity-70">
        <div className="absolute -left-28 top-20 h-80 w-80 rounded-full bg-secondary/35 blur-[110px]" />
        <div className="absolute -right-20 bottom-16 h-80 w-80 rounded-full bg-primary/25 blur-[110px]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(11,18,20,0.025)_1px,transparent_1px),linear-gradient(to_bottom,rgba(11,18,20,0.025)_1px,transparent_1px)] bg-[size:4rem_4rem]" />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-[1800px] px-5 md:px-12">
        <FadeUp>
          <div className="mb-10 flex items-center gap-4 md:mb-14">
            <span className="h-px flex-1 bg-gradient-to-r from-primary to-transparent" />
          </div>

          <div className="grid items-end gap-8 border-b border-line pb-10 lg:grid-cols-12 md:pb-14">
            <div className="lg:col-span-9">
              <h2 className="max-w-[10ch] text-[clamp(3.3rem,8vw,8.5rem)] font-black uppercase leading-[0.82] tracking-[-0.07em]">
                The tools
                <br />
                I reach <span className="relative inline-block px-2 md:px-4">
                  <span className="absolute inset-x-0 bottom-[0.03em] top-[0.08em] -z-10 -rotate-1 bg-primary" />
                  for.
                </span>
              </h2>
            </div>
            <div className="lg:col-span-3 lg:pb-2">
              <p className="border-l-2 border-primary pl-5 text-base leading-relaxed text-muted md:text-lg">
                A focused toolkit spanning interface design, front-end engineering, and the workflow that connects both.
              </p>
              <div className="mt-6 flex gap-2">
              </div>
            </div>
          </div>
        </FadeUp>

        <div className="mt-10 grid gap-8 xl:grid-cols-[minmax(20rem,0.8fr)_minmax(0,1.55fr)] xl:gap-12 md:mt-14">
          <FadeUp className="min-w-0">
            <div className="overflow-hidden rounded-3xl border border-line bg-white shadow-[0_14px_36px_rgba(11,18,20,0.06)]">
              <div className="border-b border-line bg-[#F8FCFB] p-5 md:p-7">
                <span className="font-mono text-[10px] font-bold uppercase tracking-[0.22em] text-[#087F90]">Filter by discipline</span>
                <p className="mt-2 text-sm leading-relaxed text-muted">Hover or focus a description. Tap to keep a category selected.</p>
              </div>

              <div onMouseLeave={() => setHoveredCategory(null)}>
                {categories.map((category, index) => {
                  const isActive = activeCategory === category.id;
                  const count = skillTools.filter((tool) => tool.category === category.id).length;

                  return (
                    <button
                      key={category.id}
                      type="button"
                      aria-controls="skills-tool-grid"
                      aria-pressed={selectedCategory === category.id}
                      onMouseEnter={() => setHoveredCategory(category.id)}
                      onFocus={() => setHoveredCategory(category.id)}
                      onBlur={() => setHoveredCategory(null)}
                      onClick={() => handleCategoryClick(category.id)}
                      className={`group grid w-full grid-cols-[auto_1fr_auto] gap-4 p-5 text-left transition-[background-color,color] duration-200 md:p-7 ${
                        index < categories.length - 1 ? "border-b border-line" : ""
                      } ${isActive ? "bg-primary/25" : "bg-white hover:bg-[#F8FCFB]"}`}
                    >
                      <span className={`pt-1 font-mono text-[10px] font-bold tracking-[0.16em] ${isActive ? "text-[#087F90]" : "text-muted"}`}>
                        {category.index}
                      </span>
                      <span className="min-w-0">
                        <span className={`block text-2xl font-black uppercase tracking-[-0.04em] transition-colors duration-200 md:text-3xl ${isActive ? "text-[#087F90]" : "text-ink"}`}>
                          {category.title}
                        </span>
                        <span className="mt-3 block text-sm leading-relaxed text-muted md:text-base">{category.description}</span>
                      </span>
                      <span className={`grid h-9 min-w-9 place-items-center rounded-full border px-2 font-mono text-[10px] font-bold transition-colors duration-200 ${
                        isActive ? "border-[#087F90] bg-primary text-ink" : "border-line bg-[#F8FCFB] text-muted"
                      }`}>
                        {String(count).padStart(2, "0")}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>
          </FadeUp>

          <FadeUp delay={0.06} className="min-w-0">
            <div id="skills-tool-grid" className="grid gap-px overflow-hidden rounded-3xl border border-line bg-line sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4" aria-label="Skill tools">
              {skillTools.map((tool, index) => {
                const Icon = tool.icon;
                const isRelated = !activeCategory || tool.category === activeCategory;
                const isFocused = activeCategory && tool.category === activeCategory;

                return (
                  <article
                    key={tool.name}
                    className={`group relative flex min-h-[10rem] flex-col justify-between bg-white p-5 transition-[filter,opacity,background-color,box-shadow] duration-300 sm:min-h-[11rem] md:p-6 ${
                      isRelated ? "blur-0 opacity-100" : "blur-[3px] opacity-25 saturate-0"
                    } ${isFocused ? "bg-primary/20 shadow-[inset_0_0_0_1px_#8FE8F6]" : ""}`}
                  >
                    <div className="flex items-start justify-between gap-4">
                      <span className={`grid h-14 w-14 place-items-center rounded-2xl border transition-colors duration-200 ${
                        isFocused ? "border-[#087F90] bg-primary" : "border-line bg-[#F8FCFB] group-hover:border-primary group-hover:bg-primary/25"
                      }`}>
                        <Icon className="h-7 w-7" aria-hidden="true" />
                      </span>
                      <span className="font-mono text-[10px] font-bold tracking-[0.14em] text-muted">{String(index + 1).padStart(2, "0")}</span>
                    </div>
                    <div className="mt-8">
                      <p className="text-lg font-black uppercase tracking-[-0.03em] md:text-xl">{tool.name}</p>
                      <p className="mt-1 font-mono text-[10px] font-bold uppercase tracking-[0.16em] text-[#087F90]">{tool.category}</p>
                    </div>
                  </article>
                );
              })}
            </div>

            <div className="mt-5 grid overflow-hidden rounded-3xl border border-line bg-white sm:grid-cols-[auto_1fr]">
              <div className="flex min-h-28 items-center bg-primary px-6 py-5 md:px-8">
                <span className="text-5xl font-black tracking-[-0.07em] text-ink md:text-6xl">
                  {activeDetails ? activeDetails.index : "ALL"}
                </span>
              </div>
              <div className="p-5 md:p-7">
                <span className="font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-[#087F90]">
                  {activeDetails ? `${activeDetails.title} in focus` : "Complete toolkit"}
                </span>
                <p className="mt-2 max-w-2xl leading-relaxed text-muted">
                  {activeDetails
                    ? activeDetails.description
                    : "Move across the category descriptions to reveal how each tool fits into my design and development process."}
                </p>
              </div>
            </div>
          </FadeUp>
        </div>
      </div>
    </section>
  );
};

export default Skills;
