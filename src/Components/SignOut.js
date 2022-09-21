import React from 'react'
import {auth} from '../firebase'
import {signOut} from 'firebase/auth'

export const SignOut = () => {

    const logput = () => {
        signOut(auth)
    }

  return (
    <button onClick={logput}>SignOut</button>
  )
}

export default SignOut