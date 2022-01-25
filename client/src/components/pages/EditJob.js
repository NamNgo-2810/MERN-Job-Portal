import React, { useState } from "react";
import DefaultLayout from "../DefaultLayout";
import { Row, Col, Form, Tabs, Input, Button, Tag, Select } from "antd";
import { useDispatch } from "react-redux";
import { editJob } from "../../redux/actions/jobActions";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

const { TabPane } = Tabs;
const { TextArea } = Input;
const { Option } = Select;

function EditJob() {
  const { jobs } = useSelector((state) => state.jobsReducer);
  const params = useParams();
  const job = jobs.find((job) => job._id == params.id);
  const [skill, setSkill] = useState("");
  const [skills, setSkills] = useState(job.skillsRequired);
  const [activeTab, setActiveTab] = useState("0");
  const [jobInfo, setJobInfo] = useState({});
  const dispatch = useDispatch();

  function onJobInfoComplete(values) {
    values.skillsRequired = skills;
    setJobInfo(values);
    setActiveTab("1");
  }

  function onUpdateJob(values) {
    const jobObj = { ...jobInfo, ...values };
    jobObj._id = job._id;
    dispatch(editJob(jobObj));
  }

  return (
    <div>
      <DefaultLayout>
        <Tabs defaultActiveKey="0" activeKey={activeTab}>
          <TabPane tab="Job Info" key="0">
            <Form
              layout="vertical"
              onFinish={onJobInfoComplete}
              initialValues={job}
            >
              <Row gutter={16}>
                <Col lg={8} sm={24}>
                  <Form.Item
                    name="title"
                    label="Title"
                    rules={[{ required: true }]}
                  >
                    <Input />
                  </Form.Item>
                </Col>
                <Col lg={8} sm={24}>
                  <Form.Item
                    name="department"
                    label="Department"
                    rules={[{ required: true }]}
                  >
                    <Input />
                  </Form.Item>
                </Col>
                <Col lg={8} sm={24}>
                  <Form.Item
                    name="experience"
                    label="Experience"
                    rules={[{ required: true }]}
                  >
                    <Input />
                  </Form.Item>
                </Col>
                <Col lg={8} sm={24}>
                  <Form.Item
                    name="minBudget"
                    label="Min Budget"
                    rules={[{ required: true }]}
                  >
                    <Input type="number" />
                  </Form.Item>
                </Col>
                <Col lg={8} sm={24}>
                  <Form.Item
                    name="maxBudget"
                    label="Max Budget"
                    rules={[{ required: true }]}
                  >
                    <Input type="number" />
                  </Form.Item>
                </Col>
              </Row>
              <Row gutter={16}>
                <Col lg={8} sm={24}>
                  <h4>Skills</h4>
                  <Input
                    value={skill}
                    onChange={(c) => setSkill(c.target.value)}
                  />
                  <Button
                    onClick={() => {
                      setSkills([...skills, skill]);
                    }}
                  >
                    Add
                  </Button>
                  <div>
                    {skills.map((item) => (
                      <Tag
                        closable
                        onClose={() => {
                          setSkills(skills.filter((skill) => skill !== item));
                        }}
                      >
                        {item}
                      </Tag>
                    ))}
                  </div>
                </Col>
                <Col lg={8} sm={24}>
                  <Form.Item
                    name="minimumQualification"
                    label="Minimum Qualification"
                  >
                    <Select>
                      <Option value="Bachelor">Bachelor</Option>
                      <Option value="Master">Master</Option>
                      <Option value="Ph.D">Ph.D</Option>
                    </Select>
                  </Form.Item>
                </Col>
              </Row>
              <Row>
                <Col lg={24} sm={24}>
                  <Form.Item
                    name="smallDescription"
                    label="Small Description"
                    required
                    rules={[{ required: true }]}
                  >
                    <Input />
                  </Form.Item>
                </Col>
              </Row>
              <Row>
                <Col lg={24} sm={24}>
                  <Form.Item
                    name="fullDescription"
                    label="Full Description"
                    required
                    rules={[{ required: true }]}
                  >
                    <TextArea rows={4} />
                  </Form.Item>
                </Col>
              </Row>
              <Button htmlType="submit" onClick={() => setActiveTab("1")}>
                Next
              </Button>
            </Form>
          </TabPane>
          <TabPane tab="Hirer Info" key="1">
            <Form layout="vertical" onFinish={onUpdateJob} initialValues={job}>
              <Row gutter={16}>
                <Col lg={8} sm={24}>
                  <Form.Item
                    name="hirer"
                    label="Hirer"
                    required
                    rules={[{ required: true }]}
                  >
                    <Input />
                  </Form.Item>
                </Col>
                <Col lg={8} sm={24}>
                  <Form.Item
                    name="email"
                    label="Email"
                    required
                    rules={[{ required: true }]}
                  >
                    <Input />
                  </Form.Item>
                </Col>
                <Col lg={8} sm={24}>
                  <Form.Item
                    name="phoneNumber"
                    label="Phone number"
                    required
                    rules={[{ required: true }]}
                  >
                    <Input />
                  </Form.Item>
                </Col>
              </Row>
              <Row>
                <Col lg={24} sm={24}>
                  <Form.Item
                    name="hirerDescription"
                    label="Hirer Description"
                    required
                    rules={[{ required: true }]}
                  >
                    <TextArea rows={4} />
                  </Form.Item>
                </Col>
              </Row>
              <Button onClick={() => setActiveTab("0")}>Previous</Button>
              <Button htmlType="submit">Update Job</Button>
            </Form>
          </TabPane>
        </Tabs>
      </DefaultLayout>
    </div>
  );
}

export default EditJob;
