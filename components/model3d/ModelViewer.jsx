import { motion } from "framer-motion";
import Styles from "../model3d/image.module.css";

const RotatingImage = () => {
  return (
    <div className={Styles.image_container}>
      
        <motion.img
          src="images/calaca.png" // Reemplaza con la ruta de tu imagen
          alt="Rotating Image"
          style={{
            width: "400px", // Ajusta el tamaño de la imagen según tus necesidades
            height: "400px",
            borderRadius: "20%", // Para que la imagen sea un círculo
          }}
          whileHover={{ rotate: 360 }} // La animación de rotación ocurre al hacer hover
        />
      {/* <div className={Styles.pulse_circle}></div> */}
    </div>
    
  );
};

export default RotatingImage;
