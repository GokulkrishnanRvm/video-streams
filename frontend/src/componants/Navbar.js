import React, { useState} from 'react'
import { FaBars} from 'react-icons/fa'
// import { links, social } from './data'
import logo from '../styles/logo.svg'
import styled from 'styled-components'


const Navbar = () => {
  const [show , setShow]= useState(false)
  return (
  <Wrapper>
    <div className="nav-center">
      <div className="nav-header">
        <img src={logo} className="logo" alt="logo" />
        <button className="nav-toggle" onClick={()=>setShow(!show)}>
          <FaBars />
        </button>
      </div>
         {/* <div className={`${show ?'links-container show-container':'links-container'}`}>
          <ul className="links">
           {links.map((link)=>{
            const {id,text,url} = link;
            return (<li 
              key={id}><a href={url}>{text}</a>
              </li>)
           })}
          </ul>
        </div>
        <ul className="social-icons">
          {social.map((socials) =>{
            const {id,icon,url} = socials;
            return (<li key={id}><a href={url}>{icon}</a></li>)
          })}
        </ul> */}
    </div>
  </Wrapper>)
}

export default Navbar


const Wrapper = styled.nav`
  background: var(--clr-white);
  box-shadow: var(--light-shadow);

.nav-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.nav-toggle {
  font-size: 1.5rem;
  color: var(--clr-primary-5);
  background: transparent;
  border-color: transparent;
  transition: var(--transition);
  cursor: pointer;
}
.nav-toggle:hover {
  color: var(--clr-primary-1);
  transform: rotate(90deg);
}

.show-container {
  height: 10rem;
}
.logo {
  height:80px;
}
@media screen and (min-width: 800px) {
  .nav-center {
    max-width: 1170px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;

  }
  .nav-header {
    padding: 0;
  }
  .nav-toggle {
    display: none;
  }
  
}

`