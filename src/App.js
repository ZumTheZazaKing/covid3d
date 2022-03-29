import { Canvas, useThree } from '@react-three/fiber';
import CameraController from './components/CameraController';
import Box from './3dcomponents/Box'
import { useLoader } from '@react-three/fiber'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { Suspense } from 'react';

export function App() {

  const Model = () => {
    const gltf = useLoader(GLTFLoader, "./3dmodels/coronavirus.gltf");
    return (
      <>
        <primitive object={gltf.scene} scale={0.4} />
      </>
    );
  };

  const Scene = () => {
    useThree(({camera}) => {
      camera.position.set(0, 0, 20);
    })
    return null
  }

  return (
    <div className="App">
      <Canvas>
        <Suspense fallback={null}>
          <Scene/>
          <CameraController/>
          <Model/>
          <ambientLight intensity={0.5}/>
          <directionalLight color="red" position={[10,10,0]}/>
          <Box position={[0,0,0]}/>
        </Suspense>
      </Canvas>
    </div>
  );
}

export default App;
