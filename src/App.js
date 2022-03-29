import { Canvas, useThree } from '@react-three/fiber';
import Box from './3dcomponents/Box'

export function App() {

  const Scene = () => {
    useThree(({camera}) => {
      camera.position.set(0, 0, 6);
    })
    return null
  }

  return (
    <div className="App">
      <Canvas id="bg">
        <Scene/>
        <ambientLight intensity={0.5}/>
        <directionalLight color="red" position={[0,0,5]}/>
        <Box position={[0,0,0]}/>
      </Canvas>
    </div>
  );
}

export default App;
