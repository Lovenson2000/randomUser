

let url = "https://randomuser.me/api/";
let button = document.getElementById("btn");

button.addEventListener("click",  async () => {

    let fullname = document.getElementById("fullname");
    let username = document.getElementById("username");
    let email = document.getElementById("email");
    let city = document.getElementById("city");
    let img = document.getElementById("user-photo");

    const response = await fetch(url)
    const data = await response.json();
    
    fullname.textContent = data.results[0].name.first;
    fullname.append(" " + data.results[0].name.last);
    username.textContent = data.results[0].login.username;
    email.textContent = data.results[0].email;
    city.textContent = (data.results[0].location.city + ' ' + data.results[0].location.state);
    img.src = data.results[0].picture.large;

    }
)
