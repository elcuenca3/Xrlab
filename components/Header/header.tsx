import Link from "next/link";
import styles from './header.module.css';
import Image from 'next/image';
import { motion } from "framer-motion";

const Header = () => {
  return (
    <nav>
      <div className={styles.container}>
        <div className={styles.circlecontainer}>
          <div className={styles.circle}></div>
          <div className={styles.logo}>
            <motion.img src="/images/xrlabnew.png"
              className={styles.circleimage}
              alt="Descripción de la imagen"
              width={180}
              height={180}

            />

          </div>

        </div>
        <motion.div whileHover={{ scale: 1.1 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}>
          <ul className={styles.menu}>
            <li>
              <Link href="/">Inicio
              </Link>
            </li>
            <li>
              <Link href="/anexos">Anexos
              </Link>
            </li>
            <li>
              <Link href="/contactos">contactos
              </Link>
            </li>
          </ul>
        </motion.div> 

      </div>
    </nav>
  );
};


export default Header;