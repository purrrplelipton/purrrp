import {
  KwikNotesAvif,
  KwikNotesWebp,
  StopwatchTimerAvif,
  StopwatchTimerWebp,
} from "@assets/images";
import {
  TablerBrandMongoDB,
  TablerBrandNodeJS,
  TablerBrandReact,
} from "@assets/vectors";
import "./projects.css";

const projects = [
  {
    key: "kwik-notes",
    label: "Kwik Notes",
    link: "https://kwik-notes.onrender.com",
    desc: "Kwik Notes is a relatively simple note taking app.",
    image: { webpFormat: KwikNotesWebp, avifFormat: KwikNotesAvif },
    stack: [
      { component: TablerBrandReact, key: "React-svg" },
      { component: TablerBrandNodeJS, key: "NodeJS-svg" },
      { component: TablerBrandMongoDB, key: "MongoDB-svg" },
    ],
  },
  {
    key: "stopwatch-timer",
    label: "Stopwatch/Timer",
    link: "https://stopwatch-timer.onrender.com",
    desc: "A simple Stopwatch/Timer web application",
    image: { webpFormat: StopwatchTimerWebp, avifFormat: StopwatchTimerAvif },
    stack: [{ component: TablerBrandReact, key: "React-svg" }],
  },
];

const Projects = () => {
  return (
    <div className="projects">
      <h1>Some Things I&apos;ve Built</h1>
      <section className="projects-grid">
        {projects.map(
          ({
            key,
            label,
            link,
            desc,
            image: { webpFormat, avifFormat },
            stack,
          }) => (
            <div className={`project ${key}`} key={key}>
              <h2 className="project-title">
                <a href={link} target="_blank" rel="noopener noreferrer">
                  {label}
                </a>
              </h2>
              <p className="project-desc">{desc}</p>
              <picture>
                <source srcSet={avifFormat} type="image/avif" />
                <source srcSet={webpFormat} type="image/webp" />
                <img
                  src={avifFormat}
                  alt={`the homepage screenshot of my project: ${label}`}
                  loading="lazy"
                />
              </picture>
              <div className="project-stack">
                {stack.map((stack) => {
                  const Component = stack.component;
                  return <Component key={stack.key} />;
                })}
              </div>
            </div>
          )
        )}
      </section>
    </div>
  );
};

export default Projects;
