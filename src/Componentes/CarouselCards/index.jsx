import styles from './CarouselCards.module.css';
import Card from '../Cards';
import "/node_modules/slick-carousel/slick/slick.css";
import "/node_modules/slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
import propTypes from 'prop-types';

function CarouselCards({  cardsDeProdutos, bgStyle }) {
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
                breakpoint: 486,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };

    return (
        <div style={{background: bgStyle}}>
            <Slider {...configuracoes}>
                {cardsDeProdutos.map((produto, index) => (
                    <div key={index} className={styles.container} >
                        <Card
                            imagem={produto.imagem}
                            descricao={produto.descricao}
                            preco={produto.preco}
                        />
                    </div>

                ))}

            </Slider>
        </div>
    );
}

CarouselCards.propTypes={
    backgroundColor: propTypes.string,
    cardsDeProdutos: propTypes.arrayOf(
        propTypes.shape({
            imagem: propTypes.string.isRequired,
            descricao: propTypes.string.isRequired,
            preco: propTypes.string.isRequired,
        })
    ).isRequired,
};

CarouselCards.defaultProps = {
   bgStyle:'linear-gradient(to right, #ff7e5f, #feb47b)',
};

export default CarouselCards;