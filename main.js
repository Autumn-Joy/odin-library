import { createBook, addBookToLibrary, displayAllBooks } from './book.js'
import { AddBookButton } from '/addBookForm.js'


// extract to a seperate dom module?
const bookList = document.createElement('div')
bookList.id = "bookList"
document.body.appendChild(bookList)

// placeholder books
const Hobbit = createBook("Hobbit", "JRR")
const OtherBook = createBook("Other Book", "Unknown")

addBookToLibrary(Hobbit)
addBookToLibrary(OtherBook)

//on load, show all current books in the 'myLibrary' array
displayAllBooks()

//the addBook button should display below the book list.
bookList.appendChild(AddBookButton)

// no storage outside of current session, on refresh everything goes away
