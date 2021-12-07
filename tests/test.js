describe("Create vector methods", () => {
  it("Validate correct creation of a vector with x = 3 and y = 4", () => {
    const u = new Vector(3, 4);
    assert.equal(u.x, 3);
    assert.equal(u.y, 4);
  });
  it("Validate correct creation of a vector with x = -5 and y = 2", () => {
    const u = new Vector(-5, 2);
    assert.equal(u.x, -5);
    assert.equal(u.y, 2);
  });
  it("Trigger an error when trying to assign a non-numeric value to x", () => {
    expect(() => new Vector("a", 2)).to.throw("Error with vector creation");
  });
  it("Trigger an error when trying to assign a non-numeric value to y", () => {
    expect(() => new Vector(2, "a")).to.throw("Error with vector creation");
  });
  it("Trigger an error when trying to assign a non-numeric value to both x and y", () => {
    expect(() => new Vector("a", "b")).to.throw("Error with vector creation");
  });
  it("Trigger an error when trying to assign a non-numeric value to both x and y", () => {
    expect(() => new Vector("1", "3")).to.throw("Error with vector creation");
  });
  it("Trigger an error when trying to assign a NaN type to eather x or y", () => {
    expect(() => new Vector(NaN, NaN)).to.throw("Error with vector creation");
  });
});
describe("Vector length methods", () => {
  it("Validate that given a vector with x = 3 and y = 4, its length must be 5.0", () => {
    const v = new Vector(3, 4);
    assert.equal(v.length(), 5.0);
  });
  it("Validate that given a vector with x = -4 and y = 5, its length must be 6.40", () => {
    const v = new Vector(-4, 5);
    assert.equal(v.length(), 6.4);
  });
  it("Validate that given a vector with x = 9 and y = 3, its length must be 9.49", () => {
    const v = new Vector(9, 3);
    assert.equal(v.length(), 9.49);
  });
});
describe("Dot product methods", () => {
  it("Given a vector u = (-5,4) and v= (-2,10), its dot product must be 50", () => {
    const u = new Vector(-5, 4);
    const v = new Vector(-2, 10);
    assert.equal(u.dotProduct(v), 50);
  });
  it("Given a vector u = (-900,40) and v= (65,-87), its dot product must be -61980", () => {
    const u = new Vector(-900, 40);
    const v = new Vector(65, -87);
    assert.equal(u.dotProduct(v), -61980);
  });
  it("Given a vector u = (7,0) and v= (0,-6), its dot product must be 0", () => {
    const u = new Vector(7, 0);
    const v = new Vector(0, -6);
    assert.equal(u.dotProduct(v), 0);
  });
});
describe("Angle between methods", () => {
  it("Given the vector u= (2,2) and v = (0,3) the angle between them must be 45°", () => {
    const u = new Vector(2, 2);
    const v = new Vector(0, 3);
    assert.equal(u.angleBetween(v), 45.0);
  });
  it("Given the vector u= (1,2) and v = (3,4) the angle between them must be 10°", () => {
    const u = new Vector(1, 2);
    const v = new Vector(3, 4);
    assert.equal(u.angleBetween(v), 10);
  });

  it("Given the vector u= (99,-47) and v = (-98,20) the angle between them must be 14°", () => {
    const u = new Vector(99, -47);
    const v = new Vector(-98, 20);
    assert.equal(u.angleBetween(v), 14);
  });
});
