import React, { useState, useEffect } from 'react'
import { Table } from 'antd';
import axios from 'axios'




function IncomeTable() {

    const [userIncomeData, setUserIncomeData] = useState('')

    useEffect(() => {
        axios.get(`/incomes/`).then((res) => {
            setUserIncomeData(res.data)
        })
            .catch((err) => {
                console.log(err)
            })
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




    const columns = [
        {
            title: 'รายการรายได้',
            dataIndex: 'income_list',
        },
        {
            title: 'มูลค่าของรายได้ของรายการนี้ (ต่อครั้ง)',
            dataIndex: 'income_value_per_time'
        }
        ,
        {
            title: 'จำนวนครั้งที่ได้รับรายได้จากรายการนี้(ต่อเดือน)',
            dataIndex: 'income_quantity_per_month'
        }
        ,
        {
            title: 'มูลค่ารายได้ (ต่อเดือน)',
            dataIndex: 'income_value'
        }
       
    
    ];

    const resultColumns = [
        {
            title: 'รวมกระแสรายได้ต่อเดือน',
            dataIndex: 'income_total'
        }
    ]

    const totalIncome = [
    {
        income_total: `${userTotalIncome}`    
    }
]
    

    return (
        <div>
            <Table columns={columns} dataSource={userIncomeData} />
            <Table columns={resultColumns} dataSource={totalIncome} />

        </div>
    )
}

export default IncomeTable

