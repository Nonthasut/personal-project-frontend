import React from 'react'
import {Button, notification} from 'antd'
import LocalStorage from '../config/service'
function LogOutButton(props) {
    const logOutFn =()=>{
        try {
            LocalStorage.removeToken()
            props.setRole('guest')
        }
        catch (err) {
           notification.error({
               message: `log out fail`
           })
        }
        window.location.reload(true)
    };
    
    return (
        <div>
             <Button type="link" onClick={logOutFn}>Log out</Button>
        </div>
    )
}

export default LogOutButton
