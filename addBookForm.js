import { createBook, addBookToLibrary, displayAllBooks } from "./book.js"

const AddBookButton = document.createElement('button')
AddBookButton.id = "addBookButton"
AddBookButton.textContent = "Add a Book"

const dialog = document.getElementById('addBookDialog')
const submitButton = document.getElementById('submitFormButton')
const titleField = document.getElementById('title')
const authorField = document.getElementById("author")
const pageCountField = document.getElementById("page-count")
const readStatusField = document.getElementById("read-status")

AddBookButton.addEventListener("click", displayDialog)

function displayDialog() {
  dialog.showModal()
}

submitButton.addEventListener("click", handleForm)

function handleForm(event) {
  event.preventDefault();

  const title = titleField.value
  const author = authorField.value
  const pageCount = pageCountField.value
  const readStatus = readStatusField.value
  const newBook = createBook(title, author, pageCount, readStatus)

  addBookToLibrary(newBook)
  displayAllBooks()
  dialog.close()
}

export { AddBookButton }
