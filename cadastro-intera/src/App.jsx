import InputCadastro from "./components/Cadastro/InputCadastro.jsx"
import Button from "./components/Cadastro/ButtonCadastro.jsx"
import logo from './assets/logo.svg'
import LabelCadastro from "./components/Cadastro/LabelCadastro.jsx"
import {FaUser, FaAddressBook, FaLock} from 'react-icons/fa'
import './css/cardCadastro.css'
import "./css/index.css"
//Importa altomaticamente

//Importar a biblioteca de icones do react-icons para utilizar o icone de usuario
//npm i @react-icons/all-files react-icons

function App() {  
  return (
    //Tenho que utilizar o nome dos compenentes com letra maiuscula porque se eu utilizar letra minuscula ele entende que é uma tag HTML
    //O meu componente que eu criei ele pode ser reaproveitado aqui, podendo alterar o conteudo dele
    <>

      <main className={'container'}>

        <section className={'sectionIntro'} >
          <img src={logo} alt="Logo" />
          <h1 className={'digitar'}>Olá Administrador! </h1>
          <p >Aqui você deverá registrar os dados do nosso cliente para liberar o acesso ao sistema dele.</p>
        </section>


        <section className={'sectionCadastro'} >
          <div className='cardCadastro'>
            <h2>Cadastro Cliente</h2>
          <form className={'cadastroInputs'}>

            <div className={'divInput'}>
              <LabelCadastro text={'Nome'}/>
              <div className="styleInput ">
                <FaUser className={'icon'}/>
                <InputCadastro type='text' />
              </div>
            </div>

            <div className={'divInput'}>
              <LabelCadastro text={'E-mail'}/>
              <div className="styleInput">
                <FaAddressBook className={'icon'}/>
                <InputCadastro type='email'/>
              </div>
            </div>

            <div className={'divInput'}>
              <LabelCadastro text={'Senha'}/>
              <div className="styleInput">
                <FaLock className={'icon'}/>
                <InputCadastro type='password' />
              </div>
            </div>

            <div className={'divInput'}>
              <LabelCadastro text={'Confirmar Senha'}/>
              <div className="styleInput">
                <FaLock className={'icon'}/>
                <InputCadastro type='password' />
              </div>
            </div>

            <div className="botao">
              <Button text={'Cadastrar'}/>
            </div>
          </form>
        </div>


        </section>
      </main>
    </>
  )
}

export default App
