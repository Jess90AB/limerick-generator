function displayLimerick(response) {
  new Typewriter("#limerick", {
    strings: [response.data.answer],
    autoStart: true,
    delay: 50,
    cursor: "",
  });
}
function generateLimerick(event) {
  event.preventDefault();

  alert(
    "Your limerick is being generated. Please get ready to have your socks blown off.",
  );

  let instructionsInput = document.querySelector("#user-instructions");
  let apiKey = "465af09aod8c2624e9ft9e3093eb0ebb";
  let prompt = `Generate a limerick about ${instructionsInput.value}`;
  let context =
    "You are a limerick generator. A limerick is a humorous poem consisting of five lines. The first, second, and fifth lines rhyme with each other, while the third and fourth lines rhyme with each other. The first, second, and fifth lines have three metrical feet, while the third and fourth lines have two metrical feet. Please generate a limerick based on the user instructions. Please put use <br/> after each line of the limerick. Please do not include any additional text or explanation. Please do not include any hashtags or emojis.";
  let apiURL = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  axios.get(apiURL).then(displayLimerick);
}

let limerickFormElement = document.querySelector("#limerick-form");
limerickFormElement.addEventListener("submit", generateLimerick);
