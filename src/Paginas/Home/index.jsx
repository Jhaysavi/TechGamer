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
            <CarouselCards bgStyle="#ffffff" cardsDeProdutos={cardLaptop} />{/*Carousel monitor*/}
            <CarouselCards
                bgStyle="linear-gradient(180deg, #42FF00 0%, rgba(254, 0, 168, 0.46) 55.06%, rgba(0, 0, 0, 0.83) 92.22%)"
                cardsDeProdutos={cardLaptop}
            /> {/*Carousel CPU*/}
            <CarouselCards bgStyle="#670000" cardsDeProdutos={cardLaptop} /> {/*Carousel de fones */}
            <CarouselCards
                bgStyle="linear-gradient(180deg, #10F3E6 0%, rgba(16, 134, 243, 0.80) 28.75%, rgba(16, 52, 238, 0.33) 55.11%, rgba(47, 16, 234, 0.65) 76.49%, #D410F3 100%)"
                cardsDeProdutos={cardLaptop}
            /> {/*Carousel prcessador*/}

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

            <CarouselCards
                bgStyle="linear-gradient(180deg, #682B2B 0%, rgba(108, 75, 75, 0.74) 48.7%, #682B2B 96.8%)"
                cardsDeProdutos={cardLaptop}
            /> {/*Carousel cadeiras*/}

            {/*Grid de imagens suportes*/}
            <section className={styles.suporte}>
            </section>

            <CarouselCards bgStyle="#ffffff" cardsDeProdutos={cardLaptop} /> {/*Carousel suporte notebook*/}

            {/*Grid de imagens luz*/}
            <div className={styles.bgColor}>
                <h2 className={styles.texto}>Para um ambiente bem iluminado!</h2>
                <section className={styles.homemGamer}>
                </section>

                <CarouselCards
                    bgStyle="linear-gradient(180deg, #59ABF8 0%, rgba(149, 252, 124, 0.72) 100%)"
                    cardsDeProdutos={cardLaptop}
                /> {/*Carousel iluminação*/}

            </div>



            <Footer />
        </>
    );
}

export default Home;