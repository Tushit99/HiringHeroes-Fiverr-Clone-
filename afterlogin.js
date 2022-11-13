import { footer, footer2 } from "./components/footer.js"; 

let foot = document.querySelector("#footer");
foot.innerHTML = footer();
let foot2 = document.querySelector("#last2");
foot2.innerHTML = footer2();




document.querySelector(".oncart").addEventListener("click", function (){
    window.location.href = "./Cart/cart.html"
})

let s = localStorage.getItem("UserName"); 
let first = s[0]; 
 document.querySelector(".f2>h3").innerText = first;


document.querySelector(".f2").addEventListener("click", ()=>{
    window.location.href = "./login-signup/Sign-up.html"
})

let cart_number = JSON.parse(localStorage.getItem("cart")) || []; 
 
document.querySelector(".oncart>span").innerText = cart_number.length


