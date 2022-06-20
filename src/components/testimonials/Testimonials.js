import { useRef } from 'react';
import './testimonials.scss'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import prev from '../../images/prev.png';
import next from '../../images/next.png'
import vertical from "../../images/vertical.png"


const Testimonials = () => {

    const settings = {
        arrows: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };
    const sliderReviewRef = useRef(null);


    return (
        <div className="testimonials container">
            <div className="arrows__review">
                <span onClick={() => sliderReviewRef.current.slickPrev()} className="arrow__review"><img src={prev} alt="arrow left" /></span>
                <span className='vertical__img'><img src={vertical} alt="" /></span>
                <span onClick={() => sliderReviewRef.current.slickNext()} className="arrow__review"><img src={next} alt="arrow right" /></span>
            </div>
            <Slider
                {...settings}
                ref={sliderReviewRef}>
                <Review review="Massa semper non rutrum orci facilisi sit. Lectus porta quam a fringilla eget viverra sem. Vulputate massa hendrerit turpis gravida tempor, porttitor." name="Elena Pravo" position="Ceo, Upstate"/>
                <Review review="Et asperiores totam facere. Natus est ut earum rerum ut. Veniam impedit accusamus id. Possimus vel distinctio et id deserunt in. Voluptatem ea et blanditiis hic quibusdam omnis." name="Annette Harvey" position="Senior Directives Manager"/>
                <Review review="Deleniti aut corporis. Dolores optio ex labore ea minus occaecati. Est autem rerum. Assumenda mollitia mollitia non distinctio pariatur minus. Libero quo ab aliquid quia animi cumque ab." name="Leticia Funk" position="National Data Technician"/>
            </Slider>
        </div>
    )
}

const Review = (props) => {
    return (
        <div className="review">
            <div className="review__body">
                <p>{props.review}</p>
            </div>
            <div className="review__name">
                <p>{props.name}</p>
            </div>
            <div className="review__position">
                <p>{props.position}</p>
            </div>
        </div>
    )
}

export default Testimonials;