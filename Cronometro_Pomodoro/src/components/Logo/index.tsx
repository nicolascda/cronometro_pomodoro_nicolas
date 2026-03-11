import styles from "./styles.module.css";
import { TimerIcon } from 'lucide-react';

export function Logo()
{
    return( 
        <>
            <div className={styles.logo}>  
                <a href="#" className={styles.logoLink}>
                    <TimerIcon/>
                    <span>Cronometro</span>
                </a>
            </div>
        </>
    );
}