import styles from './CarouselCards.module.css';
import Card from '../Cards';
import "/node_modules/slick-carousel/slick/slick.css";
import "/node_modules/slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
import PropTypes from 'prop-types';

function CarouselCards({ backgroundColor, cardsDeProdutos }) {
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
        <div style={backgroundColor={backgroundColor}}>
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

CarouselCards.PropTypes={
    backgroundColor: PropTypes.string,
    cardsDeProdutos: PropTypes.arrayOf(
        PropTypes.shape({
            imagem: PropTypes.string.isRequired,
            descricao: PropTypes.string.isRequired,
            preco: PropTypes.string.isRequired,
        })
    ).isRequired,
};

CarouselCards.defaultProps = {
    backgroundColor:'#ffff',
};

export default CarouselCards;