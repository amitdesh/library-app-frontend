class Book{
    constructor({title, genre, author, image, popularity, publisher, id}){
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
        for (let i =0; i< bookArray.length                // .then(createSliderHTML)
        ; i++){
            if (bookArray[i][searchBy].includes(searchWords)){
                filteredBookArray.push(bookArray[i])
            }
        }
        return filteredBookArray
    }
    
    renderShowBook(){
        let bookList = document.querySelector("#book-info")
        const bookLi = document.createElement("li")
        bookLi.classList.add("book")

        bookList.innerHTML = `
        <h3>${this.title}</h3>
        <h4>Author: ${this.author}</h4>
        <img src="${this.image}"/><br>
        <button class="liked" id="${this.id}">Add This Book To Your Library</button>`
    }

    myLibrary(){
        let myLib = document.querySelector("#my-library")
        console.log(myLib)
        const bookEntry = document.createElement('p')
        bookEntry.innerHTML = `
        <h5>${this.title} by ${this.author}</h5>
        `
        myLib.append(bookEntry)
    }

    render(bookList){
        let bookImg = document.createElement("INPUT");
        bookImg.setAttribute("type", "image");
        bookImg.classList.add("carousel__photo")
        bookImg.id = `${this.id}`
        bookImg.src = `${this.image}`
        bookList.appendChild(bookImg)
    }
}
