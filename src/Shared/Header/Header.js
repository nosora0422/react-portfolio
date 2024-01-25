import logo from "../../Assets/Images/logo-gray-transp.png";
import whiteLogo from "../../Assets/Images/Logo-white.png";
import { Link, useLocation } from "react-router-dom";
import { useState } from 'react';

export default function Header(){
    const cRoute = useLocation();
    const [isOpen, setIsOpen] = useState(false);
    const [headerIcon, setHeaderIcon] = useState(false);

    const handleToggle = () => {
        setIsOpen(prev => !prev);
        setHeaderIcon(prev => !prev);
      };

    return(
    <header>
        <nav className="w-full hidden lg:block lg:px-6">
            <div className="max-w-[1600px] mx-auto flex justify-between items-center">
                <div className="w-24 h-full -bg--body--backgroundColor py-2 px-4 rounded-full">
                    <a href="/home">
                        <img src={logo} className="w-full" alt="logo-img" />
                    </a>
                </div>
                <div className="rounded-full -bg--nav--darkgray backdrop-blur-sm border border-solid 1px -border--lightgray">
                    <ul className="p-0.5 flex items-center gap-3">
                        <li className="inline-block w-38">
                            <Link 
                                to="/" 
                                className={(cRoute.pathname === '/' || cRoute.pathname === '/home') ? 'py-3 pl-8 pr-6 text-center font-Josefin rounded-full text-sm leading-none -text--white -bg--nav--darkgray ' : 'py-3 pl-8 pr-6 text-center font-Josefin rounded-full text-sm leading-none -text--white hover:bg-neutral-500'}
                                >
                                HOME
                                <span className={(cRoute.pathname === '/' || cRoute.pathname === '/home') ? "point-dot" : "point-dot -bg--lightgray"}></span>
                            </Link>
                        </li>
                        <li className="inline-block w-38">
                            <Link 
                                to="/about" 
                                className={(cRoute.pathname === '/about') ? 'py-3 pl-8 pr-6 text-center font-Josefin rounded-full text-sm leading-none -text--white -bg--nav--darkgray ' : 'py-3 pl-8 pr-6 text-center font-Josefin rounded-full text-sm leading-none -text--white hover:bg-neutral-500'}
                                >
                                ABOUT
                                <span className={(cRoute.pathname === '/about') ? "point-dot -bg--yellow" : "point-dot -bg--lightgray"}></span>
                            </Link>
                        </li>
                        <li className="inline-block w-38">
                            <Link 
                                to="/projects" 
                                className={
                                    (
                                        cRoute.pathname === '/projects'|| 
                                        cRoute.pathname ==='/projects/logo-animation'|| 
                                        cRoute.pathname ==='/projects/responsive-website'|| 
                                        cRoute.pathname ==='/projects/email-template'||
                                        cRoute.pathname ==='/projects/webflow-website'
                                    ) 
                                    ? 'py-3 px-8 text-center font-Josefin rounded-full text-sm leading-none -text--white -bg--nav--darkgray ' : 'py-3 px-8 text-center font-Josefin rounded-full text-sm leading-none -text--white hover:bg-neutral-500'
                                    }>
                                PROJECTS
                                <span className={
                                    (cRoute.pathname === '/projects' ||
                                     cRoute.pathname==='/projects/logo-animation'|| 
                                     cRoute.pathname ==='/projects/responsive-website'|| 
                                     cRoute.pathname ==='/projects/email-template'||
                                     cRoute.pathname ==='/projects/webflow-website') 
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
                            headerIcon ? "fa-solid fa-xmark fa-lg -text--white" : "fa-solid fa-bars fa-lg -text--white"
                        }>                           
                        </i>
                    </button>
                </div>
                <ul className={isOpen ? 'block' : 'hidden'}>
                    <li>
                        <Link 
                            to="/" 
                            className={(cRoute.pathname === '/' || cRoute.pathname === '/home') ? 'py-4 px-6 text-right font-Josefin rounded-full text-lg leading-none -text--white -bg--nav--darkgray my-3' :'font-Josefin text-right text-lg leading-none -text--white py-4 px-4 my-3'}
                            onClick={handleToggle}
                        >
                        HOME
                        <span className={(cRoute.pathname === '/' || cRoute.pathname === '/home') ? "point-dot" : "point-dot -bg--lightgray"}></span>
                        </Link>
                    </li>
                    <li>
                        <Link 
                            to="/about" 
                            className={(cRoute.pathname === '/about') ? 'py-4 px-6 text-right font-Josefin rounded-full text-lg leading-none -text--white -bg--nav--darkgray my-3' :'font-Josefin text-right text-lg leading-none -text--white py-4 px-4 my-3'}
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
                                    cRoute.pathname ==='/projects/logo-animation'|| 
                                    cRoute.pathname ==='/projects/responsive-website'|| 
                                    cRoute.pathname ==='/projects/email-template'||
                                    cRoute.pathname ==='/projects/webflow-website'
                                ) 
                                ? 'py-4 px-6 text-right font-Josefin rounded-full text-lg leading-none -text--white -bg--nav--darkgray my-3' :'font-Josefin text-right text-lg leading-none -text--white py-4 px-4 my-3'}
                            onClick={handleToggle}    
                        >
                        PROJECTS
                        <span className={
                            (cRoute.pathname === '/projects' ||
                                cRoute.pathname==='/projects/logo-animation'|| 
                                cRoute.pathname ==='/projects/responsive-website'|| 
                                cRoute.pathname ==='/projects/email-template'||
                                cRoute.pathname ==='/projects/webflow-website') 
                                ? "point-dot" : "point-dot -bg--lightgray"}></span>
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    </header>
    )
}