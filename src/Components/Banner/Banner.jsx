import React from 'react';
import Button from "../Button/Button";
import { motion } from "framer-motion";

export default function Banner(props){
    const BannerComponent = props.bannercomp;
    // console.log(BannerComponent);

    const text = props.h2second;
    // console.log(text)


    return(
        <section className="mx-auto h-svh relative flex justify-center items-center">
            <div className="w-screen h-svh">
                <BannerComponent />
            </div>
            <div className="px-6 absolute">
                <div className="max-w-1200 flex flex-col items-start z-10">
                    <div className="w-full -text--primary font-Josefin pb-4">
                        <div className="flex items-baseline">
                            <h1>{props.h1}</h1>
                            <img 
                                className="w-8 md:w-14 ml-4 " 
                                src={`../../Assets/Images/${props.avatar}`} 
                                alt="iphone-avatar" 
                            />
                        </div>
                        <h2>{props.h2first}</h2>
                        <div className="w-full h-20 overflow-hidden relative">
                                {Array.isArray(text) ? (
                                    text.map((item, index) => (
                                        <motion.h2 
                                            key={index}
                                            animate={{ translateY: [200, 0,0, -200] }}
                                            transition={{
                                                duration: 2,
                                                times:[0, 0.2,0.8,1],
                                                delay: index * 2,
                                                repeat: Infinity, 
                                                repeatDelay: 4
                                            }}
                                            className='absolute mb-2 left-1 text-xl sm:text-4xl md:text-6xl '
                                            >
                                            {item}
                                            <span className={`point-dot ${props.h1 === 'ABOUT' ? '-bg--yellow' : ''}`}></span> 
                                            <br />
                                        </motion.h2>))
                                ) : (
                                    <h2>
                                        <span>{props.h2second}<span className={`point-dot ${props.h1 === 'ABOUT' ? '-bg--yellow' : ''}`}></span></span>
                                    </h2>
                                )}
                        </div>
                    </div>
                   {props.disc && <div className="body--gray flex flex-col justify-between items-start max-w-100 h-44">
                        {props.disc && <p className="max-w-[400px] text-base font-Manrope font-medium md:text-xl md:max-w-[650px] text-pretty">{props.disc}</p>}
                        {props.btn && <Button text={props.btn} link='/about'/>}
                    </div>}
                </div>
            </div>
            <div className="flex flex-col items-center absolute w-20 left-1/2 -translate-x-1/2 bottom-6" >
                <p className="body--gray mb-3">Scroll</p>
                <svg className="arrow-down" width="50" height="14" viewBox="0 0 31 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path className="-stroke--primary" d="M1 1L15.1375 12L30 1" strokeWidth="2"/>
                </svg>
            </div>
        </section>
    )
}