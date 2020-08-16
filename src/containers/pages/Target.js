import React, { useState, useEffect } from 'react'
import { Form, Input, Button, Select, Layout, Menu, Breadcrumb, Col, Row, notification } from 'antd'
import { withRouter } from 'react-router-dom'
import jwtDecode from 'jwt-decode'
import LocalStorageService from '../../config/service'
import axios from 'axios'
import TargetTable from '../../components/TargetTable'
import Navbar from '../../components/Navbar'
import LogOutButton from '../../components/LogOutButton'

function Target(props) {
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
    const monthRemainToRestInPeace = Math.floor(((((new Date(userData.rest_in_peace_time)) - new Date()) / (1000 * 3600 * 24)) / 365) * 12)
    const remainTimeAfterRetired = monthRemainToRestInPeace - monthRemainToRetired

    // console.log(monthRemainToRetired)
    // console.log(monthRemainToRestInPeace)
    // console.log(remainTimeAfterRetired)


    const onFinish = values => {
        console.log('Received values of form: ', values);
        const body = {
            target_list: values.target_list,
            target_value: (values.numberUnitOfTime * values.unitOfTime) * values.valueOfTarget,
            target_quantity_per_month: (values.numberUnitOfTime * values.unitOfTime),
            target_value_per_time: values.valueOfTarget
        }

        axios.post(`/targets`, body)
            .then(res => {
                notification.success({
                    message: `Add target's list already.`
                })

            })
            .catch(err => {
                notification.error({
                    message: `Cannot add target's list.`
                })
            })
        window.location.reload(true)
    };

    return (
        <div>
            <Row justify='center'>
                <Col xxl={12} xl={14}>
                    <Layout>
                        <Header>
                        <Row justify='end'>
                        <LogOutButton />
                        </Row>
                            <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
                            </Menu>
                        </Header>
                        <Content className="site-layout" style={{ padding: '0 50px', marginTop: 20 }}>
                            <Form
                                form={form}
                                name='target'
                                onFinish={onFinish}
                            >
                                <Navbar/>
                                <h1>เป้าหมาย</h1>
                                <p>ในหัวข้อเป้าหมายจะคำนวณมูลค่าเริ่มจากวันที่เกษียณเป็นวันแรกไปจนถึงวันที่คาดว่าจะเสียชีวิต</p>
                                <h3>คำแนะนำเบื้องต้น</h3>
                                <p>รายการที่คุณต้องคำนวณที่เป็นพื้นฐานที่สุดควรมีดังนี้ ค่าอาหารต่อวัน , ค่าสำรองเผื่อป่วย , ค่าสาธารณูปโภคพื้นฐาน , ค่าสำรองเผื่ออุบัติเหตุ นอกเหนือนี้ไม่ว่าจะครอบครัว,งานอดิเรก,ความฝัน,ความต้องการส่วนตัวระบุได้ตามที่ท่านได้ฝันไว้ว่าอยากจะครอบครองได้เลยครับ</p>

                                <Form.Item
                                    name="target_list"
                                    label="รายการ"
                                    rules={[
                                        {
                                            required: true,
                                            message: 'กรุณาใส่รายการเป้าหมาย',
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
                                    label='ครั้งต่อ'
                                    rules={[
                                        {
                                            required: true,
                                            message: 'กรุณาเลือกหน่วย'
                                        },
                                    ]}
                                    hasFeedback
                                >
                                    <Select defaultValue="วัน/สัปดาห์/เดือน/ปี" style={{ width: 180 }}>
                                        <Option value={30}>วัน</Option>
                                        <Option value={4}>สัปดาห์</Option>
                                        <Option value={1}>เดือน</Option>
                                        <Option value={1 / 12}>ปี</Option>
                                    </Select>
                                </Form.Item>

                                <Form.Item
                                    name="valueOfTarget"
                                    label="มูลค่ารายจ่ายของรายการนี้(ต่อ1ครั้ง)"
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





                                {/* <Form.Item
                    name="quantityOfIncome"
                    label="จะต้องชำระรายจ่ายจากรายการนี้ทั้งหมดกี่รอบ (สามารถตั้งให้เป็นจำนวนครั้ง หรือ จนกว่าจะเสียชีวิตได้)"
                    rules={[
                        {
                            required: true,
                            message: 'กรุณาใส่จำนวนครั้งที่จะต้องชำระรายจ่ายของรายการนี้',
                        },
                    ]}
                    hasFeedback
                >
                    <Input />
                    <Select defaultValue="..." style={{ width: 120 }} onChange={handleChange}>
                        <Option value="...">จนกว่าจะเกษียณ</Option>
                        <Option value="...">จนกว่าจะเสียชีวิตได้</Option>
                    </Select>
                </Form.Item> */}

                                {/*             
                <Form.Item
                    name="valueOfCompoundTarget"
                    label="รายการนี้มีการเติบโตจากมูลค่าต้นหรือไม่ คำนวณแบบเป็นต่อปี เช่น การเปลี่ยนฐานคำนวณดอกเบี้ย"
                    rules={[
                        {
                            required: true,
                            message: 'กรุณาใส่รายการรายได้',
                        },
                    ]}
                    hasFeedback
                >
                    <p>*เป็นรูปแบบการเติบโตแบบดอกเบี้ยทบต้น(ยังไม่ได้คิดฟีเจอร์เพิ่มเงินต้นเข้าไปเอง)</p>
                    <Input />


                       
                    <label for='value of compound interest'>
                        <p>รายการนี้มีการเติบโตจากมูลค่าต้นหรือไม่ คำนวณแบบเป็นต่อปี เช่น ฐานเงินเดือนเพิ่มขึ้นทุกๆปี</p> <br />
                        <p>*เป็นรูปแบบการเติบโตแบบดอกเบี้ยทบต้น(ยังไม่ได้คิดฟีเจอร์เพิ่มเงินต้นเข้าไปเอง)</p>
                        <input type='text' placeholder='1(R-r)**n' />
                    </label>
                </Form.Item> */}



                                <Form.Item >
                                    <Button type="primary" htmlType="submit">
                                        Confirm
                    </Button>
                                </Form.Item>

                            </Form>
                            <TargetTable />
                        </Content>

                    </Layout>
                </Col>
            </Row >


        </div >
    )
}

export default withRouter(Target)
