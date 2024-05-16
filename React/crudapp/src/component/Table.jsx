import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  FormControl,
  FormLabel,
  Input,
  Button,
} from '@chakra-ui/react';

const Table = () => {
  const [data, setData] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const [isNewItem, setIsNewItem] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    city: '',
    mobile: '',
  });

  const handleClick = (item) => {
    setSelectedItem(item);
    setIsNewItem(false);
    setFormData({
      name: item.name,
      age: item.age,
      city: item.city,
      mobile: item.mobile,
    });
    setIsOpen(true);
  };

  const handleNew = () => {
    setSelectedItem(null);
    setIsNewItem(true);
    setFormData({
      name: '',
      age: '',
      city: '',
      mobile: '',
    });
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
    setSelectedItem(null);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (isNewItem) {
        await axios.post(`http://localhost:8080/user`, formData);
      } else {
        await axios.patch(`http://localhost:8080/user/${selectedItem.id}`, formData);
      }
      getData();
      setIsOpen(false);
    } catch (error) {
      console.log(error);
    }
  };

  const getData = async () => {
    try {
      let res = await axios.get('http://localhost:8080/user');
      setData(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <button onClick={handleNew} style={{ backgroundColor: 'green', padding: '10px', marginTop: '20px' }}>
        New
      </button>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: '30px' }}>
        {data.map((ele) => {
          return (
            <div style={{ border: '1px solid gray' }} key={ele.id}>
              <h2>{ele.name}</h2>
              <h4>{ele.age}</h4>
              <h5>{ele.city}</h5>
              <h6>{ele.mobile}</h6>
              <button onClick={() => handleClick(ele)} style={{ backgroundColor: 'red', padding: '10px' }}>
                Edit
              </button>
            </div>
          );
        })}

      </div>
      <Drawer placement="right" onClose={handleClose} isOpen={isOpen}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerHeader borderBottomWidth="1px">{isNewItem ? 'New User' : 'Edit User'}</DrawerHeader>
          <DrawerCloseButton />
          <DrawerBody>
            <form onSubmit={handleSubmit}>
              <FormControl>
                <FormLabel>Name</FormLabel>
                <Input type="text" name="name" value={formData.name} onChange={handleChange} />
              </FormControl>
              <FormControl>
                <FormLabel>Age</FormLabel>
                <Input type="number" name="age" value={formData.age} onChange={handleChange} />
              </FormControl>
              <FormControl>
                <FormLabel>City</FormLabel>
                <Input type="text" name="city" value={formData.city} onChange={handleChange} />
              </FormControl>
              <FormControl>
                <FormLabel>Mobile</FormLabel>
                <Input type="text" name="mobile" value={formData.mobile} onChange={handleChange} />
              </FormControl>
              <Button mt={4} colorScheme="teal" type="submit">
                Submit
              </Button>
            </form>
          </DrawerBody>
          <DrawerFooter>
            <Button variant="outline" mr={3} onClick={handleClose}>
              Cancel
            </Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default Table;
