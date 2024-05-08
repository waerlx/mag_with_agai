import './Header.css';
import { Image } from 'antd';
import Menu from '../Menu/Menu';
import Logo from '../Logo/Logo';
import { AudioOutlined } from '@ant-design/icons';
import SearchOn from '../Search/Search'
function Header() {
    return (
        <>
            <header>
                <div className="container">
                    <div className="wrap_header flex">
                        <Logo />
                        <SearchOn/>

                        <Menu />
                    </div>

                </div>

            </header>


        </>
    )
}
export default Header;