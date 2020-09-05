console.log("Hello")

document.addEventListener("DOMContentLoaded", e=>{

    // document.addEventListener('click', e=>{
    //     if (e.target.matches(".specific-book")){
    //         id = e.target.dataset.id
    //         FetchAdapter.fetchBook(id)
    //         .then(bookObj => {
    //             console.log(bookObj)

    //         })
    //     }

    // })

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
                    Book.renderBooks(filteredBooks, bookDiv)
                })
        }
    })
})



