import { HashLink } from "react-router-hash-link";
import Lottie from "lottie-react"
import up from "../../../../public/animation_lk9wqp4h.json"

const Footer = () => {
    return (
        <footer className="footer flex justify-between items-center p-4 h-32 md:h-20 bg-[#F5DB9C] text-base-content relative">
            <div>
                <HashLink className="flex flex-col md:flex-row items-center absolute top-0" smooth to='#top'>
                    <Lottie className="w-20" animationData={up} loop={true}></Lottie>
                    <span>Back to top</span>
                    </HashLink>
            </div>
            <div className="flex items-center footer-center font-bold">
                <p>2023 ©-All right reserved by Amzad</p>
            </div>
        </footer>
    );
};

export default Footer;