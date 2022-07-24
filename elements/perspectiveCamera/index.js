import * as THREE from 'three';

const PerspectiveCamera = ({
    fov,
    aspect,
    near,
    far,
    position
}) => {
    const perspectiveCamera = new THREE.PerspectiveCamera(fov, aspect, near, far);
    if (position) {
        Object.keys(position).forEach((positionKey) => {
            perspectiveCamera.position[positionKey] = position[positionKey];
        })
    }
    return perspectiveCamera;
};

export default PerspectiveCamera;