function createTitle(title) {
  return `The ${title}`
}

function buildMainCharacter(name, age ,pronouns) {
  return character = {
    name: name,
    age: age,
    pronouns: pronouns,
  }
}

var reviews = []

function saveReview(string, array) {
  return array.includes(string) ? array : array.push(string)
}

function calculatePageCount(title) {
  return (title.length * 20)
}

function writeBook(title ,character ,genre) {
  return book = {
    title: title,
    mainCharacter: character,
    pageCount: calculatePageCount(title),
    genre: genre,
  }
}

function editBook() {
  return book.pageCount = (Math.ceil(book.pageCount * 0.75))
}

module.exports = {
  createTitle,
  buildMainCharacter,
  saveReview,
  calculatePageCount,
  writeBook,
  editBook
}