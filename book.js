const myLibrary = [];

// currently following the "prototype pattern"
// as Odin instructed
// but looking forward to using the `class` keyword instead
// refactoring this to align with ES6 Classes is an upcoming exercise

function Book(title, author, id) {
  this.title = title;
  this.author = author;
  this.id = id
}

function createBook(title, author) {
  const id = crypto.randomUUID()
  return new Book(title, author, id)
}

function addBookToLibrary(book) {
  myLibrary.push(book)
  return book
}

function displayAllBooks() {
  bookList.innerHTML = ''
  myLibrary.forEach(book => {
  const bookItem = document.createElement('p')
  bookItem.textContent = `${book.title}; written by ${book.author}; ID: ${book.id}`
  bookItem.className = 'bookItem'
  bookList.appendChild(bookItem)
  });
}

export { createBook, addBookToLibrary, displayAllBooks }
