import { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, Environment, ContactShadows, PerspectiveCamera } from '@react-three/drei';

function AbstractShape({ position, rotation, scale, color, roughness = 0.2, metalness = 0.8, type = "knot" }) {
    const meshRef = useRef();

    useFrame((state) => {
        const t = state.clock.getElapsedTime();
        if (meshRef.current) {
            meshRef.current.rotation.x = Math.sin(t / 4) / 2;
            meshRef.current.rotation.y = Math.sin(t / 2) / 2;
        }
    });

    return (
        <Float speed={2} rotationIntensity={1.5} floatIntensity={2}>
            <mesh ref={meshRef} position={position} rotation={rotation} scale={scale}>
                {type === "knot" && <torusKnotGeometry args={[1, 0.3, 128, 32]} />}
                {type === "box" && <boxGeometry />}
                {type === "sphere" && <sphereGeometry args={[1, 64, 64]} />}
                {type === "octahedron" && <octahedronGeometry />}

                <meshPhysicalMaterial
                    color={color}
                    roughness={roughness}
                    metalness={metalness}
                    clearcoat={1}
                    clearcoatRoughness={0.1}
                />
            </mesh>
        </Float>
    );
}

function Composition() {
    return (
        <group>
            {/* Main large floating shape - Gold/Bronze Theme */}
            <AbstractShape
                position={[0, 0, 0]}
                scale={1.5}
                color="#8b7355"
                type="knot"
            />

            {/* Secondary darker shapes */}
            <AbstractShape
                position={[-3, 2, -2]}
                scale={0.8}
                color="#2c2416"
                rotation={[Math.PI / 4, 0, 0]}
                type="sphere"
                metalness={0.9}
                roughness={0.1}
            />

            <AbstractShape
                position={[3, -1, -2]}
                scale={1}
                color="#c4b8a8"
                type="octahedron"
                metalness={0.5}
                roughness={0.4}
            />

            {/* Small accents */}
            <AbstractShape
                position={[2, 3, -4]}
                scale={0.5}
                color="#8b7355"
                type="box"
            />

            <AbstractShape
                position={[-2, -3, -3]}
                scale={0.6}
                color="#f5f0e8"
                type="sphere"
                metalness={0.1}
                roughness={0}
            // Glass-like
            />
        </group>
    );
}

export default function Hero3DScene() {
    return (
        <div className="absolute inset-0 z-0 pointer-events-none">
            <Canvas shadows dpr={[1, 2]} gl={{ preserveDrawingBuffer: true }}>
                <PerspectiveCamera makeDefault position={[0, 0, 8]} fov={50} />
                <ambientLight intensity={0.5} />
                <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} shadow-mapSize={2048} intensity={1.5} castShadow />

                <Composition />

                <Environment preset="city" />
                <ContactShadows position={[0, -3.5, 0]} opacity={0.4} scale={20} blur={2.5} far={4} color="#2c2416" />
            </Canvas>
        </div>
    );
}
