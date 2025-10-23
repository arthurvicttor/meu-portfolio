import "./Hero.css";
import minhaFoto from "../../assets/images/minha-foto.jpeg";

const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="container">
        <div className="hero-content">
          <h1>
            Olá, eu sou <span className="highlight">Arthur Victor</span>
          </h1>
          <h2>Desenvolvedor Full-Stack</h2>
          <p>Transformando ideias em soluções inovadoras</p>

          <div className="hero-buttons">
            <a href="#projects" className="btn btn-primary">
              Ver Projetos
            </a>
            <a href="#contact" className="btn btn-secondary">
              Entrar em Contato
            </a>
          </div>

          <div className="social-links">
            <a
              href="https://github.com/arthurvicttor"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
            <a
              href="https://linkedin.com/in/arthurvictorsa"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
            <a href="meu-cv.pdf" download>
              Baixar CV
            </a>
          </div>
        </div>
        <div className="hero-imagem">
          <img src={minhaFoto} alt="Imagem de Arthur Victor" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
