window.onload = function() { 
    const currentUser = localStorage.getItem('current_user_name')
    const isAdmin = localStorage.getItem('isAdmin')
    console.log(typeof isAdmin)
    if (isAdmin == 'false' || isAdmin == undefined) {
        window.location.href = "http://127.0.0.1:5500/index.html"
    }
    // if (currentUser) {
    //     document.getElementById('username').innerHTML = currentUser
    //     document.getElementById('signed_in').classList.remove("hidden")
    //     document.getElementById('signed_off').classList.add("hidden")
    // }
    
}

function logout() {
    localStorage.clear()
    window.location.reload()
}