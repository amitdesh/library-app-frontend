class FetchAdapter {

    static fetchBook(id){
        return fetch(`http://localhost:3000/books/${id}`)
        .then(resp => resp.json())

    }

    static fetch(){
        this.baseURL = `http://localhost:3000/books/`
        return fetch(this.baseURL)
        .then(resp => resp.json())
    }

    static fetchAuthor(){
        this.baseURL = `http://localhost:3000/author/popauthor`
        return fetch(this.baseURL)
        .then(resp => resp.json())
    }

}