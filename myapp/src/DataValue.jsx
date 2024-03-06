import React, { useState } from "react";

let data = {
  name: "",
  mobile: "",
  city:""
}
const DataValue = () => {

  const [value, setValue] = useState(data);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setValue((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = () => {
    console.log(value);
  };

  return (
    <div>
      Name:-
      <input
        type="text"
        placeholder="Name"
        name="name"
        value={value.name}
        onChange={handleChange}
      />
      Mobile:-
      <input
        type="text"
        placeholder="Mobile"
        name="mobile"
        value={value.mobile}
        onChange={handleChange}
      />
      City:-
      <input
        type="text"
        placeholder="City"
        name="city"
        value={value.city}
        onChange={handleChange}
      />
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
};

export default DataValue;
