import './App.css'
import CabecalhoHome from './Componentes/Cabecalho'
import Card from './Componentes/Cards';
import Carousel from './Componentes/Carousel';

function App() {

  const images = [
    `assets/noetbookCarousel.png`,
    `assets/noetbookCarousel.png`,
    `assets/noetbookCarousel.png`,
    `assets/noetbookCarousel.png`,
    `assets/noetbookCarousel.png`,
  ];

  return (
    <>
    
     <CabecalhoHome />
     <Carousel images={images} /> 

      <Card 
        imagem="assets/noetbookCarousel.png"
        descricao="Notebook ACER 8gb ram 1T de armazenamento"
        preco="1.050"
      />
       
    </>
  )
}

export default App;
