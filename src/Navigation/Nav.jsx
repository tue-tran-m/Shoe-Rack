import {FiHeart} from 'react-icons/fi'
import {AiOutlineShoppingCart, AiOutlineUserAdd} from 'react-icons/ai'
import { BiHomeAlt2 } from "react-icons/bi";
import { Link } from 'react-router-dom';
import './Nav.css'

function Nav() {

    return(
        <nav>
            <div className="profile-container">
                <Link to={'/'}>
                    <BiHomeAlt2 className='nav-icons' />
                    <span className="description"> Home </span>
                </Link> 

                <Link to={'/cart'}>
                    <AiOutlineShoppingCart className='nav-icons' />
                    <span className="description"> Shopping Cart </span>
                </Link> 
            </div>
        </nav>
    );
}

export default Nav;