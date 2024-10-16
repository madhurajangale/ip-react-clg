// AlumniCard.js
import React from 'react';
import '../styles/AlumniCard.css'; 

const AlumniCard = ({ alumni }) => {
  return (
    <div className="alumni-card">
      <img src={alumni.image} alt={alumni.name} className="alumni-image" />
      <h3>{alumni.name}</h3>
      <p>{alumni.company}</p>
      <p>{alumni.experience} years of experience</p>
    </div>
  );
};

export default AlumniCard;
