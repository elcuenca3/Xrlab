
import { Inter } from 'next/font/google'
import Header from '@/components/Header/header'

import Styles from '/styles/Home.module.css'
import { Suspense, useState } from "react";
import { motion, MotionConfig, useMotionValue } from "framer-motion";
// import { Shapes } from "./Shapes";
import { transition } from "./settings";
import useMeasure from "react-use-measure";

import Link from 'next/link'


const inter = Inter({ subsets: ['latin'] })
const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      delayChildren: 0.25
    }
  }
}

const item = {
  hidden: { opacity: 0, scale: 0 },
  show: { opacity: 1, scale: 1 }
}


export default function Home() {

  const [ref, bounds] = useMeasure({ scroll: false });
  const [isHover, setIsHover] = useState(false);
  const [isPress, setIsPress] = useState(false);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const resetMousePosition = () => {
    mouseX.set(0);
    mouseY.set(0);
  };



  return (


    <>

      <Header />
      <main>
        <section>
          {/* <h1>Bienvenidos a mi sitio web</h1> */}
          <br></br>
          <MotionConfig transition={transition}>
            <motion.button className={Styles.button}
              ref={ref}
              initial={false}
              animate={isHover ? "hover" : "rest"}
              whileTap="press"
              variants={{
                rest: { scale: 1 },
                hover: { scale: 1.5 },
                press: { scale: 1.4 }
              }}
              onHoverStart={() => {
                resetMousePosition();
                setIsHover(true);
              }}
              onHoverEnd={() => {
                resetMousePosition();
                setIsHover(false);
              }}
              onTapStart={() => setIsPress(true)}
              onTap={() => setIsPress(false)}
              onTapCancel={() => setIsPress(false)}
              onPointerMove={(e) => {
                mouseX.set(e.clientX - bounds.x - bounds.width / 2);
                mouseY.set(e.clientY - bounds.y - bounds.height / 2);
              }}
            >
              <motion.div
                className="shapes"
                variants={{
                  rest: { opacity: 0 },
                  hover: { opacity: 1 }
                }}
              >
                <div className="pink blush" />
                <div className="blue blush" />
                <div className="container">
                  <Suspense fallback={null}>
                    {/* <Shapes
                      isHover={isHover}
                      isPress={isPress}
                      mouseX={mouseX}
                      mouseY={mouseY}
                    /> */}
                  </Suspense>
                </div>
              </motion.div>
              <motion.div
                variants={{ hover: { scale: 0.85 }, press: { scale: 1.1 } }}
                className="label"
              >
                play
              </motion.div>
            </motion.button>
          </MotionConfig>
          <motion.div className={Styles.cardcontainer}
            variants={container}
            initial="hidden"
            animate="show">
            <motion.div className={Styles.card}
              variants={item}
            >
              <Link href="/pantalla">
                <br></br>
                <h2>Aventura Espacial</h2>
                <motion.img src="/images/u8e8tuhh.png"
                  alt="Descripción de la imagen"
                  width={500}
                  height={100}

                  layoutId="/images/u8e8tuhh.png"
                />
              </Link>

              <p>entra y vive una aventura especial</p>
              <br></br>
            </motion.div>
            <motion.div className={Styles.card}

              variants={item} >
              <Link href="/2pantalla">
                <br></br>
                <h2>La Isla Pirata</h2>
                <motion.img src="/images/calaca.png"
                  alt="Descripción de la imagen"
                  width={400}
                  height={85}
                  layoutId="/images/calaca.png"
                />
              </Link>
              <p>Esta es la descripción de la Card 2.</p>
              <br></br>
            </motion.div>
            {/* <motion.div className={Styles.card}
              variants={item} >
                <br></br>
                <h2>Card 2</h2>
                <Image src="/images/u8e8tuhh.png"
                  alt="Descripción de la imagen"
                  width={100}
                  height={50}
                  layout="responsive"
                />
                <p>Esta es la descripción de la Card 2.</p>
                <br></br>
              </motion.div> */}
          </motion.div>

        </section>

      </main>



    </>
  );
};
