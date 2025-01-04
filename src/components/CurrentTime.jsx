import React, { useState, useEffect } from 'react';

let CurrentTime = () => {
  const [time, setTime] = useState(new Date());

  // Update the time every second
  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);

    // Cleanup interval on component unmount
    return () => clearInterval(interval);
  }, []);

  return (
    <p className="lead" style={{ color: 'black', fontWeight: '600' }}>
    Current Date & Time: {time.toLocaleDateString()} - {time.toLocaleTimeString()}
  </p>
  );
};

export default CurrentTime;
