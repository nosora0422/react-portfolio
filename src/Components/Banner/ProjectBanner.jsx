import React, { useState } from 'react';

export default function ProjectBanner({ project }){
    const [hovered, setHovered] = useState(false);

    return(
            <div className="relative h-screen flex justify-center items-center lg:h-screen md:py-" key={project.id}>
                <div className="my-grid max-w-[1200px] px-6 sm:pt-10">
                    <div className="col-span-12">
                        <div className="my-grid">
                            <div className='relative col-span-12 max-h-[60vh] mx-auto drop-shadow-lg lg:col-span-6'>
                                <img 
                                    src={hovered ? project.qr : project.img} 
                                    className="object-top object-cover aspect-4/3 sm:h-full mx-auto rounded-xl" 
                                    alt={project.title}
                                    
                                />
                                <button 
                                    className="hidden lg:block absolute bottom-2 left-2 px-4 rounded-full -bg--blue text-white text-base font-Manrope font-medium hover:-bg--lightgray/60"
                                    onMouseEnter={() => setHovered(true)}
                                    onMouseLeave={() => setHovered(false)}
                                >
                                    
                                    <i className="fa-solid fa-mobile-screen-button"></i>
                                    
                                </button>
                            </div>
                            <div className="col-span-12 py-4 md:py-6 md:px-5 lg:col-span-6">
                                <p className="-text--blue text-base inline-block font-semibold">{project.type}</p>
                                <h4>{project.title}</h4>
                                <p className="body--gray">{project.description}</p>
                                <div className="py-5">
                                    <ul className="pb-5">
                                        {project.skills && project.skills.map((skill, index) => (
                                            <li key={index} className='inline-block -text--chip--text font-Manrope text-base py-1 px-5 mb-2 mr-3 -bg--chip--background rounded-full'>{skill}</li>
                                        ))}
                                    </ul>
                                    <div className="flex gap-4">
                                        <a 
                                            className="button drop-shadow-lg mt-0 lg:mt-6" 
                                            href={project.demolink} 
                                            target="new"
                                        >Live Demo<i className="fa-solid fa-arrow-right ml-2"></i>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col items-center absolute w-12 left-1/2 -translate-x-1/2 bottom-2 md:w-20" >
                <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="-20 0 80 80">
                    <rect x=".86" y=".86" width="33.03" height="56.29" rx="16.52" ry="16.52" style={{fill:'none', stroke:'rgb(158,158,158)', strokeMiterlimit:10, strokeWidth:2}}/>
                    <circle cx="17.37" cy="13.97" r="4.73" className='animate-mouseWheelAnim' style={{fill:'rgb(158,158,158)', strokeWidth:0}}/>
                </svg>
                </div>
             </div>
    )
}