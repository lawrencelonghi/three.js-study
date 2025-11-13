import * as THREE from "three";
import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { Background } from "./components/Three/Background.tsx";

function App() {
  const camera = new THREE.PerspectiveCamera(
    70,
    window.innerWidth / window.innerHeight,
    0.001,
    1000,
  );
  camera.position.set(0, 0, 1.3);

  return (
    <div className="relative h-screen w-screen">
      {/* Canvas 3D */}
      <Canvas camera={camera} dpr={Math.min(window.devicePixelRatio, 2)}>
        <Suspense fallback={null}>
          <Background/>
        </Suspense>
      </Canvas>
      
      {/* Título sobreposto */}
      <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
        <div className="text-center flex flex-col">
          <h1 className="text-6xl md:text-6xl  text-drop-shadow-2xl">
            LAWRENCE LONGHI
          </h1>
          <p className="text-xl md:text-2xl text-white/80 mt-4 drop-shadow-lg">
            Desenvolvedor Full Stack
          </p>
        </div>
      </div>

    </div>
  );
}

export default App;