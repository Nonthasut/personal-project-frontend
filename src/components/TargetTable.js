import React, { useState, useEffect } from 'react'
import { Table } from 'antd';
import axios from 'axios'


function TargetTable() {

    const [userTargetData, setUserTargetData] = useState('')

    useEffect(() => {
        axios.get(`/targets/`).then((res) => {
            setUserTargetData(res.data)
        })
            .catch((err) => {
                console.log(err)
            })
    }, [])

    
    const [userTotalTarget,setUserTotalTarget] = useState('')

    useEffect(() => {
        axios.get(`/targets/total`).then((res) => {
            setUserTotalTarget(res.data)
        })
            .catch((err) => {
                console.log(err)
            })
    }, [])



    const columns = [
        {
            title: 'รายการเป้าหมาย',
            dataIndex: 'target_list',
        },
        {
            title: 'มูลค่าของรายจ่ายของเป้าหมายนี้ (ต่อครั้ง)',
            dataIndex: 'target_value_per_time'
        }
        ,
        {
            title: 'จำนวนครั้งที่ต้องชำระ(ต่อเดือน)',
            dataIndex: 'target_quantity_per_month'
        },
        {
            title: 'มูลค่าที่ต้องจ่าย (ต่อเดือน)',
            dataIndex: 'target_value'
        },
    
    ];

    const resultColumns = [
        {
            title: 'มูลค่าสุทธิ์ของเป้าหมาย',
            dataIndex: 'target_total'
        }
    ]

    const totalTarget = [
    {
        target_total: `${userTotalTarget}`    
    }
]

    return (
        <div>
            <Table columns={columns} dataSource={userTargetData} />
            <Table columns={resultColumns} dataSource={totalTarget} />
        </div>
    )
}

export default TargetTable
