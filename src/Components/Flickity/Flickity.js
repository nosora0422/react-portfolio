import Flickity from 'react-flickity-component';
import './Flickity.css';

const flickityOptions = {
    initialIndex: 0,
    autoPlay: true,
    pauseAutoPlayOnHover: false,
}

export default function Carousel({ gallery }) {
    const galleryImage = gallery.slideImg.map((item, index) => 
        {
            return (
                <div 
                    key={index}
                    className='w-full box-border'
                >
                    <p className='blue-lable mb-10'>{item.name}</p>
                    <div className='flex justify-center items-center rounded-xl box-border p-4'>
                        <img 
                            src={item.slideImgPath}
                            className='object-cover object-center rounded-xl' 
                            alt={item.name}
                        />
                    </div>
                </div>
            )
        }
    )

  return (
    <div className='bg-white rounded-2xl pt-6 pb-10 px-6 md:p-10 shadow-md'>
        <Flickity
        elementType={'div'} // default 'div'
        options={flickityOptions} // takes flickity options {}
        disableImagesLoaded={false} // default false
        reloadOnUpdate // default false
        static // default false
        >
            {galleryImage}
        </Flickity>
    </div>
  )
}