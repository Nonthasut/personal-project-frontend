import React, { useState, useEffect } from 'react'
import { Table, Popconfirm, notification } from 'antd';
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

    const [idExpenditureData, setIdExpenditureData] = useState('')
    const columns = [
        {
            title: 'id',
            dataIndex: 'id',
        },
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
        } ,
        {
            title: 'ลบ',
            render: () => (
                <Popconfirm title="Sure to delete?"
                    onConfirm={() => {
                        axios.delete(`/expenditures/${idExpenditureData}`)
                            .then(res => {
                                notification.success({
                                    message: `Delete list already`
                                })

                            })
                            .catch(err => {
                                notification.error({
                                    message: `Cannot delete`
                                })
                            })
                        window.location.reload(true)

                    }
                    }>
                    <a>Delete</a>
                </Popconfirm>)
        }


    ];


    return (
        <div>
            <Table columns={columns.filter(col => col.dataIndex !== 'id')}
                dataSource={userExpenditureData}
                onRow={(record, rowIndex) => {
                    return {
                        onClick: e => { setIdExpenditureData(record.id) }
                    }
                }
                }
            />
            <Table columns={resultColumns} dataSource={totalExpenditure} pagination={false} />
        </div>
    )
}

export default ExpenditureTable

