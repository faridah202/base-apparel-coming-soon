var form = document.getElementById('form');
var error = [];
var email = document.getElementById('email');
var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
var icon = document.getElementById(er);
console.log(er)

form.addEventListener('submit', function(e){
    e.preventDefault()
    var email = document.getElementById('email')
    console.log(email)
    if(email.value.match(mailformat)){
        error.push("Valid email address")
    }
    else
    {
        error.push("Please enter a valid email")

    }
    var message = document.getElementById('message')
    message.innerText = error
})
