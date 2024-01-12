export default function Button({ text }){
    return(
        <div className="w-full flex justify-center">
            <a className="button" href="index.html">{text} <i className="fa-solid fa-arrow-right"></i>
            </a>
        </div>
    )
}