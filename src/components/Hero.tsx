import React, { useState } from 'react';


const Hero: React.FC = () => {
  const [search, setSearch] = useState('');

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
   
  };

  return (
    <section className="hero">
      <div className="hero-text">
        <h1>Bem-vindo à Central de Ajuda</h1>
        <p>Como podemos ajudar você hoje?</p>
        <input
          type="text"
          value={search}
          onChange={handleSearchChange}
          placeholder="Busque por tópicos de ajuda"
        />
      </div>
    </section>
  );
};

export default Hero;
