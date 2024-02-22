import { useNavigate } from "react-router-dom";

import ProjectBanner from "../../Assets/Spline/ProjectBanner/ProjectBanner";
import Banner from '../../Components/Banner/Banner';
import Card from '../../Components/Card/Card';
import ProjectData from "../../Data/ProjectData";

export default function Projects(){
    const navigate = useNavigate();

    const handleCardClick = (id) => {
        navigate(`${process.env.PUBLIC_URL}/project-details/${id}`);
    };


    const projectItems = ProjectData.map(item => {
        return <Card
                    key={item.id} 
                    type={item.type} 
                    title={item.title} 
                    description={item.description} 
                    path={item.img}
                    column={'lg:col-span-6'}
                    skills={item.skills} 
                    onClick={( )=> handleCardClick(item.id)}
                />
    })
    
    return(
        <>
            <Banner 
                h1='PROJECTS'
                h2first='I LEARN FROM'
                h2second='CHALLENGES'
                disc="Check out my projects that show what I’m most passionate about!"
                avatar='project-avatar.png'
                bannercomp={ProjectBanner}
            />
            <section className="my-grid max-w-[1200px] mx-auto py-20 px-6 lg:py-40" id="first-section">
                <div className="col-span-12 home-project-wrapper">
                    <div className="pb-12">
                        <div className="flex flex-col">
                            <div className="flex flex-wrap gap-2 mb-4">
                                <p className="text-base font-bold font-Josefin -text--darkgrey md:text-lg lg:text-xl">USEFUL,</p>
                                <p className="text-base font-bold font-Josefin -text--darkgrey md:text-lg lg:text-xl">REUSABLE,</p>
                                <p className="text-base font-bold font-Josefin -text--darkgrey md:text-lg lg:text-xl">MAINTAINABLE</p>
                            </div>
                            <h3>WEB DEVELOPMENT<span className="point-dot"></span></h3>
                        </div>
                        <p className="body--gray max-w-[600px]">I strive for solutions that are not only effective and efficient but also easily comprehensible, capable of addressing issues across various levels, and adaptable for swift updates. This approach enables the development of organized and easily troubleshootable code. Through overcoming project challenges, I've honed my skills as a meticulous and inventive developer.</p>
                    </div>
                    <div className="my-grid my-10 gap-y-10 lg:gap-10 ">
                        {projectItems}
                    </div>
                </div>
            </section>
        </>
    )
}