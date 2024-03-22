import React, { useState, useEffect } from 'react';

const App = () => {
  const [products, setProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('');

  useEffect(() => {
  
    const fetchData = async () => {
      try {
        const response = await fetch('https://fakestoreapi.com/products');
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  const filteredProducts = selectedCategory
    ? products.filter(product => product.category === selectedCategory)
    : products;

  return (
    <div>
      <h1>Product Catalog</h1>
      <select value={selectedCategory} onChange={handleCategoryChange}>
        <option value="">All</option>
        <option value="men's clothing">Men's Clothing</option>
        <option value="women's clothing">Women's Clothing</option>
        <option value="jewelery">Jewelry</option>
        <option value="electronics">Electronics</option>
      </select>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(6, 1fr)" }}>
        {filteredProducts.map(product => (
          <div key={product.id}>
            <h2>{product.title}</h2>
            <h3>{product.category}</h3>
            <p>Price: ${product.price}</p>
            <p>{product.description}</p>
            <img src={product.image} alt={product.title} style={{ width: "100%" }} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
