function displayLimerick(response) {
  console.log("limerick generated");

  new Typewriter("#limerick", {
    strings: [response.data.answer],
    autoStart: true,
    delay: 50,
    cursor: "",
  });
}
function generateLimerick(event) {
  event.preventDefault();

  let userInstructions = document.querySelector("#user-instructions");
  let apiKey = "465af09aod8c2624e9ft9e3093eb0ebb";
  let prompt = `Generate a limerick about ${userInstructions}. Please format the limerick in basic HTML.`;
  let context =
    "You are a limerick generator. A limerick is a humorous poem consisting of five lines. The first, second, and fifth lines rhyme with each other, while the third and fourth lines rhyme with each other. The first, second, and fifth lines have three metrical feet, while the third and fourth lines have two metrical feet. Please generate a limerick based on the user instructions.";
  let apiURL = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  console.log("Generating limerick:");
  console.log(`Prompt: ${prompt}`);
  console.log(`Context: ${context}`);

  axios.get(apiURL).then(displayLimerick);
}

let limerickFormElement = document.querySelector("#limerick-form");
limerickFormElement.addEventListener("submit", generateLimerick);
