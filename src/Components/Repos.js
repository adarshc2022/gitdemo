import axios from 'axios';
import React, { useEffect, useState } from 'react'

export default function Repos({repos_url}) {

  const [repos, setRepos] = useState('');
      useEffect(()=>{
          axios.get(repos_url)
          .then(response => setRepos(response.data))
      },[])

  return (
    <>
      <div className="bottom-section">
          <h1>All Repos</h1>
          <div className="repo-wrapper">
            {
              Array.from(repos).map(repo =>{
              
                const {
                  id,
                  name,
                  description,
                  language,
                  stargazers_count,
                  forks_count,
                  size
                } = repo;

                return(
                  <div className="repo" key={id}>
                  <div className="heading">
                    <span className="iconify" data-icon="iconoir:repository"></span>
                    <h3 className="text">{name}</h3>
                  </div>
                  <div className="description">{description}</div>
                  <div className="more">
                    <div className="left">
                      <span className="inner">
                        <span className="iconify" data-icon="ci:dot-05-xl"></span>
                        <span className="text">{language}</span>
                      </span>
                      <span className="inner">
                        <span
                          className="iconify"
                          data-icon="ant-design:star-filled"
                        ></span>
                        <span className="text">{stargazers_count}</span>
                      </span>
                      <span className="inner">
                        <span className="iconify" data-icon="charm:git-fork"></span>
                        <span className="text">{forks_count}</span>
                      </span>
                    </div>
                    <div className="right">{size}KB</div>
                  </div>
                </div>
                )

              })
            } 
          </div>
        </div>
    </>
  )
}
