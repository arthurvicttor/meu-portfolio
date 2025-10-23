import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <p>&copy; 2025 Arthur Victor. Todos os direitos reservados.</p>
        </div>
        <div className="footer-links">
          <a href="https://github.com/seuuser">GitHub</a>
          <a href="https://linkedin.com/in/seuuser">LinkedIn</a>
          <a href="#contact">Contato</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
