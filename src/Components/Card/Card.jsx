import { useNavigate } from "react-router-dom";

export default function Card(props){
    // console.log(`md:col-span-${props.column}`);

    const navigate = useNavigate();

    const handleClick = () => {
        navigate(props.link);
    };

    return(
            <div className={`col-span-12 ${props.column} relative -bg--white rounded-2xl drop-shadow-light cursor-pointer transition-transform transition-filter duration-300 ease-in-out hover:-translate-x-2 hover:-translate-y-2 hover:drop-shadow-hover`} onClick={handleClick}>
                <div className="my-grid h-full" id="project1">
                    <img 
                        className="col-span-12 w-full object-cover object-center aspect-4/3 rounded-2xl" 
                        src={props.path} 
                        alt={props.title}
                    />
                    <div className="col-span-12 pt-4 px-5 pb-6 md:px-7">
                        <p className="body--gray font-medium">{props.type}</p>
                        <h4 className="pb-5">{props.title}</h4>
                        <p className="body--gray">{props.description}</p>
                        <div className="py-5">
                            <ul className="pb-5">
                            {props.skills && props.skills.map((skill, index) => (
                                <li key={index} className='inline-block -text--white font-Manrope text-base py-1 px-4 mb-3 mr-1 -bg--darkgrey rounded-full'>{skill}</li>
                            ))}
                            </ul>
                            <a href={props.link}><i className="fa-solid fa-arrow-right absolute right-4 bottom-4 py-3 px-3.5 rounded-full -bg--blue -text--white"></i></a>
                        </div>
                    </div>
                </div>
            </div>
    )
}