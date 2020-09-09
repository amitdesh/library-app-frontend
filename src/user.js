class User {
    constructor(username){
        this.username = username;
    }

    static createNewUser(username){
    
        const options = {
            method: "POST",
            headers: {
                'content-type': 'application/json',
                'accept': 'application/json'
            },
            body:JSON.stringify({
                username
            })
        }   
        
        return fetch(`http://localhost:3000/users/`,options)
        .then(resp => resp.json())
    }


    static setCookie(cname) {
        return document.cookie = cname
    }
    
    static getCookie(cname) {
        var name = cname + "=";
        var ca = document.cookie.split(';');
        for(var i = 0; i < ca.length; i++) {
            var c = ca[i];
            while (c.charAt(0) == ' ') {
            c = c.substring(1);
            }
            if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
            }
        }
        return "";
        }
    
    static checkCookie() {
        var user = getCookie("username");
        if (user != "") {
            alert("Welcome again " + user);
        } else {
            user = prompt("Please enter your name:", "");
            if (user != "" && user != null) {
            setCookie("username", user, 365);
            }
        }
        }

    static deleteCookie(){
        return document.cookie = ''
    }


    static deleteUser(id){

        const options = {
            method: "DELETE",
            headers: {
                'content-type': 'application/json',
            }
        }

        fetch(`http://localhost:3000/users/`+id,options)
        // .then(resp => resp.json())

    }

    static loginUser(){
        return fetch(`http://localhost:3000/users/`)
        .then(resp => resp.json())
    }

    static userMatching = (allUsers, username) =>{
        let matchedUser = []
            for (const user of allUsers){
                if (user.username === username){
                    matchedUser.push(user)
                    let logBtn = document.querySelector("#login_btn")
                    let signBtn = document.querySelector("#sign_up")
                    signBtn.dataset.id = `${user.id}`
                    signBtn.id = "delete"
                    signBtn.innerText = "Delete User"
                    logBtn.id = "log-out"
                    logBtn.dataset.id = `${user.id}`
                    logBtn.innerText = "Log-out"

                }
            }
            if(matchedUser.length === 0) {
                alert("Please try again. There is no existing user with this username")
            }
            
            return matchedUser[0]

    }



}