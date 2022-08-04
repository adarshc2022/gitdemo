import React from 'react'
import { Link } from 'react-router-dom';

export default function userInfo({user}) {

  
  const {
    name, 
    login,
    avatar_url,
    company,
    location,
    created_at,
    public_repos,
    followers,
    following 
  } = user;

  return (
    <>
      <div className="top-section">
          <Link className="back-btn" to="/">
            <span className="iconify" data-icon="akar-icons:home"></span>
          </Link>

          <img src={avatar_url} className="avtar" alt="profile img" />
          <h1 className="name">{name}</h1>
          <h2 className="username">@{login}</h2>
          <ul className="info">
            {!company === null && (
              <li>
                <span
                  className="iconify"
                  data-icon="ic:round-work-outline"
                ></span>
                <span className="text">{company}</span>
              </li>
            )}
            {!location === null && (
              <li>
                <span
                  className="iconify"
                  data-icon="akar-icons:location"
                ></span>
                <span className="text">{location}</span>
              </li>
            )}

            <li>
              <span className="iconify" data-icon="uil:calender"></span>
              <span className="text">joined {created_at}</span>
            </li>
          </ul>

          <ul className="brief">
              <li>
                <span className="no">{public_repos}</span>
                <span className="text">REPOSITORIES</span>
              </li>
              <li>
                <span className="no">{followers}</span>
                <span className="text">FOLLOWERS</span>
              </li>
              <li>
                <span className="no">{following}</span>
                <span className="text">FOLLOWING</span>
              </li>
          </ul>
        </div>
    </>
  )
}
