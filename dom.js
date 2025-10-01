import { library, Book } from "./book.js"
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

  titleAuthorLine.textContent = `${book.title}, written by ${book.author}`
  pageCountLine.textContent = `Page count: ${book.pageCount} pages;`
  readStatusLine.textContent = `Read status:`
  idLine.textContent =  `ID: ${book.id}`

  bookCard.appendChild(titleAuthorLine)
  bookCard.appendChild(pageCountLine)
  bookCard.appendChild(readStatusLine)

  const toggleReadStatusButton = buildReadStatusButton(book)
  bookCard.appendChild(toggleReadStatusButton)

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

function buildReadStatusButton(book) {
  const readStatusButton = document.createElement('button')
  readStatusButton.textContent = `${book.readStatus}`

  readStatusButton.id = "readStatusButton"

  readStatusButton.addEventListener("click", handleReadStatusToggle)

  return readStatusButton
}

function handleReadStatusToggle(event) {
  //handle for library array:
  const bookCard = event.currentTarget.parentElement
  library.forEach(book => {
    if (book.id === bookCard.dataset.id) {
      book.toggleReadStatus()
      event.target.textContent = book.readStatus
    }
  })
  //update UI:
  // const toggleReadStatusButton = event.currentTarget
  // if (toggleReadStatusButton.textContent === "Mark Read") {
  //   toggleReadStatusButton.textContent = "Mark Unread?"
  //   book.toggleReadStatus()
  // } else if (toggleReadStatusButton.textContent === "Mark Unread?") {
  //   toggleReadStatusButton.textContent = 'Mark Read'
  // }

}

export { buildBookList }
