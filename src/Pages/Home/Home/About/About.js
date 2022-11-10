import React from 'react';
import img9 from '../../../../assets/images/img9.jpg';
import img6 from '../../../../assets/images/img6.jpg';

const About = () => {
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row">
                <div className='w-1/2 mx-10'>
                    <img src={img9} className="max-w-sm rounded-lg shadow-2xl mt-10" alt='' />
                    
                </div>
                <div className='w-1/2'>
                    <h1 className="text-4xl font-bold my-6">Capturing these stories for others gives me an incredible feeling of satisfaction.</h1>
                    <img src={img6} className="max-w-sm rounded-lg shadow-2xl ml-10" alt="" />
                </div>
            </div>
        </div>
    );
};

export default About;