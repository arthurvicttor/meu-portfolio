import React, { useState } from "react";
import "./Contact.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aqui você pode integrar com EmailJS ou outra solução
    alert("Mensagem enviada! Em breve entrarei em contato.");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="contact">
      <div className="container">
        <h2 className="section-title">Vamos Conversar?</h2>

        <div className="contact-content">
          <div className="contact-info">
            <h3>Entre em Contato</h3>
            <p>
              Estou sempre aberto a novas oportunidades e conversas sobre
              projetos interessantes. Vamos criar algo incrível juntos!
            </p>

            <div className="contact-methods">
              <div className="contact-method">
                <strong>📧 Email</strong>
                <span>arthurvicttorpe@gmail.com</span>
              </div>

              <div className="contact-method">
                <strong>📱 LinkedIn</strong>
                <span>linkedin.com/in/arthurvictorsa</span>
              </div>

              <div className="contact-method">
                <strong>💼 GitHub</strong>
                <span>github.com/arthurvicttor</span>
              </div>
            </div>
          </div>

          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Nome</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="message">Mensagem</label>
              <textarea
                id="message"
                name="message"
                rows="5"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>

            <button type="submit" className="btn btn-primary">
              Enviar Mensagem
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
