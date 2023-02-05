// import { useEffect, useState } from "react";
import "./Animedata.css";
import "./sliderForAnimedata";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import 'slick-carousel/slick/slick-theme.css'
import { Link } from "react-router-dom";


function Animedata({ datapass }) {

    var settings = {
        dots: false,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 1000,
        speed: 500,
        slidesToShow: 8,
        slidesToScroll: 1,
        initialSlide: 0,
        swipeToSlide: true,
        responsive: [
          {
            breakpoint: 1124,
            settings: {
              slidesToShow: 5,
              slidesToScroll: 1,
              infinite: true,
              dots: true
            }
          },          {
            breakpoint: 900,
            settings: {
              slidesToShow: 4,
              slidesToScroll: 1,
              infinite: true,
              dots: false
            }
          },
          {
            breakpoint: 700,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1,
              initialSlide: 2
            }
          },
          {
            breakpoint: 500,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };
  

  return (
            <section className="section">


<Slider {...settings} >
                {
                datapass.map((data) => {
                    return (
                    <Link to={`/animeinfo${data.mal_id}`}><div className="cards">
                        <img src={data.images.jpg.image_url} alt='/' />
                    </div></Link>
                     ); 
                 })
                } 
</Slider>
            </section>
  );
}

export default Animedata;
