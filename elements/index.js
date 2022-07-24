import MeshBasicMaterial from "./meshBasicMaterial/index.js";
import PerspectiveCamera from "./perspectiveCamera/index.js";
import BoxGeometry from "./boxGeometry/index.js";
import Renderer from "./renderer/index.js";
import Scene from "./scene/index.js";
import Mesh from "./mesh/index.js";

export default {
    Renderer: {
        component: Renderer,
    },
    PerspectiveCamera: {
        component: PerspectiveCamera
    },
    Scene: {
        component: Scene,
    },
    Mesh: {
        component: Mesh,
    },
    BoxGeometry: {
        component: BoxGeometry
    },
    MeshBasicMaterial: {
        component: MeshBasicMaterial
    }
};