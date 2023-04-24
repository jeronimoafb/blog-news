window.onload = function() { 
    const currentUser = localStorage.getItem('current_user_name')
    if (currentUser) {
        document.getElementById('username').innerHTML = currentUser
        document.getElementById('signed_in').classList.remove("hidden")
        document.getElementById('signed_off').classList.add("hidden")
    }

    const main_col = document.getElementById('main_col')
    axios.get("http://localhost:3000/news")
    .then( response => {
        console.log(response.data[0])
        response.data.forEach(element => {
            console.log(element.image)
            main_col.innerHTML += articleComponent(element.image, element.title, element.content) 
        });
    })
}

function articleComponent(image = "", title = "", content = "") {
    return `<article class="card"><div class="photo"><img src="${image}"></div><div class="content"><h2>${title}</h2><p>${content}</p></div></article>`
}

function logout() {
    localStorage.clear()
    window.location.reload()
}