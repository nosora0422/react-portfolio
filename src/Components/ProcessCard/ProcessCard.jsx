
export default function ProcessCard({ phase, content, img, number }){
    return(
        <div className=" -bg--darkgrey box-animation rounded-2xl p-8 my-10 md:p-10 drop-shadow-md">
            <div className="my-grid">
                <div className="col-span-12 md:col-span-6 mb-8">
                    <h5 className="-text--white uppercase">{phase}</h5>
                    {number && <h6 className="-text--white">{number}</h6>}
                    {Array.isArray(content) ? (
                        <ul className="body--white">
                        {content.map((step, index) => (
                            <li key={index}>{step.content}</li>
                        ))}
                        </ul>
                    ) : (
                        <p className="body--white">{content}</p>
                    )}
                </div>
                <div className="col-span-12 md:col-span-6 aspect-4/3">
                    <img src={img} className="w-full h-full rounded-lg object-top object-cover" alt="mindmap"/>
                </div>
            </div>
        </div>
    )
}