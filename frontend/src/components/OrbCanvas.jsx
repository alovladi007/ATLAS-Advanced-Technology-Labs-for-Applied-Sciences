import { Canvas, useFrame } from "@react-three/fiber";
import { Environment, Float, MeshDistortMaterial, Sphere } from "@react-three/drei";
import { Suspense, useRef } from "react";

function Orb({ color = "#8b5cf6" }) {
  const meshRef = useRef(null);

  useFrame(({ clock }) => {
    if (!meshRef.current) return;
    meshRef.current.rotation.x = Math.sin(clock.elapsedTime * 0.35) * 0.25;
    meshRef.current.rotation.y = clock.elapsedTime * 0.25;
  });

  return (
    <Float speed={2} rotationIntensity={0.55} floatIntensity={1}>
      <Sphere ref={meshRef} args={[1, 64, 64]} scale={2.6}>
        <MeshDistortMaterial
          attach="material"
          color={color}
          distort={0.42}
          speed={2.1}
          roughness={0.25}
          metalness={0.85}
        />
      </Sphere>
    </Float>
  );
}

export function OrbCanvas({ className = "", color = "#8b5cf6" }) {
  return (
    <div className={className} aria-hidden>
      <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
        <Suspense fallback={null}>
          <ambientLight intensity={0.55} />
          <pointLight position={[10, 10, 10]} intensity={1.0} />
          <Orb color={color} />
          <Environment preset="city" />
        </Suspense>
      </Canvas>
    </div>
  );
}

