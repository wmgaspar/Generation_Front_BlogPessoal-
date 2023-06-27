import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './components/estaticos/navbar/Navbar'
import Footer from './components/estaticos/footer/Footer'
import Home from './assets/pages/home/Home'
import Login from './assets/pages/login/Login'
import CadastroUsuario from './assets/pages/cadastroUsuario/CadastroUsuario'
import ListaTema from './components/temas/listatema/ListaTemas'
import ListaPostagem from './components/postagens/listapostagem/ListaPostagem'
import './App.css'
import CadastroTema from './components/temas/cadastrotema/CadastroTema'
import CadastroPost from './components/postagens/cadastroPost/CadastroPost'
import DeletarPostagem from './components/postagens/deletarpostagem/DeletarPostagem'
import DeletarTema from './components/temas/deletartema/DeletarTema'
import { Provider } from 'react-redux'
import store from './store/store'

function App() {
  return (
    <Provider store={store}>
    <BrowserRouter>
      <Navbar />
      <div style={{ minHeight: '100vh' }}>
        <Routes>
          {' '}
          // Antigo Switch
          <Route path="/" element={<Login />} />
          <Route path="/login" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/cadastro" element={<CadastroUsuario />} />
          <Route path="/temas" element={<ListaTema />} />
          <Route path="/posts" element={<ListaPostagem />} />
          <Route path="/formularioPostagem" element={<CadastroPost />} />
          <Route path="/formularioPostagem/:id" element={<CadastroPost />} />
          <Route path="/formularioTema" element={<CadastroTema />} />
          <Route path="/formularioTema/:id" element={<CadastroTema />} />
          <Route path="/DeletarPostagem/:id" element={<DeletarPostagem />} />
          <Route path="/DeletarTema/:id" element={<DeletarTema />} />
          
        </Routes>
      </div>
      <Footer />
    </BrowserRouter>
    </Provider>
  )
}

export default App
