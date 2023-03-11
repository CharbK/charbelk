import * as THREE from 'https://cdn.skypack.dev/three@0.144.0'
import { OrbitControls } from 'https://cdn.skypack.dev/three@0.132.2/examples/jsm/controls/OrbitControls.js'

const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

const renderer = new THREE.WebGLRenderer({
    canvas: document.querySelector('#bg'),
});

renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth, window.innerHeight);
camera.position.setZ(200);
camera.position.setY(40);

renderer.render(scene, camera);

// Light

const pointLight = new THREE.PointLight(0x000000);
pointLight.position.set(5, 5, 5);

const ambientLight = new THREE.AmbientLight(0xffffff);
scene.add(pointLight, ambientLight);


const controls = new OrbitControls(camera, renderer.domElement)

const gradientTexture = new THREE.TextureLoader().load('assets/gradient.jpg');
scene.background = gradientTexture;


function addDonut() {

    const geometry = new THREE.TorusGeometry(5 / 2, 1.8 / 2, 30, 200);
    const material = new THREE.MeshStandardMaterial({ color: 0x0044ff });
    const donut = new THREE.Mesh(geometry, material);

    const [x, y, z] = Array(3).fill().map(() => THREE.MathUtils.randFloatSpread(2000))
    const [rx, ry, rz] = Array(3).fill().map(() => THREE.MathUtils.randFloatSpread(180))

    donut.position.set(x, y, z);
    donut.rotation.set(rx, ry, rz)
    scene.add(donut)

}

Array(5000).fill().forEach(addDonut)


const jupiterTexture = new THREE.TextureLoader().load("assets/planets/jupiter.jpeg")

const jupiter = new THREE.Mesh(

    new THREE.SphereGeometry(70, 100, 100),
    new THREE.MeshStandardMaterial({
        map: jupiterTexture
    })

);

jupiter.position.set(0, 0, 0);

scene.add(jupiter)

function animate() {
    requestAnimationFrame(animate);

    camera.rotation.set(camera.rotation.x + 1, camera.rotation.y, camera.rotation.z)

    controls.update();

    renderer.render(scene, camera);
}

animate();
