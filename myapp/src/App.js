import React, { useEffect, useState } from 'react';
import axios from 'axios';

const App = () => {
  const [value, setValue] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get("https://api.escuelajs.co/api/v1/products");
        setValue(res.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  console.log(value);

  return (
    <div style={{display:"grid",gridTemplateColumns:"repeat(4,1fr"}}>
    
      {value.map((ele) => (
        <div key={ele.id}>
          <img style={{width:"50%"}} src={ele.category.image} alt="" />
          <p>{ele.category.name}</p>
          <h1>{ele.title}</h1>
          <h1>{ele.price}</h1>




        </div>
      ))}
    </div>
  );
};

export default App;
