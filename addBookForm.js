import { createBook, addBookToLibrary } from "./book.js"
import { buildBookList } from "./dom.js"

const AddBookButton = document.createElement('button')
AddBookButton.id = "addBookButton"
AddBookButton.textContent = "Add a Book"

const dialog = document.getElementById('addBookDialog')
const form = document.getElementById('form')
const titleField = document.getElementById('title')
const authorField = document.getElementById("author")
const pageCountField = document.getElementById("page-count")
const submitButton = document.getElementById('submit-form-button')
const closeFormButton = document.getElementById("close-form-button")

AddBookButton.addEventListener("click", displayDialog)

function displayDialog() {
  dialog.showModal()
}

function getReadStatus() {
  return document.getElementById("read-status-yes").checked ? true : false
}

submitButton.addEventListener("click", handleForm)

function handleForm(event) {
  event.preventDefault();

  const title = titleField.value
  const author = authorField.value
  const pageCount = pageCountField.value
  const readStatus = getReadStatus()
  const newBook = createBook(title, author, pageCount, readStatus)
  addBookToLibrary(newBook)
  buildBookList()
  form.reset()
  dialog.close()
}

closeFormButton.addEventListener("click", dialog.close())

export { AddBookButton }
