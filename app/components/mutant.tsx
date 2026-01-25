import { OrbitControls, useGLTF, useAnimations } from "@react-three/drei";
import { useThree } from "@react-three/fiber";
import { useEffect } from "react";

const Mutant = () => {
  const model = useGLTF("/model/mutant.glb");
  const { animations, scene } = useGLTF("/model/mutant.glb");
  const { actions } = useAnimations(animations, scene);
  console.log(model.animations);

  useThree(({ camera, scene, gl }) => {
    camera.position.z = 1.6;
  });
  useEffect(() => {
    actions[animations[0]?.name]?.play();
  }, []);
  return (
    <>
      <primitive object={model.scene} position={[0, -0.9, 0]} />
      <directionalLight position={[0, 5, 5]} color={0xffffff} intensity={4} />
      <OrbitControls
        enableZoom={false}
        enablePan={false}
        minPolarAngle={Math.PI / 2}
        maxPolarAngle={Math.PI / 2}
      />
    </>
  );
};

export default Mutant;
