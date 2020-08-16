import React from 'react'
import { withRouter } from 'react-router-dom'
import {Button} from 'antd'

function Navbar(props) {
    const linkToProfile=()=>{
        props.history.push('/profile')
    }
    const linkToIncome=()=>{
        props.history.push('/income')
    }
    const linkToExpenditure=()=>{
        props.history.push('/expenditure')
    }
    const linkToTarget=()=>{
        props.history.push('/target')
    }
    return (
        <div>

        <span><Button onClick={linkToProfile} type='link'>Profile page</Button> </span>
        <span><Button onClick={linkToIncome} type='link'>Income page</Button> </span>
        <span><Button onClick={linkToExpenditure} type='link'>Expenditure page</Button></span>
        <span><Button onClick={linkToTarget} type='link'>Target page</Button></span>
        
        </div>
    )
}

export default withRouter(Navbar)
