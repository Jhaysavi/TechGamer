import { useState } from 'react';
import styles from './CarouselCards.module.css';
import Card from '../Cards';

function CarouselCards({ cards }) {
    const [indexAtual, setIndexAtual] = useState(0);

    const cardsPorPagina = 4;

    const mostrarCard = index => {
        setIndexAtual(index);
    };

    const proximoCard = () => {
        setIndexAtual((indexAtual + 1) % cards.length);
    };

    const anteriorCard = () => {
        setIndexAtual((indexAtual - 1) % cards.length)
    }

    const renderCards = () => {
        const finalIndex = indexAtual + cardsPorPagina;
        return cards.slice(indexAtual, finalIndex).map((conteudo, index) => (
            <Card key={index} conteudo={conteudo} />

        ));
    };

    return (
        <div className={styles.container}>
            <div className={styles.carousel} style={{ transform: `translateX(${-indexAtual * (100 / cardsPorPagina)}%)` }}>
                {renderCards()}
            </div>
            <button onClick={anteriorCard}></button>
            <button onClick={proximoCard}></button>
        </div>
    );
}

export default CarouselCards;