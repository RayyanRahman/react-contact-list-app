import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        // our main navbar
        <nav className='navbar navbar-expand-lg navbar-success bg-success py-2  '>
            <p className='navbar-brand ml-5 text-success fw-bold fs-3'>.........Contact List Application........</p>
            {/* contact list icon */}
            <img
            src="https://cdn-icons-png.flaticon.com/32/9839/9839447.png"
            alt="Logo"
          />
            <div className='container '>
          {/* main heading */}
                <Link to='/' className='navbar-brand ml-5 text-white fw-bold fs-3'>Contact List Application</Link>

            </div>

            {/* <Link to='/' className='navbar-brand ml-5 text-white ms-5'>Contact List App</Link> */}
        </nav >
    )
}

export default Navbar