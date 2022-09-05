class Electron extends Particle {
  constructor() {
    const properties = {
      mass: 9.1093837e-31,
      charge: -1.60217663e-19,
      spin: 0.5
    }
    super(properties);

    const geometry = new THREE.SphereGeometry(15, 32, 16);
    const material = new THREE.MeshBasicMaterial({
      color: 0x00ff00,
      wireframe: true
    });
    this.obj = new THREE.Mesh(geometry, material);
  }
}
