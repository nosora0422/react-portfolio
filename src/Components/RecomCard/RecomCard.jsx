import RecommendationData from '../../Data/RecommendationData';
import { motion,useInView } from 'framer-motion';
import { useRef } from "react";

export default function RecomCard() {
    const ref = useRef(null);
    const isInView = useInView(ref, { 
        once: true,
        threshold:0.8,
    });

    const openLinkedIn = (linkedinUrl) => {
        window.open(linkedinUrl, '_blank');
    };

    const linkedInHref = 'https://www.linkedin.com/in/sora-noh/details/recommendations/?detailScreenTabIndex=0';

    
    const recommendations = RecommendationData.map((item, index) => {
            return (
            <motion.div
                className={`col-span-7 flex flex-col justify-between w-full h-full ${item.column} ${item.row} -bg--card-background p-6 mr-5 rounded-2xl border border-solid -border--outline backdrop-blur-sm drop-shadow-md cursor-pointer hover:drop-shadow-xl`}
                onClick={()=>openLinkedIn(linkedInHref)}
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
                <div>
                    <p><i className="fa-solid fa-quote-left mb-3 -text--primary"></i></p>
                    <p className="-text--primary text-base font-normal">{item.comment}</p>
                    <i className="fa-solid fa-quote-right block text-right mt-3 -text--primary"></i>
                </div>
                <div className="flex justify-between items-end">
                    <div>
                        <p className="font-Manrope text-xl font-medium  -text--primary">{item.name}</p>
                        <div className='flex items-center'>
                            <p className="text-base mr-2 -text--primary">{item.title}</p>
                            <a href={item.linkedin} target="new"><i className="fa-brands fa-linkedin -text--primary cursor-pointer hover:-text--lightgray"></i></a>
                        </div>
                    </div>
                    <img className="object-over object-center rounded-full border border-solid -border--lightgray w-10 h-10" src={item.img} alt={item.name} />
                </div>
            </motion.div>
        )
    }
    )

  return (
    <div ref={ref} className='grid grid-cols-7 my-10 gap-x-4 gap-y-4 grid-flow-row-dense'>
        {recommendations}
    </div>
  )
}
