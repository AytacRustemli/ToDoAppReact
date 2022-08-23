import React, { useEffect, useState } from 'react'
import Login from '../components/Login/Login'
import { useDispatch,useSelector } from 'react-redux'
import Dashboard from './Dashboard'
import { getUserAction } from './../redux/Actions/UserAction';

const Auth = () => {

  const {userInfo} = useSelector((state) => state.user)
  const dispach = useDispatch()
  useEffect(() => {
    dispach(getUserAction())
  },[dispach])

  if (userInfo.length !==0 ) {
    return (
      <div>
          <Dashboard />
      </div>
    )
  }else{
    return (
      <div>
          <Login />
      </div>
    )
  }
}

export default Auth