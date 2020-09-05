class Book{
    constructor({title, genre, author,image,popularity, publisher}){
        this.title = title
        this.genre = genre
        this.image = image
        this.author = author
        this.popularity = popularity
        this.publisher = publisher

    }

    static renderBooks(filteredBookArray, bookList){
        for(const book of filteredBookArray){
            book.render(bookList)
        }
    }

    static searchFilter(bookArray, searchWords, searchBy){
        let filteredBookArray = []
        console.log(typeof searchBy)
        for (let i =0; i< bookArray.length; i++){
            if (bookArray[i][searchBy].includes(searchWords)){
                filteredBookArray.push(bookArray[i])
            }
        }
        return filteredBookArray
    }
    
    renderShowBook(id){
        bookList = document.querySelector("#book-info")
        bookLi.classList.add("book")

        bookList.innerHTML = `
        <h3>${this.title}</h3>
        <h4>Author: ${this.author}</h4>
        <img src="${this.image}"/>`
    }

    

    render(bookList){
        const bookLi = document.createElement("li")
        bookLi.classList.add("book")

        bookLi.innerHTML = `<button id="specific-book" dataset-id: ${this.isbn}>
        <h3>${this.title}</h3>
        <h4>Author: ${this.author}</h4>
        <img src="${this.image}" />
        </button>
        `
        bookList.append(bookLi)
    }
}
