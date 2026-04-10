import Style from './ButtonCadastro.module.css'

// Adicionamos o "type = 'submit'" como padrão, ideal para formulários
export default function ButtonCadastro({ text = 'Clique aqui', type = 'submit', ...props }){
    return(
        <button 
            className={Style.button} 
            type={type}
            {...props}
        >
            {text}
        </button>
    )
}