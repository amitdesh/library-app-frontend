
class Checkout {
    constructor({book_id, user_id}){
        this.id = id
        this.userId = user_id
        this.bookId = book_id
    }

    static createCheckout = (userId, bookId) => {

        const options = {
            method: "POST",
            headers: {
                'content-type': 'application/json',
                'accept': 'application/json'
            },
            body: JSON.stringify({
                book_id: bookId,
                user_id: userId
            })
        }

        return fetch(`http://localhost:3000/checkouts/`, options)
        .then(resp => resp.json())
    }

    static addToMyLibrary = (checkout) => {
        console.log(checkout)
        let myLib = document.querySelector("#my-library")
        const bookEntry = document.createElement('p')
        bookEntry.innerHTML = `
        <h5>${checkout['book']['title']} by ${checkout['book']['author']}</h5>
        <button id="delete-book" data-id=${checkout.id}>Delete Book</button>`
        myLib.append(bookEntry)
    }

    static renderMyLibrary = (user) => {
        let myLib = document.querySelector(".carousel_wrapper")
        let libBooks = user.books
        let books = libBooks.map(bookObj => new Book(bookObj))
        Book.renderBooks(books, myLib)
        let bookImg = document.querySelectorAll(".carousel__photo")
        let libCheckouts = user.checkouts

        for (let i = 0; i < libCheckouts.length; i++) {
            let checkout = libCheckouts[i];
            for (let i = 0; i < bookImg.length; i++) {
                let book = bookImg[i];
                // debugger
                if(checkout.book_id === parseInt(book.id)){
                    book.dataset.checkout = checkout.id
                }
            }
          }
        let deleteBtn = document.createElement("button")
        debugger
        deleteBtn.id = "delete_book"
        deleteBtn.innerText = "Delete"
        myLib.append(deleteBtn)

    //     for (let i = 0; i< libBooks.length; i++){
    //         const bookEntry = document.createElement('input')
    //         bookEntry.type = "image"
    //         bookEntry.classList.add("carousel__photo")
    //         bookEntry.src = libBooks[i]['image']
    //         bookEntry.id = libCheckouts[i]['id']
    //         myLib.appendChild(bookEntry)
    //     }
    }

    static deleteBook = (id) => {

        const options = {
            method: "DELETE",
            headers: {
                'content-type': 'application/json',
            }
        }

        return fetch('http://localhost:3000/checkouts/'+id, options)
        // .then(resp => resp.json())



    }


}