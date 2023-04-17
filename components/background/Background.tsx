import Link from "next/link";
import styles from './background.module.css';
import Image from 'next/image';

function Background() {
    return (
        <>
            {/* <div className={styles.backgroundcontainer}>
                <div className={styles.content}></div>
            </div> */}
            <div className={styles.container__backgroundtriangle}>
                <div className={styles.triangle}>
                    <div className={styles.triangle1}></div>
                    <div className={styles.triangle2}></div>
                    <div className={styles.triangle3}></div>
                </div>
            </div>

        </>
    );
};


export default Background;