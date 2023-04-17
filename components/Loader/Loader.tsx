import { useEffect, useState } from 'react';
import styles from './Loader.module.css';

function Loader() {
    const [show, setShow] = useState(false);

    useEffect(() => {
        const timeout = setTimeout(() => {
            setShow(true);
        }, 500); // tiempo de espera de 500 ms antes de mostrar el loader

        const timer = setTimeout(() => {
            setShow(false);
        }, 2000); // tiempo de duración del loader en 2000 ms

        return () => {
            clearTimeout(timeout);
            clearTimeout(timer);
        }
    }, []);

    return show && (
        <div className={styles.loader}>
            <div className={styles.spinner}></div>
        </div>
    );
}

export default Loader;