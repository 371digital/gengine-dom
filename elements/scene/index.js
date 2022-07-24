import * as THREE from 'three';

const Scene = ({ getMyChilds }) => {
    const scene = new THREE.Scene();

    const childs = getMyChilds();

    childs.forEach((child) => {
        if(child.threeElement) scene.add(child.threeElement);
    })

    return scene;
};

export default Scene;