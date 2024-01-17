import Banner from '../../Components/Banner/Banner';
import AboutBanner from '../../Assets/Spline/AboutBanner/AboutBanner';


export default function About(){
    return(
        <>
            <Banner 
                h1='ABOUT'
                h2first="I'M SORA NOH"
                h2second="GOAL-DRIVEN"
                avatar='about-avatar.png'
                bannercomp={AboutBanner}
            />
            <section className="about" id="first-section">
                <div className="max-w-[1200px] mx-auto py-20 px-6">
                    <div className="my-grid">
                        <div className="col-span-12 md:col-span-6 md:pl-6">
                            <div className="mb-14">
                                <h3>ABOUT ME<span className="point-dot -bg--yellow"></span></h3>
                                <p className="body--gray">Hello!<br/><br/>
                                I'm Sora Noh, and I'm passionate about <span className="inline-block text-sm font-medium -bg--darkgrey -text--white py-1 px-2.5 rounded-full"> <span className="mr-1.5">&#128421;</span> Web-development</span>. I'm currently located in Vancouver BC! My journey into this world began in the New Media design and Web Development program, ignited by my deep curiosity about user interactions. I love problem-solving, and coding, especially using HTML, CSS, and JavaScript. These skills have become my specialty in contributing to building solutions during the program.<br/><br/>
                                When I'm not engrossed in coding, I enjoy creating dynamic video and graphic animations using After Effects and Premiere Pro. <span className="inline-block text-sm font-medium -bg--darkgrey -text--white py-1 px-2.5 rounded-full"> <span className="mr-1.5">&#128247;</span>Video-Editing </span> refreshes my approach to design thinking and communication.<br/><br/>
                                I also enjoy <span className="inline-block text-sm font-medium -bg--darkgrey -text--white py-1 px-2.5 rounded-full"> <span className="mr-1.5"> &#127956;</span>hiking</span>, especially when I reach the mountaintop and get to appreciate the incredible views. The views at the end of a challenging hike never fail to impress me.</p>
                            </div>
                            <div className="w-full pt-20">
                                <h3>MY CORE VALUES<span className="point-dot -bg--yellow"></span></h3>
                                <div>
                                    <div className="mb-14">
                                        <h5>Achievement</h5>
                                        <p className="body--gray">
                                            I'm driven to succeed in any environment I find myself in. I confront challenges directly, strategically plan to accomplish my goals, and continuously aim to surpass expectations. Throughout this journey, I prioritize extending support to those who may need it, ensuring no one is left behind. 
                                        </p>
                                    </div>
                                    <div className="mb-14">
                                        <h5>Challenge</h5>
                                        <p className="body--gray">
                                            I enjoy challenges. In fact, I see them as chances to learn and grow. For all that, I aim for efficient solutions that challenge me. I focus on improving efficiency and finding better ways to tackle obstacles, which helps me earn the trust of those around me and contribute positively to their success and mine.
                                        </p>
                                    </div>
                                    <div className="mb-14">
                                        <h5>Honesty</h5>
                                        <p className="body--gray">
                                            I prioritize being honest with both myself and others to respect and foster trust. Honesty allows me to present my true self and build genuine relationships built on trust, ultimately enhancing my credibility in those relationships.
                                        </p>
                                    </div>    
                                </div>
                            </div>
                            <div className="w-full pt-20">
                                <h3>SKILLS<span className="point-dot -bg--yellow"></span></h3>
                                <div>
                                    <div className="mb-14">
                                        <h5>Programming Languages</h5>
                                        <p className="body--gray">HTML, CSS, JavaScript, PHP </p>
                                    </div>
        
                                    <div className="mb-14">
                                        <h5>Design Software</h5>
                                        <p className="body--gray">Adobe Photoshop, Illustrator, Indesign, After Effect, Premier Pro, Figma</p>
                                    </div>
        
                                    <div className="mb-14">
                                        <h5>Database & System</h5>
                                        <p className="body--gray">MySQL, Webflow, Wordpress</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-span-12 mb-24 h-96 flex flex-col items-center -order-1 md:mb-10 md:col-span-6 md:h-[70vh] md:sticky md:top-[15vh]">
                            <img src={require('../../Assets/Images/Sora_Noh_Profile.jpg')} className="w-full max-w-[800px] h-full object-top object-cover rounded-2xl drop-shadow-lg" alt="Sora Noh Profile" />
                            <a className="button -bg--yellow -text--darkgrey drop-shadow-lg hover:bg-yellow-500" href="asset/sora_noh-CV.pdf" target="new">Resume<i className="fa-solid fa-arrow-right ml-2 -text--darkgrey"></i></a>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}