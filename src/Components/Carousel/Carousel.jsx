import RecommendationData from '../RecommendationData/RecommendationData';

export default function Carousel() {

    const recommendations = RecommendationData.map(item => {
            return (
            <div className={`col-span-7 flex flex-col justify-between w-full h-full ${item.column} ${item.row} bg-white p-6 mr-5 rounded-2xl cursor-default`} key={item.id}>
                <div className="">
                    <p><i className="fa-solid fa-quote-left mb-3 -text--darkgrey"></i></p>
                    <p className="body--gray text-base">{item.comment}</p>
                    <i className="fa-solid fa-quote-right block text-right mt-3 -text--darkgrey"></i>
                </div>
                <div className="flex justify-between items-end">
                    <div>
                        <a href={item.linkedin} target="new"><i className="fa-brands fa-linkedin mr-12 -text--darkgrey cursor-pointer"></i></a>
                        <p className="font-Manrope text-lg font-semibold">{item.name}</p>
                        <p className="text-sm">{item.title}</p>
                    </div>
                    <img className="object-over object-center rounded-full border border-solid -border--lightgray w-10 h-10" src={item.img} alt={item.name} />
                </div>
            </div>
        )
    }
    )

  return (
    <div className='grid grid-cols-7 gap-x-4 gap-y-4 grid-flow-row-dense'>
        {recommendations}
    </div>



    // <Flickity
    //   className={''} // default ''
    //   elementType={'div'} // default 'div'
    //   options={flickityOptions} // takes flickity options {}
    //   disableImagesLoaded={false} // default false
    //   reloadOnUpdate // default false
    //   static // default false
    // >
    //     {recommendations}
    // </Flickity>
  )
}
