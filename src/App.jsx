import './App.css'
import CabecalhoHome from './Componentes/Cabecalho'
import Card from './Componentes/Cards';
import Carousel from './Componentes/Carousel';
import CarouselCards from './Componentes/CarouselCards';

function App() {

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
    <Card
      imagem="`assets/noetbookCarousel.png`"
      descricao="Notebook ACER 8gb ram 1T de armazenamento"
      preco="1.050"
    />,

    <Card
      imagem="assets/noetbookCarousel.png"
      descricao="Notebook ACER 8gb ram 1T de armazenamento"
      preco="1.050"
    />,

    <Card
      imagem="assets/noetbookCarousel.png"
      descricao="Notebook ACER 8gb ram 1T de armazenamento"
      preco="1.050"
    />,

    <Card
      imagem="assets/noetbookCarousel.png"
      descricao="Notebook ACER 8gb ram 1T de armazenamento"
      preco="1.050"
    />,

    <Card
      imagem="assets/noetbookCarousel.png"
      descricao="Notebook ACER 8gb ram 1T de armazenamento"
      preco="1.050"
    />,

    <Card
      imagem="assets/noetbookCarousel.png"
      descricao="Notebook ACER 8gb ram 1T de armazenamento"
      preco="1.050"
    />,

    <Card
      imagem="assets/noetbookCarousel.png"
      descricao="Notebook ACER 8gb ram 1T de armazenamento"
      preco="1.050"
    />,

    <Card
      imagem="assets/noetbookCarousel.png"
      descricao="Notebook ACER 8gb ram 1T de armazenamento"
      preco="1.050"
    />
  ]

  return (
    <>

      <CabecalhoHome />
      <Carousel images={images} />

      <CarouselCards cards={cardLaptop} />

    </>
  )
}

export default App;
