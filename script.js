const radius = document.getElementById("Radius");
const circle = document.getElementById("Circle");
const semicircle = document.getElementById("Semicircle");
const sphere = document.getElementById("Sphere");
const hemisphere = document.getElementById("Hemisphere");
const thanks = document.getElementById("Thanks");

let decimalPlaces = 2;

document.getElementById("radius-value").addEventListener("keypress", function (e) {
  if (e.key === "Enter") {
    solve();
  }
});

function solve() {
  // Collectng the values
  const valueOfRadius = document.getElementById("radius-value").value;

  // Assigning values to r and p so that it is easier to read formulas
  let r = valueOfRadius;
  let p = Math.PI;

  // Circle
  let circleCurcumference = (2 * p * r).toFixed(decimalPlaces);
  let circleArea = (p * r ** 2).toFixed(decimalPlaces);

  // Semi-circle
  let semicirclePerimeter = (p * r + 2 * r).toFixed(decimalPlaces);
  let semicircleArea = ((p * r ** 2) / 2).toFixed(decimalPlaces);

  // Sphere
  let sphereVolume = ((4 / 3) * p * r ** 3).toFixed(decimalPlaces);
  let sphereSurfaceArea = (4 * p * r ** 2).toFixed(decimalPlaces);

  // Hemi-Sphere
  let hemisphereVolume = ((2 / 3) * p * r ** 3).toFixed(decimalPlaces);
  let hemisphereCurvedArea = (2 * p * r ** 2).toFixed(decimalPlaces);
  let hemisphereTotalSurfaceArea = (3 * p * r ** 2).toFixed(decimalPlaces);

  radius.innerHTML = "Radius: " + valueOfRadius;
  circle.innerHTML = "<br><h3>Circle</h3>" + "<br>Circumference : " + circleCurcumference + "<br>Area : " + circleArea;
  semicircle.innerHTML = "<br><h3>Semi-Circle</h3>" + "<br>Perimeter : " + semicirclePerimeter + "<br>Area : " + semicircleArea;
  sphere.innerHTML = "<br><h3>Sphere</h3> " + "<br>Volume : " + sphereVolume + "<br>Surface Area : " + sphereSurfaceArea;
  hemisphere.innerHTML =
    "<br><h3>Hemi-Sphere</h3>" +
    "<br>Volume : " +
    hemisphereVolume +
    "<br>Curved Surface Area : " +
    hemisphereCurvedArea +
    "<br>Total Surface Area : " +
    hemisphereTotalSurfaceArea;
  thanks.innerHTML = "<br>Thanks for using";

  document.getElementById("radius-value").value = "";
}
