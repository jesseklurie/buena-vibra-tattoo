import React from 'react';
import './Cares.css'; // Assume you handle styling here

const PiercingCare = () => {
  return (
    <div className="care-container">
      <h1 className="title">Cuidados para Piercings</h1>
      <ul className="instructions">
        <li>Limpia la perforación cada 3 horas los primeros 4 días y séquelo con toalla desechable.</li>
        <li>Después de los primeros 4 días, lávelo 3 veces al día y séquelo con toalla desechable.</li>
        <li>Aplicar Neimled después de lavar.</li>
        <li>
          En caso de que la perforación sea en la oreja, mantenga el cabello limpio y seco.
        </li>
        <li>Aplicar frío te ayudará a calmar la inflamación y el dolor.</li>
      </ul>
      <h2 className="section-title">Piercings Orales</h2>
      <ul className="instructions">
        <li>Limpia las perforaciones orales con enjuague bucal sin alcohol.</li>
        <li>Evita las comidas calientes y picantes por las primeras 2 semanas.</li>
        <li>Beba agua fría para ayudar con la inflamación.</li>
      </ul>
      <h2 className="section-title">Lo que “NO” debes hacer</h2>
      <ul className="instructions">
        <li>No tocar ni mover la perforación a menos que estés limpiándola.</li>
        <li>No retire la joyería durante el primer mes.</li>
        <li>Evite todo tipo de suciedad, contaminación y fluidos corporales.</li>
        <li>No utilice alcohol, yodo, agua oxigenada, etc.</li>
        <li>No ingresar a piscinas, saunas, ríos, o mares.</li>
      </ul>
      <h2 className="section-title">Reacciones Normales</h2>
      <ul className="instructions">
        <li>Inflamación en la zona los primeros 3 días.</li>
        <li>Dolor en la zona los primeros 4 días.</li>
        <li>Una secreción blanquecina alrededor de la perforación.</li>
      </ul>
    </div>
  );
};

export default PiercingCare;