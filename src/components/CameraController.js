import { useThree } from '@react-three/fiber';
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { useEffect } from "react";

export default function CameraController () {
    const { camera, gl } = useThree();
    useEffect(
       () => {
         const controls = new OrbitControls(camera, gl.domElement);
         controls.minDistance = 40;
         controls.maxDistance = 300;
         controls.enableDamping = true;
         return () => {
            controls.dispose();
         };
       },
       [camera, gl]
    );
    return null;
}