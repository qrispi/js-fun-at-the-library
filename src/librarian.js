class Librarian {
  constructor(name, library) {
    this.name = name,
    this.library = library
  }
  greetPatron(name, morning) {
    return (morning) ? `Good morning, ${name}!` : `Hello, ${name}!`
  }
  findBook(title) {
    var shelfKeys = Object.keys(this.library.shelves)
    for (var i=0; i < shelfKeys.length; i++) {
      for (var x=0; x < this.library.shelves[shelfKeys[i]].length; x++) {
        if (this.library.shelves[shelfKeys[i]][x].title === title) {
          this.library.shelves[shelfKeys[i]].splice(x, 1)
          return `Yes, we have ${title}`
        }
      }
    }
    return `Sorry, we do not have ${title}`
  }
  calculateLateFee(days) {
    return Math.ceil(days * 0.25)
  }
}

module.exports = Librarian