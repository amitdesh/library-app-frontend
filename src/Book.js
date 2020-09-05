class Book{
    constructor({title, genre, author_name, popularity, publisher}){
        this.title = title
        this.genre = genre
        this.author = author_name
        this.popularity = popularity
        this.publisher = publisher

    }

    static renderBooks(books, bookList, searchWords, searchBy){
        for(const book of books){
            // debugger
            if (book.searchBy === searchWords){
                console.log(book)
            book.render(bookList)
            }
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
