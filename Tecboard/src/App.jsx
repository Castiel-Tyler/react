import './App.css';

import { FormularioDeEvento}from "./assets/componentes/FormularioDeEvento";

function App() {
  return (
    <main>
      <header>
        <img src="/logo.png" alt="Tecboard" />
      </header>
      <section>
        <img src='/banner.png' alt='banner principal' />
      </section>
      <FormularioDeEvento></FormularioDeEvento>
    </main>
  )
}

export default App
