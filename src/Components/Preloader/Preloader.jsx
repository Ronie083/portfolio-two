import React, { useEffect, useState } from 'react';
import Lottie from 'lottie-react';
import anim from '../../../public/animation_lkb3a6mv.json';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Preloader = () => {
    const [percentage, setPercentage] = useState(0);


    useEffect(() => {
        AOS.init();
    }, []);

    useEffect(() => {
        const targetPercentage = 100;
        const animationDuration = 3000;
        const increment = (targetPercentage / animationDuration) * 10;

        const interval = setInterval(() => {
            setPercentage((prevPercentage) => {
                const newPercentage = prevPercentage + increment;
                return newPercentage >= targetPercentage ? targetPercentage : newPercentage;
            });
        }, 10);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="text-center grid grid-rows-2 md:grid-rows-none md:grid-cols-2 bg-white" data-aos="fade-left">
            <div className='text-5xl max-h-fit md:text-9xl flex items-center justify-center'>
                <h1>{percentage.toFixed(0)}%</h1>
            </div>
            <div>
                <Lottie animationData={anim} loop={true} />
            </div>
        </div>
    );
};

export default Preloader;
