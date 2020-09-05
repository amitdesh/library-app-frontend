class SingleBook{
    constructor({title, subjects, authors, publish_date, publishers, cover}){
        this.title = title
        this.genre = subjects[0]['name']
        this.author = authors[0]['name']
        this.publishYear = publish_date
        this.publisher = publishers[0]['name']
        this.image =  cover['medium']

    }

    renderShowBook(){
        let bookList = document.querySelector("#book-info")
        let bookProfile = document.createElement("p")
        bookProfile.classList.add("book")

        bookList.innerHTML = `
        <h3>${this.title}</h3>
        <h4>Author: ${this.author}</h4>
        <img src="${this.image}"/>
        <h4>Genre: ${this.genre}</h4>
        <h4>Year Published: ${this.publishYear}</h4>
        <h4>Publisher: ${this.publisher}</h4>`

        bookList.append(bookProfile)
        
    }
}
