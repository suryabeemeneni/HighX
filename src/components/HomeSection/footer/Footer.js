import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <footer>
            <div className='footer-main'>
                <div className='footer-containers'>
                <div className='footer-container12'>
                <div className='footer-container1'>
                    <a href='' className='footer-container1-para' title='About us'>About us</a>
                    <a href='' className='footer-container1-para' title='Contact us'>Contact us</a>
                    <a href='' className='footer-container1-para' title='Careers'>Careers</a>
                    <a href='' className='footer-container1-para' title='Terms of Services'>Terms of Services</a>
                    <a href='' className='footer-container1-para' title='Privacy policy'>Privacy policy</a>
                </div>
                <div className='footer-container2'>
                    <a href=''>Refer a Friend</a>
                    <a href=''>In The News</a>
                    <a href=''>Clients & Reviews</a>
                    <a href=''>Blogs</a>
                    <a href=''>FAQ</a>
                </div>
                </div>
                <div className='footer-container3'>
                    <div className='footer-container3-all'>
                    <div className='footer-container3-one'>
                    <a href='' className='footer-container3-first f-c-f' title='email'><i class="footer-container3-first-envelope"><i className='fas fa-envelope'></i></i><p className='f-c-f-p'>info@highx.com</p></a>
                    <div className='footer-container3-first'><i class="fas footer-container3-first-envelope"><i className='fas fa-phone-alt'></i></i>
                            <div className='footer-container3-first-link'>
                            <a class="footer-container3-first-link-number f-c-f-p" href="tel:1-800-800-741" title="Toll Free">1-800-800-741</a>
                            <span class="footer-container3-first-link-number">|</span>
                            <a class="footer-container3-first-link-number f-c-f-p" href="tel:879-030-4431" title="Call Us">879-030-4431</a>
                            </div>
                            </div>
                            
                    <div className='footer-container3-first'><i className="fas footer-container3-first-envelope"><i className='fa fa-map-marker-alt'></i></i><p className='footer-container3-first-para'>2552 Mount Site,Tustin,<br></br>California - 92780.</p></div>
                    </div>
                    <div className='footer-container3-second'><hr className='footer-container3-line'/></div>

                    <div className='footer-container3-third'>
                        <div className='footer-container3-imageLinks'><a href='' className='f-c-iL'><i className='fab fa-facebook-f icon'></i></a></div>
                        <div className='footer-container3-imageLinks'><a href='' className='f-c-iL'><i className='fab fa-twitter icon'></i></a></div>
                        <div className='footer-container3-imageLinks'><a href='' className='f-c-iL'><i className='fab fa-linkedin icon'></i></a></div>
                        <div className='footer-container3-imageLinks'><a href='' className='f-c-iL'><i className='fab fa-instagram icon'></i></a></div>
                        <div className='footer-container3-imageLinks'><a href='' className='f-c-iL'><i className='fab fa-youtube icon'></i></a></div>
                    </div>
                </div>
            </div>
            </div>
            </div>
            
            <div className="footer-bottom">2023 © HIGH X-One Platform to connect</div>
        </footer>
    );
};

export default Footer;