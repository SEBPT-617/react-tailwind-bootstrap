// src/TailwindCard.jsx
import React from 'react';

const TailwindCard = () => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-2xl p-6 bg-white">
      <h2 className="text-xl font-bold mb-2">Tailwind Card</h2>
      <p className="text-gray-700 text-base mb-4">
        This is a simple card component styled with Tailwind CSS.
      </p>
      <button className="bg-pink-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        Learn More
      </button>
    </div>
  );
};

export default TailwindCard;