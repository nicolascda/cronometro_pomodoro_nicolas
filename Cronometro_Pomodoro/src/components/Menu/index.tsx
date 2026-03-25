import styles from "./styles.module.css";
import { HistoryIcon, SettingsIcon, HomeIcon, SunIcon } from 'lucide-react';

export function Menu()
{
    return( 
        <>
            <nav className={styles.menu}>  
                <a href="#" className={styles.menuLink}>
                    <HistoryIcon />
                </a>
                <a href="#" className={styles.menuLink}>
                    <SettingsIcon />
                </a>
                <a href="#" className={styles.menuLink}>
                    <HomeIcon />
                </a>
                <a href="#" className={styles.menuLink}>
                    <SunIcon />
                </a>
            </nav>
        </>
    );
}