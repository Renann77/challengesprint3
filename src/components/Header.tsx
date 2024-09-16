import React from 'react';


const Header: React.FC = () => {
  return (
    <header className="header">
      <div className="logo">Seguradora XYZ</div>
      <nav>
        <ul>
          <li><a href="#">Início</a></li>
          <li><a href="#">Serviços</a></li>
          <li><a href="#">Ajuda</a></li>
          <li><a href="#">Contato</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
