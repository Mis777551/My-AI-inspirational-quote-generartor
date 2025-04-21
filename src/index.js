function displayQuote(response) {
  new Typewriter("#poem", {
    strings: response.data.answer,
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}

function generateQuote(event) {
  event.preventDefault();

  let instructionsInput = document.querySelector("#user-instructions");
  let apiKey = "ab3defb06170c8ob2cccb493b58t53ba";
  let context =
    "You are a quotes expert and love to generate quotes of all quote authors around the world. Your mission is to generate a quote in basic HTML and separate each line with a <br />. Make sure to follow the user instructions. Do not include a title to the quote. Sign the quote with 'SheCodes AI' inside a <strong> element at the end of the quote and NOT at the beginning";
  let prompt = `User instructions: Generate a quote in english about ${instructionsInput.value}`;
  let apiURL = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  let poemElement = document.querySelector("#quote");
  poemElement.classList.remove("hidden");
  poemElement.innerHTML = `<div class="generating">⏳ Generating a quote about ${instructionsInput.value}</div>`;

  axios.get(apiURL).then(displayPoem);
}

let poemFormElement = document.querySelector("#quote-generator-form");
poemFormElement.addEventListener("submit", generateQuote);
