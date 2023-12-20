import { useState } from 'react';
import styles from './Cabecalho.module.css';
import { IoSearchCircle } from "react-icons/io5";
import { FaUser } from "react-icons/fa";
import { IoMdCart } from "react-icons/io";

function CabecalhoHome() {
    const [pesquisarVisivel, setPesquisarVisivel] = useState(false);

    const toggleSearch = () => {
        setPesquisarVisivel(!pesquisarVisivel);
    };

    return (
        <>
            <header className={styles.container}>
                <section>
                    <ul>
                        <nav className={styles.menu}>

                            <li className={styles.menuItem}>
                                <a href="#">
                                    <img src="../../public/logo.png" className={styles.imgContainer} alt="Logo TechGamer" />
                                </a>
                            </li>

                            <li className={`${styles.menuItem} ${pesquisarVisivel ? styles.pesquisaAtiva : ''}`}>
                                <div onClick={toggleSearch} id='toggleSearch' className={styles.bgIcones}>
                                    <IoSearchCircle />
                                </div>
                            </li>


                            {pesquisarVisivel && (
                                <div>
                                    <input
                                        type='text'
                                        id='searchInput'
                                        placeholder='O que você está procurando?'
                                        className={styles.menuInput}
                                    />

                                </div>
                            )}

                            <li className={styles.menuItem}>
                                <a href="#">
                                    <div className={styles.bgIcones}>
                                        <FaUser />
                                    </div>
                                    Login/Cadastro
                                </a>
                            </li>

                            <li className={styles.menuItem}>
                                <a href="#" className={styles.bgIcones}>
                                    <IoMdCart />
                                </a>
                            </li>
                        </nav>
                    </ul>
                </section>

                <section className={styles.cabecalhoBotoes}>
                    <ul>
                        <nav className={styles.menuProdutos}>
                            <li className={styles.itemProdutos}><a href="#">Home</a></li>
                            <li className={styles.itemProdutos}><a href="#">Monte seu PC</a></li>
                            <li className={styles.itemProdutos}><a href="#">PC/Notebook</a></li>
                            <li className={styles.itemProdutos}><a href="#">Cadeiras</a></li>
                            <li className={styles.itemProdutos}><a href="#">Teclado RGB</a></li>
                            <li className={styles.itemProdutos}><a href="#">Mouse</a></li>
                            <li className={styles.itemProdutos}><a href="#">Consoles</a></li>
                            <li className={styles.itemProdutos}><a href="#">Controles</a></li>
                        </nav>
                    </ul>
                </section>
            </header >
        </>
    );
}

export default CabecalhoHome;