import { Canvas, useFrame } from "@react-three/fiber";
import { Environment, ContactShadows, Float } from "@react-three/drei";
import { Suspense, useRef } from "react";
import * as THREE from "three";

function Sofa() {
  const group = useRef<THREE.Group>(null);
  useFrame((state) => {
    if (group.current) {
      group.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.3) * 0.4;
    }
  });

  const fabric = new THREE.MeshStandardMaterial({
    color: "#3a2418",
    roughness: 0.85,
    metalness: 0.05,
  });
  const gold = new THREE.MeshStandardMaterial({
    color: "#c9a84c",
    roughness: 0.25,
    metalness: 0.9,
  });
  const wood = new THREE.MeshStandardMaterial({
    color: "#1a0f08",
    roughness: 0.4,
    metalness: 0.2,
  });

  return (
    <group ref={group} position={[0, -0.6, 0]} scale={1.1}>
      {/* base */}
      <mesh material={fabric} castShadow position={[0, 0.3, 0]}>
        <boxGeometry args={[3, 0.6, 1.3]} />
      </mesh>
      {/* seat cushions */}
      {[-1, 0, 1].map((x) => (
        <mesh key={x} material={fabric} castShadow position={[x, 0.7, 0.05]}>
          <boxGeometry args={[0.95, 0.25, 1.15]} />
        </mesh>
      ))}
      {/* backrest */}
      <mesh material={fabric} castShadow position={[0, 1.1, -0.55]}>
        <boxGeometry args={[3, 1.1, 0.3]} />
      </mesh>
      {/* back cushions */}
      {[-1, 0, 1].map((x) => (
        <mesh key={x} material={fabric} castShadow position={[x, 1.05, -0.35]}>
          <boxGeometry args={[0.95, 0.9, 0.25]} />
        </mesh>
      ))}
      {/* arms */}
      {[-1.55, 1.55].map((x) => (
        <mesh key={x} material={fabric} castShadow position={[x, 0.85, 0]}>
          <boxGeometry args={[0.3, 1.1, 1.3]} />
        </mesh>
      ))}
      {/* legs */}
      {[
        [-1.4, 0, 0.55], [1.4, 0, 0.55], [-1.4, 0, -0.55], [1.4, 0, -0.55]
      ].map((p, i) => (
        <mesh key={i} material={gold} castShadow position={p as [number, number, number]}>
          <cylinderGeometry args={[0.06, 0.06, 0.3, 16]} />
        </mesh>
      ))}
      {/* gold trim */}
      <mesh material={gold} position={[0, 0.05, 0]}>
        <boxGeometry args={[3.05, 0.04, 1.35]} />
      </mesh>
      {/* decorative pillow */}
      <Float speed={2} rotationIntensity={0.2} floatIntensity={0.3}>
        <mesh material={wood} castShadow position={[1.2, 1.0, 0.3]} rotation={[0.2, 0.4, 0.1]}>
          <boxGeometry args={[0.4, 0.4, 0.15]} />
        </mesh>
      </Float>
    </group>
  );
}

export function SofaScene() {
  return (
    <Canvas
      shadows
      camera={{ position: [4, 2.5, 5], fov: 35 }}
      dpr={[1, 2]}
      gl={{ antialias: true, alpha: true }}
    >
      <Suspense fallback={null}>
        <ambientLight intensity={0.3} />
        <directionalLight
          position={[5, 8, 5]}
          intensity={1.2}
          castShadow
          shadow-mapSize={[2048, 2048]}
        />
        <pointLight position={[-3, 2, -3]} intensity={0.5} color="#c9a84c" />
        <Sofa />
        <ContactShadows
          position={[0, -0.61, 0]}
          opacity={0.6}
          scale={10}
          blur={2.5}
          far={4}
        />
        <Environment preset="apartment" />
      </Suspense>
    </Canvas>
  );
}
