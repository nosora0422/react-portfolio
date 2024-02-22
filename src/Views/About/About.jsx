import Banner from '../../Components/Banner/Banner';
import AboutBanner from '../../Assets/Spline/AboutBanner/AboutBanner';
import Button from '../../Components/Button/Button';
import resume from '../../Assets/Documents/sora_noh_resume.pdf'


export default function About(){
    return(
        <>
            <Banner 
                h1='ABOUT'
                h2first="HELLO! I'M &nbsp;"
                //h2second takes [string arrays] or 'string'
                h2second={['GOAL-DRIVEN','FAST-LEARNER','DETAIL-ORIENTED']}
                avatar='about-avatar.png'
                bannercomp={AboutBanner}
            />
            <section className="about" id="first-section">
                <div className="max-w-[1200px] mx-auto py-20 px-6 box-border">
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
                                        <h5>Community</h5>
                                        <p className="body--gray">
                                             Embracing community-centred values, I prioritize mutual growth through respect and empathy. Driven by a commitment to service, and continuously striving to become a better person by surpassing expectations, I believe in leveraging personal growth to enhance the collective experience.
                                        </p>
                                    </div>
                                    <div className="mb-14">
                                        <h5>Challenge</h5>
                                        <p className="body--gray">
                                            I enjoy challenges. In fact, I see them as chances to learn and grow. For all that, I aim for efficient solutions that challenge me. I focus on improving efficiency and finding better ways to tackle obstacles, which helps contribute positively to their success and mine.
                                        </p>
                                    </div>
                                    <div className="mb-14">
                                        <h5>Empathy</h5>
                                        <p className="body--gray">
                                            I consider empathy a cornerstone for cultivating meaningful relationships. The skill of understanding and appreciating different perspectives has proven invaluable, enabling me to collaboratively discover optimal solutions for both myself and others.
                                        </p>
                                    </div>    
                                </div>
                            </div>
                            <div className="w-full pt-20">
                                <h3>SKILLS<span className="point-dot -bg--yellow"></span></h3>
                                <div>
                                    <div className="mb-14">
                                        <h5>Programming Language & Library</h5>
                                        <p className="body--gray">HTML, CSS, JavaScript, PHP, React.js, React Native, Tailwind, Bootstrap</p>
                                    </div>
        
                                    <div className="mb-14">
                                        <h5>Design Software</h5>
                                        <p className="body--gray">Adobe Photoshop, Illustrator, Indesign, After Effect, Premier Pro, Figma</p>
                                    </div>
        
                                    <div className="mb-14">
                                        <h5>Database & System</h5>
                                        <p className="body--gray">MySQL, Webflow, Wordpress, Firebase</p>
                                    </div>
                                </div>
                            </div>
                            <Button text="View Projects" link="/projects" yellow={true}/>
                        </div>
                        <div className="relative col-span-12 -order-1 md:col-span-6 ">
                            <div className='flex flex-col items-center h-auto mb-24 md:mb-0 md:sticky md:top-[15vh]'>
                                <img 
                                    src={require('../../Assets/Images/Sora_Noh_Profile.jpg')} 
                                    className="w-full max-w-[800px] md:h-[70vh] object-top object-cover rounded-2xl drop-shadow-lg" 
                                    alt="Sora Noh Profile" 
                                />
                                <a className="button -bg--yellow -text--darkgrey hover:bg-yellow-500" href={resume} target='new'>Resume <i className="ml-3 fa-solid fa-arrow-right"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}