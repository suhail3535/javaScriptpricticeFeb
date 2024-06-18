import React, { useEffect, useState } from 'react'
import axios from "axios"
export const FOOD_IMAGE =
    "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/";
const Product = () => {
    const [data, setData] = useState([])
    const api = "https://rct-211project.onrender.com/cards"

    const getValue = async () => {
        try {
            let res = await axios.get(api)
            console.log(res.data[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
            setData(res.data[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
        } catch (error) {
            console.log(error);
        }
    }
    useEffect(() => {
        getValue()
    }, [])
    return (

        <>
            <div>
                <div style={{display:"flex",justifyContent:"space"}}>
                    <input type="text" placeholder='Search for food' />
                    <button>Search</button>
                </div>
                <div>
                    <button>Top Rated Restorent</button>
                </div>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", width: "95%", margin: "auto", gap: "20px" }}>
                {data.map((ele) => {
                    return <div >
                        <div>
                            <img style={{ width: "90%", height: "300px", borderRadius: "20px" }} src={FOOD_IMAGE + ele.info.cloudinaryImageId} alt="" />
                        </div>
                        <h1>{ele.info.name}</h1>
                        <div style={{ display: "flex", gap: "20px" }}>
                            <h2><span style={{ borderRadius: "50%", padding: "5px", backgroundColor: "green", color: "white" }}>⭐</span>{ele.info.avgRating}</h2>
                            <h2>{ele.info.sla.slaString}</h2>
                        </div>
                        <h1>{ele.info.cuisines.join(",")}</h1>
                        <h1>{ele.info.costForTwo}</h1>
                        <h1>{ele.info.areaName}</h1>
                    </div>
                })}
            </div>
        </>

    )
}

export default Product
