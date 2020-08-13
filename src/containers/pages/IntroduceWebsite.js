import React from 'react'
import { withRouter } from 'react-router-dom'

function IntroduceWebsite(props) {
  const linkToLogin=()=>{
    props.history.push('/login')
  }
    return (
        <div>
          <h1>IntroduceWebsite</h1>  
          <p onClick={linkToLogin}>Click here to homepage</p>
        </div>
    )
}

export default withRouter(IntroduceWebsite)
