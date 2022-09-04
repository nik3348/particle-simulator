class Particle {
  constructor(properties) {
    this.mass = properties.mass || 0;
    this.charge = properties.charge || 0;
    this.spin = properties.spin || 0;
    this.vx = Math.random();
    this.vy = 0;
  }

  details() {
    console.log('mass:' + this.mass + 'charge:' + this.charge + 'spin:' + this.spin);
  }

  velocity() {
    return Math.sqrt(Math.pow(this.vx, 2) + Math.pow(this.vy, 2))
  }
}
