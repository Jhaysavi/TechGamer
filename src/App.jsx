import './App.css'
import CabecalhoHome from './Componentes/Cabecalho'
import Carousel from './Componentes/Carousel';

function App() {

  const images = [
    `assets/cadeiraCarousel.png`, 
    `assets/headphoneCarousel.png`,
    `assets/monitorCarousel.png`,
    `assets/noetbookCarousel.png`,
    `assets/ringLigthCarousel.png`
  ];

  return (
    <>
    
     <CabecalhoHome />
     <Carousel images={images} />  
       
    </>
  )
}

export default App;
