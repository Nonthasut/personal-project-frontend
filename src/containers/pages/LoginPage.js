import React, { useState } from 'react'
import axios from '../../config/axios'
import LocalStorage from '../../config/service'
import { Form, Input, Button, Checkbox, notification ,Row,Col} from 'antd'
import { withRouter } from 'react-router-dom'


const layout = {
    labelCol: { xs: 24, sm: 5, md: 4, lg: 5, xl: 4, xxl: 3 },
    wrapperCol: { xs: 24, sm: 19, md: 20, lg: 19, xl: 20, xxl: 21 },
};


const tailLayout = {
    wrapperCol: {
        offset: 8,
        span: 16,
    },
};


function LoginPage(props) {

    const onFinish = async(values) => {
        console.log('Success:', values);
        const body = {
            username:values.username,
            password:values.password
        }
        try {
            const token = await axios.post('/users/login', body)
            LocalStorage.setToken(token.data.token)
            props.setRole('user')
        }
        catch (err) {
           notification.error({
               message: `เข้าสู่ระบบล้มเหลว`
           })
        }
    };

    const linkToRegister=()=>{
        props.history.push('/register')
    }

return (
    <Row>
    <Col span={24}>
    <div>
        <h1>Log in</h1>
        <Row justify='center'>
       <Col span={4}></Col>
       <Col span={16}>
        <Form
            onFinish={onFinish}
            {...layout}
            name="loginForm"
            initialValues={{
                remember: true,
            }}

        >
            
            <Form.Item
                label="Username"
                name="username"
                rules={[
                    {
                        required: true,
                        message: 'Please enter your Username',
                    },
                ]}
            >
                <Input />
            </Form.Item>

            <Form.Item
                label="Password"
                name="password"
                rules={[
                    {
                        required: true,
                        message: 'Please enter your Password',
                    },
                ]}
            >
                <Input.Password />
            </Form.Item>

            <Form.Item {...tailLayout} name="remember" valuePropName="checked">
                <Checkbox>Remember me</Checkbox>
            </Form.Item>

            <Form.Item {...tailLayout}>
                <Button type="primary" htmlType="submit">
                    Login
                     </Button>
            </Form.Item>
                <p onClick={linkToRegister}>Register</p>
        </Form>
       </Col>
       <Col span={4}></Col>
       </Row>
    </div>
    </Col>
    </Row>
)
            }

export default withRouter(LoginPage)
