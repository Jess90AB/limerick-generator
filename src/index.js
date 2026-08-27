function generateLimerick(event) {
  event.preventDefault();

  let limerickElement = document.querySelector("#limerick");

  new Typewriter("#limerick", {
    strings: ["A dozen, a gross, and a score,"],
    autoStart: true,
    delay: 50,
    cursor: "",
  });
}

let limerickForm = document.querySelector("#limerick-form");
limerickForm.addEventListener("submit", generateLimerick);
