import { useThree } from '@react-three/fiber';
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { useEffect } from "react";

export default function CameraController () {
   const { camera, gl } = useThree();
   useEffect(
      () => {
         const controls = new OrbitControls(camera, gl.domElement);
         controls.minDistance = 0.05;
         controls.maxDistance = 0.10;
         controls.enableDamping = true;
         controls.enablePan = false;
         return () => {
            controls.dispose();
         };
      },
      [camera, gl]
   );
   return null;
}