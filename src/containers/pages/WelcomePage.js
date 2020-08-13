import React from 'react'
import { withRouter } from 'react-router-dom'

function WelcomePage(props) {
    const linkToLogIn =()=>{
    props.history.push('/login')
    }
    const linkToIntro =()=>{
    props.history.push('/intro')
    }
    return (
        <div>
            <h1>WelcomePage</h1>
            <button onClick={linkToLogIn}>Skip</button>
            <p onClick={linkToIntro}>Click here to continue</p>
        </div>
    )
}

export default withRouter(WelcomePage)
