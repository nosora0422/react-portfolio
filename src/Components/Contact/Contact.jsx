import contactData from "../../Data/ContactData";
import { motion } from 'framer-motion';


const fadeInAnimationVariants = {
    initial: {
        opacity: 0,
        y: 70,
    },
    animate: (id) => ({
        opacity: 1,
        y: 0,
        transition: {
            ease: "easeOut",
            delay: 0.1 * id
        },
    }),
}


export default function Contact(){
    return(
        <section className="section -bg--contact-backgroundColor">
            <div className="max-w-[1200px] mx-auto py-20 px-6 md:flex md:flex-col md:justify-center md:px-6 lg:h-cal">
                <div className="my-grid w-full">
                    <div className="col-span-12 md:col-span-6">
                        <h3>LET'S GET</h3>
                        <h3>CONNECTED<span className="point-dot"></span></h3>
                    </div>
                    <div className="col-span-12 flex flex-col md:pl-6 md:col-span-6 ">
                        <p className="body--gray">Feel free to reach out to me with any questions about me and my projects! I'm here and ready to collaborate with you on any interesting web development project!</p>
                        <ul className="hidden lg:mt-8 lg:w-full lg:flex lg:items-center" >
                            <li><a className="-text--chip--text -bg--primary px-4 mr-8 rounded-full" href="mailto:nosora0422@gmail.com">nosora0422@gmail.com</a></li>
                            {contactData.map(({ link, icon, id }) => (
                                <motion.li 
                                    key={id}
                                    variants={fadeInAnimationVariants}
                                    initial="initial"
                                    whileInView="animate"
                                    viewport={{
                                        once: true
                                    }}
                                    custom={id}
                                >
                                    <a href={link} target="new">
                                        <i className={`${icon} fa-lg mr-8 -text--primary`}></i>
                                    </a>
                                </motion.li>
                            ))}
                            
                        </ul>
                    </div>
                </div>
            </div>            
        </section>
    )
}