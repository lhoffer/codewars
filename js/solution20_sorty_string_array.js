function sortByLength (array) {
  // use sort method and compare lengths
  return array.sort((a,b) => a.length - b.length)
};


sortByLength(["Telescopes", "Glasses", "Eyes", "Monocles"])
