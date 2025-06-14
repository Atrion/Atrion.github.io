// /assets/js/subtitles.js
document.addEventListener("DOMContentLoaded", function () {
  const subtitles = [
    "Thoughts in the Quiet",
    "Walking the Narrow Way",
    "Poems, Prayers, and Ponderings",
    "Faith, Land, and Life on the Hill",
    "Where Ink Meets Eternity"
  ];
  const random = Math.floor(Math.random() * subtitles.length);
  const subtitleElement = document.getElementById("subtitle");
  if (subtitleElement) {
    subtitleElement.textContent = subtitles[random];
  }
});
