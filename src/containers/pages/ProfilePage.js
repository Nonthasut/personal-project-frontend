import React, { useState, useEffect } from 'react'
import { withRouter } from 'react-router-dom'
import { Button } from 'antd'
import jwtDecode from 'jwt-decode'
import LocalStorageService from '../../config/service'
import axios from 'axios'
import UserResultTable from '../../components/UserResultTable'
import Navbar from '../../components/Navbar'
function ProfilePage(props) {
  const linkToEditProfile = () => {
    props.history.push('/edit-profile')
  }

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

  const calculateAge = Math.floor((((new Date())-new Date(userData.birthday))/(1000*3600*24))/365) 
  const calculateLifespan = Math.floor((((new Date(userData.rest_in_peace_time))-new Date(userData.birthday))/(1000*3600*24))/365) 
 


  return (
    <div>

      <h1>ProfilePage</h1>
      <Navbar/>
      <p>Name: {`${userData.name}`} </p>
      <p>Birthdate: {`${userData.birthday}`}</p>
      <p>Age: {`${calculateAge}`}</p>
      <p>คุณตั้งเป้าหมายว่าจะเกษียณวันที่: {`${userData.retired_time}`}</p>
      <p>คุณคาดว่าคุณจะมีชีวิตอยู่ถึงวันที่: {`${userData.rest_in_peace_time}`}</p>
      <p>ในตอนนั้นคุณจะมีอายุ: {`${calculateLifespan}`}</p>
      <Button onClick={linkToEditProfile}>Edit profile</Button>
      <UserResultTable/>
      
    </div>
  )
}

export default withRouter(ProfilePage)
