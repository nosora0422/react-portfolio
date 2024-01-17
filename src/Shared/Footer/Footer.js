export default function Footer(){
    return(
        <footer className="bg-neutral-100">
            <div className="max-w-[1600px] mx-auto sticky font-Josefin font-black text-base flex flex-col justify-center py-5 lg:flex lg:py-5 lg:px-6">
                <button className="logo" href="https://spline.design"></button>
                <div className="flex items-center justify-center gap-2 lg:flex-col lg:bottom-5 lg:fixed">
                    <a className="w-9 h-9 flex justify-center items-center -bg--body--backgroundColor border border-solid -border--lightgray rounded-full hover:-bg--lightgray transition-all" href="http://www.linkedin.com/in/sora-noh" target="new"><i className="fa-brands fa-linkedin fa-lg -text--darkgrey"></i></a>
                    <a className="w-9 h-9 flex justify-center items-center -bg--body--backgroundColor border border-solid -border--lightgray rounded-full hover:-bg--lightgray transition-all" href="mailto:nosora0422@gmail.com"><i className="fa-regular fa-envelope fa-lg -text--darkgrey"></i></a>
                    <a className="w-9 h-9 flex justify-center items-center -bg--body--backgroundColor border border-solid -border--lightgray rounded-full hover:-bg--lightgray transition-all" href="http://github.com/nosora0422" target="new"><i className="fa-brands fa-github fa-lg -text--darkgrey"></i></a>
                </div>
                <p className="mt-5 text-center -text--darkgrey">&copy; Sora Noh 2023</p>
            </div>
        </footer>
    )
}