class Book{
    constructor({title, genre, author_name, publishYear, publisher, language, lccn, isbn, oclc}){
        this.title = title
        this.genre = genre
        this.author = author_name
        this.publishYear = publishYear
        this.publisher = publisher
        this.language = language
        this.isbn = isbn[0]
        // this.lccn = lccn[0]
        this.oclc = oclc[0]
        // this.key = key.split("/")
        this.image = `http://covers.openlibrary.org/b/isbn/${this.isbn}-S.jpg`

    }

    static renderBooks(books, bookList){
        for(const book of books){
            book.render(bookList)
        }
    }
    
    // renderShowBook(){
    //     let bookList = document.querySelector("#book-info")
    //     let bookProfile = document.createElement("p")
    //     bookProfile.classList.add("book")

    //     bookList.innerHTML = `
    //     <h3>${this.title}</h3>
    //     <h4>Author: ${this.author}</h4>
    //     <h4>Language: ${this.language}</h4>
    //     <img src="${this.image}"/>
    //     <h4>Genre: ${this.genre}</h4>
    //     <h4>Year Published: ${this.publishYear}</h4>
    //     <h4>Publisher: ${this.publisher}</h4>`

    //     bookList.append(bookProfile)
        
    // }

    

    render(bookList){
        const bookLi = document.createElement("li")
        bookLi.classList.add("book")

        bookLi.innerHTML = `<button class="book-item" data-id="${this.oclc}">
        <h3>${this.title}</h3>
        <h4>Author: ${this.author}</h4>
        <img src="${this.image}"/>
        </button>`
        
        bookList.append(bookLi)
    }
}
