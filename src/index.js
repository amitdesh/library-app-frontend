console.log("Hello")

document.addEventListener("DOMContentLoaded", e=>{

    document.addEventListener('click', e=>{
        if (e.target.matches(".specific-book")){
            let id = e.target.id
            FetchAdapter.fetchBook(id)
            .then(bookObj => {
                let book = new Book(bookObj)
                book.renderShowBook()
            })
        }
        else if (e.target.matches(".liked")){
            let id = parseInt(e.target.id,10)
            
            FetchAdapter.fetchBook(id)
            .then(bookObj => {
                let book = new Book(bookObj)
                book.myLibrary()
            })
        }
        else if (e.target.matches("#signup")){
            console.log("clicked")
            let username  = document.querySelector('#username').value
            console.log(username)
            User.createNewUser(username)
        }
    })

    document.addEventListener("submit", e=>{
        e.preventDefault()
        if (e.target.matches('#search-form')){
            let form = e.target
            let bookDiv = document.querySelector("#book-list")
            let searchWords = form['search-q'].value
            let searchBy = form['search-method'].value
            FetchAdapter.fetch()
                .then(bookCollection => {
                    let books = bookCollection.map(bookObj => new Book(bookObj))
                    let filteredBooks = Book.searchFilter(books, searchWords, searchBy)
                    bookDiv.innerHTML = ""
                    Book.renderBooks(filteredBooks, bookDiv)
                })
            form.reset()
        }
    })
})



