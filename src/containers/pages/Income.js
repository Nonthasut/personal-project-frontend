import React, { useState, useEffect } from 'react'
import { Form, Input, Button, Select, Layout, Menu, Breadcrumb, Col, Row, notification } from 'antd'
import jwtDecode from 'jwt-decode'
import LocalStorageService from '../../config/service'
import axios from 'axios'
import { withRouter } from 'react-router-dom'

function Income(props) {

    const [form] = Form.useForm();

    const { Header, Content } = Layout;

    const { Option } = Select;
    function handleChange(value) {
        console.log(`selected ${value}`);

    }

    const [userData, setUserData] = useState('')

    useEffect(() => {
        const token = LocalStorageService.getToken()
        if (token) {
            const user = jwtDecode(token)
            axios.get(`/users/${user.id}`).then((res) => {
                setUserData(res.data)
            })
                .catch((err) => {
                    console.log(err)
                })
        }
    }, [])

    const onFinish = values => {
        console.log('Received values of form: ', values);
        const body = {
            income_list: values.income_list
        }

        axios.post(`/incomes`, body)
            .then(res => {
                notification.success({
                    message: `Add income's list already.`
                })
                props.history.post(`/incomes/${userData.id}`)
            })
            .catch(err => {
                notification.error({
                    message: `Cannot add income's list.`
                })
            })

    };

    const monthRemainInYourLife = Math.floor(((((new Date(userData.rest_in_peace_time))-new Date(userData.birthday))/(1000*3600*24))/365)*12) 

        const [valueIncome,setValueIncome]= useState({
            listIncome: 0
        })




    return (
        <div>
            <Row justify='center'>
                <Col xxl={12} xl={14}>
                    <Layout>
                        <Header style={{ position: 'fixed', zIndex: 1, width: '100%' }}>
                            <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
                            </Menu>
                        </Header>
                        <Content className="site-layout" style={{ padding: '0 50px', marginTop: 64 }}>


                            <Form
                                form={form}
                                name='income'
                                onFinish={onFinish}
                            >
                                Income
                <Form.Item
                                    name="income_list"
                                    label="รายการ"
                                    rules={[
                                        {
                                            required: true,
                                            message: 'กรุณาใส่รายการรายได้',
                                        },
                                    ]}
                                    hasFeedback
                                >
                                    <Input />
                                </Form.Item>

                                <Form.Item
                                    name='unitOfTime'
                                    label='จะได้รับรายได้จากรายการนี้ทุกๆ'
                                    rules={[
                                        {
                                            // required: true,
                                            message: 'กรุณากรอกจำนวนรอบการได้รับรายได้'
                                        },
                                    ]}
                                    hasFeedback
                                >
                                    <Input />
                    ครั้งต่อ
                    <Select defaultValue="30" style={{ width: 120 }} onChange={handleChange}>
                                        <Option value="30">วัน</Option>
                                        <Option value="4">สัปดาห์</Option>
                                        <Option value="1">เดือน</Option>
                                        <Option value="12(เอาไปเป็นตัวหารใช้parseInt)">ปี</Option>

                                    </Select>

                                </Form.Item>

                                <Form.Item
                                    name="quantityOfIncome"
                                    label="จะได้รับรายได้จากรายการนี้ทั้งหมดกี่รอบ (สามารถตั้งให้เป็นจำนวนครั้ง หรือ จนกว่าจะเกษียณ หรือ จนกว่าจะเสียชีวิตได้)"
                                    rules={[
                                        {
                                            required: true,
                                            message: 'กรุณาใส่จำนวนครั้งที่จะได้รับรายได้จากรายการนี้',
                                        },
                                    ]}
                                    hasFeedback
                                >
                                    <Input />
                                    {/* <Select defaultValue="..." style={{ width: 120 }} onChange={handleChange}>
                        <Option value="...">จนกว่าจะเกษียณ</Option>
                        <Option value="...">จนกว่าจะเสียชีวิตได้</Option>
                    </Select> */}
                                </Form.Item>

                                <Form.Item
                                    name="valueOfIncome"
                                    label="มูลค่ารายได้ของรายการนี้"
                                    rules={[
                                        {
                                            required: true,
                                            message: 'กรุณาใส่มูลค่าต่อการรับรายได้นี้ต่อครั้งของรายการนี้',
                                        },
                                    ]}
                                    hasFeedback
                                >
                                    <Input />
                                </Form.Item>

                                {/* <Form.Item
                    name="valueOfCompoundInterest"
                    label="รายการนี้มีการเติบโตจากมูลค่าต้นหรือไม่ คำนวณแบบเป็นต่อปี เช่น ฐานเงินเดือนเพิ่มขึ้นทุกๆปี"
                    rules={[
                        {
                            required: true,
                            message: 'กรุณาใส่รายการรายได้',
                        },
                    ]}
                    hasFeedback
                >
                    <p>*เป็นรูปแบบการเติบโตแบบดอกเบี้ยทบต้น(ยังไม่ได้คิดฟีเจอร์เพิ่มเงินต้นเข้าไปเอง)</p>
                    <Input /> */}


                                {/*    
                    <label for='value of compound interest'>
                        <p>รายการนี้มีการเติบโตจากมูลค่าต้นหรือไม่ คำนวณแบบเป็นต่อปี เช่น ฐานเงินเดือนเพิ่มขึ้นทุกๆปี</p> <br />
                        <p>*เป็นรูปแบบการเติบโตแบบดอกเบี้ยทบต้น(ยังไม่ได้คิดฟีเจอร์เพิ่มเงินต้นเข้าไปเอง)</p>
                        <input type='text' placeholder='1(R-r)**n' />
                    </label> */}
                                {/* </Form.Item> */}

                                <Form.Item >
                                    <Button type="primary" htmlType="submit">
                                        Confirm
                    </Button>
                                </Form.Item>
                            </Form>
                        </Content>

                    </Layout>
                </Col>
            </Row>
        </div>
    )
}

export default withRouter(Income)
