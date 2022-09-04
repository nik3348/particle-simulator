class Electron extends Particle {
  constructor() {
    const properties = {
      mass: 9.1093837e-31,
      charge: 1.60217663e-19,
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

  update(field) {
    if (this.obj.position.x > width / 3) {
      this.vx = -this.vx
    } else if (this.obj.position.x < -width / 3) {
      this.vx = -this.vx
    }

    if (this.obj.position.y > height / 3) {
      this.vy = -this.vy
    } else if (this.obj.position.y < -height / 3) {
      this.vy = -this.vy
    }

    field.forEach(p => {
      const d = Utils.distance2D(this.obj, p.obj);
      const dx = Utils.distance1D(this.obj, p.obj, 'x');
      const dy = Utils.distance1D(this.obj, p.obj, 'y');

      if (d != 0) {
        const f = Utils.CoulumbsLaw(this.charge, p.charge, d);
        this.vx += (f / (d * this.mass)) * dx
        this.vy += (f / (d * this.mass)) * dy
      }
    });

    this.obj.translateX(this.vx);
    this.obj.translateY(this.vy);
  }
}
