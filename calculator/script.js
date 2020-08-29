let btn = document.getElementById("btn");
let e1rm = 0;
let rpe;

btn.addEventListener("click", function () {
  let weight = document.getElementById("weight-input").value;
  let reps = document.getElementById("reps-input").value;

  e1rm = document.getElementById("e1rm-output").innerHTML = Math.round(
    weight / (1.0278 - 0.0278 * reps)
  );
});

// rpe8.addEventListener("click", function () {
// rpe = 0.92;

//  document.getElementById("e1rm-output").value = Math.round(e1rm / rpe);
//});

//rpe9.addEventListener("click", function () {
//  rpe = 0.96;

//  document.getElementById("e1rm-output").value = Math.round(e1rm / rpe);
//});

//rpe10.addEventListener("click", function () {
// rpe = 1;

//  document.getElementById("e1rm-output").value = Math.round(e1rm / rpe);
//});
