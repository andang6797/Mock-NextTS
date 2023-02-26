import { Button, Col, Form, Input, Row } from "antd";
import { useFormik } from "formik";
import type { NextPage } from "next";
import { ChangeEvent } from "react";
import { loginSchema } from "utils/validation-schema/login-schema";

interface user {
  userName: string;
  password: string;
}

const Login: NextPage = () => {
  const initUser: user = {
    userName: "",
    password: "",
  };

  const { values, handleSubmit, setValues } = useFormik({
    initialValues: initUser,
	validationSchema: loginSchema,
    onSubmit: (values) => {
      console.log(values);
    },
  });

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  };
  return (
    <>
      <Form
        onFinish={handleSubmit}
        labelCol={{ offset: 2, span: 2 }}
        wrapperCol={{ span: 18 }}
      >
        <Row justify="center">
          <Col span={24}>
            <Form.Item
              label="User name"
              name="userName"
              labelAlign="left"
              rules={[
                { required: true, message: "Please input your username!" },
              ]}
            >
              <Input
                name="userName"
                onChange={onChange}
                value={values.userName}
              />
            </Form.Item>
          </Col>
        </Row>
        <Row justify="center">
          <Col span={24}>
            <Form.Item
              label="Password"
              name="password"
              labelAlign="left"
              rules={[
                { required: true, message: "Please input your password!" },
              ]}
            >
              <Input.Password
                name="password"
                value={values.password}
                onChange={onChange}
              />
            </Form.Item>
          </Col>
        </Row>
        <Row justify="center">
          <Col span={4}>
            <Form.Item>
              <Button type="primary" htmlType="submit">
                Login
              </Button>
              <Button type="default" htmlType="button">
                Cancel
              </Button>
            </Form.Item>
          </Col>
        </Row>
      </Form>
    </>
  );
};

export default Login;
