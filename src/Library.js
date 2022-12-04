function createLibrary(name) {
  return {
    name: name,
    shelves: {
      fantasy: [],
      fiction: [],
      nonFiction: []
    }
  }
}

function addBook(library, book) {
  var properShelf = book.genre
  library['shelves'][properShelf].push(book)
}

function checkoutBook(library, title, genre) {
  var shelfPosition = library['shelves'][genre].findIndex((book) => book.title === title)
  return shelfPosition !== -1 ? ((library['shelves'][genre].splice(shelfPosition, 1)), (`You have now checked out ${title} from the ${library.name}`)) : `Sorry, there are currently no copies of ${title} available at the ${library.name}`
}


module.exports = {
  createLibrary,
  addBook,
  checkoutBook
}