class Proton extends Particle {
  constructor() {
    const properties = {
      mass: 1.67262192e-27,
      charge: 1.60217663e-19,
      spin: 0.5
    }
    super(properties);

    const geometry = new THREE.SphereGeometry(15, 32, 16);
    const material = new THREE.MeshBasicMaterial({
      color: 0xffffff,
      wireframe: true
    });
    this.obj = new THREE.Mesh(geometry, material);
  }
}
