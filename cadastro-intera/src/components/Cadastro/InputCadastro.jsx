import style from './InputCadastro.module.css'

//para que o meu componente seja reaproveitado no App.jsx preciso colocar o paramentro do elemento que quero reaproveitar
export default function TextInput({type= 'text', placeholder = ''}){
    return(
        <div>
            <input className={style.input} type={type} placeholder={placeholder}/>
        </div>
    )
}