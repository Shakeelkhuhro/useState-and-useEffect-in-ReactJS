import React, { useState, useEffect } from 'react';

function RandomNumber() {
  const [number, setNumber] = useState(null);

  useEffect(() => {
    const newNumber = Math.floor(Math.random() * 100);
    setNumber(newNumber);
  }, []);

  return (
    <div>
      <p>Your random number is: {number}</p>
      <p>on refreshing it will generate different randome numbers</p>
    </div>
  );
}

export default RandomNumber;
