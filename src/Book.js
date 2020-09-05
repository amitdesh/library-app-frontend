class Book{
    constructor({title, genre, author_name, publishYear, publisher, language, isbn }){
        this.title = title
        this.genre = genre
        this.author = author_name
        this.publishYear = publishYear
        this.publisher = publisher
        this.language = language
        this.isbn = isbn
        this.image = `http://covers.openlibrary.org/b/isbn/${isbn[0]}-S.jpg`

    }

    static renderBooks(books, bookList){
        for(const book of books){
            book.render(bookList)
        }
    }
    
    renderShowBook(id){
        bookList = document.querySelector("#book-info")
        bookLi.classList.add("book")

        bookList.innerHTML = `
        <h3>${this.title}</h3>
        <h4>Author: ${this.author}</h4>
      <img alt=""
      src="${this.image}" />
      `
    }

    

    render(bookList){
        const bookLi = document.createElement("li")
        bookLi.classList.add("book")

        bookLi.innerHTML = `<button id="specific-book" dataset-id: ${this.isbn}>
        <h3>${this.title}</h3>
        <h4>Author: ${this.author}</h4>
      <img alt=""
      src="${this.image}" />
      </button>
      `
      bookList.append(bookLi)
    }
}
