import React from 'react';
import styles from './CardLista.module.css';
import Modal from 'react-modal';
import Editar from '../Editar';


function CardLista({ id, imagem, descricao, nome, preco, onExcluir, onEditar }) {

    const [modalIsOpen, setIsOpen] = React.useState(false);

    const lidarExcluir = () => {
        if (onExcluir) {
            onExcluir(id);
        }
    };

    const lidarEditar = () => {
        if (onEditar) {
            onEditar(id);
        }
    };

    function abrirModal() {
        lidarEditar();
        setIsOpen(true);
      }
    
      // Função que fecha a modal
      function fecharModal() {
        setIsOpen(false);
      }

    return (
        <div className={styles.container}>
            <img src={imagem} alt={`Produto ${nome}`} className={styles.cardImagem} />
            <div className={styles.cardBody}>
                <p className={styles.nome}>{nome}</p>
                <p className={styles.descricao}><strong>{descricao}</strong></p>
                <h3 className={styles.preco}>{preco}</h3>
                <div className={styles.containerBotao}>
                    <button onClick={abrirModal} className={styles.botaoEditar}>
                        Editar
                    </button>

                    <Modal
        isOpen={modalIsOpen}
        onRequestClose={fecharModal}
        contentLabel="Modal de exemplo"
        ariaHideApp={false}
      >
        <div>
            <Editar></Editar>
        </div>
        <h2>Olá</h2>
        <button onClick={fecharModal}>Fechar</button>
      </Modal>

                    <button onClick={lidarExcluir} className={styles.botaoExcluir}>
                        Excluir
                    </button>
                </div>
            </div>
        </div>
    );
};

export default CardLista;
