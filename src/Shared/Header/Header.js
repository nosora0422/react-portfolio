import logo from "../../Assets/Images/logo-gray-transp.png";
import whiteLogo from "../../Assets/Images/Logo-white.png";
import { Link, useLocation } from "react-router-dom";

export default function Header(){
    const cRoute = useLocation();

    return(
    <header>
        <nav className="w-full hidden lg:block lg:px-6">
            <div className="max-w-[1600px] mx-auto flex justify-between items-center">
                <div className="w-20 h-full">
                    <a href="index.html"><img src={logo} className="w-full" alt="logo-img" /></a>
                </div>
                <div className="rounded-full -bg--nav--darkgray backdrop-blur-sm border border-solid 1px -border--lightgray">
                    <ul className="p-0.5 flex items-center gap-3">
                        <li className="inline-block">
                            <Link to="/" className={(cRoute.pathname === '/' || cRoute.pathname === '/home') ? 'py-3 pl-8 pr-6 text-center font-Josefin rounded-full text-sm leading-none -text--white -bg--nav--darkgray ' : 'py-3 pl-8 pr-6 text-center font-Josefin rounded-full text-sm leading-none -text--white hover:bg-neutral-500'}>HOME<span className={(cRoute.pathname === '/' || cRoute.pathname === '/home') ? "point-dot" : "point-dot -bg--lightgray"}></span>
                            </Link>
                        </li>
                        <li className="inline-block">
                            <Link to="/about" className={(cRoute.pathname === '/about') ? 'py-3 pl-8 pr-6 text-center font-Josefin rounded-full text-sm leading-none -text--white -bg--nav--darkgray ' : 'py-3 pl-8 pr-6 text-center font-Josefin rounded-full text-sm leading-none -text--white hover:bg-neutral-500'}>ABOUT<span className={(cRoute.pathname === '/about') ? "point-dot -bg--yellow" : "point-dot -bg--lightgray"}></span>
                            </Link>
                        </li>
                        <li className="inline-block">
                            <Link to="/projects" className={(cRoute.pathname === '/projects') ? 'py-3 px-8 text-center font-Josefin rounded-full text-sm leading-none -text--white -bg--nav--darkgray ' : 'py-3 px-8 text-center font-Josefin rounded-full text-sm leading-none -text--white hover:bg-neutral-500'}>PROJECTS<span className={(cRoute.pathname === '/projects') ? "point-dot" : "point-dot -bg--lightgray"}></span>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
        <nav className="mobile-nav lg:hidden"> 
            <div className="mx-auto py-2 px-4 rounded-full -bg--nav--darkgray backdrop-blur-sm border border-solid 1px -border--lightgray">
                <div className="flex items-center justify-between">
                    <a href="index.html"><img src={whiteLogo} className="w-12 h-8 object-cover object-center" alt="logo-img" /></a>
                    <button href="#" className="hamburger">
                        <i className="fa-solid fa-bars fa-lg -text--white"></i>
                        <i className="fa-solid fa-xmark fa-lg -text--white hidden"></i>
                    </button>
                </div>
                <ul className="hidden">
                    <li><a className="-text--white py-2 px-4 my-2 active" href="index.html">HOME<span className="point-dot"></span></a></li>
                    <li><a className="-text--white py-2 px-4 my-2" href="about.html">ABOUT</a></li>
                    <li><a className="-text--white py-2 px-4 my-2" href="project.html">PROJECT</a></li>
                </ul>
            </div>
        </nav>
    </header>
    )
}