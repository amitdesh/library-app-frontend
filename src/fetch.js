class FetchAdapter {

    static fetchBook(id){
        console.log(id)
        return fetch(`https://openlibrary.org/api/books?bibkeys=OCLC:${id}&jscmd=data&format=json`)
        .then(resp => resp.json())

    }
  
    static fetch(searchBy, searchWords){
        this.searchBy = searchBy
        this.searchWords = searchWords.split(' ').join('+')
        this.completeURL = `http://openlibrary.org/search.json?${this.searchBy}=${this.searchWords}&limit=5`
        
        return fetch(this.completeURL)
        .then(resp => resp.json())
    }


}