import { pageScrubber } from "../functions/reusableFunctions";

function mainPageGenerator() {
  const mainPageContent = document.createElement("div");
  mainPageContent.classList.add("main");
  mainPageContent.setAttribute("id", "mainContent");
  return mainPageContent;
}

function messageGenerator() {
  pageScrubber();
  const content = document.getElementById("mainContent");
  const welcomeMessage = document.createElement("div");
  welcomeMessage.classList.add("welcomeMessage");
  welcomeMessage.innerHTML = "<h2>Welcome to The Jolly Badger</h2>";
  content.appendChild(welcomeMessage);

  const adText = document.createElement("div");
  adText.classList.add("moreText");
  adText.innerHTML =
    "<h3>The place for mediocre ale, depressing pub food and frequent fights.</h3>";
  content.appendChild(adText);

  const adText2 = document.createElement("div");
  adText2.classList.add("moreText");
  adText2.innerHTML =
    "<p>Step in and experience the utter bleariness of life in Britain.</p>";
  content.appendChild(adText2);
}

export { mainPageGenerator, messageGenerator };
