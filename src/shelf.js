function shelfBook(book, shelf) {
  shelf.length >= 3 ? extraBooks.unshift(book) : shelf.unshift(book)
}
var extraBooks = []

function unshelfBook(title, shelf) {
  shelf.splice(shelf.findIndex((book) => book.title === title), 1)
}

function listTitles(shelf) {
  var titles = []
  for (i=0; i<shelf.length; i++) {
    titles.push(shelf[i].title)
  }
  return titles.join(', ')
}

function searchShelf(shelf, title) {
  for (i=0; i<shelf.length; i++) {
    if (shelf[i].title === title) {
      return true
    }
  }
  return false
}


module.exports = {
  shelfBook,
  unshelfBook,
  listTitles,
  searchShelf
};