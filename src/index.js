console.log("Hello")

document.addEventListener("DOMContentLoaded", e=>{
    var cookies = ""

    document.addEventListener('click', e=>{
        if (e.target.matches(".specific-book")){
            let id = e.target.id
            FetchAdapter.fetchBook(id)
            .then(bookObj => {
                let book = new Book(bookObj)
                book.renderShowBook()
            })
        }
        else if (e.target.matches(".liked")){
            if (cookies !== ''){
                let bookId = parseInt(e.target.id,10)
                let userId = parseInt(libraryTag.dataset.id)
                Checkout.createCheckout(userId, bookId)
                .then(checkoutObj => {
                    Checkout.addToMyLibrary(checkoutObj)
                    bookShowPage.innerHTML=''

                })
            }
            else {
                e.target.disabled = true
            }
        }
        else if (e.target.matches("#sign_up")){
            let username  = document.querySelector('#username').value
            User.createNewUser(username)
            .then(newUserObj => {
                User.userMatching(newUserObj)
                // userProtocol(newUserObj)
                userLogin("none")
                setTimeout(alert("Thanks for signing up! You have now created a new user"),2000)
            })
        }
        else if (e.target.matches("#delete")){
            let userID = e.target.dataset.id
            User.deleteUser(userID)
            // statusBar.innerText = ''
            libraryTag.innerText = ''
            libraryItems.innerHTML = ''
            User.deleteCookie()
            userLogin("block")
        }
        else if (e.target.matches("#log-out")){
            let signBtn = document.querySelector("#delete")
            statusBar.innerText = ""
            signBtn.innerText = "Sign-up"
            signBtn.id = "sign_up"
            e.target.innerText = "Log-in"
            e.target.id = "login_btn"
            libraryTag.innerText = ''
            libraryItems.innerHTML = ''
            User.deleteCookie
            userLogin("block")
        }
        else if(e.target.matches("#login_btn")){
            let username  = document.querySelector('#username').value
            User.loginUser()
            .then(userArray =>{
                let loggedInUser = User.userMatching(userArray, username)
                console.log(loggedInUser)
                userProtocol(loggedInUser)
                // userLogin("none")
                Checkout.renderMyLibrary(loggedInUser)
                // e.target.id = "log-out"
            })
        }
        else if (e.target.matches("#login_btn")){
            loginRender()
            }
        else if (e.target.matches("#delete-book")){
            let deleteButton = e.target
            let checkoutID  = parseInt(e.target.dataset.id,10)
            console.log(checkoutID)
            Checkout.deleteBook(checkoutID)
            .then(userArray =>{
                let bookLi = deleteButton.previousElementSibling
                bookLi.remove()
                deleteButton.remove()
            })
        }           
    })

    document.addEventListener("submit", e=>{
        e.preventDefault()
        if (e.target.matches('#search-form')){
            let form = e.target
            let bookDiv = document.querySelector("#book-list")
            let searchWords = form['search-q'].value
            let searchBy = form['search-method'].value
            FetchAdapter.fetch()
                .then(bookCollection => {
                    let books = bookCollection.map(bookObj => new Book(bookObj))
                    let filteredBooks = Book.searchFilter(books, searchWords, searchBy)
                    bookDiv.innerHTML = ""
                    Book.renderBooks(filteredBooks, bookDiv)
                })
            form.reset()
        }
    })
    
    const userLogin = (displayType) => {
        let usernameForm = document.querySelector('#username')
        usernameForm.style.display = displayType
    }
    
    let statusBar  = document.querySelector('#logged-in')
    let libraryTag  = document.querySelector('#cookie-name')
    let libraryItems  = document.querySelector('#my-library')
    let bookShowPage  = document.querySelector('#book-info')

    const userProtocol = (user) => {
        let container = document.querySelector("#div4")
        let libraryBtn = document.createElement("button")
        libraryBtn.id = "library_render"
        libraryBtn.innerText = "Show My Library"
        libraryBtn.dataset.id= user.id
        cookies = User.setCookie(user.username)
        libraryTag.innerText = `${cookies}'s Library`
        libraryTag.dataset.id = user.id
        statusBar.innerHTML = `Logged in as ${cookies}<br>`
        container.append(libraryBtn)
        container.appendChild(statusBar)
        
        
    }
})



