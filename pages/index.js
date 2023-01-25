import Head from 'next/head'
import { Inter } from '@next/font/google'
import { Canvas, useFrame} from '@react-three/fiber'
import { useGLTF, OrbitControls, PerspectiveCamera } from '@react-three/drei'
import { useRef, useEffect, useState} from 'react'





export default function Home() {

  const [camera1Enable, setCamera1Enable] = useState(false);
  const [camera2Enable, setCamera2Enable] = useState(false);
  const [camera3Enable, setCamera3Enable] = useState(false);
  const [camera4Enable, setCamera4Enable] = useState(false);


  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className='relative' id="canvas-container">
        <Canvas>


          
          <ambientLight intensity={0.2} />
          <directionalLight color="red" position={[0, 0, 5]} />


          <mesh>

            <AgentModel camera1={camera1Enable} camera2={camera2Enable} camera3={camera3Enable} camera4={camera4Enable}/>

      
          </mesh>
          {/* <PerspectiveCamera
    makeDefault
    position={[0, 0, 250]}
    fov={100}
    zoom={0.9}
  /> */}
        </Canvas>


        <div className='z-[999] absolute bottom-[0px] w-[100vw] bg-red-500/50 h-[70px]'>
          
          <button onClick={() => {
             setCamera1Enable(true)
             setCamera2Enable(false)
             setCamera3Enable(false)
             setCamera4Enable(false)
          }} 
          className='bg-white p-3 rounded-lg mx-3 mt-3'>camera 1</button>
          <button onClick={() => {
             setCamera1Enable(false)
             setCamera2Enable(true)
             setCamera3Enable(false)
             setCamera4Enable(false)
          }}  className='bg-white p-3 rounded-lg mx-3 mt-3'>camera 2</button>
          <button onClick={() => {
             setCamera1Enable(false)
             setCamera2Enable(false)
             setCamera3Enable(true)
             setCamera4Enable(false)
          }}  className='bg-white p-3 rounded-lg mx-3 mt-3'>camera 3</button>
          <button onClick={() => {
             setCamera1Enable(false)
             setCamera2Enable(false)
             setCamera3Enable(false)
             setCamera4Enable(true)
          }}  className='bg-white p-3 rounded-lg mx-3 mt-3'>camera 4</button>

          </div>
      </div>
    </>
  )
}


export function AgentModel(props) {
  const ref = useRef();


  console.log(props.camera1 ? props.camera1 : "undefined")
const { nodes, materials } = useGLTF("/Agent (1).gltf");


return (
  <group {...props} dispose={null}>
    


    {/* default camera */}
    <PerspectiveCamera
      makeDefault={true}
      far={10000000000}
      near={0.01}
      fov={50}
      position={[0, -80, 522.72]}
      rotation={[0.25, 0, 0]}
    />


    {/* camera 1 / default camera */}

    {props.camera1 ? (
    <PerspectiveCamera
      makeDefault={true}
      far={10000000000}
      near={0.01}
      fov={50}
      position={[0, -80, 522.72]}
      rotation={[0.25, 0, 0]}
    /> ) : ( null)
  }

    {/* camera 2 */}

{props.camera2 ? (

    <PerspectiveCamera
      makeDefault={true}
      far={10000000000}
      near={0.01}
      fov={50}
      position={[333.49, 48.14, 130.03]}
      rotation={[0.05, 1.27, -0.04]}
    /> ) : ( null)

  }

    {/* camera 3 */}
    {props.camera3 ? (
    <PerspectiveCamera
      makeDefault={true}
      far={10000000000}
      near={0.01}
      fov={50}
      position={[-299.52, 33.32, 282.3]}
      rotation={[0.09, -0.7, 0.06]}
      /> ) : ( null)

    }
        {/* camera 4 */}
        {props.camera4 ? (

    <PerspectiveCamera
      makeDefault={true}
      far={10000000000}
      near={0.01}
      fov={50}
      position={[0, 51, 733]}
    /> ) : ( null)

  }
    <mesh
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


