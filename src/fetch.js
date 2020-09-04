class FetchAdapter {
    constructor(searchBy, searchWords){
        this.searchBy = searchBy
        this.searchWords = searchWords.split(' ').join('+')
        this.baseURL = `http://openlibrary.org/search.json?${this.searchBy}=${this.searchWords}&limit=5`
    }

    fetch(){
        return fetch(this.baseURL)
        .then(resp => resp.json())
        .then(console.log)
    }

}