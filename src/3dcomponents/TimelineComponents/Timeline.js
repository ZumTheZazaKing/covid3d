export default function Timeline(props){
    return (
        <mesh {...props}>
            <cylinderGeometry args={[0.1,0.1,50,64]}/>
            <meshStandardMaterial color="grey"/>    
        </mesh>
    )
}