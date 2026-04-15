import styles from "./style.module.css";

type DefaultButtonProps = { // Tipando a classe DefaultButtonProps
    icon: React.ReactNode; // icon: propriedade React.ReactNode estrutura
    color?: 'green' | 'red'; // de Renderização do documento.
    // :? é um operador ternário é um if em uma única linha.
    // type: string;

}& React.ComponentProps<'button'> // Que o b~tao do React.Component Props pode ser alterada entre tags 
export function DefaultButton({
    icon,
    color  = 'green', ...props
}:DefaultButtonProps)
{
    return(
        <>
            <button className={`${styles.button} ${styles[color]}`} {...props}> {icon}</button>
        </>
    )
}