import React, { useState } from 'react' // IMPORTANTE: Adicionar o useState
import InputCadastro from "./components/Cadastro/InputCadastro.jsx"
import Button from "./components/Cadastro/ButtonCadastro.jsx"
import logo from './assets/logo.svg'
import LabelCadastro from "./components/Cadastro/LabelCadastro.jsx"
import { FaUser, FaAddressBook, FaLock } from 'react-icons/fa'
import './css/cardCadastro.css'
import "./css/index.css"

function App() {  
  // 1. Criando os estados para capturar o que for digitado
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [confirmarSenha, setConfirmarSenha] = useState('');
  const [mensagem, setMensagem] = useState(''); // Para mostrar sucesso ou erro

  // 2. A função que vai falar com o Spring Boot
  const handleCadastrar = async (event) => {
    event.preventDefault(); // Evita recarregar a página
    setMensagem('');

    // Validação básica do Front
    if (senha !== confirmarSenha) {
      setMensagem('⚠️ As senhas não coincidem!');
      return;
    }

    // Montando o pacote disfarçado para o Back-end
    const payloadDonoERP = {
      nomeUsuario: nome,
      email: email,
      senhaCripto: senha,
      nivelAcesso: "ADMIN", 
      cpf: "00000000000",   
      celular: "00000000000"
    };

    try {
      const resposta = await fetch('http://localhost:8080/funcionarios', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payloadDonoERP)
      });

      if (resposta.ok) {
        setMensagem('Administrador registrado com sucesso!');
        setNome(''); setEmail(''); setSenha(''); setConfirmarSenha(''); // Limpa os campos
      } else {
        const textoErro = await resposta.text();
        setMensagem('❌ ' + (textoErro || 'Erro ao registrar cliente.'));
      }
    } catch (error) {
      setMensagem('❌ Erro de conexão com o servidor da Intera.');
    }
  };

  return (
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
            
            {/* 3. Adicionando o onSubmit no formulário */}
            <form className={'cadastroInputs'} onSubmit={handleCadastrar}>

              <div className={'divInput'}>
                <LabelCadastro text={'Nome'}/>
                <div className="styleInput ">
                  <FaUser className={'icon'}/>
                  {/* 4. Ligando o input ao Estado */}
                  <InputCadastro 
                    type='text' 
                    value={nome} 
                    onChange={(e) => setNome(e.target.value)} 
                    required 
                  />
                </div>
              </div>

              <div className={'divInput'}>
                <LabelCadastro text={'E-mail'}/>
                <div className="styleInput">
                  <FaAddressBook className={'icon'}/>
                  <InputCadastro 
                    type='email' 
                    value={email} 
                    onChange={(e) => setEmail(e.target.value)} 
                    required 
                  />
                </div>
              </div>

              <div className={'divInput'}>
                <LabelCadastro text={'Senha'}/>
                <div className="styleInput">
                  <FaLock className={'icon'}/>
                  <InputCadastro 
                    type='password' 
                    value={senha} 
                    onChange={(e) => setSenha(e.target.value)} 
                    required 
                  />
                </div>
              </div>

              <div className={'divInput'}>
                <LabelCadastro text={'Confirmar Senha'}/>
                <div className="styleInput">
                  <FaLock className={'icon'}/>
                  <InputCadastro 
                    type='password' 
                    value={confirmarSenha} 
                    onChange={(e) => setConfirmarSenha(e.target.value)} 
                    required 
                  />
                </div>
              </div>

              {/* Exibição da mensagem de erro/sucesso */}
              {mensagem && (
                <p style={{ textAlign: 'center', fontWeight: 'bold', margin: '10px 0', color: mensagem.includes('✅') ? '#4ade80' : '#ef4444' }}>
                  {mensagem}
                </p>
              )}

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