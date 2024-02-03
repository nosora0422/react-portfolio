import { useNavigate, Link } from "react-router-dom";

export default function Card({ type, title, description, link, path, column, skills }){
    // const cLocation = useLocation()
    // console.log('card loading');
    // console.log(cLocation.pathname);
    // console.log(`md:col-span-${props.column}`);

    const navigate = useNavigate();

    const handleClick = () => {
        navigate(link);
    };

    return(
            <div className={`col-span-12 md:col-span-6 md:p-4 ${column} relative bg-white rounded-2xl drop-shadow-md transition-transform transition-filter duration-300 ease-in-out cursor-pointer hover:-translate-x-2 hover:-translate-y-2 hover:drop-shadow-xl`} onClick={handleClick}>
                <div className="flex flex-col h-full" id="project1">
                    <img 
                        className="w-full object-cover object-center aspect-4/3 rounded-xl" 
                        src={path} 
                        alt={title}
                    />
                    <div className="pt-8 px-5 pb-6 ">
                        <p className="blue-lable">{type}</p>
                        <h4>{title}</h4>
                        <p className="body--gray">{description}</p>
                        <div className="my-5">
                            <ul className="mb-10">
                            {skills && skills.map((skill, index) => (
                                <li key={index} className='inline-block -text--white font-Manrope text-base py-0.5 px-5 mb-3 mr-1 -bg--darkgrey rounded-full'>{skill}</li>
                            ))}
                            </ul>
                            <Link to={link}>
                                <i className="fa-solid fa-arrow-right absolute right-4 bottom-4 py-3 px-3.5 rounded-full -bg--blue -text--white hover:bg-blue-800"></i>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
    )
}