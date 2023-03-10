import * as THREE from 'https://cdn.skypack.dev/three@0.144.0'
import { OrbitControls } from 'https://cdn.skypack.dev/three@0.132.2/examples/jsm/controls/OrbitControls.js'

// --------------------- //
// ------- SCENE ------- //
// --------------------- //

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

const pointLight = new THREE.PointLight(0x000000);
pointLight.position.set(5, 5, 5);

const ambientLight = new THREE.AmbientLight(0xffffff);
scene.add(pointLight, ambientLight);

const controls = new OrbitControls(camera, renderer.domElement)

// --------------------- //
// ------ PLANETS ------ //
// --------------------- //

function addPlanet(image, size, x, y, z) {

    const planetTexture = new THREE.TextureLoader().load(image)

    const planet = new THREE.Mesh(

        new THREE.SphereGeometry(size, 100, 100),
        new THREE.MeshStandardMaterial({
            map: planetTexture
        })

    );

    planet.position.set(x, y, z);

    scene.add(planet);

}

addPlanet("assets/planets/1sun.jpg", 200, -200, 0, 0); // if sun 200 in size, mercury = 0.7, venus = 1.7, earth = 1.9, mars = 1, jupiter = 20, saturn = 17, uranus = 7.2, neptune = 7
addPlanet("assets/planets/2mercury.jpg", 0.7, 30, 0, 0);
addPlanet("assets/planets/3venus.jpg", 1.7, 60, 0, 0);
addPlanet("assets/planets/4earth.jpg", 1.9, 90, 0, 0);
addPlanet("assets/planets/5mars.jpg", 1, 120, 0, 0);
addPlanet("assets/planets/6jupiter.jpg", 20, 150, 0, 0);
addPlanet("assets/planets/7saturn.jpg", 17, 180, 0, 0);
addPlanet("assets/planets/8uranus.jpg", 7.2, 210, 0, 0);
addPlanet("assets/planets/9neptune.jpg", 7, 240, 0, 0);



// --------------------- //
// -------- MAIN ------- //
// --------------------- //

function animate() {
    requestAnimationFrame(animate);

    camera.rotation.set(camera.rotation.x + 1, camera.rotation.y, camera.rotation.z)

    controls.update();

    renderer.render(scene, camera);
}

animate();
