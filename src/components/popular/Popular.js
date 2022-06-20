import { useRef,  useState } from 'react';
import './popular.scss'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import popular1 from '../../images/popular1.png';
import popular2 from '../../images/popular2.png';
import popular3 from '../../images/popular3.png';
import prev from '../../images/prev.png';
import next from '../../images/next.png'


const Popular = () => {

    const [showSlide, setShowSlide] = useState('sliderBlock')
    const [showAll, setShowAll] = useState('allItemsBlock')

    const settings = {
        arrows: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1
    };
    const sliderRef = useRef(null);

    const showAllItems = () => {
        setShowSlide('sliderBlock hide')
        setShowAll('allItemsBlock show')
    }
    const hideAllItems = () => {
        setShowSlide('sliderBlock')
        setShowAll('allItemsBlock hide')
    }

    return (
        <div className="popular__overlay">
            <div className="popular container">
                <h2>Popular residence</h2>
                <div className="popular__items">
                    <div className={showSlide}>
                        <div className="arrows">
                            <span onClick={() => sliderRef.current.slickPrev()} className="arrow prev"><img src={prev} alt="" /></span>
                            <span onClick={() => sliderRef.current.slickNext()} className="arrow next"><img src={next} alt="" /></span>
                        </div>
                        <Slider 
                            {...settings}
                            ref={sliderRef}>
                            <PopularItem img={popular1} title="Aliva Priva Jalvin" descr="1087 Pin Oak Drive, Clinton, USA" bed="4 beds" bath="2 bath" sqr="1203 Sqft."/>
                            <PopularItem img={popular2} title="Hard line orchar" descr="1087 Pin Oak Drive, Clinton, USA" bed="4 beds" bath="2 bath" sqr="1203 Sqft."/>
                            <PopularItem img={popular3} title="Allpine lenevote" descr="1087 Pin Oak Drive, Clinton, USA" bed="4 beds" bath="2 bath" sqr="1203 Sqft."/>
                            <PopularItem img={popular1} title="Aliva Priva Jalvin" descr="1087 Pin Oak Drive, Clinton, USA" bed="4 beds" bath="2 bath" sqr="1203 Sqft."/>
                            <PopularItem img={popular2} title="Aliva Priva Jalvin" descr="1087 Pin Oak Drive, Clinton, USA" bed="4 beds" bath="2 bath" sqr="1203 Sqft."/>
                            <PopularItem img={popular3} title="Aliva Priva Jalvin" descr="1087 Pin Oak Drive, Clinton, USA" bed="4 beds" bath="2 bath" sqr="1203 Sqft."/>
                        </Slider>
                        <div className="popular__seeAll">
                            <button onClick={showAllItems} className="button popular__button">View all properties</button>
                        </div>
                    </div>
                    <div className={showAll}>
                        <div className="allItemsBlock-items">
                            <PopularItem img={popular1} title="Aliva Priva Jalvin" descr="1087 Pin Oak Drive, Clinton, USA" bed="4 beds" bath="2 bath" sqr="1203 Sqft."/>
                            <PopularItem img={popular2} title="Hard line orchar" descr="1087 Pin Oak Drive, Clinton, USA" bed="4 beds" bath="2 bath" sqr="1203 Sqft."/>
                            <PopularItem img={popular3} title="Allpine lenevote" descr="1087 Pin Oak Drive, Clinton, USA" bed="4 beds" bath="2 bath" sqr="1203 Sqft."/>
                            <PopularItem img={popular1} title="Aliva Priva Jalvin" descr="1087 Pin Oak Drive, Clinton, USA" bed="4 beds" bath="2 bath" sqr="1203 Sqft."/>
                            <PopularItem img={popular2} title="Aliva Priva Jalvin" descr="1087 Pin Oak Drive, Clinton, USA" bed="4 beds" bath="2 bath" sqr="1203 Sqft."/>
                            <PopularItem img={popular3} title="Aliva Priva Jalvin" descr="1087 Pin Oak Drive, Clinton, USA" bed="4 beds" bath="2 bath" sqr="1203 Sqft."/>
                        </div>
                        <div className="popular__seeAll">
                            <button onClick={hideAllItems} className="button popular__button">Show less properties</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

function PopularItem (props) {
    return (
        <div className="popular__items-item">
            <img src={props.img} alt=""/>
            <h3>{props.title}</h3>
            <p>{props.descr}</p>
            <div className="popular__items-icon d-flex align-center">
                <span className='icon__pop bed'>{props.bed}</span>
                <span className='icon__pop bath'>{props.bath}</span>
                <span className='icon__pop sqr'>{props.sqr}</span>
            </div>
        </div>
    )
}

export default Popular;