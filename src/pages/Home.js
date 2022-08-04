
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

export default function Home() {
  document.title = `Welcome to MyGit2`;
  
  const navigate = useNavigate();

  const [param, setParam] = useState('');


  return (
    <>
      <div className="home">
        <div className="inner">
          <img className='logo-img' src="./logo512.png" alt='Logo'/>
          <h1 className="tagline">Find your Profiles</h1>
          <input type="text" 
            className="search-bar" 
            value={param} 
            onChange={e => setParam(e.target.value)} 
            onKeyDown={e => e.key=== 'Enter' && navigate(`/${param}`) }
          />
        </div>
      </div>
    </>
  )
}
