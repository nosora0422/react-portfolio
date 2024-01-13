import ProjectBanner from "../../Assets/Spline/ProjectBanner/ProjectBanner";
import Banner from '../../Components/Banner/Banner';
import Card from '../../Components/Card/Card';
import ProjectData from '../../Components/ProjectData/ProjectData';

export default function Projects(){
    const projectItems = ProjectData.map(item => {
        return <Card
                    key={item.id} 
                    type={item.type} 
                    title={item.title} 
                    discription={item.discription} 
                    link={item.link} 
                    path={item.img} 
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
                        <div className="flex flex-wrap">
                            <h3>WEB DEVELOPMENT<span className="point-dot"></span></h3>
                        </div>
                        <p className="body--gray max-w-[500px]">I've achieved the project goals by focusing on building useful, reusable, and maintainable code to solve problems. </p>
                    </div>
                    <div className="my-grid my-10 gap-y-10 lg:gap-10 ">
                        {projectItems}
                    </div>
                </div>
            </section>
        </>
        
    )
}