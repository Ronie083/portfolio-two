import logo from '../../../assets/logo.png'
import logoDark from '../../../assets/logo white.png'
import { FaFacebook, FaGithub, FaLinkedinIn, FaWhatsapp } from "react-icons/fa6";
import { RxCross1 } from "react-icons/rx";
import { HashLink as Link } from 'react-router-hash-link';
import ReactSwitch from "react-switch";


const Navbar = ({ theme, toggleTheme }) => {
    return (
        <div className="navbar bg-opacity-20 bg-black container fixed z-10">
            <div className="flex-1">
                <a href='/' className="btn btn-ghost normal-case text-xl"><img className='w-28 md:w-52' src={theme === "light" ? logo : logoDark} alt="logo" /></a>
            </div>
            <div className="flex-none">
                <div className='drawer drawer-end'>
                    <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
                    <label tabIndex={0} htmlFor="my-drawer-4" className="drawer-button btn btn-ghost btn-circle">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
                    </label>
                    <div className="drawer-side">
                        <label htmlFor="my-drawer-4" className="drawer-overlay"></label>
                        <div className="menu p-4 w-[70%] h-full bg-base-200 text-base-content text-3xl md:text-6xl">
                            <div className='flex justify-between items-center'>
                                <h1 className='text-2xl md:text-4xl'>Navigation</h1>
                                <label htmlFor="my-drawer-4">
                                    <RxCross1 className='border-2 text-5xl border-black p-1 rounded-full'></RxCross1>
                                </label>
                            </div>
                            <div>
                                <hr />
                            </div>
                            <ul>
                                <li><Link smooth to='#'>Home</Link></li>
                                <li><Link smooth to='#about'>About Me</Link></li>
                                <li><Link smooth to='#skills'>My Skills</Link></li>
                                <li><Link smooth to='#projects'>My Work</Link></li>
                                <li><Link smooth to='#contact'>Contact Me</Link></li>
                                <li>
                                    <div className='flex md:justify-end text-sm md:text-2xl mt-32 md:mt-0'>
                                        <label>
                                            {theme === "light" ? "Light mode" : "Dark Mode"}
                                        </label>
                                        <ReactSwitch
                                            offColor="#86d3ff"
                                            offHandleColor="#2693e6"
                                            onColor='#808080'
                                            onHandleColor='#000'
                                            handleDiameter={30}
                                            uncheckedIcon={false}
                                            checkedIcon={false}
                                            boxShadow="0px 1px 5px rgba(0, 0, 0, 0.6)"
                                            activeBoxShadow="0px 0px 1px 10px rgba(0, 0, 0, 0.2)"
                                            height={20}
                                            width={48}
                                            onChange={toggleTheme}
                                            checked={theme === "dark"}></ReactSwitch>
                                    </div>
                                </li>
                            </ul>
                            <div className='flex text-2xl mb-2 absolute bottom-0'>
                                <a href="https://www.facebook.com/amzadhosen.ronie?mibextid=ZbWKwL"><FaFacebook className='mr-3'></FaFacebook></a>
                                <a href="www.linkedin.com/in/amzad-hosen-ronie-93ba0a160"><FaLinkedinIn className='mr-3'></FaLinkedinIn></a>
                                <a href="https://wa.me/+8801515223812"><FaWhatsapp className='mr-3'></FaWhatsapp></a>
                                <a href="https://github.com/Ronie083"><FaGithub className='mr-3'></FaGithub></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;