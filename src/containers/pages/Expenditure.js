import React from 'react'
import Navbar from '../../components/Navbar'
import { Form, Input, Button } from 'antd'

function Expenditure() {
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
            Expenditure
    

            
            <Form
                form={form}
                name='expenditure'
                onFinish={onFinish}
            >

                <Form.Item
                    name="expenditur-list"
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
                    name='unitOfTime'
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

                    {/* <Select defaultValue="30" style={{ width: 120 }} onChange={handleChange}>
                        <Option value="30">วัน</Option>
                        <Option value="4">สัปดาห์</Option>
                        <Option value="1">เดือน</Option>
                        <Option value="0.083">ปี</Option>
                    </Select> */}

                </Form.Item>

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
                    {/* <Select defaultValue="..." style={{ width: 120 }} onChange={handleChange}>
                        <Option value="...">จนกว่าจะเกษียณ</Option>
                        <Option value="...">จนกว่าจะเสียชีวิตได้</Option>
                    </Select> */}
                </Form.Item>

                <Form.Item
                    name="valueOfIncome"
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


                    {/*    
                    <label for='value of compound interest'>
                        <p>รายการนี้มีการเติบโตจากมูลค่าต้นหรือไม่ คำนวณแบบเป็นต่อปี เช่น ฐานเงินเดือนเพิ่มขึ้นทุกๆปี</p> <br />
                        <p>*เป็นรูปแบบการเติบโตแบบดอกเบี้ยทบต้น(ยังไม่ได้คิดฟีเจอร์เพิ่มเงินต้นเข้าไปเอง)</p>
                        <input type='text' placeholder='1(R-r)**n' />
                    </label> */}
                </Form.Item>

                <Form.Item >
                    <Button type="primary" htmlType="submit">
                        confirm
                    </Button>
                </Form.Item>
            </Form>



        </div>
    )
}

export default Expenditure
