import React, {Component} from 'react';
import '../assets/css/banner.css';
import Banner from './Banner';
import BannerImg from '../assets/img/banner.jpg';
import Slider from "react-slick";
import Arrow from './common/SliderArrow';
import '../assets/css/BannerSlider.css';



export default class SimpleSlider extends Component {
    state = {
        slideIndex: 0,
        sideTitle: "First Surfing Magazine",
        slides: [
            {
                small: "YOUR",
                title: "Beautiful Escape",
                content: 'One of the greatest things about the sport of surfing is that you need only three things: your body, a surfboard, and a wave.',
                img: `${BannerImg}`,
                alt: "Surfboard image",
                hasSideTitle: 'true',
                sideTitle: "First Surfing Magazine"
            },
            {
                small: "YOUR",
                title: "Beautiful Escape 2",
                content: 'One of the greatest things about the sport of surfing is that you need only three things: your body, a surfboard, and a wave.',
                img: `${BannerImg}`,
                alt: "Surfboard image",
                hasSideTitle: 'true',
                sideTitle: "First Surfing Magazine"
            }
        ]
    };

    render(){
        const settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            nextArrow: <Arrow direction="right" bottom="2px" left="110px" position="absolute" />,
            prevArrow: <Arrow direction="left" bottom="2px" left="55px" position="absolute" />,
            beforeChange: (current, next) => this.setState({ slideIndex: next }),
            customPaging: (i) => {
                return <span><span className='active-index'>{this.state.slideIndex+1}</span>/<span className="total-slides">{this.state.slides.length}</span></span>;
            }
          };
        return(
            <section className="slider-section container">
                <Slider {...settings} className="banner-slider">
                    
                    {this.state.slides.map((slide, index) => (
                        <Banner 
                            key={index} 
                            small={slide.small}
                            title={slide.title}
                            content={slide.content}
                            img={slide.img}
                            alt={slide.alt}
                            hasSideTitle={slide.hasSideTitle}
                            sideTitle={slide.sideTitle}
                        />
                    ))}
                </Slider>
                <div className="side-title">
                    <span>{this.state.sideTitle}</span>
                </div>
            </section>
        )
    }
    
}