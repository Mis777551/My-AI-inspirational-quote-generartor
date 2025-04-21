function generatePoem(event) {
  event.preventDefault();

  new Typewriter("#poem", {
    strings: "Don't have dreams, chase them!",
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}

let poemFormElement = document.querySelector("#poem-generator-form");
poemFormElement.addEventListener("submit", generatePoem);
