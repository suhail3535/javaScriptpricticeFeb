import React, { useState } from 'react'

let initialValue = {
    email: '',
    pass: ''
}
const Counter = () => {
    const [data, setData] = useState(initialValue)



    const handleChange = (e) => {
        console.log(e.target)
        let name = e.target.name
        let value = e.target.value
        console.log(name,value);
        // const { name, value } = e.target;
        setData((prev) => {
            return { ...prev, [name]: value };
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault()

        console.log(data, "20");
        alert("updated")
        setData(initialValue)
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" name="email" value={data.email} onChange={handleChange} />
                <input type="text" name="pass" value={data.pass} onChange={handleChange} />
                <button>Submit</button>
            </form>
        </div>
    )
}

export default Counter
