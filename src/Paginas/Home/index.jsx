import CabecalhoHome from '/src/Componentes/Cabecalho/index.jsx';
import Carousel from '/src/Componentes/Carousel/index.jsx';
import CarouselCards from '/src/Componentes/CarouselCards/index.jsx';
import Footer from '/src/Componentes/Footer/index.jsx';

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

            <CarouselCards backgroundColor="#0000" cardsDeProdutos={cardLaptop} />
            <Footer />

        </>
    );
};

export default Home;