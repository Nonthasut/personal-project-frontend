import React from 'react'
import Navbar from '../../components/Navbar'
import { Form, Input, Button } from 'antd'


 
function Target() {
    const [form] = Form.useForm();

    // const { Option } = Select;
    // function handleChange(value) {
    //     console.log(`selected ${value}`);

    // }
    const onFinish = values => {
        console.log('Received values of form: ', values);

    };
    return (
        <div>
            Target
           

            <h1>ในหัวข้อเป้าหมายจะคำนวณมูลค่าเริ่มจากวันที่เกษียณเป็นวันแรกไปจนถึงวันที่คาดว่าจะเสียชีวิต</h1>
            <h2>คำแนะนำเบื้องต้น</h2> <br/>
            <p>รายการที่คุณต้องคำนวณที่เป็นพื้นฐานที่สุดควรมีดังนี้ ค่าอาหารต่อวัน , ค่าสำรองเผื่อป่วย , ค่าสาธารณูปโภคพื้นฐาน , ค่าสำรองเผื่ออุบัติเหตุ นอกเหนือนี้ไม่ว่าจะครอบครัว,งานอดิเรก,ความฝัน,ความต้องการส่วนตัวระบุได้ตามที่ท่านได้ฝันไว้ว่าอยากจะครอบครองได้เลยครับ</p>

            
            <Form
                form={form}
                name='income'
                onFinish={onFinish}
            >

                <Form.Item
                    name="target-list"
                    label="ชื่อรายการของเป้าหมาย"
                    rules={[
                        {
                            required: true,
                            message: 'กรุณาใส่รายการของเป้าหมาย',
                        },
                    ]}
                    hasFeedback
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    name='unitOfTime'
                    label='จะต้องชำระรายจ่ายของรายการนี้กี่ครั้ง'
                    rules={[
                        {
                            required: true,
                            message: 'กรุณากรอกจำนวนรอบการชำระรายจ่าย'
                        },
                    ]}
                    hasFeedback
                >
                    <Input />

                    {/* <Select defaultValue="30" style={{ width: 120 }} onChange={handleChange}>
                        <Option value="30">วัน</Option>
                        <Option value="4">สัปดาห์</Option>
                        <Option value="1">เดือน</Option>
                        <Option value="0.083">ปี</Option>
                    </Select> */}

                </Form.Item>

                <Form.Item
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
                    {/* <Select defaultValue="..." style={{ width: 120 }} onChange={handleChange}>
                        <Option value="...">จนกว่าจะเกษียณ</Option>
                        <Option value="...">จนกว่าจะเสียชีวิตได้</Option>
                    </Select> */}
                </Form.Item>

                <Form.Item
                    name="valueOfIncome"
                    label="มูลค่ารายจ่ายของรายการนี้ต่อรอบ<"
                    rules={[
                        {
                            required: true,
                            message: 'กรุณาใส่มูลค่ารายจ่ายของรายการนี้ต่อรอบ',
                        },
                    ]}
                    hasFeedback
                >
                    <Input />
                </Form.Item>

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


                    {/*    
                    <label for='value of compound interest'>
                        <p>รายการนี้มีการเติบโตจากมูลค่าต้นหรือไม่ คำนวณแบบเป็นต่อปี เช่น ฐานเงินเดือนเพิ่มขึ้นทุกๆปี</p> <br />
                        <p>*เป็นรูปแบบการเติบโตแบบดอกเบี้ยทบต้น(ยังไม่ได้คิดฟีเจอร์เพิ่มเงินต้นเข้าไปเอง)</p>
                        <input type='text' placeholder='1(R-r)**n' />
                    </label> */}
                </Form.Item>

                <Form.Item >
                    <Button type="primary" htmlType="submit">
                        Confirm
                    </Button>
                </Form.Item>
            </Form>



        </div>
    )
}

export default Target
