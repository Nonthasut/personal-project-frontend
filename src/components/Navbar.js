import React from 'react'
import { withRouter } from 'react-router-dom'
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

        <span><button onClick={linkToProfile}>Profile page</button> </span>
        <span><button onClick={linkToIncome}>Income page</button> </span>
        <span><button onClick={linkToExpenditure}>Expenditure page</button></span>
        <span><button onClick={linkToTarget}>Target page</button></span>
        
        </div>
    )
}

export default withRouter(Navbar)
