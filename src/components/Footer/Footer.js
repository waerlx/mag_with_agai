import './Footer.css';
import { BrowserRouter, Link, Router } from 'react-router-dom';
function Footer() {
    return (
        <div className="footer">

            <div className="container">
                <div className="footer_wrap">
                    <div className="links-acc">
                        <div className="footer-links-top">

                        </div>
                        <div className="footer-links-bottom flex">
                            <Router>
                                <Link className='footer-link-ic'></Link>
                                <Link className='footer-link-ic'></Link>
                                <Link className='footer-link-ic'></Link>
                                <Link className='footer-link-ic'></Link>
                            </Router>

                        </div>

                    </div>

                </div>
            </div>

        </div>
    );
}
export default Footer;