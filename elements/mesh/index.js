import * as THREE from 'three';

const getItem = (childs, targetTagName) => {
    return childs.find((child) => child.tagName === targetTagName).threeElement;
};

const Mesh = ({ getMyChilds }) => {
    const childs = getMyChilds();
    const geometry = getItem(childs, "BoxGeometry");
    const material = getItem(childs, "MeshBasicMaterial");

    const mesh = new THREE.Mesh(geometry, material);
    return mesh;
};

export default Mesh;