
class Checkout {
    constructor(array){
        this.id = array['id']
        this.userId = array['user_id']
        this.bookId = array['book_id']
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

    static addToMyLibrary(checkout){
        console.log(checkout)
        let myLib = document.querySelector("#my-library")
        const bookEntry = document.createElement('p')
        bookEntry.innerHTML = `
        <h5>${checkout.book} by ${checkout.book}</h5>`
        myLib.append(bookEntry)
    }


}