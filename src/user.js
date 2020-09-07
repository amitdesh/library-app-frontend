class User {
    constructor(username, password){
        this.username = username;
        this.password = password
    }

    static getUsers(){
        fetch(`http://localhost:3000/users/`)
        .then(resp => resp.json())





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
        
        fetch(`http://localhost:3000/users/`,options)
        .then(resp => resp.json())
        .then(console.log)
    }








}