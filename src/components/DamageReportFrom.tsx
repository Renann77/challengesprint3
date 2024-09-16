import React, { useState } from 'react';

interface DamageReportFormProps {
  onSubmit: (report: { vehicle: string; damageDescription: string }) => void;
}

const DamageReportForm: React.FC<DamageReportFormProps> = ({ onSubmit }) => {
  const [vehicle, setVehicle] = useState('');
  const [damageDescription, setDamageDescription] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (vehicle && damageDescription) {
      onSubmit({ vehicle, damageDescription });
      setVehicle('');
      setDamageDescription('');
    }
  };

  return (
    <form onSubmit={handleSubmit} style={formStyle}>
      <div style={inputGroup}>
        <label htmlFor="vehicle">Veiculo e modelo: </label>
        <input
          type="text"
          id="vehicle"
          value={vehicle}
          onChange={(e) => setVehicle(e.target.value)}
          style={inputStyle}
          placeholder="Insira o nome do veiculo"
        />
      </div>
      <div style={inputGroup}>
        <label htmlFor="damageDescription">Descrição de danos: </label>
        <textarea
          id="damageDescription"
          value={damageDescription}
          onChange={(e) => setDamageDescription(e.target.value)}
          style={textareaStyle}
          placeholder="Descrição de danos"
        />
      </div>
      <button type="submit" style={buttonStyle}>Reportar</button>
    </form>
  );
};

const formStyle: React.CSSProperties = {
  backgroundColor: '#061f2c',
  padding: '20px',
  borderRadius: '8px',
  color: '#C0A554',
  maxWidth: '100%',
  margin: 'auto',
  boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)',
};

const inputGroup: React.CSSProperties = {
  marginBottom: '15px',
};

const inputStyle: React.CSSProperties = {
  width: '100%',
  padding: '10px',
  borderRadius: '4px',
  border: 'none',
  backgroundColor: '#333',
  color: '#C0A554',
};

const textareaStyle: React.CSSProperties = {
  width: '100%',
  padding: '10px',
  borderRadius: '4px',
  border: 'none',
  backgroundColor: '#333',
  color: '#C0A554',
  height: '80px',
  resize: 'vertical',
};

const buttonStyle: React.CSSProperties = {
  backgroundColor: '#C0A554',
  color: '#061f2c',
  padding: '12px 20px',
  border: 'none',
  borderRadius: '4px',
  cursor: 'pointer',
  width: '100%',
  fontWeight: 'bold',
  fontSize: '16px',
  transition: 'background-color 0.3s',
};

export default DamageReportForm;
