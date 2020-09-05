console.log("Hello")

document.addEventListener("DOMContentLoaded", e=>{

    document.addEventListener('click', e=>{
        if (e.target.matches(".specific-book")){
            let id = e.target.id
            FetchAdapter.fetchBook(id)
            .then(bookObj => {
                console.log(bookObj)
                let book = new Book(bookObj)
                book.renderShowBook()

            })
        }

    })

    document.addEventListener("submit", e=>{
        e.preventDefault()
        if (e.target.id === 'search-form'){
            let form = e.target
            let bookDiv = document.querySelector("#book-list")
            let searchWords = form['search-q'].value
            let searchBy = form['search-method'].value
            FetchAdapter.fetch(searchBy, searchWords)
                .then(bookCollection => {
                    let books = bookCollection.map(bookObj => new Book(bookObj))
                    let filteredBooks = Book.searchFilter(books, searchWords, searchBy)
                    bookDiv.innerHTML = ""
                    Book.renderBooks(filteredBooks, bookDiv)
                })
        }
    })
})



