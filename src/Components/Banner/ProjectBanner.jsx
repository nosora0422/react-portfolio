export default function ProjectBanner({ project }){
    return(
        <>
            <section className="relative h-screen flex justify-center items-center lg:h-screen md:py-32" key={project.id}>
                <div className="my-grid max-w-[1200px] px-6 pt-10">
                    <div className="col-span-12">
                        <div className="my-grid">
                            <img src={project.img} className="col-span-12 max-h-[60vh] mx-auto object-top object-cover aspect-4/3 drop-shadow-lg rounded-xl lg:col-span-6" alt={project.title}/>
                            <div className="col-span-12 py-4 md:py-6 md:px-5 lg:col-span-6">
                                <p className="blue-lable">{project.type}</p>
                                <h4>{project.title}</h4>
                                <p className="body--gray">{project.description}</p>
                                <div className="py-5">
                                    <ul className="pb-5">
                                        {project.skills && project.skills.map((skill, index) => (
                                            <li key={index} className='inline-block -text--chip--text font-Manrope text-sm py-1 px-5 mb-3 mr-1 -bg--primary rounded-full md:text-base'>{skill}</li>
                                        ))}
                                    </ul>
                                    <a className="button drop-shadow-lg mt-0 lg:mt-6" href={project.demolink} target="new">Live Demo<i className="fa-solid fa-arrow-right ml-2"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col items-center absolute w-20 left-1/2 -translate-x-1/2 bottom-6" >
                    <p className="body--gray mb-3">Scroll</p>
                    <svg className="arrow-down" width="50" height="14" viewBox="0 0 31 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path className="-stroke--primary" d="M1 1L15.1375 12L30 1" strokeWidth="2"/>
                    </svg>
                </div>
             </section>
        </>
    )
}