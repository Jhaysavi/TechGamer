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
        },10000);

        return () => clearInterval(intervaloID);
    },[]);

    const configuracoes = {
        dots:true,
        infinite:true,
        speed:500,
        slidesToShow:4,
        slidesToScroll:1,
        responsive:[
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
            },
          },
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
            },
          },
        ],
    };

    return (
        <div className={styles.container}>
          <Slider ref={sliderRef} {...configuracoes}>
            {images.map((image, index) => (
              <div key={index}>
                <img src={image} className={styles.imagem} alt={`Imagem ${index + 1}`} />
              </div>
            ))}
          </Slider>

          <div>
            <h2>Produtos com até 60% de desconto!</h2>
          </div>
        </div>
      );
    
}

export default Carousel;