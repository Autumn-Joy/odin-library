import { library } from "./book.js"
import { AddBookButton } from "./addBookForm.js"

const bookList = document.createElement('div')
bookList.id = "bookList"
document.body.appendChild(bookList)

function buildBookList() {
  displayAllBooks()
  bookList.appendChild(AddBookButton)
}

function displayAllBooks() {
  bookList.innerHTML = ''

  library.forEach(book => {
  const bookCard = buildBookCard(book)
  bookList.appendChild(bookCard)
  });
}


function buildBookCard(book) {
  const bookCard = document.createElement('div')
  bookCard.className = 'bookCard'
  bookCard.dataset.id = book.id

  const titleAuthorLine = document.createElement('p')
  const pageCountLine = document.createElement('p')
  const readStatusLine = document.createElement('p')
  const idLine = document.createElement('p')

  const hasRead = book.readStatus ? 'Complete ✅' : 'Not read yet ❌'

  titleAuthorLine.textContent = `${book.title}, written by ${book.author}`
  pageCountLine.textContent = `Page count: ${book.pageCount} pages;`
  readStatusLine.textContent = `Read status: ${hasRead}`
  idLine.textContent =  `ID: ${book.id}`

  bookCard.appendChild(titleAuthorLine)
  bookCard.appendChild(pageCountLine)
  bookCard.appendChild(readStatusLine)
  bookCard.appendChild(idLine)

  const removeBookButton = buildRemoveBookButton()
  bookCard.appendChild(removeBookButton)

  return bookCard
}

function buildRemoveBookButton() {
  const removeBookButton = document.createElement('button')
  removeBookButton.textContent = "Delete Book"
  removeBookButton.id = "removeBookButton"

  removeBookButton.addEventListener("click", handleDeleteBook)

  return removeBookButton
}

function handleDeleteBook(event) {
  // for removing from the library array
  const bookCard = event.currentTarget.parentElement

  library.forEach(book => {
    if (book.id === bookCard.dataset.id) {
      const index = library.indexOf(book)
      library.splice(index, 1)
    }
  })
  // for removing from the DOM (UI)
  bookCard.remove()
}

export { buildBookList }
