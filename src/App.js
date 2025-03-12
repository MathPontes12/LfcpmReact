// importar biblioteca react-router
import { BrowserRouter, Route, Routes } from "react-router";
import Inicio from "./paginas/Inicio";
import SobreMim from "./paginas/SobreMim";
import Menu from "./componentes/Menu";
import Footer from "./componentes/Footer";
import NaoEncontrada from "./paginas/NaoEncontrada";
import Destaques from "./paginas/Destaques";
import PostEvento from "./paginas/PostEvento";
import Extratos from "./paginas/Extratos"
import PostExtrato from "./paginas/PostExtrato";
import Animais from "./paginas/Animais"
import PostAnimais from "./paginas/PostAnimais";

//BrowserRouter seguido de Routes, Routes funciona como um roteador, decidindo pra onde vai, 
// a pagina é Route com o caminho path e o element que é o componente da pagina montada
// o * generaliza, ou seja, pra qualquer coisa escrita diferente das paginas especificadas ele mostra que a pagina nao foi encontrada
function App() {
  return (

    // o :id permite numeras as subpaginas para a renderizaçao, se assemelha ao *, mas te da capacidade de capturar ele la no componente Post
    <BrowserRouter>
      <Menu />
      <Routes>
        <Route>
          <Route path="/" element={<Inicio />} />
          <Route path="/sobre" element={<SobreMim />} />
          <Route path="/destaques" element={<Destaques />} />
          <Route path="/Destaques/:id" element={<PostEvento/>}/>
          <Route path="/extratos" element={<Extratos/>} />
          <Route path="/extratos/:id" element={<PostExtrato/>}/>
          <Route path="/modelos experimentais" element={<Animais/>} />
          <Route path="/modelos experimentais/:id" element={<PostAnimais/>}/>
        </Route>

        <Route path="*" element={<NaoEncontrada />} />
      </Routes>
      <Footer />

    </BrowserRouter>
  );
}

export default App;
