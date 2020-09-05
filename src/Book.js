class Book{
    constructor({title, genre, author,image,popularity, publisher, id}){
        this.title = title
        this.genre = genre
        this.image = image
        this.author = author
        this.popularity = popularity
        this.publisher = publisher
        this.id = id

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
                console.log("hello")
                filteredBookArray.push(bookArray[i])
            }
        }
        return filteredBookArray
    }
    
     renderShowBook(){
         console.log("beef")
        let bookList = document.querySelector("#book-info")
        const bookLi = document.createElement("li")
        bookLi.classList.add("book")

        bookList.innerHTML = `
        <h3>${this.title}</h3>
        <h4>Author: ${this.author}</h4>
        <img src="${this.image}"/>`
    }

    

    render(bookList){
        const bookLi = document.createElement("li")
        bookLi.classList.add("book")

        bookLi.innerHTML = `<button class="specific-book" id = ${this.id}>
        <h3>${this.title}</h3>
        <h4>Author: ${this.author}</h4>
        <img src="${this.image}" />
        </button>
        `
        bookList.append(bookLi)
    }
}
