import './footer.scss'
import logo from '../../images/logo.png'
import facebook from '../../images/brand/facebook.png'
import inst from '../../images/brand/instagram.png'
import twitter from '../../images/brand/Twitter.png'
import youtube from '../../images/brand/youtube.png'


const Footer = () => {
    return (
        <div className="footer__overlay">
            <div className="footer container">
                <div className="footer__items">
                    <div className="footer__info">
                        <div className="logo"><img src={logo} alt="logo" /></div>
                        <div className="footer__info-text">
                            <p>Neque, vestibulum sed varius magna et at. Eu, adipiscing morbi augue.</p>
                        </div>
                        <div className="footer__info-icons">
                            <a href="https://facebook.com" target='_blanc'><img className='footer__icon facebook' src={facebook} alt="facebook" /></a>
                            <a href="https://instagram.com" target='_blanc'><img className='footer__icon inst' src={inst} alt="inst" /></a>
                            <a href="https://twitter.com" target='_blanc'><img className='footer__icon twitter' src={twitter} alt="twitter" /></a>
                            <a href="https://youtube.com" target='_blanc'><img className='footer__icon youtube' src={youtube} alt="youtube" /></a>
                        </div>
                    </div>
                    <div className="footer__project">
                        <h4 className="footer__header">Project</h4>
                        <ul>
                            <li className='footer__links'><a href="/">Houses</a></li>
                            <li className='footer__links'><a href="/">Rooms</a></li>
                            <li className='footer__links'><a href="/">Flats</a></li>
                            <li className='footer__links'><a href="/">Appartments</a></li>
                        </ul>
                    </div>
                    <div className="footer__company">
                        <h4 className="footer__header">Company</h4>
                        <ul>
                            <li className='footer__links'><a href="/">How we work?</a></li>
                            <li className='footer__links'><a href="/">Capital</a></li>
                            <li className='footer__links'><a href="/">Security</a></li>
                        </ul>
                    </div>
                    <div className="footer__movement">
                        <h4 className="footer__header">Movement</h4>
                        <ul>
                            <li className='footer__links'><a href="/">Who are we</a></li>
                            <li className='footer__links'><a href="/">Support us</a></li>
                        </ul>
                    </div>
                    <div className="footer__help">
                        <h4 className="footer__header">Help</h4>
                        <ul>
                            <li className='footer__links'><a href="/">Privacy</a></li>
                            <li className='footer__links'><a href="/">Condition</a></li>
                            <li className='footer__links'><a href="/">Blog</a></li>
                            <li className='footer__links'><a href="/">FAQs</a></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="footer__bottom">
                <div className="footer__bottom-item container">
                    <p>Copyright ©TemplatesJungle. 2022. All right reserved</p>
                    <p>Design by: <a href="/">TemplatesJungle</a>. Made by: <a href="https://github.com/ndpkn">NDPKN</a></p>
                </div>

            </div>
        </div>
    )
}

export default Footer;