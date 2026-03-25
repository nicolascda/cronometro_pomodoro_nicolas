import styles from "./style.module.css"

type DefaultInputProps = {
    id: string;
    labelText: string;
    type: string;
    placeholder: string;
} & React.ComponentProps<'input'>

export function DefaultInput({
    id, type, labelText, placeholder, ...rest
    }:DefaultInputProps){
    
    return(
        <>
            <label htmlFor={id}>{labelText}</label>
            <input className={styles.input} type = {type} id = {id}  placeholder = {placeholder} {...rest}/>
        </>
        // <input className={styles.inputTask} placeholder= "Estudar" id="meuInput "type="Text"/>
    );

}