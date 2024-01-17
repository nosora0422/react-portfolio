export default function ProjectBanner(props){
    return(
        <>
            <section className="relative h-screen flex justify-center items-center lg:h-screen md:py-32" key={props.id}>
                <div className="my-grid max-w-[1200px] px-6">
                    <div className="col-span-12">
                        <div className="my-grid">
                            <img src={props.path} className="col-span-12 max-h-[60vh] mx-auto object-top object-cover aspect-4/3 drop-shadow-lg rounded-xl md:col-span-6" alt="project-thumbnail"/>
                            <div className="col-span-12 pt-4 pr-5 pb-8 pl-5 md:col-span-6">
                                <p className="body--gray font-medium">{props.type}</p>
                                <h4>{props.title}</h4>
                                <p className="body--gray">{props.disc}</p>
                                <div className="py-5">
                                    <ul className="pb-5">
                                        {props.skills && props.skills.map((skill, index) => (
                                            <li key={index} className='inline-block -text--white font-Manrope text-base py-1 px-4 mb-3 mr-1 -bg--darkgrey rounded-full'>{skill}</li>
                                        ))}
                                    </ul>
                                    <a className="button drop-shadow-lg mt-0 lg:mt-12" href={props.linkto} target="new">Live Demo<i className="fa-solid fa-arrow-right ml-2"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            <a href="#first-section">
                <svg className="arrow-down" width="31" height="14" viewBox="0 0 31 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path className="-stroke--darkgrey" d="M1 1L15.1375 12L30 1" strokeWidth="2"/>
                </svg>
            </a>
        </section>
        </>
    )
}