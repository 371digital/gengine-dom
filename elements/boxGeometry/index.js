import * as THREE from 'three';

const BoxGeometry = ({ width, height, depth }) => {
    const boxGeometry = new THREE.BoxGeometry(width, height, depth);
    return boxGeometry;
};

export default BoxGeometry;