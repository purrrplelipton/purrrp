import { KwikNotesAvif, KwikNotesWebp } from "@assets/images";
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
    desc: "Kwik Notes is a note taking app.",
    image: { KwikNotesWebp, KwikNotesAvif },
    stack: [
      { component: TablerBrandReact, key: "React-svg" },
      { component: TablerBrandNodeJS, key: "NodeJS-svg" },
      { component: TablerBrandMongoDB, key: "MongoDB-svg" },
    ],
  },
];

const Projects = () => {
  return (
    <div className="projects">
      <h1>Some Things I&apos;ve Built</h1>
      <section className="projects-grid">
        {projects.map((proj) => (
          <div className={`project ${proj.key}`} key={proj.key}>
            <h2 className="project-title">
              <a href={proj.link} target="_blank" rel="noopener noreferrer">
                {proj.label}
              </a>
            </h2>
            <p className="project-desc">{proj.desc}</p>
            <picture>
              <source srcSet={proj.image.KwikNotesAvif} type="image/avif" />
              <source srcSet={proj.image.KwikNotesWebp} type="image/webp" />
              <img
                src={proj.image.KwikNotesWebp}
                alt={`the homepage screenshot of my project: ${proj.label}`}
                loading="lazy"
              />
            </picture>
            <div className="project-stack">
              {proj.stack.map((stack) => {
                const Component = stack.component;
                return <Component key={stack.key} />;
              })}
            </div>
          </div>
        ))}
      </section>
    </div>
  );
};

export default Projects;
