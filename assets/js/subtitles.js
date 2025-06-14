// /assets/js/subtitles.js
document.addEventListener("DOMContentLoaded", function () {
  const subtitles = [
    "Thoughts in the Quiet",
    "Walking the Narrow Way",
    "Poems, Prayers, and Ponderings",
    "Faith, Land, and Life on the Hill",
    "Where Ink Meets Eternity",
    "Rooted in Place, Anchored in Grace",
    "Faith, Fields, and the Road Beneath My Feet",
    "Notes from the Hill, Guided by Faith",
    "An Island Life, a Heavenly Hope",
    "Words Gathered in Stillness",
    "A Life Unfolding, One Line at a Time",
    "Observations from a Faithful Witness",
    "A Pilgrims Voice from a Small Hill",
    "The Hill Beneath, the Hope Above",
    "Grace in small places",
    "Faith Beneath Open Skies",
    "Quiet Words from Glenwood",
    "Thoughts from Higher Ground",
    "Steps in the Quiet",
    "Of place and promise",
    "Island words, eternal hope",
    "Writing life, walking faith"
  ];
  const random = Math.floor(Math.random() * subtitles.length);
  const subtitleElement = document.getElementById("subtitle");
  if (subtitleElement) {
    subtitleElement.textContent = subtitles[random];
  }
});
