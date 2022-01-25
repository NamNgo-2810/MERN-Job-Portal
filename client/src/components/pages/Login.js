import React from "react";
import { Row, Col, Form, Button, Input } from "antd";
import { loginUser } from "../../redux/actions/userActions";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

function Login() {
  const dispatch = useDispatch();
  function login(values) {
    dispatch(loginUser(values));
  }
  return (
    <div className="login h-100 bg-light">
      <Row justify="center">
        <Col lg={10} sm={24} className="bs p-5 bg-white mt-50 mb-50">
          <h3>Sign In to EWork</h3>
          <hr />
          <Form layout="vertical" onFinish={login}>
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

            <Button
              htmlType='="submit'
              className="mb-3 d-flex align-self-center"
            >
              Login
            </Button>
            <br />
            <br />
            <Link to="/register" className="mt-2">
              Doesn't have an account? Click here to register
            </Link>
          </Form>
        </Col>
      </Row>
    </div>
  );
}

export default Login;
