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
                    <div className='flex justify-center items-center rounded-xl box-border'>
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
    <div className='-bg--card-background pt-6 pb-10 rounded-2xl border border-solid -border--outline px-6 md:p-10 shadow-md'>
        <Flickity
        elementType={'div'} 
        options={flickityOptions} 
        disableImagesLoaded={false} 
        reloadOnUpdate 
        static 
        >
            {galleryImage}
        </Flickity>
    </div>
  )
}