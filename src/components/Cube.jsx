import { OrbitControls } from '@react-three/drei'
import { Canvas, useLoader } from '@react-three/fiber'
import React from 'react'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

export default function Cube({ color, file, position }) {
    const gltf = useLoader(GLTFLoader, file);

    if (gltf.scene) {
        gltf.scene.scale.set(0.05, 0.05, 0.05);
    }
    return (
        <Canvas>
            <pointLight intensity={1} /> {/* Nokta ışığı ile tüm nesneleri aydınlat */}
            <directionalLight color={color} intensity={2} position={[-1, -1, -1]} />
            <directionalLight color={color} intensity={2} position={[1, 1, 1]} />
            <OrbitControls enableZoom={true} autoRotate={true} />
            <mesh>
                <primitive
                    object={gltf.scene}
                    position={position}
                />
                <meshStandardMaterial />
            </mesh>
        </Canvas>
    )
}
