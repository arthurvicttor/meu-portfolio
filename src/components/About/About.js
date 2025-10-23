import "./About.css";

const About = () => {
  return (
    <section id="about" className="about">
      <div className="container">
        <h2 className="section-title">Sobre Mim</h2>

        <div className="about-content">
          <div className="about-text">
            <p>
              Sou estudante de Engenharia de Software com foco em
              desenvolvimento web e formação Full Stack. Tenho vivência prática
              com tecnologias de front-end como HTML, CSS, JavaScript, React.js
              e Tailwind CSS, além de já ter desenvolvido projetos utilizando
              linguagens de back-end como Java, C# e Python, integrando com
              bancos de dados SQL.
            </p>

            <p>
              Ao longo da minha jornada de estudos, venho desenvolvendo projetos
              que reforçam minha capacidade de transformar ideias em aplicações
              funcionais, com interfaces modernas, responsivas e boa organização
              de código. Já criei aplicações completas, desde páginas
              institucionais até sistemas com múltiplas funcionalidades.
            </p>

            <div className="about-highlights">
              <div className="highlight-item">
                <h4>🎯 Foco Atual</h4>
                <p>
                  Aprimorando minhas habilidades em React, JavaScript, Java,
                  Python e SQL, com foco em desenvolvimento full-stack e boas
                  práticas de código.
                </p>
              </div>

              <div className="highlight-item">
                <h4>🚀 Objetivo</h4>
                <p>
                  Crescer como desenvolvedor full-stack, dominando tecnologias
                  que conectam o front e o back-end de forma eficiente.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
