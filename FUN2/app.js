 // Initialize scene, camera, and renderer
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.getElementById('game-container').appendChild(renderer.domElement);

// Load Pokémon model
const loader = new THREE.GLTFLoader();
loader.load('models/pikachu.glb', (gltf) => {
  const model = gltf.scene;
  scene.add(model);
  model.position.set(0, 0, -5);
});

// Lighting
const light = new THREE.AmbientLight(0x404040); // Ambient light
scene.add(light);

// Animation loop
function animate() {
  requestAnimationFrame(animate);
  renderer.render(scene, camera);
}
animate();

// Handle window resizing
window.addEventListener('resize', () => {
  renderer.setSize(window.innerWidth, window.innerHeight);
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
});
