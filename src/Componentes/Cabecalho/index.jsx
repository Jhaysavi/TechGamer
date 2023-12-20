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

                            <li onClick={toggleSearch} className={styles.menuItem.menuItemAlinhamento}>
                                <div className={styles.bgIcones}>
                                    <IoSearchCircle />
                                </div>

                                {pesquisarVisivel && (
                                    <input
                                        type='text'
                                        id='searchInput'
                                        placeholder='O que você está procurando?'
                                        className={styles.menuInput}
                                    />
                                )}
                            </li>

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

                <section className={styles.cabecalhoTopo}>
                </section>
            </header >
        </>
    );
}

export default CabecalhoHome;