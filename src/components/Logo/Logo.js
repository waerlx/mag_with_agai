import './Logo.css';
import { Link } from 'react-router-dom';
import logo from '../Image/logo.png'
import { Typography } from 'antd';

function Logo() {
    return (
        <div className="logo_wrap flex">
            <img className='logo_img' src={logo} alt='' />
            <Typography className='logo_tit'>LINE</Typography>
        </div>



    )
}
export default Logo;