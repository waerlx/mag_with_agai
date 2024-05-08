import './Header.css';
import {Image} from 'antd';
import Menu from '../Menu/Menu';
import { Link } from 'react-router-dom';
import logo from "../../../public/Img/icons/logo"
function Header() {
    return (
        <div>
            <header>
            <Link>
            <Image src={logo} width={100} height={31} />
            </Link>
           <Menu />
           </header>

        </div>
    )
}
export default Header;