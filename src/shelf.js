var sciFiShelf = []
var extraBooks = []
function shelfBook(book, shelf) {
  shelf.length >= 3 ? extraBooks.unshift(book) : shelf.unshift(book)
  return shelf
}

var checkedOut = []
function unshelfBook(title, shelf) {
  var shelfPosition = shelf.findIndex((book) => book.title === title)
  return checkedOut = shelf.splice(shelfPosition, 1)
}

function listTitles(shelf) {
var titles = []
for (i=0; i<shelf.length; i++) {
  titles.splice(i, 0, shelf[i].title)
}
return titles.join(', ')
}

function searchShelf() {

}

module.exports = {
  shelfBook,
  unshelfBook,
  listTitles,
  searchShelf
};