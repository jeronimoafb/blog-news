function singup(event) {
    event.preventDefault() //previne a tela de recarregar espontaneamente
    let name = document.getElementById("name").value
    let email = document.getElementById("email").value
    let password = document.getElementById("password").value
    let confirm_password = document.getElementById("confirm_password").value

    const user = {
        name: name,
        email: email,
        password: password,
        admin: false
    }
    axios({
        method: 'post',
        url: 'http://localhost:3000/users',
        data: user 
            
        
    })
    .then(data => {
        window.location.href = "http://127.0.0.1:5500/login.html"
        
    })
    .catch(err => alert("close errado mona!"))
}