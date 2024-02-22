
import Codeblock from "../CodeBlock/CodeBlock";
import ProjectDetailCard from "../ProjectDetailCard/ProjectDetailCard";
import Carousel from "../Flickity/Flickity";

export default function ProjectDetail({ project }){

    return(
        <section id="first-section">
            <div className="my-grid max-w-[1200px] mx-auto p-10 px-6 lg:py-40">
                <div className="col-span-12 md:col-span-6 mb-20">
                    <h3>OVERVIEW<span className="point-dot"></span></h3>
                    <p className="body--gray">{project.overview}</p>
                </div>
                
                <div className="col-span-12 mb-5">
                    <div className="my-grid gap-y-5 max-w-[1200px] mx-auto">
                        <ProjectDetailCard 
                            project={project.keyPoint}
                        />
                    </div>
                </div>
                {project.slideImg && <div className="col-span-12 mb-5">
                    <Carousel
                        gallery={project}
                    />
                </div>}
                
                <div className="col-span-12 mb-20">
                    {project.code && <Codeblock project={project}/>}
                </div>
            </div>
        </section>
    )
}