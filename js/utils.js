class Utils {
  static coulumbsConstant = 8.988e9;
  static timeConstant = 1e1;
  static nicksLength = 2;

  static distance1D = (p1, p2, d) => {
    const x1 = p1.position[d];
    const x2 = p2.position[d];

    return (x1 - x2)
  }

  static distance2D = (p1, p2) => {
    const { x: x1, y: y1 } = p1.position;
    const { x: x2, y: y2 } = p2.position;

    return Math.sqrt(Math.pow((x1 - x2), 2) + Math.pow((y1 - y2), 2))
  }

  static distance3D = (p1, p2) => {
    const { x: x1, y: y1, z: z1 } = p1.position;
    const { x: x2, y: y2, z: z2 } = p2.position;

    return Math.sqrt(Math.pow((x1 - x2), 2) + Math.pow((y1 - y2), 2) + Math.pow((z1 - z2), 2))
  }

  static CoulumbsLaw = (q1, q2, r) => {
    return this.coulumbsConstant * (q1 * q2) / (Math.pow(r, 2))
  }
}
