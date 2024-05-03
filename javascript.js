const myLibrary = [];

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

const book1 = new Book("A Clash of Kings", "George R.R Martin", 761, "yes");
const book2 = new Book("A Storm of Swords", "George R.R Martin", 973, "yes");

function addToLibrary() {

    const titleField = document.querySelector("#title").value;
    const authorField = document.querySelector("#author").value;
    const pagesField = parseInt(document.querySelector("#pages").value);
    const readField = document.querySelector("#read").value;
    // const submitButton = document.querySelector("#submit");
    
   let userBook = new Book (titleField, authorField, pagesField, readField);
 
  //push it into the myLibrary array as the 3rd item
	myLibrary.push(book1, book2, userBook);
    return myLibrary;
    
};

addToLibrary();

function displayBooks() {
    for (var book of myLibrary) {
        console.log(book.author);
    }

    const cardsContainer = document.querySelector(".books");
    const bookCard = document.createElement("div");

    bookCard.classList.add("book-card");

    cardsContainer.appendChild(bookCard);
}


displayBooks()
