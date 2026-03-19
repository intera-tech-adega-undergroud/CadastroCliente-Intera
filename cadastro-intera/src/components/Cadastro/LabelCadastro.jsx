import style from './LabelCadastro.module.css'

export default function LabelCadastro({text = 'Texto Padrão'}){
    return(
        <label className={style.label}>{text}</label>
    )
}