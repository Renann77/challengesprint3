
import React from 'react';
import '../styledComponents/Footer.css'; 

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h4>Sobre Nós</h4>
          <p>
            Nós fazemos parte de um grupo de estudantes da 
            Faculdade De Informatica e Administração Paulista (FIAP).
            Estamos trabalhando em um projeto para relatorio automatico de danos em veiculos, 
            em parceria com a Porto Seguro.
        </p>

        
            <p>Luis Lima RM:556904</p>
            <p>Renan Dorneles RM:557820</p>
            <p>Igor Dias Barrocal RM:555217</p>

         
          
        </div>

       

        <div className="footer-section">
          <h4>Contato</h4>
          <p>Email: support@lricompanny.com</p>
          <p>Telefone: 55-11-(9)98350403</p>
          <p>Endereço: Avenida Paulista 1106 Bela Vista</p>
        </div>

        <div className="footer-section social-media">
          <h4>Siga-nos</h4>
          <a href="https://facebook.com" target="_blank" rel="noreferrer">
            <i className="fab fa-facebook"></i>
          </a>
          <a href="https://twitter.com" target="_blank" rel="noreferrer">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="https://instagram.com" target="_blank" rel="noreferrer">
            <i className="fab fa-instagram"></i>
          </a>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Lri Company. Todos Direitos Reservados.</p>
      </div>
    </footer>
  );
};

export default Footer;
