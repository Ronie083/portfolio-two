// import { Link } from 'react-router-dom';
import logo from '../../../assets/logo.png'
import { FaFacebook, FaGithub, FaLinkedinIn, FaWhatsapp } from "react-icons/fa6";
import { RxCross1 } from "react-icons/rx";
import { HashLink as Link } from 'react-router-hash-link';


const Navbar = () => {
    return (
        <div className="navbar bg-opacity-20 bg-black container fixed z-10">
            <div className="flex-1">
                <a className="btn btn-ghost normal-case text-xl"><img className='w-28 md:w-52' src={logo} alt="logo" /></a>
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
                                <label  htmlFor="my-drawer-4">
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
                            </ul>
                            <div className='flex text-2xl mb-2 absolute bottom-0'>
                                <FaFacebook className='mr-3'></FaFacebook>
                                <FaGithub className='mr-3'></FaGithub>
                                <FaLinkedinIn className='mr-3'></FaLinkedinIn>
                                <FaWhatsapp className='mr-3'></FaWhatsapp>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;