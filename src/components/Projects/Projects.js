import "./Projects.css";

import CodeConnectImage from "../../assets/images/codeconnect.png";
import ListaComprasImage from "../../assets/images/lista-compras.png";
import PokeVersoImage from "../../assets/images/pokeverso.png";
import ToDoListImage from "../../assets/images/to-do-list.png";

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "CodeConnect",
      description:
        "Plataforma de conexão entre desenvolvedores e projetos open source",
      image: CodeConnectImage,
      technologies: ["React", "JavaScript", "CSS", "API REST"],
      github: "https://github.com/arthurvicttor/projeto_codeconnect",
      demo: "https://arthurvicttor.github.io/projeto_codeconnect/",
    },
    {
      id: 2,
      title: "App de lista de compras",
      description:
        "Aplicativo para gerenciar listas de compras com armazenamento local",
      image: ListaComprasImage,
      technologies: ["HTML", "CSS", "JavaScript"],
      github: "https://github.com/arthurvicttor/lista-de-compras",
      demo: "https://arthurvicttor.github.io/lista-de-compras/",
    },
    {
      id: 3,
      title: "Pokeverso",
      description:
        "Aplicativo web que exibe informações de Pokémons usando a PokéAPI",
      image: PokeVersoImage,
      technologies: ["HTML", "CSS", "JavaScript", "API REST"],
      github: "https://github.com/arthurvicttor/projeto-pokeverso",
      demo: "https://arthurvicttor.github.io/projeto-pokeverso/",
    },
    {
      id: 4,
      title: "App de Tarefas",
      description:
        "Aplicativo para gerenciar tarefas diárias com funcionalidades de adicionar, editar e excluir",
      image: ToDoListImage,
      technologies: ["Python"],
      github: "https://github.com/arthurvicttor/to-do-list-app",
      demo: "https://github.com/arthurvicttor/to-do-list-app",
    },
  ];

  return (
    <section id="projects" className="projects">
      <div className="container">
        <h2 className="section-title">Meus Projetos</h2>

        <div className="projects-grid">
          {projects.map((project) => (
            <div key={project.id} className="project-card">
              <div className="project-image">
                <img src={project.image} alt={project.title} />
              </div>

              <div className="project-content">
                <h3>{project.title}</h3>
                <p>{project.description}</p>

                <div className="project-technologies">
                  {project.technologies.map((tech) => (
                    <span key={tech} className="tech-tag">
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="project-links">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Código
                  </a>
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
