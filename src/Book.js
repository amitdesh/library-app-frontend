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
        let divContainer = document.querySelector(".carousel_wrapper")
        if (!document.querySelector("#book-info")){
            let bookInfoDiv = document.querySelector("#book_box")
            // bookInfoDiv.id = "book-info"
            divContainer.append(bookInfoDiv)
        }
        // debugger
        for(const book of filteredBookArray){
            // debugger
            book.render(bookList)
        }
    }

    static popularBooks(bookArray){
        let filteredBookArray = []
        for (let i =0; i< bookArray.length; i++){
            if (bookArray[i]["popularity"] > 7){
                filteredBookArray.push(bookArray[i])
            }
        }
        return filteredBookArray
    }


    static searchFilter(bookArray, searchWords, searchBy){
        let filteredBookArray = []
        for (let i =0; i< bookArray.length; i++){
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

    render(bookList){
        let bookImg = document.createElement("INPUT");
        bookImg.setAttribute("type", "image");
        bookImg.classList.add("carousel__photo")
        let divContainer = document.querySelector("#div4")
        // if (document.querySelector("#book-info")){}
        // else{
        //     let bookInfoDiv = document.createElement("div")
        //     bookInfoDiv.id = "book-info"
        // }
        // let bookInfoDiv = document.querySelector("#book-info")
        bookImg.height="800"
        bookImg.dataset.title = `${this.title}`
        bookImg.dataset.author = `${this.author}`
        bookImg.dataset.genre = `${this.genre}`
        bookImg.dataset.popularity = `${this.popularity}`
        bookImg.id = `${this.id}`
        bookImg.src = `${this.image}`
        bookList.appendChild(bookImg)
        // divContainer.append(bookInfoDiv)
    }
}
