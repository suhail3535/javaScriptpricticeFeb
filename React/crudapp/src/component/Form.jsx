import React from 'react';
import { Form, Input, Button } from 'antd';
import axios from 'axios';

const MyForm = () => {
    const onFinish = async (values) => {
        try {
            const response = await axios.post('http://localhost:8080/user', values);
            console.log('Form values:', values);
            console.log('Response:', response.data);
            alert("added")
        } catch (error) {
            console.error('Error submitting form:', error);
        }
    };

    return (
        <Form
            name="basic"
            initialValues={{ remember: true }}
            onFinish={onFinish}
            autoComplete="off"
            layout="vertical"
        >
            <Form.Item
                label="Name"
                name="name"
                rules={[{ required: true, message: 'Please input your name!' }]}
            >
                <Input />
            </Form.Item>

            <Form.Item
                label="Age"
                name="age"
                rules={[
                    { required: true, message: 'Please input your age!' },

                ]}
            >
                <Input type="number" />
            </Form.Item>

            <Form.Item
                label="City"
                name="city"
                rules={[{ required: true, message: 'Please input your city!' }]}
            >
                <Input />
            </Form.Item>

            <Form.Item
                label="Mobile"
                name="mobile"
                rules={[{ required: true, message: 'Please input your mobile!' }]}
            >
                <Input />
            </Form.Item>

            <Form.Item>
                <Button type="primary" htmlType="submit">
                    Submit
                </Button>
            </Form.Item>
        </Form>
    );
};

export default MyForm;
