import { FC, useState } from 'react';
import { Link } from "react-router-dom"

import logo from "../../shared/images/logo-otpbit.png";


interface NavbarProps {
    linkNames: string[];
    linkPaths: string[];
}

export const Navbar: FC<NavbarProps> = ({ linkNames, linkPaths }) => {
    const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };
  return (
    <header className="bg-[#412394] fixed top-0 w-full z-10 py-[15px] md:py-[25px] lg:py-[45px] lg:absolute lg:bg-transparent">
        <div className=" mx-auto px-[15px] sm:max-w-[540px] md:max-w-[720px] lg:max-w-[960px] xl:max-w-[1200px] xl:w-full">
            <div className="flex flex-wrap w-full">
                <div className="w-8/12 lg:flex lg:flex-none lg:w-3/12">
                    <div className='w-full'>
                        <Link to='/'>
                            <img className="w-[50px] h-[30px] md:h-[50px]" src={logo} alt="logo" />
                        </Link>
                    </div>
                </div>
                <div className="w-4/12 lg:flex lg:justify-end lg:w-9/12">                   
                    <button  onClick={toggleMenu} className=" block border-none bg-transparent text-white h-[30px] mr-0 px-[10px] py-[6px] w-[42px] float-right lg:hidden md:h-[36px]">
                        <i className={`text-[24px] fa ${isMenuOpen ? 'fa-close' : 'fa-bars'}`}></i>
                    </button>                   
                    
                    {/* Mobile Menu */}
                    <div className={`fixed top-0 left-0 h-full w-[250px] bg-[#412394] z-20 transition-transform duration-300 ease-in-out ${isMenuOpen ? 'transform translate-x-0' : 'transform -translate-x-full'}`}>
                        <ul className="list-none p-4">
                            {linkNames.map((name, index) => (
                                <li className="py-2" key={index}>
                                    <Link className="py-[7px] text-[16px] uppercase font-normal text-white inline-block" to={linkPaths[index]} onClick={() => setIsMenuOpen(false)}>
                                        {name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Desktop Menu */}
                    <div className="hidden lg:block">
                        <ul className="w-full list-none">
                            {linkNames.map((name, index) => (
                                <li className="inline-block px-[18px]" key={index}>
                                    <Link className="py-[7px] text-[16px] font-normal text-white inline-block relative xl:uppercase" to={linkPaths[index]}>
                                        {name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </header>
  )
}