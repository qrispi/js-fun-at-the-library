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
  return library.shelves.properShelf.push(book)
}

function checkoutBook(library, title, genre) {

}


module.exports = {
  createLibrary,
  addBook,
  checkoutBook
};