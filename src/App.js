import { Canvas, useThree } from '@react-three/fiber';
import CameraController from './components/CameraController';
import Box from './3dcomponents/Box'

export function App() {

  const Scene = () => {
    useThree(({camera}) => {
      camera.position.set(0, 0, 20);
    })
    return null
  }

  return (
    <div className="App">
      <Canvas>
        <Scene/>
        <CameraController/>
        <ambientLight intensity={0.5}/>
        <directionalLight color="red" position={[10,10,0]}/>
        <Box position={[0,0,0]}/>
      </Canvas>
    </div>
  );
}

export default App;
