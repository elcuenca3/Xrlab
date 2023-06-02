import Link from "next/link";
import styles from './header.module.css';
import Image from 'next/image';

const Header = () => {
  return (
    <nav>
      <div className={styles.container}>
        <div className={styles.circlecontainer}>
          <div className={styles.circle}></div>
          <div className={styles.logo}>
            <Image src="/images/xrlabnew.png"
              className={styles.circleimage}
              alt="Descripción de la imagen"
              width={180}
              height={180}

            />

          </div>

        </div>
        <ul className={styles.menu}>
          <li>
            <Link href="/">Inicio
            </Link>
          </li>
          <li>
            <Link href="/contactos">contactos
            </Link>
          </li>
        </ul>

      </div>
    </nav>
  );
};


export default Header;