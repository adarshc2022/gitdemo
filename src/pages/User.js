import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Error from '../Components/Error';
import Repos from '../Components/Repos';
import UserInfo from '../Components/UserInfo';

export default function User() {
  const {param} = useParams();
  const [user,setUser] = useState(null);
  const [show, setShow] = useState();

  useEffect(()=>{
    document.title = `MyGit2 - ${param}`

      axios.get(`https://api.github.com/users/${param}`)
      .then(response =>{
        setUser(response.data) 
        setShow(true)
      })
      .catch( () => {
        console.clear();
        setShow(false) 
      })
    },[param])

  return(
    <div className="user">
      
      { show===true && 
          <>
            <UserInfo user={user}/>
            <Repos repos_url={user.repos_url}/>
          </> }
      
      { show!==true && <Error/>

      }
        
    </div>
  )

}
