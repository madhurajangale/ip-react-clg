// AlumniList.js
import React from 'react';
import AlumniCard from './AlumniCard';
import alumni from '../images/alumni.jpg'

const AlumniList = () => {
  const alumniData = [
    {
      id: 1,
      name: 'John Doe',
      company: 'Tech Corp',
      experience: 5,
      image: alumni, // Update with actual image paths
    },
    {
      id: 2,
      name: 'Jane Smith',
      company: 'Innovate Inc',
      experience: 3,
      image: alumni, // Update with actual image paths
    },
    {
      id: 3,
      name: 'Mike Johnson',
      company: 'Design LLC',
      experience: 7,
      image: alumni, // Update with actual image paths
    },
  ];

  return (
    <div className="alumni-list">
      {alumniData.map((alumni) => (
        <AlumniCard key={alumni.id} alumni={alumni} />
      ))}
    </div>
  );
};

export default AlumniList;
