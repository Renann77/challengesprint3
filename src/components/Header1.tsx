import React from 'react';
import "../styledComponents/Header1.css"

const Header1: React.FC = () => {
  return (
    <header>
        <img className='logoimg' src="src/img/logo.jpg" alt="" />
        
        <h1>Lri Companny</h1>
        <nav>
            <ul>
                <li><a href="">Sobre nós</a></li>
                <li><a href="">Pagina Principal</a></li>
                <li><a href="">chatbot</a></li>
            </ul>
        </nav>
    </header>
  );
};



export default Header1;
