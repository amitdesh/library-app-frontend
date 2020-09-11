console.log("Hello")

document.addEventListener("DOMContentLoaded", e=>{
    let cookies = ''

    document.addEventListener('click', e=>{
        if (e.target.matches(".specific-book")){
            let id = e.target.id
            FetchAdapter.fetchBook(id)
            .then(bookObj => {
                let book = new Book(bookObj)
                book.renderShowBook()
            })
        }
        if (e.target.matches(".liked")){
            if (cookies !== ''){
                let logBtn = document.querySelector("#log-out")
                let userId = logBtn.dataset.id
                let bookImg = document.querySelector(".active")
                let bookId = bookImg.id
                Checkout.createCheckout(userId, bookId)
            }
            else {
                e.target.disabled = true
            }
        }

        if (e.target.matches(".popular_image_btn")){
            if(!document.querySelector("#book_box")){
                let container = document.querySelector("book_box")
                container.remove()
            }
            let carousel = document.querySelector(".carousel_wrapper")
            carousel.innerHTML = ""
            // debugger
            createSliderHTML()
            createAddBtn()
            FetchAdapter.fetch()
            .then( bookArray =>{
                let books = bookArray.map(bookObj => new Book(bookObj))
                let popularBooks = Book.popularBooks(books)
                Book.renderBooks(popularBooks, carousel)
                eventHandler()
                infoRender()
            }
            )
            
        }

        if (e.target.matches(".author_btn")){
            let carousel = document.querySelector(".carousel_wrapper")
            carousel.innerHTML = ""
            // debugger
            createSliderHTML()
            createAddBtn()
            FetchAdapter.fetchAuthor()
            .then( bookArray =>{
                console.log(bookArray)
                let books = bookArray.map(bookObj => new Book(bookObj))
                Book.renderBooks(books, carousel)
                eventHandler()
                infoRender()
            }
            )
            
        }

        if (e.target.matches("#sign_up")){
            let username  = document.querySelector('#username').value
            User.createNewUser(username)
            .then(
                dummy=>{
                    User.loginUser()
                    .then(userArray =>{
                        let loggedInUser = User.userMatching(userArray, username)
                        console.log(loggedInUser)
                        userProtocol(loggedInUser)
                    })
                }
            )
        }
        if (e.target.matches("#delete")){
            let userID = e.target.dataset.id
            User.deleteUser(userID)
            // statusBar.innerText = ''
            libraryTag.innerText = ''
            // libraryItems.innerHTML = ''
            User.deleteCookie()
            // userLogin("block")
        }
        if (e.target.matches("#log-out")){
            let signBtn = document.querySelector("#delete")
            form = document.querySelector("#username")
            form.value = ""
            statusBar.innerText = ""
            signBtn.innerText = "Sign-up"
            signBtn.id = "sign_up"
            e.target.innerText = "Log-in"
            libraryTag.innerText = ''
            // libraryItems.innerHTML = ''
            User.deleteCookie
            // userLogin("block")
            e.target.id = "login_btn"
        }
        if(e.target.matches("#login_btn")){
            let username  = document.querySelector('#username').value
            User.loginUser()
            .then(userArray =>{
                let loggedInUser = User.userMatching(userArray, username)
                console.log(loggedInUser)
                userProtocol(loggedInUser)
                // userLogin("none")
                // Checkout.renderMyLibrary(loggedInUser)
                // e.target.id = "log-out"
            })
        }
        if (e.target.matches("#login_btn")){
            loginRender()
            }

        if (e.target.matches("#library_render")){
            let username = e.target.dataset.name
            createAddBtn()
            createSliderHTML()
            User.loginUser()
            
            .then(userArray =>{
                let loggedInUser = User.userMatching(userArray, username, 1)
                Checkout.renderMyLibrary(loggedInUser)
                eventHandler()
                infoRender()
                            if (document.querySelector(".liked")){
                                let likeBtn = document.querySelector(".liked")
                                likeBtn.remove()
                            }

            })
        }
        if (e.target.matches(".search_btn")){
            if (document.querySelector("#search-form")){}
            else{
            let searchInput = document.createElement("div")
            let container = document.querySelector("#div3")
            searchInput.innerHTML=`
            <form id="search-form">
                <select id="search-method" name="search-method">
                        <option name= "author" value="author">Author</option>
                        <option name="title" value="title">Title</option>
                 <label for="search-q">Search:</label>
                <input type="text" id="search-q" name="search-bar">
                <input type="submit" id="submit" name= "Submit">
                </select>
            </form>`
        container.appendChild(searchInput)
            }
            

        }
        if (e.target.matches("#delete_book")){
            let username = document.querySelector("#library_render").dataset.name
            let activeImg = document.querySelector(".active")
            let checkoutID = activeImg.dataset.checkout
            Checkout.deleteBook(checkoutID)
            .then(blah => {
                activeImg.remove()
            })
            User.loginUser()
            .then(userArray =>{

                let loggedInUser = User.userMatching(userArray, username, 1)
                Checkout.renderMyLibrary(loggedInUser)
        })
    }

    document.addEventListener("submit", e =>{
        e.preventDefault()
    })
})

    document.addEventListener("click", e=>{
            if (e.target.name === "Submit"){
            // debugger
            let form = document.querySelector("#search-form")
            let sliderContainer = document.querySelector(".carousel_wrapper")
            let searchWords = form['search-q'].value
            let searchBy = form['search-method'].value
            sliderContainer.innerHTML = ""
            createAddBtn()
            createSliderHTML()
            FetchAdapter.fetch()
                .then(bookCollection => {
                    let books = bookCollection.map(bookObj => new Book(bookObj))
                    let filteredBooks = Book.searchFilter(books, searchWords, searchBy)
                    Book.renderBooks(filteredBooks, sliderContainer)
                    eventHandler()
                    infoRender()
                })
            // form.reset()
        }
    })
    
    // const userLogin = (displayType) => {
    //     debugger
    //     let usernameForm = document.querySelector('#username')
    //     usernameForm.style.display = displayType
    // }
    
    let statusBar  = document.querySelector('#logged-in')
    let libraryTag  = document.querySelector('#cookie-name')
    let libraryItems  = document.querySelector('#my-library')
    let bookShowPage  = document.querySelector('#book-info')

    const userProtocol = (user) => {
        debugger
        let container = document.querySelector("#div4")
        let libraryBtn = document.createElement("button")
        libraryBtn.id = "library_render"
        libraryBtn.innerText = "Show My Library"
        libraryBtn.dataset.name= user.username
        cookies = User.setCookie(user.username)
        // libraryTag.innerText = `${cookies}'s Library`
        libraryTag.dataset.id = user.id
        // statusBar.innerHTML = `Logged in as ${cookies}<br>`
        container.append(libraryBtn)
        container.appendChild(statusBar)
        
        
    }
})
