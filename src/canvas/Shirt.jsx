import React from 'react';
import { easing } from 'maath';
import { useSnapshot } from 'valtio';
import { useFrame } from '@react-three/fiber';
import { Decal, useGLTF, useTexture } from '@react-three/drei';

import state from '../store';

const Shirt = () => {
  const snap = useSnapshot(state);
  const { nodes, materials } = useGLTF('/shirt_baked2.glb');

  const logoTexture = useTexture(snap.logoDecal);
  const fullTexture = useTexture(snap.fullDecal);

  useFrame((state, delta) => {
    if (materials.lambert1) {
      easing.dampC(materials.lambert1.color, snap.color, 0.25, delta);
    } else if (materials.Material) {
      easing.dampC(materials.Material.color, snap.color, 0.25, delta);
    }
  });

  const stateString = JSON.stringify(snap);

  // if (!nodes) {
  //   console.log('no nodes:', nodes);
  // } else{
  //   console.log('nodes:', nodes);
  //   console.log('nodes1:', nodes.Cube);
  // }

  // if (!materials) {
  //   console.log('no materials:', materials);
  // } else{
  //   console.log('materials:', materials);
  //   console.log('materials1:', materials.Material);
  // }

  return (
    <group key={stateString}>
      {nodes.T_Shirt_male && materials.lambert1 && (
        <mesh
          castShadow
          geometry={nodes.T_Shirt_male.geometry}
          material={materials.lambert1}
          material-roughness={1}
          dispose={null}
        >
          {snap.isFullTexture && (
            <Decal
              position={[0, 0, 0]}
              rotation={[0, 0, 0]}
              scale={1}
              map={fullTexture}
            />
          )}
          {/* {console.log(nodes)}
          {console.log(materials)} */}
          {snap.isLogoTexture && (
            <Decal
              position={[0, 0.04, 0.15]}
              rotation={[0, 0, 0]}
              scale={0.15}
              map={logoTexture}
              map-anisotropy={16}
              depthTest={false}
              depthWrite={true}
            />
          )}
        </mesh>
      )}
    </group>
  );
};

export default Shirt;
