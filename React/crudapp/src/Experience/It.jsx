import React, { useEffect, useState } from 'react';

const It = () => {
    const [data, setData] = useState([]);
    const [cat, setCat] = useState('');

    const getData = async () => {
        try {
            let res = await fetch("https://fakestoreapi.com/products");
            let data = await res.json();
            setData(data);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        getData();
    }, []);

    const handleChange = (e) => {
        setCat(e.target.value);
    };

    let filtercat = data.filter((ele) => ele.category === cat);

    return (
        <div>
            <select name="" id="" value={cat} onChange={handleChange}>
                <option value="">All</option>
                <option value="electronics">Electronics</option>
                <option value="women's clothing">Women</option>
                <option value="men's clothing">Men</option>
                <option value="jewelery">Jewelery</option>
            </select>
            <hr />
            <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: "20px" }}>
                {/* {filtercat.length > 0 ? filtercat.map((ele, index) => (
                    <div key={index} style={{ border: "1px solid gray" }}>
                        <img style={{ width: "50%" }} src={ele.image} alt="" />
                        <p>{ele.price}</p>
                        <h1>{ele.category}</h1>
                    </div>
                )) : (
                    data.map((ele, index) => (
                        <div key={index} style={{ border: "1px solid gray" }}>
                            <img style={{ width: "50%" }} src={ele.image} alt="" />
                            <p>{ele.price}</p>
                            <h1>{ele.category}</h1>
                        </div>
                    ))
                )} */}


                {filtercat.length > 0 ? filtercat.map((ele) =>
                    <div>
                        <img style={{ width: "50%" }} src={ele.image} alt="" />
                        <h1>{ele.category}</h1>
                        <p>{ele.price}</p>
                    </div>

                ) : data.map((ele) =>
                    <div>
                        <img style={{ width: "50%" }} src={ele.image} alt="" />
                        <h1>{ele.category}</h1>
                        <p>{ele.price}</p>
                    </div>

                )}
            </div>
        </div>
    );
};

export default It;
