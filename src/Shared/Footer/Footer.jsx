export default function Footer(){
    return(
        <footer className=" -bg--contact-backgroundColor">
            <div className="max-w-[1600px] mx-auto sticky font-Josefin font-black text-base flex flex-col justify-center py-5 lg:flex lg:py-5 lg:px-6">
                {/* <a className="logo" href="https://spline.design" target="new"> </a> */}
                <div className="flex items-center justify-center gap-2 lg:flex-col lg:bottom-5 lg:fixed">
                    <a className="w-9 h-9 flex justify-center items-center -text--grey -bg--background border border-solid -border--lightgray rounded-full hover:-text--lightgray transition-colors" href="http://www.linkedin.com/in/sora-noh" target="new"><i className="fa-brands fa-linkedin fa-lg"></i></a>
                    <a className="w-9 h-9 flex justify-center items-center -text--grey -bg--background border border-solid -border--lightgray rounded-full hover:-text--lightgray transition-colors" href="mailto:nosora0422@gmail.com"><i className="fa-solid fa-envelope fa-lg"></i></a>
                    <a className="w-9 h-9 flex justify-center items-center -text--grey -bg--background border border-solid -border--lightgray rounded-full hover:-text--lightgray transition-colors" href="http://github.com/nosora0422" target="new"><i className="fa-brands fa-github fa-lg"></i></a>
                </div>
                <p className="mt-5 text-center -text--primary">&copy; Sora Noh 2023</p>
            </div>
        </footer>
    )
}