import CabecalhoHome from '/src/Componentes/Cabecalho/index.jsx';
import Carousel from '/src/Componentes/Carousel/index.jsx';
import CarouselCards from '/src/Componentes/CarouselCards/index.jsx';
import Footer from '/src/Componentes/Footer/index.jsx';
import '/src/Paginas/Home/App.css';
import styles from './home.module.css';

function Home() {
    const images = [
        `assets/noetbookCarousel.png`,
        `assets/noetbookCarousel.png`,
        `assets/noetbookCarousel.png`,
        `assets/noetbookCarousel.png`,
        `assets/noetbookCarousel.png`,
        `assets/noetbookCarousel.png`,
        `assets/noetbookCarousel.png`,
    ];

    const cardLaptop = [
        {
            imagem: "assets/noetbookCarousel.png",
            descricao: "Notebook ACER 8gb ram 1T de armazenamento",
            preco: "1.050",
        },

        {
            imagem: "assets/noetbookCarousel.png",
            descricao: "Notebook ACER 8gb ram 1T de armazenamento",
            preco: "1.050"
        },

        {
            imagem: "assets/noetbookCarousel.png",
            descricao: "Notebook ACER 8gb ram 1T de armazenamento",
            preco: "1.050"
        },

        {
            imagem: "assets/noetbookCarousel.png",
            descricao: "Notebook ACER 8gb ram 1T de armazenamento",
            preco: "1.050"
        },

        {
            imagem: "assets/noetbookCarousel.png",
            descricao: "Notebook ACER 8gb ram 1T de armazenamento",
            preco: "1.050"
        },
    ]
    return (
        <>
            <CabecalhoHome />
            <Carousel images={images} />

            {/* Hero Section */}
            <div className="hero-section">
                {images.slice(0, 4).map((image, index) => (
                    <div key={index} className="hero-image">
                        <img src={image} alt={`Hero ${index + 1}`} />
                        <div className="image-overlay"></div>
                    </div>
                ))}
            </div>
            <CarouselCards color="" cardsDeProdutos={cardLaptop} />{/*Carousel monitor*/}
            <CarouselCards color="" cardsDeProdutos={cardLaptop} /> {/*Carousel CPU*/}
            <CarouselCards color="#670000" cardsDeProdutos={cardLaptop} /> {/*Carousel de fones */}
            <CarouselCards color="" cardsDeProdutos={cardLaptop} /> {/*Carousel prcessador*/}

            {/*Grid de imagens cadeiras*/}

            <section>
                <div className={styles.cadeirasHero}>
                    <h2 className={styles.texto}>Melhore sua postura com nossas cadeiras de escritório!</h2>
                       <h2 className={styles.texto}>Sem dor na coluna!</h2> 
                </div>
                <div className={styles.cadeirasContainer}>
                    <div className={styles.textoContainer}> 
                    <h4 className={styles.titulo}>
                        Para seu conforto!
                    </h4>
                    </div>
                    <div>
                        <img src="public\assets\caranopc.png" alt="Homem no PC" className={styles.imagemContainer} />
                    </div>
                </div>
            </section>

            <CarouselCards color="" cardsDeProdutos={cardLaptop} /> {/*Carousel cadeiras*/}

            {/*Grid de imagens suportes*/}
            <section className={styles.suporte}>
            </section>

            <CarouselCards color="" cardsDeProdutos={cardLaptop} /> {/*Carousel suporte notebook*/}

            {/*Grid de imagens luz*/}
            <h2 className={styles.texto}>Para um ambiente bem iluminado!</h2>
            <section className={styles.homemGamer}>
            </section>

            <CarouselCards color="" cardsDeProdutos={cardLaptop} /> {/*Carousel iluminação*/}



            <Footer />
        </>
    );
}

export default Home;