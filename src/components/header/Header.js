import './header.scss'
import logo from '../../images/logo.png'


const Header = () => {
    return (
        <div className="header container d-flex justify-between align-center">
            <div className="logo">
                <img src={logo} alt="logo" />
            </div>
            <div className="nav d-flex justify-between">
                <nav>
                    <ul className='nav__list d-flex'>
                        <li className="nav__item">Home</li>
                        <li className="nav__item">About us</li>
                        <li className="nav__item">Buying</li>
                        <li className="nav__item">Renting</li>
                        <li className="nav__item">Selling</li>
                        <li className="nav__item">Contact us</li>
                    </ul>
                </nav>
            </div>
            <div className="auth d-flex">
                <div className="auth__login">
                    <button className='button dark'>Login</button>
                </div>
                <div className="auth__sign">
                    <button className='button'>Sign Up</button>
                </div>
            </div>
        </div>
    )
}


export default Header;