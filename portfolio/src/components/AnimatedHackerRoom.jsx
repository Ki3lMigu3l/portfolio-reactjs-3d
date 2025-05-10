import { useRef, useState, useEffect } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { HackerRoom } from "./HackerRoom";

export default function AnimatedHackerRoom() {
  const groupRef = useRef();
  const [startTime] = useState(() => performance.now());
  const [isMobile, setIsMobile] = useState(false);

  // Detecta tamanho da tela
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Valores diferentes para desktop e mobile
  const startPosition = isMobile
    ? new THREE.Vector3(0, -15, 18)
    : new THREE.Vector3(1.5, -20, 10);
  const endPosition = isMobile
    ? new THREE.Vector3(0, -5, 16)
    : new THREE.Vector3(1, -8, 18);
  const startScale = 0;
  const endScale = isMobile ? 0.05 : 0.07;
  const startRotation = new THREE.Euler(0, 0, 0);
  const endRotation = new THREE.Euler(0.6, 2.8, 0);

  useFrame(() => {
    if (!groupRef.current) return;

    const elapsed = (performance.now() - startTime) / 2500;
    const t = Math.min(elapsed / 1.5, 1);
    const easedT = 1 - Math.pow(1 - t, 3); // easeOutCubic

    groupRef.current.position.lerpVectors(startPosition, endPosition, easedT);
    groupRef.current.scale.setScalar(
      THREE.MathUtils.lerp(startScale, endScale, easedT)
    );
    groupRef.current.rotation.x = THREE.MathUtils.lerp(
      startRotation.x,
      endRotation.x,
      easedT
    );
    groupRef.current.rotation.y = THREE.MathUtils.lerp(
      startRotation.y,
      endRotation.y,
      easedT
    );
    groupRef.current.rotation.z = THREE.MathUtils.lerp(
      startRotation.z,
      endRotation.z,
      easedT
    );
  });

  return (
    <group ref={groupRef}>
      <HackerRoom />
    </group>
  );
}
