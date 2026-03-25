import styles from "./style.module.css";

type DefaultButtonExercicioProps = {
    icon: React.ReactNode;
    color?: 'green' | 'red' | 'yellow' | 'blue' | 'ghost';
    // type: string;

}& React.ComponentProps<'button'>
export function DefaultButtonExercicio({
    icon,
    color  = 'green', ...props
}:DefaultButtonExercicioProps)
{
    return(
        <>
            <button className={`${styles.button} ${styles[color]}`} {...props}> {icon}</button>
        </>
    )
}