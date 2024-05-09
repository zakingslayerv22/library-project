const myLibrary = [];

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

const book1 = new Book("A Clash of Kings", "George R.R Martin", 761, "yes");
const book2 = new Book("A Storm of Swords", "George R.R Martin", 973, "yes");
let cardsContainer;

myLibrary.push(book1, book2)


function displayBooks() {
    for (var book of myLibrary) {
        console.log(book.author);

        cardsContainer = document.querySelector(".books");

        const bookCard = document.createElement("div");
        bookCard.classList.add("book-card");

        const titleDiv = document.createElement("div");
        titleDiv.textContent = book.title;
        titleDiv.classList.add("title-div");
        bookCard.appendChild(titleDiv);

        const authorDiv = document.createElement("div");
        authorDiv.textContent = book.author;
        authorDiv.classList.add("author-div");
        bookCard.appendChild(authorDiv);

        const pagesDiv = document.createElement("div");
        pagesDiv.textContent = book.pages;
        pagesDiv.classList.add("pages-div");
        bookCard.appendChild(pagesDiv);

        const readDiv = document.createElement("div");
        readDiv.textContent = book.read;
        readDiv.classList.add("read-div");
        bookCard.appendChild(readDiv);

        //delete button

        const deleteButton = document.createElement("button")
        deleteButton.textContent = "Delete"
        deleteButton.classList.add("delete-button")
        bookCard.appendChild(deleteButton);

        cardsContainer.appendChild(bookCard);
    } 
}

displayBooks();


function addToLibrary() {

    let inputArray = [];

    //dialog
    const bookDialogBox = document.querySelector("#bookDialog");
    const showDialogBox = document.querySelector("#showDialog");
    const confirmButton = document.querySelector("#confirmBtn");
    const closeButton = document.querySelector("#closeBtn");
    bookDialogBox.returnValue = "initialValue";
    confirmButton.value = "thereIsUserInput";

    //show dialog
    showDialogBox.addEventListener(("click"), () => {
        bookDialogBox.showModal();
    });

    
    //when the dialog closes
    bookDialogBox.addEventListener("close", (e) => {
        if (bookDialogBox.returnValue === "thereIsUserInput") {
            let titleField = document.querySelector("#title").value;
            let authorField = document.querySelector("#author").value;
            let pagesField = parseInt(document.querySelector("#pages").value);
            let readField = document.querySelector("#read").value;

            inputArray.push(titleField, authorField, pagesField, readField);
            console.log(inputArray[0])

            let userBook = new Book (inputArray[0], inputArray[1], inputArray[2], inputArray[3]);
            console.log(inputArray[0])
            inputArray = [];
            myLibrary.push(userBook);
            cardsContainer.textContent = "";
            bookDialogBox.returnValue = "initialValue"
            displayBooks();

            console.log(myLibrary);

            console.log (bookDialogBox.returnValue);
            } else {
                console.log (bookDialogBox.returnValue)
                return;
            }
      });
    
      //when i click the submit button, close the modal
      //and pass the inputArray as the return value
      //could also pass confirmButton
      confirmButton.addEventListener("click", (event) => {
        // We don't want to submit this fake form
        event.preventDefault(); 
        bookDialogBox.close(confirmButton.value); // Have to send the inputArray value here.
      });

      closeButton.addEventListener("click", () => {
        bookDialogBox.close();
      })
    
      

	console.log(myLibrary);
    return myLibrary;
    
};

addToLibrary();


