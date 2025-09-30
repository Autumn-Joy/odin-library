import { AddBookButton } from "./addBookForm.js"
import { library } from "./book.js"

const bookList = document.createElement('div')
bookList.id = "bookList"
document.body.appendChild(bookList)

function displayAllBooks() {
  bookList.innerHTML = ''

  library.forEach(book => {
  const hasRead = book.readStatus ? 'complete ✅  ~~' : 'not read ❌  ~~'
  const bookItem = document.createElement('p')
  bookItem.textContent = `${book.title}, written by ${book.author}, has ${book.pageCount} pages; read status: ${hasRead} ID: ${book.id}`
  bookItem.className = 'bookItem'
  bookList.appendChild(bookItem)
  });

  bookList.appendChild(AddBookButton)
  console.log("displayAllBooks was called")
}

export { displayAllBooks }
