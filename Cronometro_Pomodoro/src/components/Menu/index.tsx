import styles from "./styles.module.css";
import { HistoryIcon, SettingsIcon, HomeIcon, SunIcon, MoonIcon } from 'lucide-react';
import {useState, useEffect } from 'react';

type AvaliableThemes = 'dark' | 'ligth';

export function Menu()
{
    const [theme, setTheme] = useState<AvaliableThemes>('dark');

    function handleThemeChange(
        event: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
    ) {
        event.preventDefault();

        setTheme(prevTheme => {
            const nextTheme = prevTheme === 'dark' ? 'ligth' : 'dark';
            return nextTheme;
        })

        if( theme == "ligth")
        {
        }

        console.log('Cliclado', Date.now());
    }
    useEffect(() => {
        console.log("Theme mudou", theme, Date.now())
        document.documentElement.setAttribute('data-theme', theme);

        return () => {
            console.log('Olha, este componente será atualizado')
    };
    }, [theme]);
    return( 
        <>
            <nav className={styles.menu}> 
                <h1>{theme}</h1>

                <a href="#" className={styles.menuLink}
                    aria-label="Ir para história"
                    title='Ir para história'>
                    <HistoryIcon />
                </a>
                <a href="#" className={styles.menuLink}
                    aria-label="Configurações"
                    title='Configurações'>
                    <SettingsIcon />
                </a>
                <a href="#" className={styles.menuLink}
                    aria-label="Ir para a Home"
                    title='Ir para a History'>
                    <HomeIcon />
                </a>
                <a href="#" className={styles.menuLink}
                    aria-label="Mudar Tema"
                    title='Mudar Tema'
                    onClick={handleThemeChange}>
                    { theme === 'ligth' ? <MoonIcon /> : <SunIcon />}
                    {/* <SunIcon /> */}
                </a>
            </nav>
        </>
    );
}