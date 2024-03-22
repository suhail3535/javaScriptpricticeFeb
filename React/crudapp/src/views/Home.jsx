import React, { useEffect, useState } from 'react'
import axios from "axios"
import Details from '../component/Table'
const Home = () => {
    const [data, setData] = useState([])
    const getData = async () => {
        try {
            let res = await axios.get("http://localhost:8080/user")
            console.log(res.data);
            setData(res.data)
        } catch (error) {
            console.log(error);
        }
    }
    useEffect(() => {
        getData()
    }, [])
    return (
        <div>
            <Details value={data}  />
        </div>
    )
}

export default Home
