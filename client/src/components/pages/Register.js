import React from "react";
import { Row, Col, Form, Input, Button, message } from "antd";
import { useDispatch } from "react-redux";
import { registerUser } from "../../redux/actions/userActions";
import { Link } from "react-router-dom";

function Register() {
  const dispatch = useDispatch();
  function register(values) {
    if (values.password !== values.password_confirm) {
      message.error("Password not matched");
    } else {
      dispatch(registerUser(values));
    }
  }

  return (
    <div className="login h-100 bg-light">
      <Row justify="center">
        <Col lg={10} sm={24} className="bs p-5 bg-white mt-50 mb-50">
          <h3>Register</h3>
          <Form layout="vertical" onFinish={register}>
            <Form.Item
              label="Username"
              name="username"
              rules={[{ required: true }]}
            >
              <Input placeholder="Enter username" />
            </Form.Item>
            <Form.Item
              label="Password"
              name="password"
              rules={[{ required: true }]}
            >
              <Input placeholder="Enter password" type="password" />
            </Form.Item>
            <Form.Item
              label="Confirm password"
              name="password_confirm"
              rules={[{ required: true }]}
            >
              <Input placeholder="Confirm password" type="password" />
            </Form.Item>

            <Button htmlType='="submit' className="mb-3">
              Register
            </Button>
            <br />
            <br />
            <Link to="/login" className="mt-2">
              Already have an account? Click here to login
            </Link>
          </Form>
        </Col>
      </Row>
    </div>
  );
}

export default Register;
