import KwikNotes from "@assets/images/kwik-notes.onrender.png";
import { React } from "@assets/vectors";
import { NodeJS } from "../../assets/vectors";
import "./projects.css";

const projects = [
  {
    key: "kwik-notes",
    label: "Kwik Notes",
    link: "https://kwik-notes.onrender.com",
    desc: "Kwik Notes is a note taking app.",
    image: KwikNotes,
    stack: [<React key="React-svg" />, <NodeJS key="NodeJS-svg" />],
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
            <img
              src={proj.image}
              alt={`the homepage scrrenshot of my project: ${proj.label}`}
            />
            <div className="project-stack">{[...proj.stack]}</div>
          </div>
        ))}
      </section>
    </div>
  );
};

export default Projects;
