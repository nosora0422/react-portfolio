
import Banner from '../../Components/Banner/Banner';
import Button from '../../Components/Button/Button';
import Card from '../../Components/Card/Card';
import Carousel from '../../Components/Carousel/Carousel';
import ProjectData from '../../Components/ProjectData/ProjectData';
import HomeBanner from "../../Assets/Spline/HomeBanner/HomeBanner";



export default function Home(){
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
                h1='SORA NOH'
                h2first='FRONT-END'
                h2second='DEVELOPER'
                disc="I’m a front-end developer who enjoys challenges and problem-solving through code." 
                avatar='iphone-avatar.png'
                bannercomp={HomeBanner}
                btn='Who I am ?' 
            />
            <section className="my-grid max-w-[1200px] mx-auto py-20 px-6 lg:py-40" id="first-section">
                <div className="col-span-12 home-project-wrapper">
                    <div className="pb-12">
                        <div className="flex flex-wrap">
                            <h3>FEATURED</h3>
                            <h3>PROJECTS<span className="point-dot"></span></h3>
                        </div>
                        <p className="body--gray max-w-[500px]">I've achieved the project goals by focusing on building useful, reusable, and maintainable code to solve problems. </p>
                    </div>
                    <div className="my-grid gap-y-10 my-10 lg:gap-10 ">
                        {projectItems}
                    </div>
                    <Button text='More Projects'/>
                </div>
            </section>
            <section className="-bg--darkgrey bg-gradient-to-t -from--gradient-dark -to--gradient-light ">
                <div className="max-w-[1200px] mx-auto py-20 px-6 lg:py-40">
                    <div className="pb-9 lg:pb-20">
                        <h3 className="text-white">RECOMMENDATIONS<span className="point-dot"></span></h3>
                        <p className="body--white max-w-[500px]">These wonderful recommendations come from both colleagues and team members I've collaborated!</p>
                    </div>
                    <Carousel />
                </div>
            </section> 
        </>
        
    )
}