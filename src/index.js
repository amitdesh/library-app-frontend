console.log("Hello")

document.addEventListener("DOMContentLoaded", e=>{

    document.addEventListener('click', e=>{
        if (e.target.matches(".book-item")){
            id = e.target.dataset.id
            console.log(id)
            FetchAdapter.fetchBook(id)
            .then(bookObj => {
                console.log(bookObj)
                // debugger
                // const newBook = new SingleBook(bookObj[`ISBN:${id}`])
                // newBook.renderShowBook()  
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
                    console.log(bookCollection)
                    const books = bookCollection.docs.map(bookObj => new Book(bookObj))
                    Book.renderBooks(books, bookDiv)
                })
        }
    })
})



