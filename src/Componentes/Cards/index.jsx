import styles from './Cards.module.css';
import { FaCartPlus } from "react-icons/fa";


function Card({ imagem, descricao, preco }) {
    return (
        <div className={styles.container}>
            <img src={imagem} alt={ `Produto ${descricao}`} className={styles.cardImagem} />
            <div className={styles.cardBody}>
                <p className={styles.descricao}><strong>{descricao}</strong></p>
                <h3 className={styles.preco}>R${preco}</h3>
                <button className={styles.botao}>
                    Comprar agora!
                    <FaCartPlus className={styles.icone}/>
                </button>

            </div>
        </div>
    );
}

export default Card;