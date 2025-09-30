const bookList = document.createElement('div')
bookList.id = "bookList"
document.body.appendChild(bookList)

const myLibrary = [];

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



const Hobbit = createBook("Hobbit", "JRR")
const OtherBook = createBook("Other Book", "Unknown")

addBookToLibrary(Hobbit)
addBookToLibrary(OtherBook)

myLibrary.forEach(book => {
  console.log("this is the book:", book)
  const bookItem = document.createElement('p')
  bookItem.textContent = `${book.title}, written by ${book.author}, with an ID of ${book.id}`
  bookItem.className = 'bookItem'
  bookList.appendChild(bookItem)
});
