import { useEffect, useRef } from 'react';
import styles from './Carousel.module.css';
import "/node_modules/slick-carousel/slick/slick.css"; 
import "/node_modules/slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';

function Carousel({images}) {
    const sliderRef = useRef(null);

    useEffect(() =>{
        const intervaloID = setInterval(() =>{

            sliderRef.current.slickNext();
        },3000);

        return () => clearInterval(intervaloID);
    },[]);

    const configuracoes = {
        dots:true,
        infinite:true,
        speed:500,
        slidesToShow:1,
        slidesToScroll:1,
    };

    return (
        <div className="autoplay-carousel">
          <Slider ref={sliderRef} {...configuracoes}>
            {images.map((image, index) => (
              <div key={index}>
                <img src={image} alt={`Imagem ${index + 1}`} />
              </div>
            ))}
          </Slider>
        </div>
      );
    
}

export default Carousel;