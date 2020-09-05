class FetchAdapter {

    static fetchBook(id){
        return fetch(`https://openlibrary.org/api/books?bibkeys=ISBN:${id}`)
        .then(resp => resp.json())

    }
  
    static fetch(searchBy, searchWords){
        this.searchBy = searchBy
        this.searchWords = searchWords
        this.baseURL = `http://localhost:3000/books/`
        return fetch(this.baseURL)
        .then(resp => resp.json())
    }


}