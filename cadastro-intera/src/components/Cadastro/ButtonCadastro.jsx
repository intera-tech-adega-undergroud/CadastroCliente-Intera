import Style from './ButtonCadastro.module.css'

export default function ButtonCdastro({text = 'Clique aqui'}){
    return(
        <button className={Style.button}>{text}</button>
    )
}