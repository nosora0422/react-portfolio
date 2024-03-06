import { motion, useScroll, useSpring } from "framer-motion";
import Codeblock from "../CodeBlock/CodeBlock";
import ProjectDetailCard from "../ProjectDetailCard/ProjectDetailCard";
import Carousel from "../Flickity/Flickity";

export default function ProjectDetail({ project }){
    const { scrollYProgress } = useScroll();
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    return(
        <div id="first-section">
            <div className="my-grid max-w-[1200px] mx-auto p-10 px-6 lg:py-40">
                <motion.div className="fixed top-0 left-0 w-full h-2 -bg--blue origin-left z-50" style={{ scaleX }} />
                <div className="col-span-12 md:col-span-6 mb-20">
                    <h3>OVERVIEW<span className="point-dot"></span></h3>
                    <div className="body--gray">{project.overview}</div>
                </div>
                <div className="col-span-12 mb-5">
                    <div className="my-grid gap-y-5 max-w-[1200px] mx-auto">
                        <ProjectDetailCard 
                            project={project.keyPoint}
                        />
                    </div>
                </div>
                {
                    project.slideImg && 
                        <div className="col-span-12 mb-5">
                            <Carousel
                                gallery={project}
                            />
                        </div>
                }
                
                <div className="col-span-12">
                    {project.code && <Codeblock project={project}/>}
                </div>
            </div>
        </div>
    )
}