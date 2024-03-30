import React, { useEffect, useState } from 'react';

function MyComponent () {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCounter(prevCounter => prevCounter + 1);
      console.log("mounted")// Increment counter every second
    }, 1000); // Execute every second (1000 milliseconds)

    // Cleanup function to clear the interval when the component unmounts
    return () => clearInterval(interval);
  }, [counter]); // Empty dependency array so that it runs only once after the initial render

  return (
    <div>
      <p>Counter: {counter}</p>
    </div>
  );
}

export default MyComponent;
