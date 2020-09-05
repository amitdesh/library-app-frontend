console.log("Hello")

document.addEventListener("DOMContentLoaded", e=>{

    // document.addEventListener('click', e=>{
    //     if (e.target.id === "specific-book"){
    //     id = e.target.dataset.id
    //     FetchAdapter.fetchBook(id)
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
                    const books = bookCollection.map(bookObj => new Book(bookObj))

                    Book.renderBooks(books, bookDiv, searchBy, searchWords)
                })
        }
    })
})



