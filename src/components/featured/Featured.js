import './featured.scss'
import logo1 from '../../images/logo1.png'
import logo2 from '../../images/logo2.png'
import logo3 from '../../images/logo3.png'
import logo4 from '../../images/logo4.png'
import logo5 from '../../images/logo5.png'


const Featured = () => {
    return (
        <div className="featured container">
            <div className="featured__header">
                <h2>Featured in</h2>
            </div>
            <div className="featured__items d-flex justify-between align-center">
                <img src={logo1} alt="logo1" srcset="" />
                <img src={logo2} alt="logo2" srcset="" />
                <img src={logo3} alt="logo3" srcset="" />
                <img src={logo4} alt="logo4" srcset="" />
                <img src={logo5} alt="logo5" srcset="" />
            </div>
        </div>
    )
}


export default Featured;