import React from 'react'
import './Navbar.scss'

    const Navbar = () => {
    return (
        <nav className='app__navbar'>
            <div className="app__navbar-container">
                <div className="app__navbar-top">
                    <div className="app__navbar-dropdown">
                        <button>My Account<span class="material-symbols-outlined">expand_more</span></button>
                        <div className="app__navbar-content">
                            <p>Sign In</p>
                            <p>Create an Account</p>
                            <p>My Wishlist</p>
                            <p>Compare List</p>
                        </div>
                    </div>
                </div>
                <div className="app__navbar-bottom">
                    <img src="./shirt.svg" alt="store logo" />
                    <nav>
                        <ul>
                            <li className='fromCenter'>HOME</li>
                            <li>ABOUT</li>
                            <li>COLLECTIONS</li>
                            <li>SHOP</li>
                            <li>BESPOKE</li>
                        </ul>
                    </nav>
                    <div className="app__navbar-icon">
                        <span class="material-symbols-outlined">search</span> |
                        <span class="material-symbols-outlined">shopping_cart</span>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar