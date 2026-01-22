import s from './App.module.css'
import ping from '../public/imgTeste.png'
import { useState } from 'react'

function App() {
  const [qualAparece, setQualAparece] = useState('')

  return (
    <>
      {qualAparece === 'texto' && <h1 className={s.titulo}>ola</h1>}
      {qualAparece === 'imagem' && <img src={ping} alt="Foto de Pinguins" />}
      <br />
      <button onClick={() => setQualAparece('texto')}>Texto</button>
      <br />
      <button onClick={() => setQualAparece('imagem')}>Imagem</button>
    </>
  )
}

export default App