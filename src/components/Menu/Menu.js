import React from 'react';
import Home from '../../Pages/Home/Home';
import Catalog from '../../Pages/Catalog/Catalog';
import Cart from '../../Pages/Cart/Cart';
import Contacts from '../../Pages/Contacts/Contacts';
import Likes from '../../Pages/Likes/Likes';
import MyBooks from '../../Pages/My books/MyBooks';
import NotFound from '../../Pages/NotFound/NotFound';
import Order from '../../Pages/Order/Odrer';
import About from '../../Pages/About/About';
import './Menu.css'

import {
    BrowserRouter as Router,
    Link,
    Routes,
    Route
} from 'react-router-dom'
function Menu() {
    return (
        <div>
            <header className='App-menu'>
                <div className="container">
                    <div >
                        <Router>
                            <nav className='menu' >
                                <ul className='menu flex'>
                                    <li>
                                        <Link to="/">Home</Link>
                                    </li>
                                    <li>
                                        <Link to="./About">About</Link>
                                    </li>
                                    <li>
                                        <Link to="./Catalog">Contact</Link>
                                    </li>
                                    
                                </ul>
                            </nav>

                            <Routes>
                                <Route path="/" element={<Home />} />
                                <Route path="cart" element={<Cart />} />
                                <Route path="about" element={<About />} />
                                <Route path="NotFound" element={<NotFound />} />
                            </Routes>

                        </Router>
                    </div>
                </div>
            </header>
        </div>
    );
}
export default Menu;