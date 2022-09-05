class Particle {
  constructor(properties) {
    this.mass = properties.mass || 0;
    this.charge = properties.charge || 0;
    this.spin = properties.spin || 0;
    this.vx = 0;
    this.vy = 0;
    this.vz = 0;
  }

  details() {
    console.log('mass:' + this.mass + 'charge:' + this.charge + 'spin:' + this.spin);
  }

  velocity() {
    return Math.sqrt(Math.pow(this.vx, 2) + Math.pow(this.vy, 2))
  }

  update(field) {
    if (this.obj.position.x > width / Utils.nicksLength && Math.sign(this.vx) == 1) {
      this.vx = -this.vx
    } else if (this.obj.position.x < -width / Utils.nicksLength && Math.sign(this.vx) == -1) {
      this.vx = -this.vx
    }

    if (this.obj.position.y > height / Utils.nicksLength && Math.sign(this.vy) == 1) {
      this.vy = -this.vy
    } else if (this.obj.position.y < -height / Utils.nicksLength && Math.sign(this.vy) == -1) {
      this.vy = -this.vy
    }

    if (this.obj.position.z > width / Utils.nicksLength && Math.sign(this.vz) == 1) {
      this.vz = -this.vz
    } else if (this.obj.position.z < -width / Utils.nicksLength && Math.sign(this.vz) == -1) {
      this.vz = -this.vz
    }

    field.forEach(p => {
      const d = Utils.distance3D(this.obj, p.obj); 
      if (d != 0) {
        const dx = Utils.distance1D(this.obj, p.obj, 'x');
        const dy = Utils.distance1D(this.obj, p.obj, 'y');
        const dz = Utils.distance1D(this.obj, p.obj, 'z');
        const f = Utils.CoulumbsLaw(this.charge, p.charge, d);
        this.vx += (f / (d * this.mass)) * dx
        this.vy += (f / (d * this.mass)) * dy
        this.vz += (f / (d * this.mass)) * dz
      }
    });

    this.obj.translateX(this.vx/ Utils.timeConstant);
    this.obj.translateY(this.vy/ Utils.timeConstant);
    // this.obj.translateY(this.vz/ Utils.timeConstant);
  }
}
