import React from 'react';

const Header: React.FC = () => {
  return ( 
    <header style={headerStyle}>
      <h1 style={{ margin: 0 }}>Relatorio de danos no veiculo</h1>
    </header>
  );
};

const headerStyle: React.CSSProperties = {
  backgroundColor: '#061f2c',
  color: '#C0A554',
  padding: '10px 20px',
  textAlign: 'center',
};

export default Header;
