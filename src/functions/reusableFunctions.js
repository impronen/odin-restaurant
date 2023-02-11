function pageScrubber() {
  const content = document.querySelector("#mainContent");
  while (content.firstChild) {
    content.removeChild(content.firstChild);
  }
}

export { pageScrubber };
