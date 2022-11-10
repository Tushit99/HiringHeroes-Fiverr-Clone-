
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
        remove.className = "button-37"; 
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
    let arr = JSON.parse(localStorage.getItem("cart")) ;  
    let count = 0 ; 

    arr.forEach((e) => {
        count += e.price ; 
    }); 

    document.querySelector("#total>h2>span").innerText = ""; 
    document.querySelector("#total>h2>span").innerText = count;  

}


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
        // window.location.href = "" 
        console.log("succenss",str);  
    }
}

