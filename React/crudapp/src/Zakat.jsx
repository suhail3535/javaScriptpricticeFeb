import React, { useState } from 'react';
import { Form, Input, Space, Button } from 'antd'; // Import Form, Input, Space, and Button from Ant Design
import "./zakat.css"; // Assuming you have a CSS file for styling
import { zakatcal2 } from "./data"; // Importing zakatcal2 data


const Stepper2 = () => {
    const [form] = Form.useForm();
    const [totalSum, setTotalSum] = useState(0);
    const [sumPercent, setSumPercent] = useState(0);

    const onFinish = (values) => {
        const inputValues = Object.values(values).map(val => parseFloat(val[1] || 0)); // Convert values to numbers
        const sum = inputValues.reduce((acc, val) => acc + val, 0);
        setTotalSum(sum);
        const percent = sum * 0.025; // 2.5% of total sum
        setSumPercent(percent.toFixed(2)); // Display with 2 decimal places
    };

    return (
        <>
            <div className='steppe_div_2'>
                <div id="top_head_as">
                    <h5>Assets Deductible from Zakat (B)</h5>
                    <p>[Value of wealth to be deducted as Zakat]</p>
                </div>

                <Form form={form} name="validateOnly" layout="vertical" autoComplete="off" onFinish={onFinish}>
                    {zakatcal2.map((ele, index) => (
                        <Form.Item key={index} className='label_tag' label={`${ele.id} ${ele.label}`}>
                            <Space.Compact style={{ width: "100%" }}>
                                <Input
                                    className='input_1'
                                    defaultValue="(Taka) ৳"
                                    required
                                    name={ele.id}
                                />
                                <Input
                                    className='input_2'
                                    required
                                    type="number"
                                    name={`input_number_${ele.id}`}
                                />
                            </Space.Compact>
                        </Form.Item>
                    ))}
                    <Form.Item>
                        <Space>
                            <div>Total Sum: {totalSum}</div>
                            <div>2.5% of Total Sum: {sumPercent}</div>
                        </Space>
                    </Form.Item>
                    <Form.Item>
                        <Button type="primary" htmlType="submit">Calculate</Button>
                    </Form.Item>
                </Form>
            </div>
        </>
    );
};
export default Stepper2