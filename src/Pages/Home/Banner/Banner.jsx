import { HashLink } from 'react-router-hash-link';
import imageBanner from '../../../assets/LMC_29112022_164502.__ IPhone 12 (R4)YUV.PORTRAIT.jpg'
import logo from '../../../assets/logo symbol.png'
import Lottie from "lottie-react";
import down from "../../../../public/Animation - 1689777960535.json"

const Banner = () => {
    return (
        <div className="hero min-h-screen relative">
            <div className="bg-[#F5DB9C] text-center flex flex-col justify-end h-1/2 w-full absolute top-0">
                <div className="flex flex-col md:flex-row justify-center items-center mb-5 md:ml-20">
                    <img className='w-10 md:w-20 md:mr-5' src={logo} alt="" />
                    <p className="md:text-left md:text-xl">Crafting Seamless Web Solutions. <br />  Ignite Your <br /> Web Projects with me.</p>
                </div>
                <h1 className="mb-5 text-2xl md:text-5xl font-bold">Hi, I am Amzad Hosen <br /> An MERN Stack Web Developer</h1>

            </div>
            <div className="bg-cover bg-no-repeat bg-center h-1/2 w-full absolute bottom-0" style={{
                backgroundImage: `url('${imageBanner}')`
            }}>
                <HashLink smooth to='#about'>
                    <Lottie className='w-20 absolute bottom-0 pb-4' animationData={down} loop={true}></Lottie>
                </HashLink>
            </div>
        </div>
    );
};

export default Banner;
