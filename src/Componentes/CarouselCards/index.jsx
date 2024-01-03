import styles from './CarouselCards.module.css';
import Card from '../Cards';
import "/node_modules/slick-carousel/slick/slick.css";
import "/node_modules/slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';

function CarouselCards() {
    const configuracoes = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [
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
        <div >
            <Slider {...configuracoes}>
                <div key={1} className={styles.container} >
                    <Card
                        imagem="/assets/monitorCarousel.png"
                        descricao="Monitor 4k"
                        preco="250,00"
                    />
                </div>

                <div key={2} className={styles.container} >
                    <Card
                        imagem="/assets/monitorCarousel.png"
                        descricao="Monitor 4k"
                        preco="250,00"
                    />
                </div>

                <div key={1} className={styles.container} >
                    <Card
                        imagem="/assets/monitorCarousel.png"
                        descricao="Monitor 4k"
                        preco="250,00"
                    />
                </div>

                <div key={2} className={styles.container} >
                    <Card
                        imagem="/assets/monitorCarousel.png"
                        descricao="Monitor 4k"
                        preco="250,00"
                    />
                </div>

                <div key={1} className={styles.container} >
                    <Card
                        imagem="/assets/monitorCarousel.png"
                        descricao="Monitor 4k"
                        preco="250,00"
                    />
                </div>

                <div key={2} className={styles.container} >
                    <Card
                        imagem="/assets/monitorCarousel.png"
                        descricao="Monitor 4k"
                        preco="250,00"
                    />
                </div>

            </Slider>
        </div>
    );
}

export default CarouselCards;