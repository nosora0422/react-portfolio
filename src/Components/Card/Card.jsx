
export default function Card(props){
    return(
        <div className="col-span-12 md:col-span-6 relative -bg--white rounded-xl drop-shadow-light cursor-pointer transition-transform transition-filter duration-300 ease-in-out hover:-translate-x-2 hover:-translate-y-2 hover:drop-shadow-hover d-home-project-item">
            <div className="my-grid h-full" id="project1">
                <img className="col-span-12 col-6-lg w-full object-cover object-center aspect-4/3 rounded-xl" 
                src={props.path} alt={props.title}/>
                <div className="col-span-12 col-6-lg pt-4 px-5 pb-6">
                    <p className="body--gray font-medium">{props.type}</p>
                    <h4 className="pb-5">{props.title}</h4>
                    <p className="body--gray">{props.discription}</p>
                    <div className="py-5">
                        <ul className='pb-5'>
                            <li className='inline-block -text--white font-Manrope text-base py-1 px-4 mb-3 mr-1 -bg--darkgrey rounded-full'>HTML</li>
                            <li className='inline-block -text--white font-Manrope text-base py-1 px-4 mb-3 mr-1 -bg--darkgrey rounded-full'>CSS</li>
                            <li className='inline-block -text--white font-Manrope text-base py-1 px-4 mb-3 mr-1 -bg--darkgrey rounded-full'>JS</li>
                        </ul>
                        <a href={props.link}><i className="fa-solid fa-arrow-right absolute right-4 bottom-4 py-3 px-3.5 rounded-full -bg--blue -text--white"></i></a>
                    </div>
                </div>
            </div>
        </div>
    )
}