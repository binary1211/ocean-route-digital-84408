import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, PerspectiveCamera } from "@react-three/drei";
import * as THREE from "three";

function Ship() {
  const shipRef = useRef<THREE.Group>(null);
  const time = useRef(0);

  useFrame((state, delta) => {
    if (!shipRef.current) return;
    time.current += delta;

    // Gentle bobbing motion
    shipRef.current.position.y = Math.sin(time.current * 0.5) * 0.3;
    shipRef.current.rotation.z = Math.sin(time.current * 0.3) * 0.05;
    
    // Slow forward movement with path
    shipRef.current.position.x = Math.sin(time.current * 0.1) * 2;
  });

  return (
    <group ref={shipRef} position={[0, 0, 0]}>
      {/* Ship hull */}
      <mesh position={[0, 0, 0]} castShadow>
        <boxGeometry args={[2, 0.8, 0.6]} />
        <meshStandardMaterial color="#1A2A80" />
      </mesh>
      
      {/* Ship deck */}
      <mesh position={[0, 0.5, 0]} castShadow>
        <boxGeometry args={[1.8, 0.3, 0.5]} />
        <meshStandardMaterial color="#74B1ED" />
      </mesh>
      
      {/* Containers */}
      <mesh position={[-0.5, 0.8, 0]} castShadow>
        <boxGeometry args={[0.3, 0.3, 0.3]} />
        <meshStandardMaterial color="#ff6b6b" />
      </mesh>
      <mesh position={[0, 0.8, 0]} castShadow>
        <boxGeometry args={[0.3, 0.3, 0.3]} />
        <meshStandardMaterial color="#4ecdc4" />
      </mesh>
      <mesh position={[0.5, 0.8, 0]} castShadow>
        <boxGeometry args={[0.3, 0.3, 0.3]} />
        <meshStandardMaterial color="#ffe66d" />
      </mesh>
    </group>
  );
}

function Ocean() {
  const oceanRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (!oceanRef.current) return;
    const time = state.clock.getElapsedTime();
    
    // Animate ocean waves using vertex displacement
    const position = oceanRef.current.geometry.attributes.position;
    for (let i = 0; i < position.count; i++) {
      const x = position.getX(i);
      const y = position.getY(i);
      const wave1 = Math.sin(x * 0.5 + time * 0.5) * 0.1;
      const wave2 = Math.sin(y * 0.3 + time * 0.3) * 0.1;
      position.setZ(i, wave1 + wave2);
    }
    position.needsUpdate = true;
  });

  return (
    <mesh
      ref={oceanRef}
      rotation={[-Math.PI / 2, 0, 0]}
      position={[0, -1, 0]}
      receiveShadow
    >
      <planeGeometry args={[20, 20, 32, 32]} />
      <meshStandardMaterial
        color="#2E5C8A"
        wireframe={false}
        transparent
        opacity={0.8}
      />
    </mesh>
  );
}

export function OceanScene() {
  return (
    <div className="w-full h-full">
      <Canvas shadows>
        <PerspectiveCamera makeDefault position={[5, 3, 5]} fov={50} />
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 4}
          autoRotate
          autoRotateSpeed={0.5}
        />
        
        {/* Lighting */}
        <ambientLight intensity={0.5} />
        <directionalLight
          position={[10, 10, 5]}
          intensity={1}
          castShadow
          shadow-mapSize-width={1024}
          shadow-mapSize-height={1024}
        />
        <hemisphereLight intensity={0.3} groundColor="#1A2A80" />
        
        {/* Scene objects */}
        <Ship />
        <Ocean />
        
        {/* Sky gradient background */}
        <mesh position={[0, 0, -10]}>
          <planeGeometry args={[50, 50]} />
          <meshBasicMaterial color="#74B1ED" />
        </mesh>
      </Canvas>
    </div>
  );
}
