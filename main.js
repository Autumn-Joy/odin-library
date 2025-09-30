const bookList = document.createElement('div')
bookList.id = "bookList"
document.body.appendChild(bookList)

function Book(title, author, id) {
  this.title = title;
  this.author = author;
  this.id = id
}

function createBook(title, author) {
  const id = crypto.randomUUID()
  return new Book(title, author, id)
}

const Hobbit = createBook("Hobbit", "JRR")
const OtherBook = createBook("Other Book", "Unknown")

const myLibrary = [];

function addBookToLibrary(book) {
  myLibrary.push(book)
  return book
}

addBookToLibrary(Hobbit)
addBookToLibrary(OtherBook)

function displayAllBooks() {
  myLibrary.forEach(book => {
  const bookItem = document.createElement('p')
  bookItem.textContent = `${book.title}; written by ${book.author}; ID: ${book.id}`
  bookItem.className = 'bookItem'
  bookList.appendChild(bookItem)
  });
}

displayAllBooks()
