export default function ProjectImageCard({ gallery }){
    const galleryImage = gallery.slideImg.map((item, index) => 
        {
            return (
                <div 
                    key={index}
                    className="-bg--darkgrey"
                >
                    <img 
                        src={item}
                        className='aspect-4/3 object-cover object-center' 
                        alt={item.index}
                    />
                </div>
            )
        }
    )
    return(
        <div className="bg-white p-6 rounded-2xl md:p-10 shadow-md">
                {galleryImage}
        </div>
    )
}