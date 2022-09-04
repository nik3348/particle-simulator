class ElectricField {
  constructor() {
    this.particles = []
  }

  addParticle(particle) {
    this.particles.push(particle)
    console.log(particle)
  }

  update() {
    const field = [...this.particles];
    this.particles.forEach(p => {
      p.update(field);
    });
  }
}
