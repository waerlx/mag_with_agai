import React from 'react';
import Home from '../../Pages/Home/Home';
import Catalog from '../../Pages/Catalog/Catalog';
import Cart from '../../Pages/Cart/Cart';
import Contacts from '../../Pages/Contacts/Contacts';
import Likes from '../../Pages/Likes/Likes';
import MyBooks from '../../Pages/My books/MyBooks';
import NotFound from '../../Pages/NotFound/NotFound';
import Order from '../../Pages/Order/Odrer';

import {
  BrowserRouter as Router,
  Link,
  Routes,
  Route,
  Outlet
} from 'react-router-dom';
function Menu() {
    return(
        <div className="menu">
            <div>HEADER</div>
            <div className="container">
                <Outlet />
            </div>
        </div>
    )
}
export default Menu;