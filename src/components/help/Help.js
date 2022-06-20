import './help.scss'
import help1 from '../../images/help1.png'
import help2 from '../../images/help2.png'
import helpPattern from '../../images/help__pattern.png'


const Help = () => {
    return (
        <div className="help__overlay">
            <div className="help container">
                <div className="help__images">
                    <img src={help1} alt="" />
                    <img src={help2} alt="" />
                </div>
                <div className="help__info">
                    <h2 className="help__info-header">We help people to find homes</h2>
                    <p className="help__info-text">Mauris orci donec blandit maecenas. Orci lorem purus porttitor massa consectetur. Neque, vestibulum sed varius magna et at. Eu, adipiscing morbi augue justo. Nibh laoreet volutpat quis velit. Blandit aliquam donec sed morbi congue eget lorem viverra porta id lobortis.</p>
                    <button className="button help__info-btn"> Get in touch</button>
                </div>
                <div className="help__pattern">
                    <img src={helpPattern} alt="" />
                </div>
            </div>
        </div>
    )
}



export default Help;