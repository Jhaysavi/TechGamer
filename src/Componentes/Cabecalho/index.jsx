import { useState } from 'react';
import styles from './Cabecalho.module.css';
import { IoSearchCircle } from "react-icons/io5";
import { FaUser } from "react-icons/fa";
import { IoMdCart } from "react-icons/io";

function CabecalhoHome() {
    const [inputVisivel, setInputVisivel] = useState(false);
    const [menuMobileVisible, setMenuMobileVisible] = useState(false);

    const toggleSearch = () => {
        setInputVisivel(!inputVisivel);
    };

    const toggleMenuMobile = () => {
        setMenuMobileVisible(!menuMobileVisible);
        setInputVisivel(false);
    };

    return (
        <>
            <header className={`${styles.container} ${menuMobileVisible ? styles.menuMobileActive : ''}`}>
                <section>
                    <ul>
                        <nav className={styles.menu}>
                            <li className={styles.menuItem}>
                                <a href="#">
                                    <img src="/logo.png" className={styles.imgContainer} alt="Logo TechGamer" />
                                </a>
                            </li>
                      
                        
                            
                        </nav>
                    </ul>
                </section>

    <nav className={styles.menu}>
    <div className={styles.iconsContainer}>
        <li className={styles.menuItem}>
            {inputVisivel ? (
                <div>
                    <input
                        type='text'
                        id='searchInput'
                        placeholder='O que você está procurando?'
                        className={styles.menuInput}
                        onBlur={() => setInputVisivel(false)}
                    />
                </div>
            ) : (
                <div onClick={toggleSearch} className={styles.bgIcones}>
                    <IoSearchCircle />
                </div>
            )}
        </li>

        <li className={styles.menuItem}>
            <a href="#">
                <div className={styles.bgIcones}>
                    <FaUser />
                    Login/Cadastro
                </div>
            </a>
        </li>

        <li className={styles.menuItem}>
            <a href="#" className={styles.bgIcones}>
                <IoMdCart />
            </a>
        </li>
    </div>
</nav>
               
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

                {/* Hamburger Menu Button */}
                <div className={styles.hamburgerMenu} onClick={toggleMenuMobile}>
                    <div className={styles.bar}></div>
                    <div className={styles.bar}></div>
                    <div className={styles.bar}></div>
                </div>

                {/* Mobile Menu */}
                {menuMobileVisible && (
                    <div className={styles.mobileMenu}>
                        <nav>
                            <ul>
                                <li><a href="#">Home</a></li>
                                <li><a href="#">Monte seu PC</a></li>
                                <li><a href="#">PC/Notebook</a></li>
                                <li><a href="#">Cadeiras</a></li>
                                <li><a href="#">Teclado RGB</a></li>
                                <li><a href="#">Mouse</a></li>
                                <li><a href="#">Consoles</a></li>
                                <li><a href="#">Controles</a></li>
                            </ul>
                        </nav>
                    </div>
                )}
            </header>
        </>
    );
}

export default CabecalhoHome;
