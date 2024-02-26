import logo from "../../Assets/Images/logo-gray-transp.png";
import whiteLogo from "../../Assets/Images/Logo-white.png";
import { Link, useLocation } from "react-router-dom";
import { useState } from 'react';
import { motion } from 'framer-motion';

export default function Header(){
    const cRoute = useLocation();
    const [isOpen, setIsOpen] = useState(false);
    const [headerIcon, setHeaderIcon] = useState(false);

    const handleToggle = () => {
        setIsOpen(prev => !prev);
        setHeaderIcon(prev => !prev);
      };

    const animateMenu = (pathname) => {
        const moveDistance = 165
        let translateDistance = 0;
        if (pathname === '/home' || cRoute.pathname === '/') {
            translateDistance = moveDistance * 0; 
        } else if(pathname === '/about') {
            translateDistance = moveDistance * 1 ;
        }
        else if (pathname === '/projects'||
                '/project-details/0'|| 
                '/project-details/1'|| 
                '/project-details/2'||
                '/project-details/3'
                ) {
            translateDistance = moveDistance * 2; 
        }
    
        return {
            initial: { translateX: 0 },
            animate: { translateX: translateDistance },
            transition: { 
                duration: 0.5, 
                delay: 0.3, 
                ease: 'easeOut'
            },
        };
    };

    return(
        <header>
            <nav className="w-full hidden lg:block lg:px-6">
                <div className="max-w-[1600px] mx-auto flex justify-between items-center">
                    <div className="w-28 h-full -bg--background py-2 px-4 rounded-full">
                        <Link to="/">
                            <img src={logo} className="w-full" alt="logo-img" />
                        </Link>
                    </div>
                    <div className="rounded-full -bg--nav--darkgray backdrop-blur-sm border border-solid 1px -border--lightgray">
                        <ul className="p-0.5 flex items-center gap-3">
                            <motion.li 
                                className="absolute w-38 -z-10 py-3 pl-8 pr-6 text-center font-Josefin rounded-full text-sm leading-none text-transparent -bg--nav--active"
                                {...animateMenu(cRoute.pathname)}
                            >Home
                            </motion.li>
                            <li className="inline-block w-38">
                                <Link 
                                    to="/" 
                                    className='py-3 pl-8 pr-6 text-center font-Josefin rounded-full text-sm leading-none -text--onDark'
                                    >
                                    HOME
                                    <span className={(cRoute.pathname === '/' || cRoute.pathname === '/home') ? "point-dot" : "point-dot -bg--lightgray"}></span>
                                </Link>
                            </li>
                            <li className="inline-block w-38">
                                <Link 
                                    to="/about" 
                                    className='py-3 pl-8 pr-6 text-center font-Josefin rounded-full text-sm leading-none -text--onDark '
                                    >
                                    ABOUT
                                    <span className={(cRoute.pathname === '/about') ? "point-dot -bg--yellow" : "point-dot -bg--lightgray"}></span>
                                </Link>
                            </li>
                            <li className="inline-block w-38">
                                <Link 
                                    to="/projects" 
                                    className='py-3 px-8 text-center font-Josefin rounded-full text-sm leading-none -text--onDark'>
                                    PROJECTS
                                    <span className={
                                        (
                                            cRoute.pathname === '/projects' ||
                                            cRoute.pathname ==='/project-details/0'|| 
                                            cRoute.pathname ==='/project-details/1'|| 
                                            cRoute.pathname ==='/project-details/2'||
                                            cRoute.pathname ==='/project-details/3'
                                        ) 
                                        ? "point-dot" : "point-dot -bg--lightgray"}></span>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            <nav className="mobile-nav lg:hidden"> 
                <div className="mx-auto py-2 px-6 rounded-3xl -bg--nav--darkgray backdrop-blur-sm border border-solid 1px -border--lightgray">
                    <div className="flex items-center justify-between">
                        <a href="/home"><img src={whiteLogo} className="w-14 object-cover object-center" alt="logo-img" /></a>
                        <button 
                            href="#" 
                            className="hamburger"  
                            onClick={handleToggle}
                        >
                            <i className={ 
                                headerIcon ? "fa-solid fa-xmark fa-lg -text--onDark" : "fa-solid fa-bars fa-lg -text--onDark"
                            }>                           
                            </i>
                        </button>
                    </div>
                    <ul className={isOpen ? 'block' : 'hidden'}>
                        <li>
                            <Link 
                                to="/" 
                                className={(cRoute.pathname === '/' || cRoute.pathname === '/home') ? 'py-4 px-6 text-right font-Josefin rounded-full text-lg leading-none -text--onDark -bg--nav--darkgray my-3' :'font-Josefin text-right text-lg leading-none -text--onDark py-4 px-4 my-3'}
                                onClick={handleToggle}
                            >
                            HOME
                            <span className={(cRoute.pathname === '/' || cRoute.pathname === '/home') ? "point-dot" : "point-dot -bg--lightgray"}></span>
                            </Link>
                        </li>
                        <li>
                            <Link 
                                to="/about" 
                                className={(cRoute.pathname === '/about') ? 'py-4 px-6 text-right font-Josefin rounded-full text-lg leading-none -text--onDark -bg--nav--darkgray my-3' :'font-Josefin text-right text-lg leading-none -text--onDark py-4 px-4 my-3'}
                                onClick={handleToggle}
                            >
                            ABOUT
                            <span className={(cRoute.pathname === '/about') ? "point-dot -bg--yellow" : "point-dot -bg--lightgray"}></span>
                            </Link>
                        </li>
                        <li>
                            <Link 
                                to="/projects" 
                                className={
                                    (
                                        cRoute.pathname === '/projects'|| 
                                        cRoute.pathname ==='/project-details/0'|| 
                                        cRoute.pathname ==='/project-details/1'|| 
                                        cRoute.pathname ==='/project-details/2'||
                                        cRoute.pathname ==='/project-details/3'
                                    ) 
                                    ? 'py-4 px-6 text-right font-Josefin rounded-full text-lg leading-none -text--onDark -bg--nav--darkgray my-3' :'font-Josefin text-right text-lg leading-none -text--onDark py-4 px-4 my-3'}
                                onClick={handleToggle}    
                            >
                            PROJECTS
                            <span className={
                                (
                                    cRoute.pathname === '/projects' ||
                                    cRoute.pathname ==='/project-details/0'|| 
                                    cRoute.pathname ==='/project-details/1'|| 
                                    cRoute.pathname ==='/project-details/2'||
                                    cRoute.pathname ==='/project-details/3'
                                ) 
                                    ? "point-dot" : "point-dot -bg--lightgray"}></span>
                            </Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
    )
}