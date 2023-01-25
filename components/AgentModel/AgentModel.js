import { useGLTF, PerspectiveCamera } from "@react-three/drei";
import { useRef } from "react";
import { useFrame } from "@react-three/fiber";

export function AgentModel(props) {
    const ref = useRef();


    // useFrame(() => {
    //     ref.current.rotation.y += 0.01;
    //   });


  const { nodes, materials } = useGLTF("/Agent (1).gltf");
  return (
    <group {...props} dispose={null}>
      <PerspectiveCamera
        makeDefault={false}
        far={10000000000}
        near={0.01}
        fov={22.9}
        position={[0, -80, 522.72]}
        rotation={[0.25, 0, 0]}
      />
      <PerspectiveCamera
        makeDefault={false}
        far={10000000000}
        near={0.01}
        fov={22.9}
        position={[333.49, 48.14, 130.03]}
        rotation={[0.05, 1.27, -0.04]}
      />
      <PerspectiveCamera
        makeDefault={false}
        far={10000000000}
        near={0.01}
        fov={22.9}
        position={[-299.52, 33.32, 282.3]}
        rotation={[0.09, -0.7, 0.06]}
      />
      <PerspectiveCamera
        makeDefault={false}
        far={10000000000}
        near={0.01}
        fov={22.9}
        position={[0, 51, 733]}
      />
      <mesh ref={ref}
        castShadow
        receiveShadow
        geometry={nodes.SuperText_Plus.geometry}
        material={materials.Mat}
        position={[0, 55, 0]}
      />
    </group>
  );
}

useGLTF.preload("/Agent (1).gltf");


