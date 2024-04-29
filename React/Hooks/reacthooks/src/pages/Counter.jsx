import React, { useState } from 'react'

const Counter = () => {
    const [email, setEmail] = useState("")
    const [pass, setPass] = useState("")
    const handleChange = (e) => {
        setEmail(e.target.value)
    }
    const handleChange1 = (e) => {
        setPass(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(email, pass);
        setEmail("")
        setPass("")
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" value={email} onChange={handleChange} />
                <input type="text" value={pass} onChange={handleChange1} />
                <button>Submit</button>
            </form>
        </div>
    )
}

export default Counter
