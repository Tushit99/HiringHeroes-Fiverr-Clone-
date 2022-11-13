import { navbar } from "../components/navbar.js";

document.getElementById("header1").innerHTML = navbar() ; 

// cart list  
CartData(); 
function CartData(){ 
    let arr = JSON.parse(localStorage.getItem("cart")) || [] ;   
    document.getElementById("data").innerHTML = "";  

    arr.map((e,i)=>{

        let d1 = document.createElement("div"); 
        d1.className = "button-30" ; 

        let img = document.createElement("img"); 
        img.src = e.image 

        let name = document.createElement("h3"); 
        name.innerText = e.name ; 

        let price = document.createElement("p"); 
        price.innerText = `Price ${e.show_price}`;  

        let remove = document.createElement("button"); 
        remove.innerText = "Remove" 
        remove.className = "button-33"; 
        remove.addEventListener("click", function (){
            removemydata(i);  
        })

        d1.append(img,name,price,remove); 
        document.getElementById("data").append(d1); 

    })  
}


function removemydata(i){
    let x = JSON.parse(localStorage.getItem("cart")) || x ;   
    x.splice(i,1); 
    localStorage.setItem("cart",JSON.stringify(x)); 
    CartData(); 
    totalPrice(); 
}  

totalPrice();  
function totalPrice(){
    let arr = JSON.parse(localStorage.getItem("cart")) || [];  
    let count = 0 ; 

    arr.forEach((e) => {
        count += e.price ; 
    }); 

    document.querySelector("#total>h2>span").innerText = ""; 
    document.querySelector("#total>h2>span").innerText = count;  

}


document.querySelector(".button-28").addEventListener("click",()=>{
    finalpay(); 
})

function finalpay(){
    let str = JSON.parse(localStorage.getItem("cart")) ;    
    if(str.length==0){
        swal({
            title: "Empty!",
            text: "Your cart is empty!",
            icon: "info",
            button: "OK!", 
          }); 
    }
    else{ 
        window.location.href = "../Payment/payment.html" 
        console.log("succenss",str);  
    }
}


// cart length 

let am = localStorage.getItem("cart") || []; 
document.querySelector("#CartPg").innerText = `Cart ${am.length}`



// change to after login page 

document.querySelector(".button-33").addEventListener("click", ()=>{
    window.location.href='../FontPage/font-page.html'
})


document.querySelector(".input").innerHTML =""; 

