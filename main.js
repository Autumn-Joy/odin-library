import { createBook, addBookToLibrary } from './book.js'
import { buildBookList } from './dom.js'

// create placeholder books
const Hobbit = createBook("The Hobbit", "JRR Tolkien", 199, true)
const OtherBook = createBook("The Lord of the Rings", "JRR Tolkien", 8000, false)

addBookToLibrary(Hobbit)
addBookToLibrary(OtherBook)

//on load, show all current books in the 'library' array
buildBookList()

// no storage outside of current session, on refresh everything goes away
