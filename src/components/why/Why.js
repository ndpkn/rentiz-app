import './why.scss'
import whyPattern from '../../images/why_pattern.png'

const Why = () => {
    return (
        <div className="why__overlay">
            <div className="why container">
                <h2 className="why__header">Why to choose us</h2>
                <div className="why__items">
                    <div className="why__item">
                        <div className="why__item-icon find"></div>
                        <h3 className="why__item-header">Easy to find</h3>
                        <p className="why__item-text">Urna, massa aliqua dui pellentesque. Ac, gravida in. Diam vitae, nec mattis lectus quam pretium amet facilisis.</p>
                    </div>
                    <div className="why__item">
                        <div className="why__item-icon price"></div>
                        <h3 className="why__item-header">Affordable Prices</h3>
                        <p className="why__item-text">Urna, massa aliqua dui pellentesque. Ac, gravida in. Diam vitae, nec mattis lectus quam pretium amet facilisis.</p>
                    </div>
                    <div className="why__item">
                        <div className="why__item-icon quick"></div>
                        <h3 className="why__item-header">Quickly Process</h3>
                        <p className="why__item-text">Ac, gravida in diam vitae, nec mattis lectus quam pretium amet facilisis. Urna, massa aliqua dui pellentesque. </p>
                    </div>
                </div>
                <div className="why__pattern">
                    <img src={whyPattern} alt="" />
                </div>
            </div>
        </div>
    )
}

export default Why;