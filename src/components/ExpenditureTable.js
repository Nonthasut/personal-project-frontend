import React, { useState, useEffect } from 'react'
import { Table } from 'antd';
import axios from 'axios'




function ExpenditureTable() {

    const [userExpenditureData, setUserExpenditureData] = useState('')

    useEffect(() => {
        axios.get(`/expenditures/`).then((res) => {
            setUserExpenditureData(res.data)
        })
            .catch((err) => {
                console.log(err)
            })
    }, [])

    const [userTotalExpenditure, setUserTotalExpenditure] = useState('')

    useEffect(() => {
        axios.get(`/expenditures/total`).then((res) => {
            setUserTotalExpenditure(res.data)
        })
            .catch((err) => {
                console.log(err)
            })
    }, [])

    const resultColumns = [
        {
            title: 'รวมกระแสรายจ่ายต่อเดือน',
            dataIndex: 'expenditure_total'
        }
    ]

    const totalExpenditure = [
    {
        expenditure_total: `${userTotalExpenditure}`    
    }
]


    const columns = [
        {
            title: 'รายการรายจ่าย',
            dataIndex: 'expenditure_list',
        },
        {
            title: 'มูลค่าของรายจ่ายของรายการนี้ (ต่อครั้ง)',
            dataIndex: 'expenditure_value_per_time'
        }
        ,
        {
            title: 'จำนวนครั้งที่จะต้องชำระรายจ่ายจากรายการนี้(ต่อเดือน)',
            dataIndex: 'expenditure_quantity_per_month'
        }
        ,
        {
            title: 'มูลค่ารายจ่าย (ต่อเดือน)',
            dataIndex: 'expenditure_value'
        }
        
    
    ];

    
    return (
        <div>
            <Table columns={columns} dataSource={userExpenditureData} />
            <Table columns={resultColumns} dataSource={totalExpenditure} />
        </div>
    )
}

export default ExpenditureTable

