// import { useEffect, useRef } from 'react';
// import * as THREE from 'three';
// import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

// const ThreeScene = () => {
//   const containerRef = useRef();

//   useEffect(() => {
//     let scene, camera, renderer;

//     const initScene = () => {
//       // Creamos la escena
//       scene = new THREE.Scene();

//       // Creamos la cámara
//       camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
//       camera.position.z = 5;

//       // Creamos el renderizador
//       renderer = new THREE.WebGLRenderer({ antialias: true });
//       renderer.setSize(window.innerWidth/2, window.innerHeight/2);
//       containerRef.current.appendChild(renderer.domElement);

//       // Cargamos el modelo GLB
//       const loader = new GLTFLoader();
//       const modelPath = '/models/nave.glb'; // Ruta al archivo GLB en la carpeta pública
//       loader.load(
//         modelPath,
//         (gltf) => {
//           const model = gltf.scene;
//           scene.add(model);
//         },
//         undefined,
//         (error) => {
//           console.error('Error al cargar el modelo GLB', error);
//         }
//       );

//       // Animación del objeto
//       const animate = () => {
//         requestAnimationFrame(animate);

//         if (scene && camera && renderer) {
//           renderer.render(scene, camera);
//         }
//       };

//       animate();

//       return () => {
//         // Limpiamos el renderizador al desmontar el componente
//         if (renderer) {
//           renderer.dispose();
//         }
//       };
//     };

//     initScene();
//   }, []);

//   return <div ref={containerRef} />;
// };

// export default ThreeScene;
