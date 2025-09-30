const myLibrary = [];

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

function createBook(title, author, pageCount, readStatus) {
  const id = crypto.randomUUID()
  return new Book(title, author, pageCount, readStatus, id)
}

function addBookToLibrary(book) {
  myLibrary.push(book)
  return book
}

function displayAllBooks() {
  bookList.innerHTML = ''
  myLibrary.forEach(book => {
  const hasRead = book.readStatus ? 'complete ✅  ~~' : 'not read ❌  ~~'
  const bookItem = document.createElement('p')
  bookItem.textContent = `${book.title}, written by ${book.author}, has ${book.pageCount} pages; read status: ${hasRead} ID: ${book.id}`
  bookItem.className = 'bookItem'
  bookList.appendChild(bookItem)
  });
}

export { createBook, addBookToLibrary, displayAllBooks }
