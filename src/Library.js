function createLibrary(name) {
  return library = {
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
  return library['shelves'][properShelf].push(book)
}

function checkoutBook(library, title, genre) {
  var shelfPosition = library['shelves'][genre].findIndex((book) => book.title === title)
  if (shelfPosition !== -1) {
    library['shelves'][genre].splice(shelfPosition, 1)
    return `You have now checked out ${title} from the ${library.name}`
  } else {
    return `Sorry, there are currently no copies of ${title} available at the ${library.name}`
  }
}


module.exports = {
  createLibrary,
  addBook,
  checkoutBook
};