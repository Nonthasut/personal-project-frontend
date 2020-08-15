import React, { useState, useEffect } from 'react'
import axios from '../../config/axios'
import { Form, Input, Button, notification, DatePicker, Row, Col } from 'antd'
import { withRouter } from 'react-router-dom'
import jwtDecode from 'jwt-decode'
import LocalStorageService from '../../config/service'

function EditSituationPage(props) {
    const [form] = Form.useForm();

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
        name: values.name||userData.name,
        birthday: values.birthday||userData.birthday,
        retired_time: values.retired_time||userData.retired_time,
        rest_in_peace_time: values.rest_in_peace_time||userData.rest_in_peace_time

    }

    axios.patch(`/users/${userData.id}`, body)
        .then(res => {
            notification.success({
                message: `Update already`
            })
            props.history.push('/profile')
        })
        .catch(err => {
            notification.error({
                message: `Something is incorrect.`
            })
        })
}

return (
    <div>
        Edit profile page
        
        <Form
            form={form}
            name="edit-profile"
            onFinish={onFinish}
            scrollToFirstError
        >

            <Form.Item
                name="name"
                label={
                    <span>
                        Name
                        </span>
                }
                rules={[
                    {

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

                        message: 'Please select birthday',
                    },
                ]}
            >
                <DatePicker />
            </Form.Item>

            <Form.Item
                name="retired_time"
                label="Retired date"
                rules={[
                    {
                        type: 'object',

                        message: 'Please select retired date',
                    },
                ]}
            >
                <DatePicker />
            </Form.Item>

            <Form.Item
                name="rest_in_peace_time"
                label="Rest in peace date"
                rules={[
                    {
                        type: 'object',

                        message: 'Please select rest in peace date',
                    },
                ]}
            >
                <DatePicker />
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
export default withRouter(EditSituationPage)
