import Flickity from 'react-flickity-component';
import RecommendationData from '../RecommendationData/RecommendationData';

const flickityOptions = {
    initialIndex: 1
}

export default function Carousel() {
    const recommendations = RecommendationData.map(item => {
            return (
            <div className="flex flex-col justify-between w-72 h-112 bg-white p-6 mr-5 rounded-2xl" key={item.id}>
                <div className="message-box">
                    <p><i className="fa-solid fa-quote-left mb-5 -text--darkgrey"></i></p>
                    <p className="body--gray">{item.comment}</p>
                    <i className="fa-solid fa-quote-right block text-right mt-5 -text--darkgrey"></i>
                </div>
                <div className="flex justify-between items-center">
                    <div>
                        <p className="font-Manrope text-lg font-medium">{item.name}</p>
                        <p className="text-sm">{item.title}</p>
                    </div>
                    <img className="object-over object-center rounded-full border border-solid -border--lightgray w-10 h-10" src={item.img} alt={item.name} />
                </div>
            </div>
        )
    }

    )
  return (
    <Flickity
      className={'carousel'} // default ''
      elementType={'div'} // default 'div'
      options={flickityOptions} // takes flickity options {}
      disableImagesLoaded={false} // default false
      reloadOnUpdate // default false
      static // default false
    >
        {recommendations}
    </Flickity>
  )
}
