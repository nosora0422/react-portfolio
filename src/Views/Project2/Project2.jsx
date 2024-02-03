import ProjectBanner from "../../Components/Banner/ProjectBanner";
import ProjectData from "../../Data/ProjectData";
import Card from "../../Components/Card/Card";
import ProjectDetail from "../../Components/ProjectDetail/ProjectDetail";

export default function Project2(){
    const project2 = ProjectData[1];
    const excludeItem = 1;
    const projectItems = ProjectData.filter((project) => project.id !== excludeItem).map(item => {
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
                    key={project2.id}
                    type={project2.type}
                    title={project2.title}
                    disc={project2.description}
                    path={project2.img}
                    linkto={project2.demolink}
                    skills={project2.skills}
                />
                <ProjectDetail project={project2} />
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