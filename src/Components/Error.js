import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

export default function Error() {
  
  const [show, setShow] = useState('');

  useEffect(()=>{
    setTimeout(()=> setShow(true),1000)
  },[show])

  return (
    <>
      { show &&
          <div className="error">
            <div className="inner">
              <h1>404</h1>
              <p>user not found!</p>
              <Link className="btn" to="/">Go to Home</Link>
            </div>
          </div>
      }     
    </>
  )
}