console.log("Hello")

document.addEventListener("DOMContentLoaded", e=>{

    document.addEventListener("submit", e=>{
        e.preventDefault()
        if (e.target.id === 'search-form'){
            let form = e.target
            let searchWords = form['search-q'].value
            console.log(searchWords)
            let searchBy = form['search-method'].value
            console.log(searchBy)
            let search = new FetchAdapter(searchBy, searchWords)
            console.log(search.fetch())
            // search.fetch()
            
        }
    })
})



