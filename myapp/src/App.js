import React, { useState } from 'react';
import './App.css'; // Import your CSS file
import { CiHeart } from "react-icons/ci";
import DataValue from './DataValue';

function App () {
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked(!clicked);
  };

  return (
    <div>
      <h1>hello from React</h1>
      {/* <div className='heartdiv'>
        <CiHeart className={`heart ${clicked ? 'redd' : ''}`} onClick={handleClick} />
      </div> */}
      <DataValue />
    </div>
  );
}

export default App;
