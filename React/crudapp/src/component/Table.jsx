import React from 'react';
import { Table } from 'antd';
const columns = [
    {
        title: 'Sr.No',
        dataIndex: 'id',
        width: 150,
    },
    {
        title: 'Name',
        dataIndex: 'name',
        width: 150,
    },
    {
        title: 'Age',
        dataIndex: 'age',
        width: 150,
    },
    {
        title: 'City',
        dataIndex: 'city',
    },
    {
        title: 'Mobile',
        dataIndex: 'mobile',
    },
    {
        title: 'Action',
        
    },
];

const Details = ({value}) => (
    <Table
        columns={columns}
        dataSource={value}
        pagination={{
            pageSize: 50,
        }}
        scroll={{
            // y: 240,
        }}
    />
);
export default Details;