import Banner from '../../Components/Banner/Banner';
import AboutBanner from '../../Assets/Spline/AboutBanner/AboutBanner';


export default function About(){
    return(
        <>
            <>
            <Banner 
                h1='ABOUT'
                h2first="I'M SORA NOH"
                h2second="GOAL-DRIVEN"
                avatar='about-avatar.png'
                bannercomp={AboutBanner}
            />
        </>
        </>
    )
}