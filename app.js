//sign.html
let email2 = document.querySelector("#email2");
let pass2 = document.querySelector("#pass2");
let regbtn = document.querySelector(".register")
let rinfo = document.querySelector(".rinfo")
let rform = document.querySelector(".form2")
try {
    regbtn.addEventListener("click", (e) => {
        e.preventDefault();
        if (email2.value == '' || pass2.value == "") {
            alert("Something wrong!! Please try again")
        }
        else {
            localStorage.setItem("rmail", email2.value);
            localStorage.setItem("rpass", pass2.value);
            rinfo.innerText = `Registeration sucessfull with Username " ${email2.value}"`
            rform.remove();
            email2.value = "";
            pass2.value = "";
        }

    })
}
catch { console.log("Everything is ok"); }

// index.html
let email1 = document.querySelector("#email1");
let pass1 = document.querySelector("#pass1");
let loginbtn = document.querySelector(".rg");
let loginfo = document.querySelector(".loginfo")
let sucinfo = document.querySelector(".sucinfo")
let form1 = document.querySelector(".form1")
let container = document.querySelector(".full")
let loginpage = document.querySelector(".loginpage")

try {
    loginbtn.addEventListener("click", (e) => {
        e.preventDefault();
        if (email1.value == "" || pass1.value == "") {
            alert("Something wrong!! Please Enter Something")
        }
        else if (email1.value != localStorage.getItem("rmail") || pass1.value != localStorage.getItem("rpass")) {
            loginfo.innerHTML = "&star; Invalid id & Password &star;"
            email1.value = ""
            pass1.value = ""
        }
        else {
            sucinfo.innerHTML = "&star; Login Sucessfull &star <a href ='notes.html'  class = 'private'>Private Information Here ;"
            form1.remove();
        }
    })
}

catch {
    console.log("everything is ok")

}
