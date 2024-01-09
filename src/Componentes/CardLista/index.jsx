import styles from './CardLista.module.css';

function CardLista({ imagem, descricao, nome, preco }) {
    return (
        <div className={styles.container}>
            
                <img src={imagem} alt={`Produto ${nome}`} className={styles.cardImagem} />
                <div className={styles.cardBody}>
                    <p className={styles.nome}>{nome}</p>
                    <p className={styles.descricao}><strong>{descricao}</strong></p>
                    <h3 className={styles.preco}>{preco}</h3>
                    <div className={styles.containerBotao}>
                        <button className={styles.botaoEditar}>
                            Editar
                        </button>

                        <button className={styles.botaoExcluir}>
                            Excluir
                        </button>
                    </div>
                </div>
            
        </div>
    );
};

export default CardLista;