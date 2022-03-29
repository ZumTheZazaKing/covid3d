export default function Box(){
    return (
        <mesh>
          <boxGeometry/>
          <meshStandardMaterial args={[20,20,20]}/>
        </mesh>
    )
}