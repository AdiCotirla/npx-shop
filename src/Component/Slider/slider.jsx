import React from 'react';
import './slider.css'
import { SliderData } from '../../Data/sliderData';
import { useState } from 'react';
import {FaArrowAltCircleRight, FaArrowAltCircleLeft} from 'react-icons/fa'
const ImageSlider = ({slides}) =>
{
    const [current, setCurrent] = useState(0)
    const length = slides.length

    const nextPhoto = () =>{
        setCurrent(current === length - 1 ? 0 : current + 1)
    };
    const lastPhoto = () =>{
        setCurrent(current === 0 ? length - 1 : current - 1)
    };
    return(
            <section className="slider">
            <FaArrowAltCircleLeft className="arrow-left" onClick={lastPhoto}/>
            <FaArrowAltCircleRight className="arrow-right"onClick={nextPhoto}/>
            {SliderData.map((slides, index) =>
            {
                return(
                    <div className={index === current ? 'slide active' : 'slide'}
                    key={index}>
                        {index === current && (<img src={slides.image} alt='Drip Photos' className="image" />)}
                        
                    </div>
                ) 
            })}
        </section>
    )
}



export default ImageSlider