import { useParams, useNavigate } from 'react-router-dom';

import ProjectBanner from "../../Components/Banner/ProjectBanner";
import Projects from "../../Data/ProjectData";
import Card from "../../Components/Card/Card";
import ProjectDetail from "../../Components/ProjectDetail/ProjectDetail";


export default function Project(){
    const navigate = useNavigate();

    const handleCardClick = (id) => {
        navigate(`${process.env.PUBLIC_URL}/project-details/${id}`);
    };
    const { id } = useParams();

    const currProject = Projects.find(project => project.id === parseInt(id));
    if (!currProject) {
        // Handle case where project with given ID is not found
        return <div>Project not found</div>;
    }

    const projectItems = Projects.filter((project) => project.id !== parseInt(id)).map(item => {
        return <Card
                    key={item.id} 
                    type={item.type} 
                    title={item.title} 
                    description={item.description} 
                    path={item.img}
                    column={'lg:col-span-4'}
                    skills={item.skills}
                    onClick={( )=> handleCardClick(item.id)} 
                />
    })

    return(
        <>
            <div className="relative -bg--body--backgroundColor">
                <ProjectBanner 
                    project={currProject}
                />
                <ProjectDetail project={currProject} />
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