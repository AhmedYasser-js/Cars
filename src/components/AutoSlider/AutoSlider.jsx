import React from 'react'
import './AutoSlider.scss'
import ac from '../../assets/assignment-images/imges/landing-page/autoSlider/ac.png';
import audi from '../../assets/assignment-images/imges/landing-page/autoSlider/audi.png';
import Group from '../../assets/assignment-images/imges/landing-page/autoSlider/Group.png';
import jaguar from '../../assets/assignment-images/imges/landing-page/autoSlider/jaguar.png';
import nissan from '../../assets/assignment-images/imges/landing-page/autoSlider/nissan.png';
import volvo from '../../assets/assignment-images/imges/landing-page/autoSlider/volvo.png';


export default function AutoSlider() {
    return (
        <div>
            <div className="slider w-100">
                <div className="slide-track">
                    <div className="slide">
                        <img src={ac}  alt="" />
                    </div>
                    <div className="slide">
                        <img src= {audi}  alt="" />
                    </div>
                    <div className="slide">
                        <img src={Group}  alt="" />
                    </div>
                    <div className="slide">
                        <img src={jaguar}  alt="" />
                    </div>
                    <div className="slide">
                        <img src={nissan}  alt="" />
                    </div>
                    <div className="slide">
                        <img src={volvo}  alt="" />
                    </div>
                    <div className="slide">
                        <img src={jaguar}  alt="" />
                    </div>
                    <div className="slide">
                        <img src={ac}  alt="" />
                    </div>
                    <div className="slide">
                        <img src= {audi}  alt="" />
                    </div>
                    <div className="slide">
                        <img src={Group}  alt="" />
                    </div>
                    <div className="slide">
                        <img src={jaguar}  alt="" />
                    </div>
                    <div className="slide">
                        <img src={nissan}  alt="" />
                    </div>
                    <div className="slide">
                        <img src={volvo}  alt="" />
                    </div>
                    <div className="slide">
                        <img src={jaguar}  alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}
