import './started.scss'
import startedOverlay from '../../images/started.png'


const Started = () => {
    return (
        <div className="started__overlay">
            <div className="started container">
                <div className="started__left">
                    <h2 className="started__header">Let’s simply begin with rentiz</h2>
                </div>
                <div className="started__right">
                    <p className="started__text">Neque, vestibulum sed varius magna et at. Eu, adipiscing morbi augue justo. Nibh laoreet volutpat quis velit. Blandit aliquam donec sed morbi congue eget lorem viverra porta id lobortis.</p>
                    <button className="button started__btn">Get started</button>
                </div>
                <div className="started__pattern">
                    <img src={startedOverlay} alt="" />
                </div>
            </div>
        </div>
    )
}



export default Started;