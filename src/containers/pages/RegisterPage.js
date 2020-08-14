import React, { useState } from 'react'
import axios from '../../config/axios'
import { withRouter } from 'react-router-dom'
import { Form, Input, Button, notification, DatePicker, Row, Col } from 'antd'


function RegisterPage(props) {

    const [form] = Form.useForm();
      
  
    const onFinish = values => {
        console.log('Received values of form: ', values);

        const body = {
            username: values.username,
            password: values.password,
            name: values.name,
            birthday: values.birthday,
        }
        
        axios.post('/users/register', body)
            .then(res => {
                notification.success({
                    message: `Thank you for register, Account is ready to use.`
                })
                props.history.push('/login')
            })
            .catch(err => {
                notification.error({
                    message: `Register is incorrect please fill all information`
                })
            })
    };


    return (
        <div>

            <Form
                form={form}
                name="register"
                onFinish={onFinish}
                scrollToFirstError
            >

                <Form.Item
                    name="username"
                    label="Username"
                    rules={[
                        {
                            required: true,
                            message: 'Please enter username',
                        },
                    ]}
                    hasFeedback
                >
                    <Input />
                </Form.Item>


                <Form.Item
                    name="password"
                    label="Password"
                    rules={[
                        {
                            required: true,
                            message: 'Please enter your password!',
                        },
                    ]}
                    hasFeedback
                >
                    <Input.Password />
                </Form.Item>

                <Form.Item
                    name="confirm"
                    label="Confirm Password"
                    dependencies={['password']}
                    hasFeedback
                    rules={[
                        {
                            required: true,
                            message: 'Please confirm your password!',
                        },
                        ({ getFieldValue }) => ({
                            validator(rule, value) {
                                if (!value || getFieldValue('password') === value) {
                                    return Promise.resolve();
                                }

                                return Promise.reject('Confirm password confirmation do not much.');
                            },
                        }),
                    ]}
                >
                    <Input.Password />
                </Form.Item>


                <Form.Item
                    name="name"
                    label={
                        <span>
                            Name
                        </span>
                    }
                    rules={[
                        {
                            required: true,
                            message: 'Please enter your name',
                        },
                    ]}
                >
                    <Input />
                </Form.Item>


                <Form.Item 
                name="birthday" 
                label="Birthday" 
                rules={[ 
                    {
                      type: 'object',
                      required: true,
                      message: 'Please select birthday',
                    },
                ]}
                  >
                    <DatePicker />
                </Form.Item>


                <Form.Item >
                    <Button type="primary" htmlType="submit">
                        Register
                    </Button>
                </Form.Item>

            </Form>
        </div>
    )
}

export default withRouter(RegisterPage)
