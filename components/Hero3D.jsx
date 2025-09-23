import { Canvas } from '@react-three/fiber'
import { OrbitControls, Float } from '@react-three/drei'
import { Suspense } from 'react'

function Knot() {
  return (
    <Float speed={2} rotationIntensity={1} floatIntensity={2}>
      <mesh>
        <torusKnotGeometry args={[1, 0.3, 120, 32]} />
        <meshStandardMaterial metalness={0.6} roughness={0.2} color={'#38bdf8'} />
      </mesh>
    </Float>
  )
}

export default function Hero3D() {
  return (
    <Canvas camera={{ position: [0, 0, 4] }}>
      <ambientLight intensity={0.4} />
      <directionalLight position={[2,2,2]} intensity={1} />
      <Suspense fallback={null}>
        <Knot />
      </Suspense>
      <OrbitControls enablePan={false} enableZoom={false} />
    </Canvas>
  )
}
