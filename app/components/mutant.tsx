import { OrbitControls, useGLTF, useAnimations } from "@react-three/drei";
import { useThree } from "@react-three/fiber";
import { useEffect } from "react";

const Mutant = () => {
  const { scene, animations } = useGLTF("/model/mutant.glb");
  const { actions } = useAnimations(animations, scene);

  useThree(({ camera }) => {
    camera.position.set(0, 0, 1.6);
  });

  useEffect(() => {
    if (!animations.length) return;

    const action = actions[animations[0].name];
    if (!action) return;

    action.reset();
    action.paused = true;

    const timer = setTimeout(() => {
      action.paused = false;
      action.timeScale = 0.6;
      action.play();
    }, 3000);

    return () => clearTimeout(timer);
  }, [actions, animations]);

  return (
    <>
      <primitive object={scene} position={[0, -0.9, 0]} />

      <directionalLight position={[0, 5, 5]} intensity={4} />
      <ambientLight intensity={0.4} />

      <OrbitControls
        enableZoom={false}
        enablePan={false}
        minPolarAngle={Math.PI / 2}
        maxPolarAngle={Math.PI / 2}
      />
    </>
  );
};

useGLTF.preload("/model/mutant.glb");

export default Mutant;
