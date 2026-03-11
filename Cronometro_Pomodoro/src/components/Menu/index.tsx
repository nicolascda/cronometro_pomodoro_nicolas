import styles from "./styles.module.css";
import { HistoryIcon, SettingsIcon, HomeIcon, SunIcon } from 'lucide-react';

export function Menu()
{
    return( 
        <>
            <div className={styles.menu}>  
                <a href="#" className={styles.menuLink}>
                    <HistoryIcon className={styles.menuBorder}/>
                </a>
                <a href="#" className={styles.menuLink}>
                    <SettingsIcon className={styles.menuBorder}/>
                </a>
                <a href="#" className={styles.menuLink}>
                    <HomeIcon className={styles.menuBorder}/>
                </a>
                <a href="#" className={styles.menuLink}>
                    <SunIcon className={styles.menuBorder}/>
                </a>
            </div>
        </>
    );
}