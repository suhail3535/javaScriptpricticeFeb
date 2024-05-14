import React, { useEffect, useState } from 'react'
import axios from "axios"
const Product = () => {
    const [data, setData] = useState([])
    const api = "https://trainee-assignment-dashboard.vercel.app/student"
json
    const getValue = async () => {
        try {
            let res = await axios.get(api)
            console.log(res.data)
        } catch (error) {
            console.log(error);
        }
    }
    useEffect(() => {
        getValue()
    }, [])
    return (
        <div>

        </div>
    )
}

export default Product
