function loginRender(){
    let container = document.querySelector("#div4")
    container.insertAdjacentHTML("beforeend", 
    `<div>
        <label for="username" id="user-label"></label>
        <input type="text" placeholder="Enter Username" id="username" name="username-input"></br>
        <button type="submit" id="login" name= "login">Login</button>
        <button type="submit" id="signup" name= "signup">Signup</button>
        </div>
        `
    )
}

function createAddBtn(){
    let addBtn = document.createElement("button")
    container = document.querySelector("#div4")
    addBtn.classList.add("liked")
    addBtn.innerText = "Like"
    container.append(addBtn)
}
