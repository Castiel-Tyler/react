

import './App.css'
import { Banner } from './assets/componentes/Banner'
import { FormularioDeEvento } from './assets/componentes/FormularioDeEvento'
import { Tema } from './assets/componentes/Tema'
import { CardEvento } from './assets/componentes/CardEvento'

//No react, componentes são FUNÇÕES


function App() {

  // Vamos criar um array / //Vamos criar uma lista de objetos
  const temas = [
    {
      id: 1,
      nome: 'front-end'
    },
    {
      id: 2,
      nome: 'back-end'
    },
    {
      id: 3,
      nome: 'devops'
    },
    {
      id: 4,
      nome: 'inteligência artificial'
    },
    {
      id: 5,
      nome: 'data science'
    },
    {
      id: 6,
      nome: 'cloud'
    }
  ]

  const eventos = [
    {
      capa: 'https://raw.githubusercontent.com/viniciosneves/tecboard-assets/refs/heads/main/imagem_1.png',
      tema: temas[0],
      data: new Date(),
      titulo: 'Mulheres no Front'
    }
  ]

  function adicionarEvento(evento){
    eventos.push(evento)
    console.log('eventos =>', eventos)
  }




  return (
    <main>
      <header>
        <img src="/logo.png" alt="Tecboard" />
      </header>
      <Banner />
      <FormularioDeEvento temas={temas} aoSubmeter={adicionarEvento}/>

      {/* Vamos criar um map() para percorrer a lista e renderizar cada item da lista e retornar o seu id */}

      {temas.map(function (item) {
        return (
          <section key={item.id} >
            <Tema tema={item}/>
            <CardEvento evento= {eventos[0]}/>
          </section>

        )
      })}

{/* ALT+SHIFT+A
      <section>
        <Tema tema={temas[1]} />
      </section>
      <section>
        <Tema tema={temas[2]} />
      </section>
      <section>
        <Tema tema={temas[3]} />
      </section>
      <section>
        <Tema tema={temas[4]} />
      </section>
      <section>
        <Tema tema={temas[5]} />
      </section> */}
    </main>
  )
}

export default App


