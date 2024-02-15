import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css'
import Cadastro from './Paginas/Cadastro';
import Home from './Paginas/Home';

function App() {

  return (  
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path='/cadastro' element={<Cadastro />} />
        </Routes>
      </BrowserRouter>

    </>
  )
}

export default App;
