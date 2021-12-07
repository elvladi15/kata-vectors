module.exports.Vector = class Vector {
  constructor(x, y) {
    if (
      typeof x !== "number" ||
      typeof y !== "number" ||
      isNaN(x) ||
      isNaN(y)
    ) {
      throw new Error("Error with vector creation");
    }
    this.x = x;
    this.y = y;
  }
  length() {
    const length = Math.sqrt(this.x ** 2 + this.y ** 2);
    return Math.round(length * 100) / 100;
  }
  dotProduct(vector) {
    return this.x * vector.x + this.y * vector.y;
  }
  angleBetween(vector) {
    const cos = this.dotProduct(vector) / (this.length() * vector.length());
    let angle = Math.floor((Math.acos(cos) * 180) / Math.PI);
    if (angle > 90) {
      angle = 180 - angle;
    } else if (angle > 270) {
      angle = 360 - angle;
    }
    return angle;
  }
};
