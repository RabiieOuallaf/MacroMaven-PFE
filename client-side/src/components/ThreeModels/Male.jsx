/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.1.4 male.gltf
Author: Beatriz Gomez Santamaria (https://sketchfab.com/BeatrizGomez)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/ecorche-anatomy-study-e402d3d541eb4b199c57d5410f5d3c57
Title: Ecorche - Anatomy study
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { motion } from "framer-motion-3d"

export function Male(props) {
  const { nodes, materials } = useGLTF('/male.gltf')
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0.3]} scale={0.11}>
        <group position={[-40.01, 8, -34.06]}>
          <mesh geometry={nodes.Object_4.geometry} material={materials.material_0} />
          <mesh geometry={nodes.Object_5.geometry} material={materials.material_0} />
          <mesh geometry={nodes.Object_6.geometry} material={materials.material_0} />
          <mesh geometry={nodes.Object_7.geometry} material={materials.material_0} />
          <mesh geometry={nodes.Object_9.geometry} material={materials.material_1} />
          <mesh geometry={nodes.Object_11.geometry} material={materials.material_2} />
        </group>
      </group>
    </group>
    
  )
}

useGLTF.preload('/male.gltf')
