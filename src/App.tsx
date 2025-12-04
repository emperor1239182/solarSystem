import * as THREE from 'three';
import {OrbitControls} from 'three/addons/controls/OrbitControls.js'

const App = () => {

    console.log(THREE)
    console.log(window);

    //add the scene
    const scene = new THREE.Scene();

    //create the camera
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 100);
     camera.position.z = 5
     console.log(camera.aspect)

    const canvas = document.getElementById("threeJs")

     //initialize the render
    const renderer = new THREE.WebGLRenderer({canvas, antialias : true});
    renderer.setAnimationLoop(animate);


    //create the 3D materials
    const geometry = new THREE.BoxGeometry(1, 1, 1);
    const material = new THREE.MeshBasicMaterial({color : "red"});
    const cube = new THREE.Mesh(geometry, material);
    cube.position.y = 1.5

    const geometry2 = new THREE.BoxGeometry(1,1,1);
    const material2 = new THREE.MeshBasicMaterial({color : "green"});
    const cube2 = new THREE.Mesh(geometry2, material2);
    cube2.position.x = 1.5

    const geometry3 = new THREE.BoxGeometry(1,1,1);
    const material3 = new THREE.MeshBasicMaterial({color : "green"});
    const cube3 = new THREE.Mesh(geometry3, material3);
    cube3.position.x = -1.5

    //add the material to the scene to be rendered
    scene.add(cube, cube2, cube3);

    //add controls to the camera and scene]
    const controls = new OrbitControls(camera, canvas);
    controls.enableDamping = true

    window.addEventListener("resize", ()=> {
        renderer.setSize(window.innerWidth, window.innerHeight); 
        camera.aspect = window.innerWidth / window.innerHeight
        camera.updateProjectionMatrix()
    })

    function animate() {
        cube.rotation.x += 0.01
        cube.rotation.y += 0.01
        cube2.rotation.x += 0.01
        cube2.rotation.y += 0.01
        renderer.render(scene, camera)
        controls.update()
    }

    return (
        <>
        </>
    )
}
export default App