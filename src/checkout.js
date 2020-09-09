
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
        let myLib = document.querySelector("#my-library")
        const bookEntry = document.createElement('p')
        let libBooks = user.books
        let libCheckouts = user.checkouts
        for (let i = 0; i< libBooks.length; i++){
            myLib.insertAdjacentHTML('beforeend', `
            <h5>${libBooks[i]['title']} by ${libBooks[i]['author']}</h5>
            <button id="delete-book" data-id=${libCheckouts[i]['id']}>Delete Book</button>`
            )
        }
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