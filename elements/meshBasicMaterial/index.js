import * as THREE from 'three';

const MeshBasicMaterial = ({ color }) => {
    if (color && typeof color === "string") color = new THREE.Color(color);
    const meshBasicMaterial = new THREE.MeshBasicMaterial({ color });
    return meshBasicMaterial;
};

export default MeshBasicMaterial;