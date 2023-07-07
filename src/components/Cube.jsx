import { OrbitControls } from '@react-three/drei'
import { Canvas, useLoader } from '@react-three/fiber'
import React from 'react'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader';

export default function Cube({ color,file }) {
    const gltf = useLoader(GLTFLoader, file);

    if (gltf.scene) {
        gltf.scene.scale.set(0.05, 0.05, 0.05);
    }
    return (
        <Canvas>
            <pointLight intensity={1}  /> {/* Nokta ışığı ile tüm nesneleri aydınlat */}
            <directionalLight intensity={2} position={[-1, -1, -1]} />
            <directionalLight intensity={2} position={[1, 1, 1]} />
            <OrbitControls enableZoom={true} autoRotate={false} />
            <mesh>
                <primitive
                    object={gltf.scene}
                    position={[0, -1, 0.5]}
                />
                <meshStandardMaterial />
            </mesh>
        </Canvas>
    )
}
