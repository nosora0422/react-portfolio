import RecommendationData from '../../Data/RecommendationData';
import { motion,useInView } from 'framer-motion';
import { useRef } from "react";

export default function RecomCard() {
    const ref = useRef(null);
    const isInView = useInView(ref, { 
        once: true,
        threshold:0.8,
    });

    const recommendations = RecommendationData.map((item, index) => {
            return (
            <motion.div
                className={`col-span-7 flex flex-col justify-between w-full h-full ${item.column} ${item.row} -bg--darkgrey p-6 mr-5 rounded-2xl backdrop-blur-sm drop-shadow-lg`} 
                key={index}
                initial={{ 
                    opacity:0, 
                    translateX:-40, 
                    translateY: -40 
                }}
                animate={ isInView ? { 
                    opacity: 1, 
                    translateX: 0, 
                    translateY: 0 
                } : { 
                    opacity: 0, 
                    translateX: -20, 
                    translateY: -20 
                }}
                transition={{ 
                    duration: 0.8, 
                    delay: 0.3 * index, 
                    ease: 'easeIn' 
                }}      
            >
                <div className="">
                    <p><i className="fa-solid fa-quote-left mb-3 text-white"></i></p>
                    <p className="text-white text-base font-light">{item.comment}</p>
                    <i className="fa-solid fa-quote-right block text-right mt-3 text-white"></i>
                </div>
                <div className="flex justify-between items-end">
                    <div>
                        <p className="font-Manrope text-xl lg:text-2xl font-medium  text-white">{item.name}</p>
                        <div className='flex items-center'>
                            <p className="text-base mr-2 text-white">{item.title}</p>
                            <a href={item.linkedin} target="new"><i className="fa-brands fa-linkedin text-white cursor-pointer"></i></a>
                        </div>
                    </div>
                    <img className="object-over object-center rounded-full border border-solid -border--lightgray w-10 h-10" src={item.img} alt={item.name} />
                </div>
            </motion.div>
        )
    }
    )

  return (
    <div ref={ref} className='grid grid-cols-7 gap-x-4 gap-y-4 grid-flow-row-dense'>
        {recommendations}
    </div>
  )
}
