const myLibrary = [];

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

Book.prototype.toggleRead = function () {
    this.read = this.read === "read" ? "unread" : "read";
    
    //toggle boolean status
    // this.read = !this.read;
}

const book1 = new Book("A Clash of Kings", "George R.R Martin", 761, "read");
const book2 = new Book("A Storm of Swords", "George R.R Martin", 973, "unread");
// book1.toggleRead();

console.log (book1);
let cardsContainer;


myLibrary.push(book1, book2)


function displayBooks() {
    for (const [index, book] of myLibrary.entries()) {
        console.log(book.author);

        cardsContainer = document.querySelector(".books");

        const bookCard = document.createElement("div");
        bookCard.classList.add("book-card");
        
        //delete button

        let deleteButton = document.createElement("div")
        // deleteButton.textContent = "Delete"
        deleteButton.classList.add("delete-icon")

        //give each delete button an attribute
        
        deleteButton.dataset.arrayIndex = `${index}`;

        let bookIndex = deleteButton.dataset.arrayIndex;

        bookCard.appendChild(deleteButton);

        

        const titleDiv = document.createElement("div");
        titleDiv.textContent = book.title;
        titleDiv.classList.add("title-div");
        bookCard.appendChild(titleDiv);

        const authorDiv = document.createElement("div");
        authorDiv.textContent = book.author;
        authorDiv.classList.add("author-div");
        bookCard.appendChild(authorDiv);

        const pagesDiv = document.createElement("div");
        pagesDiv.textContent = `${book.pages} pages`;
        pagesDiv.classList.add("pages-div");
        bookCard.appendChild(pagesDiv);

        const readDiv = document.createElement("div");
        readDiv.textContent = book.read;
        readDiv.classList.add("read-div");
        bookCard.appendChild(readDiv);

        cardsContainer.appendChild(bookCard);

        function rebuildCardsContainer() {
            cardsContainer.textContent = "";
            displayBooks();
        }

        deleteButton.addEventListener("click", () => {
            // confirm (`Do you want to delete \n ${book.name}`)
            // get the attribute that was clicked on
            console.log(bookIndex);
            myLibrary.splice(bookIndex, 1); 

            rebuildCardsContainer();
            console.log(myLibrary);
        });

        //toggleButton 
        const toggleButton = document.createElement("button");

        toggleButton.textContent = 
                                book.read === "read" ? "Read" : "Unread";
        
        toggleButton.classList.add("toggle-button");
        bookCard.appendChild(toggleButton);

        toggleButton.addEventListener("click", () => {
            book.toggleRead();
            
            console.log (myLibrary);
            rebuildCardsContainer();
        });

    } 
}

displayBooks();



function addToLibrary() {

    let inputArray = [];

    //dialog
    const bookDialogBox = document.querySelector("#bookDialog");
    const showDialogButton = document.querySelector("#showDialog");
    const confirmButton = document.querySelector("#confirmBtn");
    const closeButton = document.querySelector("#closeBtn");
    const inputForm = document.querySelector("#input-form");
    bookDialogBox.returnValue = "initialValue";
    confirmButton.value = "thereIsUserInput";

    //show dialog
    showDialogButton.addEventListener(("click"), () => {
        inputForm.reset();
        bookDialogBox.showModal();
    });

    const titleField = document.querySelector("#title");
    let titleFieldValue;
    titleField.setCustomValidity(''); 

    const authorField = document.querySelector("#author");
    let authorFieldValue;

    const pagesField = document.querySelector("#pages");
    let pagesFieldValue;

    
    //when the dialog closes
    bookDialogBox.addEventListener("close", (e) => {
        if (bookDialogBox.returnValue === "thereIsUserInput") {
            titleFieldValue = titleField.value;
            authorFieldValue = authorField.value;
            pagesFieldValue = parseInt(pagesField.value);
            let selectReadStatus = document.querySelector('input[name=read-status]:checked').value;
            // console.log(radioButtons);


            inputArray.push(titleFieldValue, authorFieldValue, pagesFieldValue, selectReadStatus);
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
        
        if (titleField.checkValidity() && authorField.checkValidity() && pagesField.checkValidity()) {
            // We don't want to submit this fake form
            event.preventDefault(); 
            bookDialogBox.close(confirmButton.value); // Have to send the inputArray value here.
        }
        else {
            return;  
        }

        //Even white space
        // if (titleField.value.trim() === "") {
        //     event.preventDefault(); 
        //     titleField.setCustomValidity("Book title cannot be empty.")
        // } else {
        //     console.log("hello");
        //     titleField.setCustomValidity("");
        //     return
        // }
        
      });

      closeButton.addEventListener("click", () => {
        bookDialogBox.close();
      })
    
      

	console.log(myLibrary);
    return myLibrary;
    
};

addToLibrary();



