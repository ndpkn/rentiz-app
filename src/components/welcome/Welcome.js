import Select from 'react-select'
import { useState } from 'react'
import './welcome.scss'
import welcome__img from '../../images/pexels-binyamin-mellish-106399 2.png'
import pattern from '../../images/overlay_pattern.png'

const Welcome = () => {

        const [purposeValue, setPurposeValue] = useState('Buy');
        const [locationValue, setLocationValue] = useState('Toronto, Canada');
        const [typeValue, setTypeValue] = useState('Industrial home');

        const handleChangePurpose = e => {
            setPurposeValue(e.value);
        }
        const handleChangeLocation = e => {
            setLocationValue(e.value);
        }
        const handleChangeType = e => {
            setTypeValue(e.value);
        }

    const purpose = [
        { value: 'Buy', label: 'Buy' },
        { value: 'Monthly rent', label: 'Monthly rent' },
        { value: 'Daily rent', label: 'Daily rent' }
    ];
    const location = [
        { value: 'Toronto, Canada', label: 'Toronto, Canada' },
        { value: 'Kyiw, Ukraine', label: 'Kyiw, Ukraine' },
        { value: 'Moscow, Russia', label: 'Moscow, Russia' }
    ];
    const type = [
        { value: 'Industrial home', label: 'Industrial home' },
        { value: 'Residential', label: 'Residential' },
        { value: 'Commercial', label: 'Commercial' }
    ];

    return (
        <div className="welcome container d-flex ">
            <div className="welcome__left d-flex flex-column justify-center">
                <h1>Perfect way to buy and sell a home</h1>
                <p>Diam vitae, nec mattis lectus quam pretium amet facilisis. Urna, massa aliqua dui pellentesque. Ac, gravida in eget non amet eget purus non.</p>
                <div className="filter d-flex">
                    <div className="filter__item d-flex flex-column justify-center vertical">
                        <button className="filter__item-btn d-flex align-center" id="purpose__btn">Purpose </button>
                        <p>{purposeValue}</p>
                        <Select 
                            classNamePrefix='custom__select'
                            options={purpose} 
                            value={purpose.find(val => val.value === purposeValue)}
                            onChange={handleChangePurpose}
                        />
                    </div>
                    <div className="filter__item d-flex flex-column justify-center vertical">
                        <button className="filter__item-btn d-flex align-center" id="location__btn">Location </button>
                        <p>{locationValue}</p>
                        <Select 
                            classNamePrefix='custom__select'
                            options={location} 
                            value={location.find(val => val.value === locationValue)}
                            onChange={handleChangeLocation}
                        />
                    </div>
                    <div className="filter__item d-flex flex-column justify-center">
                        <button className="filter__item-btn d-flex align-center" id="type__btn">Type </button>
                        <p>{typeValue}</p>
                        <Select 
                            classNamePrefix='custom__select'
                            options={type} 
                            value={type.find(val => val.value === typeValue)}
                            onChange={handleChangeType}
                        />
                    </div>
                    <div className="filter__btn">
                        <button className='button '>Search</button>
                    </div>
                </div>
            </div>
            <div className="welcome__right">
                <img src={welcome__img} alt="house" />
            </div>
            <div className="overlay_pattern">
                <img src={pattern} alt="overlay pattern"/>
            </div>
        </div>
    )
}


export default Welcome;