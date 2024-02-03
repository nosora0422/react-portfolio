import Button from "../Button/Button";
import { motion } from "framer-motion";

export default function Banner(props){
    const BannerComponent = props.bannercomp;
    // console.log(BannerComponent);

    const text = props.h2second.split(""); 

    return(
        <section className="mx-auto h-svh relative flex justify-center">
            <div className="w-screen h-svh">
                <BannerComponent />
            </div>
            <div className="my-grid px-6 absolute top-0 mx-auto">
                <div className="col-span-12 max-w-1200 flex flex-col items-start mt-25vh z-10">
                    <div className="w-full -text--darkgrey font-Josefin pb-4">
                        <div className="flex items-baseline">
                            <h1>{props.h1}</h1>
                            <img 
                                className="w-8 md:w-14 ml-4 " 
                                src={require(`../../Assets/Images/${props.avatar}`)} 
                                alt="iphone-avatar" 
                            />
                        </div>
                        <h2>{props.h2first}</h2>
                        <h2>
                            {text.map((item, index) => (
                            <motion.span 
                                key={index}
                                initial={{opacity:0 }}
                                animate={{opacity:1 }}
                                transition={{
                                    duration: 0.5,
                                    delay: index/10,
                                }}
                                >
                                {item}{""}
                            </motion.span>))}
                        <span className={`point-dot ${props.h1 === 'ABOUT' ? '-bg--yellow' : ''}`}></span>
                        </h2>
                        
                        
                    </div>
                    <div className="body--gray flex flex-col justify-between items-start max-w-100 h-44">
                        {props.disc && <p className="max-w-[400px] text-base font-Manrope font-medium md:text-xl md:max-w-[650px] text-pretty">{props.disc}</p>}
                        {props.btn && <Button text={props.btn} link='/about'/>}
                    </div>
                </div>
            </div>
            <div className="flex flex-col items-center absolute w-20 left-1/2 bottom-6" >
                <p className="body--gray mb-3">Scroll</p>
                <svg className="arrow-down" width="50" height="14" viewBox="0 0 31 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path className="-stroke--darkgrey" d="M1 1L15.1375 12L30 1" strokeWidth="2"/>
                </svg>
            </div>
        </section>
    )
}