import React, { useState } from "react";
import DefaultLayout from "../DefaultLayout";
import { Row, Col, Form, Tabs, Input, Button } from "antd";
import { useDispatch } from "react-redux";
import { updateUser } from "../../redux/actions/userActions";

const { TabPane } = Tabs;
const { TextArea } = Input;

function Profile() {
  const [personalInfo, setPersonalInfo] = useState({});
  const [activeTab, setActiveTab] = useState("PI");
  const dispatch = useDispatch();

  function onPersonInfoSubmit(values) {
    setPersonalInfo(values);
    console.log(personalInfo);
    setActiveTab("SE");
  }

  function onFinalFinish(values) {
    const finalObj = { ...personalInfo, ...values };
    dispatch(updateUser(finalObj));
  }

  const user = JSON.parse(localStorage.getItem("user"));

  return (
    <div>
      <DefaultLayout>
        <div
          style={{
            margin: "60px",
            padding: "20px",
            fontSize: "20px",
          }}
        >
          <Tabs defaultActiveKey="PI" activeKey={activeTab}>
            <TabPane tab="Personal Information" key="PI">
              <Form
                layout="vertical"
                onFinish={onPersonInfoSubmit}
                initialValues={user}
              >
                <Row gutter={16}>
                  <Col lg={8} sm={24}>
                    <Form.Item
                      label="First name"
                      required
                      rules={[{ required: true }]}
                      name="firstname"
                    >
                      <Input placeholder="First name" />
                    </Form.Item>
                  </Col>
                  <Col lg={8} sm={24}>
                    <Form.Item
                      label="Last name"
                      required
                      rules={[{ required: true }]}
                      name="lastname"
                    >
                      <Input placeholder="Last name" />
                    </Form.Item>
                  </Col>
                  <Col lg={8} sm={24}>
                    <Form.Item
                      label="Email"
                      required
                      rules={[{ required: true }]}
                      name="email"
                    >
                      <Input placeholder="Email" />
                    </Form.Item>
                  </Col>
                  <Col lg={8} sm={24}>
                    <Form.Item
                      label="Phone number"
                      required
                      rules={[{ required: true }]}
                      name="phonenumber"
                    >
                      <Input placeholder="Phone number" />
                    </Form.Item>
                  </Col>
                  <Col lg={8} sm={24}>
                    <Form.Item
                      label="Portfolio"
                      required
                      rules={[{ required: true }]}
                      name="portfolio"
                    >
                      <Input placeholder="portfolio" />
                    </Form.Item>
                  </Col>
                  <Col lg={24} sm={24}>
                    <Form.Item
                      label="About"
                      required
                      rules={[{ required: true }]}
                      name="about"
                    >
                      <TextArea rows={4} />
                    </Form.Item>
                  </Col>
                  <Col lg={24} sm={24}>
                    <Form.Item
                      label="Address"
                      required
                      rules={[{ required: true }]}
                      name="address"
                    >
                      <TextArea rows={4} />
                    </Form.Item>
                  </Col>
                </Row>
                <Button htmlType="submit">Next</Button>
              </Form>
            </TabPane>
            <TabPane tab="Skills and Education" key="SE">
              <Form
                initialValues={user}
                layout="vertical"
                onFinish={onFinalFinish}
              >
                <Row>
                  <Col lg={24} sm={24}>
                    <Form.List name="education">
                      {(education, { add, remove }) => (
                        <div>
                          {education.map((field, index) => (
                            <div className="flex">
                              <Form.Item
                                required
                                {...field}
                                label="Education"
                                style={{ width: "80%" }}
                                rules={[{ required: true }]}
                              >
                                <TextArea rows={2} />
                              </Form.Item>
                              <Button onClick={() => add()}>Add more</Button>
                              {index !== 0 && (
                                <Button onClick={() => remove(index)}>
                                  Delete
                                </Button>
                              )}
                            </div>
                          ))}
                        </div>
                      )}
                    </Form.List>
                  </Col>

                  <Col lg={24} sm={24}>
                    <Form.List name="skills">
                      {(skills, { add, remove }) => (
                        <div>
                          {skills.map((field, index) => (
                            <div className="flex">
                              <Form.Item
                                required
                                {...field}
                                label="Skill"
                                style={{ width: "80%" }}
                                rules={[{ required: true }]}
                              >
                                <TextArea rows={2} />
                              </Form.Item>
                              <Button onClick={() => add()}>Add more</Button>
                              {index !== 0 && (
                                <Button onClick={() => remove(index)}>
                                  Delete
                                </Button>
                              )}
                            </div>
                          ))}
                        </div>
                      )}
                    </Form.List>
                  </Col>
                  <Col lg={24} sm={24}>
                    <Form.List name="projects">
                      {(projects, { add, remove }) => (
                        <div>
                          {projects.map((field, index) => (
                            <div className="flex">
                              <Form.Item
                                required
                                {...field}
                                label="Project"
                                style={{ width: "80%" }}
                                rules={[{ required: true }]}
                              >
                                <TextArea rows={2} />
                              </Form.Item>
                              <Button onClick={() => add()}>Add more</Button>
                              {index !== 0 && (
                                <Button onClick={() => remove(index)}>
                                  Delete
                                </Button>
                              )}
                            </div>
                          ))}
                        </div>
                      )}
                    </Form.List>
                  </Col>
                  <Col lg={24} sm={24}>
                    <Form.Item
                      label="Experience"
                      name="experience"
                      style={{ width: "80%" }}
                    >
                      <Input />
                    </Form.Item>
                  </Col>
                </Row>
                <div style={{ display: "inline-block", padding: "10px" }}>
                  <Button onClick={() => setActiveTab("PI")}>Previous</Button>

                  <Button htmlType="submit">Update</Button>
                </div>
              </Form>
            </TabPane>
          </Tabs>
        </div>
      </DefaultLayout>
    </div>
  );
}

export default Profile;
