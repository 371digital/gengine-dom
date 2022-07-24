import * as THREE from 'three';

const getItem = (childs, targetTagName) => {
    return childs.find((child) => child.tagName === targetTagName).threeElement;
};

const Renderer = ({ width, height, onAnimate, getMyChilds, getElementByRefId }) => {
    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(width, height);

    const domElement = document.getElementById("app");
    domElement.replaceWith(renderer.domElement);

    const childs = getMyChilds();
    const scene = getItem(childs, "Scene");
    const camera = getItem(childs, "PerspectiveCamera");

    const animate = () => {
        requestAnimationFrame(animate);
        if (onAnimate) onAnimate(getElementByRefId);
        renderer.render(scene, camera);
    }

    animate();
    
    return renderer;
};

export default Renderer;