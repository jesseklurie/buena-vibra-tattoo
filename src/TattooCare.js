import React from 'react';
import './Cares.css'; 

const TattooCare = () => {
  return (
    <div className="care-container">
      <h1 className="title">Cuidados para Tatuajes Sin Membrana</h1>
      <ul className="instructions">
        <li>Retira el plástico de 1 a 3 horas.</li>
        <li>Lave con jabón antibacterial cada dos horas por los primeros 4 días.</li>
        <li>No aplicar crema ni pomadas.</li>
        <li>No exponer al sol los primeros 22 días, usar protector solar 40+ después.</li>
        <li>Evite actividad deportiva.</li>
        <li>No rasque ni quite piel, costras, o granos.</li>
      </ul>
      <h2 className="section-title">Fases de Sanación</h2>
      <ol className="instructions">
        <li>
          <strong>Fase 1:</strong> Inflamación y enrojecimiento de la piel (3 primeros días).
        </li>
        <li>
          <strong>Fase 2:</strong> Formación de “plasma” en el área tatuada. Lavar para evitar granos.
        </li>
        <li>
          <strong>Fase 3:</strong> Picazón y mudanza de piel.
        </li>
        <li>
          <strong>Fase 4:</strong> La piel se caerá sola; los colores pueden bajar en tono.
        </li>
      </ol>
    </div>
  );
};

export default TattooCare;
