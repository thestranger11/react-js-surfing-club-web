import React from 'react';

import BannerSlider from '../BannerSlider';
import Testimoial from '../Testimonial';
import Separator from '../common/Separator';
import Vlog from '../Vlog';
import ShopSection from '../ShopSection';
import NumberedPostSection from '../NumberedPost';
import About from '../About';
import SubscribeSection from '../SubscribeSection';

import surfVideo from '../../assets/videos/surf.mp4';
import videoThumb from '../../assets/img/video-thumb.jpg';
import AboutImage from '../../assets/img/about.jpg';


const Home = () => {
    return(
        <div>
            <BannerSlider />
            <Separator height="50px" color="transparent" />
            <Testimoial 
                author="John McCarthy"
                content="Surfing is the most blissful experience you can have 
                on this planet, a taste of heaven."
            />
            <Separator
                height="80px"
                width="2px"
                color="#5da7ef"
                position="center"
            />
            <Vlog
                src={surfVideo}
                muted
                content="By better understanding the various aspects of surfing, you will improve faster and have more fun in the water."
                imgSrc={videoThumb}
                imgAlt="surfer"
            />
            <ShopSection
                small="shop"
                title="Surfboards"
            />
            <NumberedPostSection />
            <SubscribeSection
                title="Join the Club"
                description="By better understanding the various aspects of surfing, you will improve faster and have more fun in the water."
            />
            <About
                title="our camp"
                address="CA 91932, USA Imperial Beach 560 Silver Strand Blvd"
                sideImage={AboutImage}
            />
        </div>
    )
}

export default Home;