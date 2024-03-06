import React, { useState } from 'react';

export default function Card({ type, title, description, path, column, skills, onClick }){
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [isHovered, setIsHovered] = useState(false);

    const handleMouseEnter = () => {
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
    };

    const handleMouseMove = (event) => {
        const { left, top } = event.currentTarget.getBoundingClientRect();
        const offsetX = event.clientX - left;
        const offsetY = event.clientY - top;
        setMousePosition({ x: offsetX, y: offsetY });
    };


    return(
            <div 
                className={`col-span-12 md:col-span-6 md:p-4 ${column} relative -bg--card-background rounded-2xl border border-solid -border--outline drop-shadow-md cursor-pointer hover:drop-shadow-xl`} 
                onClick={onClick}
                onMouseEnter={handleMouseEnter} 
                onMouseLeave={handleMouseLeave} 
                onMouseMove={handleMouseMove} 
            >
                <div className="flex flex-col h-full" id="project1">
                    <img 
                        className="w-full object-cover object-center aspect-4/3 rounded-lg" 
                        src={path} 
                        alt={title}
                    />
                    <div className="relative pt-8 px-5">
                        <p className="-text--blue text-base inline-block font-semibold">{type}</p>
                        <h4>{title}</h4>
                        <p className="body--gray">{description}</p>
                        <ul className="my-4">
                        {skills && skills.map((skill, index) => (
                            <li key={index} className='inline-block -text--chip--text font-Manrope text-base py-1 px-5 mb-2 mr-3 -bg--chip--background rounded-full'>{skill}</li>
                        ))}
                        </ul>
                        {/* <i className="fa-solid fa-arrow-right absolute right-4 bottom-4 py-3 px-3.5 rounded-full -bg--blue -text--onDark hover:bg-blue-800"></i> */}
                    </div>
                </div>
                {(isHovered &&
                <div 
                    className="absolute flex justify-center items-center rounded-full w-16 h-16 font-medium text-xs text-center -bg--blue -text--onDark animate-opacityAnim drop-shadow-lg" 
                    style={{  
                        top: mousePosition.y + 3, 
                        left: mousePosition.x + 3, 
                    }}
                >
                Click to Browse
                </div>
                )}
            </div>
    )
}