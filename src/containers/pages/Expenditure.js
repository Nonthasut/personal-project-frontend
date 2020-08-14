import React, { useState, useEffect } from 'react'
import { Form, Input, Button, Select, Layout, Menu, Breadcrumb, Col, Row, notification } from 'antd'
import { withRouter } from 'react-router-dom'
import jwtDecode from 'jwt-decode'
import LocalStorageService from '../../config/service'
import axios from 'axios'

function Expenditure(props) {
    const [form] = Form.useForm();
    const { Option } = Select;
    const { Header, Content } = Layout;
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
    
    const monthRemainToRetired = Math.floor(((((new Date(userData.retired_time)) - new Date()) / (1000 * 3600 * 24)) / 365) * 12)
    const monthRemainToRestInPeace = Math.floor(((((new Date(userData.rest_in_peace)) - new Date()) / (1000 * 3600 * 24)) / 365) * 12)

    const onFinish = values => {
        console.log('Received values of form: ', values);
        const body = {
            expenditure_list: values.expenditure_list,
            expenditure_value: (values.numberUnitOfTime * values.unitOfTime) * values.valueOfExpenditure
        }

        axios.post(`/expenditures`, body)
            .then(res => {
                notification.success({
                    message: `Add expenditure's list already.`
                })
                props.history.push(`/expenditures/${userData.id}`)
            })
            .catch(err => {
                notification.error({
                    message: `Cannot add expenditure's list.`
                })
            })

    };



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
                        name='expenditure'
                        onFinish={onFinish}
                    >
                        Expenditure

                            <Form.Item
                                name="expenditure_list"
                                label="รายการ"
                                rules={[
                                    {
                                        required: true,
                                        message: 'กรุณาใส่รายการรายจ่าย',
                                    },
                                ]}
                                hasFeedback
                            >
                                <Input />
                            </Form.Item>


                            <Form.Item
                                name="numberUnitOfTime"
                                label='จะต้องชำระรายจ่ายจากรายการนี้ทุกๆ'
                                rules={[
                                    {
                                        required: true,
                                        message: 'กรุณากรอกจำนวนรอบการชำระรายจ่าย'
                                    },
                                ]}
                                hasFeedback
                            >

                                <Input />
                            </Form.Item>


                            <Form.Item
                                name='unitOfTime'
                                label='ต่อครั้ง'
                                rules={[
                                    {
                                        required: true,
                                        message: 'กรุณากรอกจำนวนรอบการชำระรายจ่าย'
                                    },
                                ]}
                                hasFeedback
                            >
                                <Select style={{ width: 120 }}>
                                    <Option value={30}>วัน</Option>
                                    <Option value={4}>สัปดาห์</Option>
                                    <Option value={1}>เดือน</Option>
                                    <Option value={1 / 12}>ปี</Option>
                                </Select>
                            </Form.Item>

                            <Form.Item
                                name="valueOfExpenditure"
                                label="มูลค่ารายจ่ายของรายการนี้"
                                rules={[
                                    {
                                        required: true,
                                        message: 'กรุณาใส่มูลค่าของรายจ่ายรายการนี้ต่อครั้ง',
                                    },
                                ]}
                                hasFeedback
                            >
                                <Input />
                            </Form.Item>



{/* 
                                                   
                            <Form.Item
                                name="quantityOfIncome"
                                label="จะต้องชำระรายจ่ายจากรายการนี้ทั้งหมดกี่รอบ (สามารถตั้งให้เป็นจำนวนครั้ง หรือ จนกว่าจะเกษียณ หรือ จนกว่าจะเสียชีวิตได้)"
                                rules={[
                                    {
                                        required: true,
                                        message: 'กรุณาใส่จำนวนครั้งที่จะต้องชำระรายจ่ายจากรายการนี้',
                                    },
                                ]}
                                hasFeedback
                            >
                                <Input />
                                <Select defaultValue="..." style={{ width: 120 }} onChange={handleChange}>
                                    <Option value="...">จนกว่าจะเกษียณ</Option>
                                    <Option value="...">จนกว่าจะเสียชีวิตได้</Option>
                                </Select>
                            </Form.Item> 



                           <Form.Item
                                name="valueOfCompoundExpenditure"
                                label="รายการนี้มีการเติบโตจากมูลค่าต้นหรือไม่ คำนวณแบบเป็นต่อปี เช่น การเปลี่ยนฐานคำนวณดอกเบี้ย"
                                rules={[
                                    {
                                        required: true,
                                        message: 'กรุณาใส่รายการรายได้',
                                    },
                                ]}
                                hasFeedback
                            >
                                <p>*เป็นรูปแบบการเติบโตแบบดอกเบี้ยทบต้น</p>
                                <Input />


                                                          
                    <label for='value of compound interest'>
                        <p>รายการนี้มีการเติบโตจากมูลค่าต้นหรือไม่ คำนวณแบบเป็นต่อปี เช่น ฐานเงินเดือนเพิ่มขึ้นทุกๆปี</p> <br />
                        <p>*เป็นรูปแบบการเติบโตแบบดอกเบี้ยทบต้น(ยังไม่ได้คิดฟีเจอร์เพิ่มเงินต้นเข้าไปเอง)</p>
                        <input type='text' placeholder='1(R-r)**n' />
                    </label>
                            </Form.Item>  */}




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

export default withRouter(Expenditure)
