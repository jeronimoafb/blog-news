
function login(event){
    event.preventDefault() //previne a tela de recarregar espontaneamente
    let email = document.getElementById("email").value
    let password = document.getElementById("password").value
    
    axios.get("http://localhost:3000/users?email="+email+"&password="+password)
    .then(response => {
        console.log(response.data[0])

        if( response.data[0]){
            //alert("Usuário logado")
            localStorage.setItem("current_user_name", response.data[0].name)
            localStorage.setItem("isAdmin",response.data[0].admin)
            if (response.data[0].admin){
                window.location.href = "http://127.0.0.1:5500/admin_dash.html"
            } else{
                window.location.href = "http://127.0.0.1:5500/index.html"
            }
            //console.log(localStorage.getItem("current_user_name"))
        } else {
            alert("Usuário e/ou senha incorretos")
        }
    })
    .catch(error => console.log(error))
 
    
    
}

