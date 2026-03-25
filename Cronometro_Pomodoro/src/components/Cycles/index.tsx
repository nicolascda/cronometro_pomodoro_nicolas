import { Circle } from 'lucide-react';
import styles from "./style.module.css";

export function Cycles() {
    return(
        <>
        {/* <p>Ciclos:</p>
            <div className={styles.cyclesDiv}>
                <Circle className={styles.cyclesAmarelo}/>
                <Circle className={styles.cyclesVerde} />
                <Circle className={styles.cyclesAmarelo}/>
                <Circle className={styles.cyclesVerde}/>
                <Circle className={styles.cyclesAmarelo}/>
                <Circle className={styles.cyclesVerde}/>
                <Circle className={styles.cyclesAmarelo}/>
                <Circle className={styles.cyclesAzul}/>
            </div> */}

            <div className={styles.cycles} >
                <span>Ciclos:</span>

                <div className={styles.cycleDots}>
                    <span className={`${styles.cycleDot} ${styles.workTime}`}></span>
                    <span className={`${styles.cycleDot} ${styles.shortBreakTme}`}></span>
                    <span className={`${styles.cycleDot} ${styles.workTime}`}></span>
                    <span className={`${styles.cycleDot} ${styles.shortBreakTme}`}></span>
                    <span className={`${styles.cycleDot} ${styles.workTime}`}></span>
                    <span className={`${styles.cycleDot} ${styles.shortBreakTme}`}></span>
                    <span className={`${styles.cycleDot} ${styles.workTime}`}></span>
                    <span className={`${styles.cycleDot} ${styles.shortBreakTme}`}></span>
                    <span className={`${styles.cycleDot} ${styles.longBreakTime}`}></span>
                </div>
            </div>

        </>
    )
}