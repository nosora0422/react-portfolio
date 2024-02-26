import { Link } from 'react-router-dom';

export default function Button({ text, link, yellow }){
    return(
        <div className="w-full flex justify-center">
            <Link to={link} className={ yellow ? "button -bg--yellow -text--grey hover:bg-yellow-500" : "button" }>
                {text} 
                <i className="fa-solid fa-arrow-right ml-3"></i>
            </Link>
        </div>
    )
}