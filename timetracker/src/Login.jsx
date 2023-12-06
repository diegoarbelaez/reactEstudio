import React from 'react'
import { Layout, Button, Checkbox, Form, Input, Card } from "antd";
import login_form from "./assets/images/login_time.png"

const { Content } = Layout;
const { Meta } = Card;


const onFinish = (values) => {
  console.log("Success:", values);
};
const onFinishFailed = (errorInfo) => {
  console.log("Failed:", errorInfo);
};

export const Login = () => {
  return (
    <Layout>
    <Content className="form_container">
      <Card
      className="card_form"
        hoverable
        style={{ width: 240 }}
        cover={
          <img
            alt="example"
            src={login_form}
          />
        }
      >
        <Meta title="Track your time" description="be productive!" />
        <Form
        className="form_login"
        name="basic"
        labelCol={{
          span: 8,
        }}
        wrapperCol={{
          span: 16,
        }}
        style={{
          maxWidth: 600,
        }}
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item
          label="Username"
          name="username"
          rules={[
            {
              required: true,
              message: "Please input your username!",
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Password"
          name="password"
          rules={[
            {
              required: true,
              message: "Please input your password!",
            },
          ]}
        >
          <Input.Password />
        </Form.Item>
        <Form.Item
          name="remember"
          valuePropName="checked"
          wrapperCol={{
            offset: 8,
            span: 16,
          }}
        >
          <Checkbox>Remember me</Checkbox>
        </Form.Item>
        <Form.Item
          wrapperCol={{
            offset: 8,
            span: 16,
          }}
        >
          <Button type="primary" htmlType="submit">
            Login
          </Button>
        </Form.Item>
      </Form>
      </Card>
     
    </Content>
  </Layout>
  )
}
