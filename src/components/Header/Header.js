import './Header.css';
import {Image} from 'antd';
import Menu from '../Menu/Menu';
import { Link } from 'react-router-dom';
function Hedaer() {
    return (
        <div>
            <Link>
            <Image src="" width={100} height={31} />
            </Link>
           <Menu />

        </div>
    )
}
export default Header;