import { useNavigate, useOutletContext } from 'react-router-dom';

import Banner from '../../Components/Banner/Banner';
import Button from '../../Components/Button/Button';
import Card from '../../Components/Card/Card';
import RecomCard from '../../Components/RecomCard/RecomCard';
import ProjectData from '../../Data/ProjectData';
import HomeBanner from "../../Assets/Spline/HomeBanner/HomeBanner";
import HomeBannerDark from '../../Assets/Spline/HomeBanner/HomeBannerDark';


export default function Home(){
    const isDark = useOutletContext();
    console.log(isDark);
    const navigate = useNavigate();

    const handleCardClick = (id) => {
        navigate(`${process.env.PUBLIC_URL}/project-details/${id}`);
    };

    const projectItems = ProjectData.slice(0, 2).map((item) => {
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
    // console.log('home loading');
    // console.log(cLocation);
    return(
        <div>
            <section>
                <Banner 
                    h1='SORA NOH'
                    h2first='FRONT-END'
                    h2second='DEVELOPER'
                    disc="I’m a front-end developer who enjoys challenges and problem-solving through code." 
                    avatar='iphone-avatar.png'
                    bannercomp={isDark ? HomeBannerDark : HomeBanner}
                    btn='Who I am ?' 
                />
            </section>
            <section className="section">
                <div className="my-grid max-w-[1200px] mx-auto py-20 px-6 lg:py-40" id="first-section">
                    <div className="col-span-12">
                        <div className="pb-12">
                            <div className="flex flex-wrap">
                                <h3>FEATURED</h3>
                                <h3>PROJECTS<span className="point-dot"></span></h3>
                            </div>
                            <p className="body--gray max-w-[500px]">I've achieved the project goals by focusing on building useful, reusable, and maintainable code to solve problems. </p>
                        </div>
                        <div className="my-grid gap-y-10 my- md:my-10 lg:gap-10 ">
                            {projectItems}
                        </div>
                        <Button 
                            text='More Projects' 
                            link='/projects'
                        />
                    </div>
                </div>
            </section>
            <section className="section">
                <div className="max-w-[1200px] mx-auto py-20 px-6 lg:py-40">
                    <div className="pb-12 lg:pb-20">
                        <h3 className="-text--primary">RECOMMENDATIONS<span className="point-dot"></span></h3>
                        <p className="-text--primary max-w-[500px]">These wonderful LinkedIn recommendations come from both colleagues and team members I've collaborated!</p>
                    </div>
                    <RecomCard />
                </div>
            </section> 
        </div>
        
    )
}