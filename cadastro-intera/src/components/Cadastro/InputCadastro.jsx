import style from './InputCadastro.module.css'

// O "...props" pega tudo a mais que você passar (value, onChange, required)
export default function TextInput({ type = 'text', placeholder = '', ...props }){
    return(
        <div>
            <input 
                className={style.input} 
                type={type} 
                placeholder={placeholder} 
                {...props} /* E isso aqui injeta essas propriedades dentro da tag input nativa! */
            />
        </div>
    )
}