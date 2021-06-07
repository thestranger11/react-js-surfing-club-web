import React, {Component} from 'react';
import Slider from "react-slick";
// components
import Button from './common/Button';
import Arrow from './common/SliderArrow';
// styles
import '../assets/css/Shop.css';
import '../assets/css/BannerSlider.css';
import board1 from '../assets/img/board1.png';
import board2 from '../assets/img/board2.png';
import board3 from '../assets/img/board3.png';


export default class ShopSection extends Component {
    state = {
        slideIndex: 0,
        products: [
            {
                category: "Funboards",
                productTitle: "Chilli Rare Bird",
                price: "$890",
                imgSrc: `${board1}`
            },
            {
                category: "Funboards",
                productTitle: "Chilli Rare Bird",
                price: "$890",
                imgSrc: `${board2}`
            },
            {
                category: "Funboards",
                productTitle: "Chilli Rare Bird",
                price: "$890",
                imgSrc: `${board3}`
            },
            {
                category: "Funboards",
                productTitle: "Chilli Rare Bird",
                price: "$890",
                imgSrc: `${board2}`
            }
        ]
    };

    render(){
        const settings = {
            dots: false,
            infinite: true,
            speed: 500,
            slidesToShow: 3,
            slidesToScroll: 1,
            nextArrow: <Arrow direction="right" />,
            prevArrow: <Arrow direction="left" />,
            responsive: [
                {
                  breakpoint: 820,
                  settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                  }
                },
                {
                  breakpoint: 560,
                  settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                  }
                }
            ]
          };
        return(
            <div className="shop">
                <div className="container">
                    <h2 className="stylish-title">
                        <small>{this.props.small}</small>
                        {this.props.title}
                    </h2>
                    <Slider {...settings} className="product-slider">
                        {this.state.products.map((product, index) => (
                            <div key={index} className="product-item">
                                <img src={product.imgSrc} alt={product.title} />
                                <div className="product-info">
                                    <div className="category">{product.category}</div>
                                    <h3>{product.productTitle}</h3>
                                    <div className="price">{product.price}</div>
                                    <Button title="buy" link="#" />
                                </div>
                            </div>
                        ))}
                    </Slider>
                    <Button link="#" title="show all" />
                </div>
            </div>
            
        )
    }
    
}