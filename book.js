const library = [];

// currently following the "prototype pattern"
// as Odin instructed
// but looking forward to using the `class` keyword instead
// refactoring this to align with ES6 Classes is an upcoming exercise

function Book(title, author, pageCount, readStatus, id) {
  this.title = title;
  this.author = author;
  this.pageCount = pageCount;
  this.readStatus = readStatus;
  this.id = id
}

Book.prototype.toggleReadStatus = function() {
  this.readStatus ? this.readStatus = false : this.readStatus = true
}

function createBook(title, author, pageCount, readStatus) {
  const id = crypto.randomUUID()
  return new Book(title, author, pageCount, readStatus, id)
}

function addBookToLibrary(book) {
  library.push(book)
  return book
}

export { library, createBook, addBookToLibrary, Book }
