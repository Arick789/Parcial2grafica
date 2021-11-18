import * as THREE from './three/three.module.js'

// Canvas
const canvas = document.querySelector('.webgl')

// Scene
const scene = new THREE.Scene()

//Background
scene.background = new THREE.Color(0x333333)

//Directional Light
const light = new THREE.DirectionalLight(0xffffff, 1)
light.position.set(5, 5, 5)
scene.add(light)  

// Lights

const pointLight = new THREE.PointLight(0xffffff, 0.1)
pointLight.position.x = 2
pointLight.position.y = 3
pointLight.position.z = 4
scene.add(pointLight)

/**
 * Sizes
 */

const sizes = {
    width: window.innerWidth,
    height: window.innerHeight
}

window.addEventListener('resize', () =>
{
    // Update sizes
    sizes.width = window.innerWidth
    sizes.height = window.innerHeight

    // Update camera
    camera.aspect = sizes.width / sizes.height
    camera.updateProjectionMatrix()

    // Update renderer
    renderer.setSize(sizes.width, sizes.height)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
})


/**
 * Camera
 */
// Base camera
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height, 0.1, 100)
camera.position.x = 0
camera.position.y = -1
camera.position.z = 10
scene.add(camera)

/**
 * Renderer
 */
const renderer = new THREE.WebGLRenderer({
    canvas: canvas
})
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

//KeyboardState
const keyboard = new THREEx.KeyboardState(renderer.domElement);
renderer.domElement.setAttribute("tabIndex", "0");
renderer.domElement.focus();

keyboard.domElement.addEventListener('keydown', function(event){
    if (event.repeat) {
        return;
    }
    if ( keyboard.eventMatches(event, 'left') ){
        cubeplayer.position.x	-= 0.5;   
    }
    if ( keyboard.eventMatches(event, 'right') ){
        cubeplayer.position.x	+= 0.5;   
    }
})

//ADD GEOMETRY
//cubo (humano)
var geometry = new THREE.BoxGeometry(10, 1, 1);
var material = new THREE.MeshBasicMaterial({
  color:  0xe74c3c,  //Naranja
});
var cubeplayer = new THREE.Mesh(geometry, material);
scene.add(cubeplayer);

cubeplayer.position.x = 0
cubeplayer.position.y = -7.1
cubeplayer.position.z = 0

//circulo (pelota)
var geometry = new THREE.CircleGeometry(1, 32);
var material = new THREE.MeshBasicMaterial({
  color: 0x82e0aa,  //Verde
});
const circle = new THREE.Mesh(geometry, material);
scene.add(circle);

circle.position.x = 0
circle.position.y = -1
circle.position.z = 0

//cubo (CPU)
var geometry = new THREE.BoxGeometry(10, 1, 1);
var material = new THREE.MeshBasicMaterial({
  color:  0xaf7ac5, //Morado
});
var cubecpu = new THREE.Mesh(geometry, material);
scene.add(cubecpu);

cubecpu.position.x = 0
cubecpu.position.y = 5.5
cubecpu.position.z = 0

//Animate
 const animate= function() {
	requestAnimationFrame( animate );
    
	renderer.render( scene, camera );
}
animate();