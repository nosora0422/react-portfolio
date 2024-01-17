import ProjectBanner from "../../Components/Banner/ProjectBanner";
import ProcessCard from "../../Components/ProcessCard/ProcessCard";
import ProjectData from "../../Components/ProjectData/ProjectData";
import Card from "../../Components/Card/Card";

export default function Project4(){
    const project4 = ProjectData[3];
    const phaseDatail = project4.process.map((item) => {
        return(
            <ProcessCard
                key={item.id}
                phase={item.phase}
                content={item.content}
                img={item.img}
                number={item.number}
            />
        )
    })

    const excludeItem = 3;
    const projectItems = ProjectData.filter((project) => project.id !== excludeItem).map(item => {
        return <Card
                    key={item.id} 
                    type={item.type} 
                    title={item.title} 
                    description={item.description} 
                    link={item.link} 
                    path={item.img}
                    column={'md:col-span-4'}
                    skills={item.skills} 
                />
    })

    return(
        <>
            <ProjectBanner 
                key={project4.id}
                type={project4.type}
                title={project4.title}
                disc={project4.description}
                path={project4.img}
                linkto={project4.demolink}
                skills={project4.skills}
            />
            <section id="first-section">
                <div className="my-grid max-w-[1200px] mx-auto py-20 px-6">
                    <div className="col-span-12">
                        <h3>OVERVIEW<span className="point-dot"></span></h3>
                        <p className="body--gray md:w-1/2 mb-8">{project4.overview}</p>
                        {phaseDatail}
                    </div>
                </div>
            </section>
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