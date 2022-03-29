import { Canvas } from '@react-three/fiber';
import Box from './3dcomponents/Box'

function App() {
  return (
    <div className="App">
      <Canvas>
        <ambientLight intensity={0.5}/>
        <directionalLight color="red" position={[0,0,5]}/>
        <Box/>
      </Canvas>
    </div>
  );
}

export default App;
