
// import React, { useEffect, useState } from 'react'

// const App = () => {
//   const [cat, setCat] = useState("")
//   const [value, setValue] = useState([])
//   const getData = async () => {
//     try {
//       let res = await fetch("https://fakestoreapi.com/products")
//       let data = await res.json()
//       setValue(data)
//       console.log(data);
//     } catch (error) {
//       console.log(error);
//     }
//   }
//   const handleChange = (e) => {
//     setCat(e.target.value)
//   }
//   // console.log(cat);
//   const filterData = value.filter((ele) => {
//     return ele.category === cat
//   })

//   console.log(filterData)


//   useEffect(() => {
//     getData()
//   }, [])
//   return (
//     <div>
//       <select name="" value={cat} id="" onChange={handleChange}>
//         <option value="">select</option>
//         <option value="women's clothing">women's clothing</option>
//         <option value="men's clothing">men's clothing</option>
//         <option value="jewelery">jewelery</option>
//       </select>

//       <hr />
//       <div style={{display:"grid",gridTemplateColumns:"repeat(4,1fr)"}}>


//       {filterData.length>0?filterData.map((items) => {
//         return <div>
//           <img style={{ width: "10%" }} src={items.image} alt="" />
//           <h1>{items.category }</h1>
//           <p>{items.price}</p>
//           <p>{items.title}</p>

//         </div>
//       }) : value.map((items) => {
//         return <div>
//           <img style={{ width: "10%" }} src={items.image} alt="" />
//           <h1>{items.category}</h1>
//           <p>{items.price}</p>
//           <p>{items.title}</p>

//         </div>
//       })
//     }
//     </div>
//     </div>
//   )
// }

// export default App

import React, { useEffect, useState } from 'react';

const App = () => {
  const [cat, setCat] = useState('');
  const [value, setValue] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const getData = async () => {
    try {
      let res = await fetch('https://fakestoreapi.com/products');
      let data = await res.json();
      setValue(data);
      setLoading(false);
    } catch (error) {
      setError(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    if (cat === '') {
      setFilteredData(value);
    } else {
      setFilteredData(value.filter((ele) => ele.category === cat));
    }
    console.log("mounted");
  }, [cat, value]);

  const handleChange = (e) => {
    setCat(e.target.value);
  };

  return (
    <div>
      <select name="" value={cat} id="" onChange={handleChange}>
        <option value="">select</option>
        <option value="women's clothing">women's clothing</option>
        <option value="men's clothing">men's clothing</option>
        <option value="jewelery">jewelery</option>
      </select>

      <hr />

      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>Error: {error.message}</p>
      ) : (
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)' }}>
          {filteredData.map((item) => (
            <div key={item.id}>
              <img style={{ width: '10%' }} src={item.image} alt="" />
              <h1>{item.category}</h1>
              <p>{item.price}</p>
              <p>{item.title}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default App;
