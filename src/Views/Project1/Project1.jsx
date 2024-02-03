import ProjectBanner from "../../Components/Banner/ProjectBanner";
import Projects from "../../Data/ProjectData";
import Card from "../../Components/Card/Card";
import ProjectDetail from "../../Components/ProjectDetail/ProjectDetail";

export default function Project1(){
    const project1 = Projects[0];
    const excludeItem = 0;
    const projectItems = Projects.filter((project) => project.id !== excludeItem).map(item => {
        return <Card
                    key={item.id} 
                    type={item.type} 
                    title={item.title} 
                    description={item.description} 
                    link={item.link} 
                    path={item.img}
                    column={'lg:col-span-4'}
                    skills={item.skills} 
                />
    })

    return(
        <>
            <div className="relative">
                <ProjectBanner 
                    key={project1.id}
                    type={project1.type}
                    title={project1.title}
                    disc={project1.description}
                    path={project1.img}
                    linkto={project1.demolink}
                    skills={project1.skills}
                />
                <ProjectDetail project={project1} />
            </div>
            <section className="my-grid max-w-[1200px] mx-auto pb-20 md:pb-40 md:pt-20 px-6">
            <div className="col-span-12">
                <h3>MORE PROJECTS<span className="point-dot"></span></h3>
                <div className="my-grid gap-y-10 my-10 lg:gap-10">
                    {projectItems}
                </div>
            </div>
            </section>
        </>
    )
}