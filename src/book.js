function createTitle(title) {
  var madAdjs = ["Wacky", "Lop-Sided", "Mysterious", "Obese", "Flaccid", "Moist", "Extremely Smelly"]
  var madNouns = ["Grandpa", "Tooth Fairy", "Gremlins", "Vampires", "House Guests", "Visitors from Outer Space"]
  var madVerbs = ["Starving", "Raging", "Tootin'", "Puking", "Yelling", "Crying", "Growling", "Hovering"]
  var a = Math.floor(Math.random()*madAdjs.length)
  var n = Math.floor(Math.random()*madNouns.length)
  var v = Math.floor(Math.random()*madVerbs.length)
  return `${title.toUpperCase()} & the ${madAdjs[a]}, ${madVerbs[v]}, ${madNouns[n]}!`
}

module.exports = {
  createTitle,
  // buildMainCharacter,
  // saveReview,
  // calculatePageCount,
  // writeBook,
  // editBook
}