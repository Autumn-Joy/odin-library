import { createBook, addBookToLibrary } from './book.js'
import { displayAllBooks } from './dom.js'

// placeholder books
const Hobbit = createBook("Hobbit", "JRR", 199, true)
const OtherBook = createBook("Other Book", "Unknown", 8000, false)

addBookToLibrary(Hobbit)
addBookToLibrary(OtherBook)

//on load, show all current books in the 'library' array
displayAllBooks()

//the addBook button should display below the book list.

// no storage outside of current session, on refresh everything goes away
