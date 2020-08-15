import React, { useState, useEffect } from 'react'
import { Table } from 'antd';
import axios from 'axios'
import jwtDecode from 'jwt-decode'
import LocalStorageService from '../config/service'

function UserResultTable() {

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

    const [userTotalIncome, setUserTotalIncome] = useState('')

    useEffect(() => {
        axios.get(`/incomes/total`).then((res) => {
            setUserTotalIncome(res.data)
        })
            .catch((err) => {
                console.log(err)
            })
    }, [])

    const columnsIncome = [

        {
            title: 'กระแสรายได้',
            dataIndex: 'income_total'
        },

    ];

    const totalIncome = [
        {
            income_total: `${userTotalIncome}`
        }
    ]



    const [userTotalExpenditure, setUserTotalExpenditure] = useState('')

    useEffect(() => {
        axios.get(`/expenditures/total`).then((res) => {
            setUserTotalExpenditure(res.data)
        })
            .catch((err) => {
                console.log(err)
            })
    }, [])

    const columnsExpenditure = [

        {
            title: 'กระแสรายจ่าย',
            dataIndex: 'expenditure_total'
        },

    ];

    const totalExpenditure = [
        {
            expenditure_total: `${userTotalExpenditure}`
        }
    ]


    const [userTotalTarget, setUserTotalTarget] = useState('')

    useEffect(() => {
        axios.get(`/targets/total`).then((res) => {
            setUserTotalTarget(res.data)
        })
            .catch((err) => {
                console.log(err)
            })
    }, [])


    const resultColumns = [
        {
            title: 'เป้าหมายที่คุณตั้งเอาไว้เป็นจำนวนเงินทั้งสิ้น (เริ่มใช้เงินวันแรกคือวันเกษียณ)',
            dataIndex: 'target_total'
        }
    ]


    const monthRemainToRetired = Math.floor(((((new Date(userData.retired_time)) - new Date()) / (1000 * 3600 * 24)) / 365) * 12)
    const monthRemainToRestInPeace = Math.floor(((((new Date(userData.rest_in_peace_time)) - new Date()) / (1000 * 3600 * 24)) / 365) * 12)
    const remainTimeAfterRetired = monthRemainToRestInPeace - monthRemainToRetired

    const totalTarget = [
        {
            target_total: `${userTotalTarget * remainTimeAfterRetired}`
        }
    ]




    const columnsCashflow = [

        {
            title: 'กระแสเงินสดต่อเดือนของคุณคือ',
            dataIndex: 'cashflow_total'
        },

    ];

    const totalCashflow = [
        {
            cashflow_total: `${userTotalIncome - userTotalExpenditure}`
        }
    ]

    const columnsPossible = [

        {
            title: 'คุณต้องใช้เวลาในการทำให้เป้าหมายของคุณเป็นจริงเป็นเวลา(หน่วยเป็นเดือน)',
            dataIndex: 'time_to_target'
        },
        {
            title: 'หรือก็คือต้องเก็บออมเงินเป็นเวลาทั้งสิ้น (หน่วยเป็นปี)',
            dataIndex: 'time_to_target_year'
        },

    ];




    const totalPossible = [
        {
            time_to_target: Math.ceil(`${(userTotalTarget * remainTimeAfterRetired)/(userTotalIncome - userTotalExpenditure)}`),
            time_to_target_year: Math.ceil(`${((userTotalTarget * remainTimeAfterRetired)/(userTotalIncome - userTotalExpenditure))/12}`)
        }
    ]

    return (
        <div>
            <Table columns={columnsIncome} dataSource={totalIncome} />
            <Table columns={columnsExpenditure} dataSource={totalExpenditure} />
            <Table columns={columnsCashflow} dataSource={totalCashflow} />
            <Table columns={resultColumns} dataSource={totalTarget} />
            <Table columns={columnsPossible} dataSource={totalPossible} />

        </div>
    )
}

export default UserResultTable
