const prompt = require("prompt-sync")();
const { Vector } = require("elvladi15-vector");

try {
  const x1 = prompt("Enter the value of x of the first vector: ");
  const y1 = prompt("Enter the value of y of the first vector: ");

  const x2 = prompt("Enter the value of x of the second vector: ");
  const y2 = prompt("Enter the value of y of the second vector: ");

  const u = new Vector(parseInt(x1), parseInt(y1));
  const v = new Vector(parseInt(x2), parseInt(y2));

  console.log("\n");
  console.log(u);
  console.log(v);

  console.log("\n");
  console.log("The length of the first vector is:", u.length());
  console.log("The length of the second vector is:", v.length());

  console.log("\n");
  console.log("The dot product of both vectors is:", u.dotProduct(v));

  console.log("\n");
  console.log(`The angle between both vectors is: ${u.angleBetween(v)}°`);
} catch (err) {
  console.log("\nError creating the vector");
}
