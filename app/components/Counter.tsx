

'use client'
import React, { useState } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h2 className="text-2xl font-bold mb-4">Contador</h2>
      <p className="text-xl mb-4">El valor actual es: {count}</p>
      <button 
        onClick={increment}
        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700"
      >
        Incrementar
      </button>
    </div>
  );
};

export default Counter;