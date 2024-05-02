const myLibrary = [];

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

const book1 = new Book("A Clash of Kings", "George R.R", 761, true);
const book2 = new Book("A Clash of Knights", "George R.R", 761, true);


function addToLibrary(object) {
    if (object instanceof Book) {
        myLibrary.push(object)
        return myLibrary;
    }
}

console.log(addToLibrary(book1, book2));

