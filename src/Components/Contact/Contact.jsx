export default function Contact(props){
    return(
        <section className="my-grid max-w-[1200px] mx-auto py-20 px-6 lg:flex lg:flex-col lg:justify-center lg:px-6 lg:h-cal">
            <div className="col-span-12 w-full flex flex-col lg:flex-row lg:justify-between">
                <div className=" mr-100px">
                    <h3>LET'S GET</h3>
                    <h3>CONNECTED<span className="point-dot"></span></h3>
                </div>
                <div className="w-full max-w-[450px] flex flex-col">
                    <p className="body--gray">Feel free to reach out to me with any questions about me and my projects! I'm here and ready to collaborate with you on any interesting web development project!</p>
                    <div className="hidden lg:mt-8 lg:w-full lg:flex lg:items-center">
                        <a href={props.linkedin} target="new"><i className="fa-brands fa-linkedin fa-lg mr-12 -text--darkgrey"></i></a>
                        <a href={props.email}><i className="fa-solid fa-at fa-lg mr-12 -text--darkgrey"></i></a>
                        <a href={props.github} target="new"><i className="fa-brands fa-github fa-lg mr-12 -text--darkgrey"></i></a>
                    </div>
                </div>
            </div>
        </section>
    )
}