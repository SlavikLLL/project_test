import React, { useEffect, useState } from 'react'
import {Link, useLocation} from "react-router-dom"
import {useNavigate} from 'react-router-dom';

import './Navbar.scss'
import newRequest from '../utils/newReq';

const Navbar = () => {
    const navigate = useNavigate()

    const [active, setActive] = useState(false);
    const [open, setOpen] = useState(false)
    const {pathname} = useLocation()
    const isActive = () =>{
        window.scrollY > 0 ? setActive(true) : setActive(false)
    }
    useEffect(() => {
        window.addEventListener("scroll", isActive )
        return ()=>{
            window.removeEventListener('scroll', isActive)
        }
    }, [])
    
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));

    const handleLogout = async ()=>{
        try {
         await newRequest.post('/auth/logout');
         localStorage.setItem("currentUser",null);
         navigate('/')
        } catch (error) {
            console.log(error);
        }

    }
    
    
  return (
  <div className={active || pathname !=="/" ? 'navbar active' : 'navbar'}>
    <div className="container">
        <div className="logo">
          <Link to='/' className='link'>
          <span className='text'>SlavikLL</span>
          </Link>
          <span className='dot'>.</span>
        </div>
        <div className="links">
            <span>Explore</span>
            <span>English</span>
            <span>Join</span>
            <span>Become a seller</span>
            {!currentUser?.isSeller && <span>Become a Seller</span>}
            {currentUser ? (
            <div className="user" onClick={() => setOpen(!open)}>
              <img src={currentUser.img || "/img/noavatar.jpg"} alt="" />
              <span>{currentUser?.username}</span>
              {open && (
                <div className="options">
                  {currentUser.isSeller && (
                    <>
                      <Link className="link" to="/mygigs">
                        Gigs
                      </Link>
                      <Link className="link" to="/add">
                        Add New Gig
                      </Link>
                    </>
                  )}
                  <Link className="link" to="/orders">
                    Orders
                  </Link>
                  <Link className="link" to="/messages">
                    Messages
                  </Link>
                  <Link className="link" onClick={handleLogout}>
                    Logout
                  </Link>
                </div>
              )}
            </div>
          ) : (
            <>
              <Link to="/login" className="link">Sign in</Link>
              <Link className="link" to="/register">
                <button>Join</button>
              </Link>
            </>
          )}
        </div>
      </div>
    { (active || pathname !=="/") && (
        <>
        <hr />
    <div className="menu">
        <Link className='link menuLink' to = '/'>
            Graphics and Design
        </Link>
        <Link className='link menuLink' to = '/'>
            Video and Animation
        </Link>
        <Link className='link menuLink' to = '/'>
           Writing and Translation
        </Link>
        <Link className='link menuLink' to = '/'>
            AI Services
        </Link>
        <Link className='link menuLink' to = '/'>
            Digital Marketing
        </Link>
        <Link className='link menuLink' to = '/'>
            Music and Video
        </Link>
        <Link className='link menuLink' to = '/'>
            Programming and Tech
        </Link>
        <Link className='link menuLink' to = '/'>
           Bussiness
        </Link>
        <Link className='link menuLink' to = '/'>
            Lifestyle
        </Link>
    </div>
    </>
    )}
  </div>
  )
}

export default Navbar