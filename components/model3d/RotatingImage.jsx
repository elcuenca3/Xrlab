import { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { FBXLoader } from 'three/examples/jsm/loaders/FBXLoader';

const ModelViewer = () => {
  const fbxRef = useRef();

  useEffect(() => {
    const loader = new FBXLoader();
    loader.load('/models/NaveXRLab.fbx', (fbx) => {
      fbxRef.current = fbx;
      // Configura la escala, posición o cualquier otra propiedad del modelo aquí
    });
  }, []);

  return <div ref={fbxRef} />;
};

export default ModelViewer;
