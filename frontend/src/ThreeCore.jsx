// src/ThreeCore.jsx
import React, { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import {
  OrbitControls,
  MeshTransmissionMaterial,
  Html,
  Float,
  Stars,
} from "@react-three/drei";

function RotatingGlassSphere() {
  const meshRef = useRef();

  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.5 * delta;
      meshRef.current.rotation.x += 0.18 * delta;
    }
  });

  return (
    <Float speed={1.5} rotationIntensity={0.4} floatIntensity={0.5}>
      <mesh ref={meshRef}>
        <sphereGeometry args={[1, 80, 80]} />
        <MeshTransmissionMaterial
          transmission={1}
          roughness={0.05}
          thickness={1.4}
          ior={1.4}
          chromaticAberration={0.08}
          anisotropy={0.1}
          distortion={0.25}
          distortionScale={0.5}
          temporalDistortion={0.2}
          color="#00c2ff"
        />
      </mesh>
    </Float>
  );
}

function OrbitingParticle({ radius = 1.6, size = 0.04, speed = 0.8, offset = 0 }) {
  const ref = useRef();
  useFrame((state) => {
    const t = state.clock.getElapsedTime() * speed + offset;
    if (ref.current) {
      ref.current.position.x = Math.cos(t) * radius;
      ref.current.position.z = Math.sin(t) * radius;
      ref.current.position.y = 0.2 * Math.sin(t * 2.0);
    }
  });

  return (
    <mesh ref={ref}>
      <sphereGeometry args={[size, 16, 16]} />
      <meshBasicMaterial color="#00f0ff" />
    </mesh>
  );
}

function GlowRing() {
  return (
    <mesh rotation={[Math.PI / 2, 0, 0]}>
      <torusGeometry args={[1.5, 0.03, 32, 128]} />
      <meshBasicMaterial color="#00d1ff" transparent opacity={0.4} />
    </mesh>
  );
}

export default function ThreeCoreSection() {
  return (
    <div
      style={{
        height: "520px",
        width: "100%",
        borderRadius: "32px",
        overflow: "hidden",
        background:
          "radial-gradient(circle at top, #081a2b 0%, #050816 45%, #01040b 100%)",
        border: "1px solid rgba(0,0,0,0.08)",
        boxShadow: "0 0 60px rgba(15,23,42,0.4)",
        position: "relative",
      }}
    >
      {/* subtle label over the canvas */}
      <div
        style={{
          position: "absolute",
          top: 18,
          left: 24,
          fontSize: 12,
          letterSpacing: "0.16em",
          textTransform: "uppercase",
          color: "rgba(255,255,255,0.6)",
          zIndex: 2,
        }}
      >
        MetaLife 3D Core
      </div>

      <Canvas camera={{ position: [0, 0, 4.3], fov: 40 }}>
        {/* starry / particle background */}
        <Stars
          radius={8}
          depth={20}
          count={400}
          factor={2}
          saturation={0}
          fade
          speed={0.6}
        />

        <ambientLight intensity={0.45} />
        <directionalLight position={[4, 6, 4]} intensity={1.5} />
        <directionalLight position={[-4, -2, -4]} intensity={0.6} />

        <GlowRing />
        <RotatingGlassSphere />

        {/* multiple orbiting particles */}
        <OrbitingParticle radius={1.8} speed={0.6} offset={0} />
        <OrbitingParticle radius={2.1} speed={0.9} offset={1} />
        <OrbitingParticle radius={1.5} speed={1.2} offset={2} />

        <OrbitControls enableZoom={false} enablePan={false} />
      </Canvas>
    </div>
  );
}
