import { useNavigate, useOutletContext } from "react-router-dom";
import { Helmet } from 'react-helmet-async';

import ProjectBanner from "../../Assets/Spline/ProjectBanner/ProjectBanner";
import Banner from '../../Components/Banner/Banner';
import Card from '../../Components/Card/Card';
import ProjectData from "../../Data/ProjectData";
import ProjectBannerDark from "../../Assets/Spline/ProjectBanner/ProjectBannerDark";

export default function Projects(){
    const isDark = useOutletContext();
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
        <div className="-bg--body--backgroundColor">
            <Helmet>
                <title>Projects - Sora Noh, Creative Front End Developer</title>
                <meta name="description" content="Discover my passion for crafting useful, reusable, and maintainable solutions." />
                <meta name="keywords" content="webflow-website responsive-website email-template react projects"></meta>
            </Helmet>
            <section className="">
                <Banner 
                    h1='PROJECTS'
                    h2first='I LEARN FROM'
                    h2second='CHALLENGES'
                    disc="Check out my projects that show what I’m most passionate about!"
                    avatar='project-avatar.png'
                    bannercomp={isDark ? ProjectBannerDark : ProjectBanner}
                />
            </section>
            <section className="section">
                <div className="my-grid max-w-[1200px] mx-auto py-20 px-6 lg:py-40" id="first-section">
                    <div className="col-span-12 home-project-wrapper">
                        <div className="pb-12">
                            <div className="flex flex-col">
                                <div className="flex flex-wrap gap-2 mb-4">
                                    <p className="text-base font-bold font-Josefin -text--primary md:text-lg lg:text-xl">USEFUL,</p>
                                    <p className="text-base font-bold font-Josefin -text--primary md:text-lg lg:text-xl">REUSABLE,</p>
                                    <p className="text-base font-bold font-Josefin -text--primary md:text-lg lg:text-xl">MAINTAINABLE</p>
                                </div>
                                <h3>DEVELOPMENT PROJECTS<span className="point-dot"></span></h3>
                            </div>
                            <p className="body--gray max-w-[600px]">I strive for solutions that are not only effective and efficient but also easily comprehensible, capable of addressing issues across various levels, and adaptable for swift updates. <br/><br/> This approach enables the development of organized and easily troubleshootable code. Through overcoming project challenges, I've honed my skills as a meticulous and inventive developer.</p>
                        </div>
                        <div className="my-grid my-10 gap-y-10 lg:gap-10 ">
                            {projectItems}
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}