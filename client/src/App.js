import React from 'react'
import { Button, Form, Input, Table } from 'antd';
import { useState } from 'react';
import 'antd/dist/antd.css';
import axios from "axios";
import TableA from './TableA';
const formItemLayout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 8,
  },
};
const formTailLayout = {
  labelCol: {
    span: 4,
  },
  wrapperCol: {
    span: 8,
    offset: 10,
  },
};


function App() {
 
    const [form] = Form.useForm();
  const [data, setData] = useState({
    name: "",
    price: "",
    quantity: "",
    brand: ""
  });
  const [error, setError] = useState("");
  
 
  const handleChange = ({ currentTarget: input }) => {
    setData({ ...data, [input.name]: input.value });}
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const url = "http://localhost:5050/product/postproduct";
      const { data: res } = await axios.post(url, data);
  
      console.log(res.message);
    } catch (error) {
      if (
        error.response &&
        error.response.status >= 400 &&
        error.response.status <= 500
      )
       {
        setError(error.response.data.message);
      }
    
  }};



  return (
    <>
     <Form form={form} name="dynamic_rule" >
      <Form.Item
        {...formItemLayout}
        label="Name"
        rules={[
          {
            
            required: true,
            message: 'Please input your name',
          },
        ]}   
      >
        <Input placeholder="Please input your name"  name="name" value={data.name} onChange={handleChange}/>
      </Form.Item>
      <Form.Item
        {...formItemLayout}
        label="Price"
        rules={[
          {
            required: true,
            message: 'Please input your price',
          },
        ]}
      >
        <Input placeholder="Please input your price"  name="price" value={data.price} onChange={handleChange}/>
      </Form.Item>
      
      <Form.Item
        {...formItemLayout}
        label="Quantity"
        rules={[
          {
            required: true,
            message: 'Please input your Quantity',
          },
        ]}
      >
        <Input placeholder="Please input your Quantity" name="quantity" value={data.quantity} onChange={handleChange}/>
      </Form.Item><Form.Item
        {...formItemLayout}
        label="Brand"
        rules={[
          {
            required: true,
            message: 'Please input your Brand',
          },
        ]}
      >
        <Input placeholder="Please input your Brand" name="brand" value={data.brand} onChange={handleChange}/>
      </Form.Item>
      {error && <div >{error}</div>}
      <Form.Item {...formTailLayout}>
        <Button type="primary" onClick={handleSubmit}>
          Check
        </Button>
      </Form.Item>
    </Form>
    
    </>
  )
}

export default App





    



