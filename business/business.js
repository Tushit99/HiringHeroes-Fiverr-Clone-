//************Complete*******************************/

import { footer } from "../components/footer.js";
import { navbar,navbar2 } from "../components/navbar.js"


let nav1 = document.getElementById("header1");
nav1.innerHTML = navbar();
let nav2 = document.getElementById("nav");
nav2.innerHTML = navbar2();
let foot = document.querySelector("#footer");
foot.innerHTML = footer();
// let foot2 = document.querySelector("#last");
// foot2.innerHTML = footer2();

const getAllData=async()=>{ //Getting all data for creating paginate buttons

    try{
        let res=await fetch('http://localhost:8080/business')
        let data=await res.json()
    
        Create_btn(data.length)
    }catch(error){
       console.log(error)
    }
   
}

const Create_btn=(total_data)=>{  //Creating Paginate Btns

    let no_of_btn=Math.ceil(total_data/12)
    let Paginate_btn_div=document.getElementById('p_btn')

    for(let i=1;i<=no_of_btn;i++){
        let btn =document.createElement('button')
        btn.innerText=i

        btn.onclick=()=>{
            getData(i)
        }

        Paginate_btn_div.append(btn)
    }
}

const getData=async(page_id)=>{ // Getting 12 data per page

    try{
        let res=await fetch(`http://localhost:8080/business?_page=${page_id}&_limit=12`)
        let data=await res.json()
    
        appendData(data)

    }catch(error){
       console.log(error)
    }
   
}



let cart_data=JSON.parse(localStorage.getItem('cart')) || []  // Creating Array for cart data/or getting from LS
let msg=document.getElementById('msg')
let popup_div=document.getElementById('popup')

const appendData=(data)=>{ // Appendind data
    let container=document.getElementById('container') // appending div
    container.innerHTML=null;
    let flag=false          ///var flag for wishlist  on clicking change the color of heart

    data.forEach((el)=>{
        let card=document.createElement('div') 

        let image=document.createElement('img')
        image.src=el.image

        let name=document.createElement('p')
        name.innerText=el.name;


        let rating_div=document.createElement('div') //creatiing div for appending rating and star logo
        rating_div.className="rating_div"

        let rating=document.createElement('p')
        let star=document.createElement('img')
        star.className='star'
        star.src='https://cdn1.iconfinder.com/data/icons/vote-reward-7/24/award_reward_rate_rating_star_empty-64.png' //Rating Star Image

        rating.innerText=el.rating

        rating_div.append(star,rating)

        let wishlist_div=document.createElement('div')  // div for appending heart logo and price
        wishlist_div.className='wishlist_div'

        let wishlist_img=document.createElement('img')
        wishlist_img.src='https://cdn4.iconfinder.com/data/icons/evil-icons-user-interface/64/heart-64.png'
         
        wishlist_img.className='wishlist_img'
        wishlist_img.onclick=()=>{ // this function changes the color of heart logo on clicking
            if(flag==false){
                wishlist_img.src='https://cdn4.iconfinder.com/data/icons/twitter-29/512/166_Heart_Love_Like_Twitter-64.png'
                flag=true
            }
            else{
                wishlist_img.src='https://cdn4.iconfinder.com/data/icons/evil-icons-user-interface/64/heart-64.png'
                flag=false;
            }
           
        }

        let cart_btn=document.createElement('button') 
        cart_btn.innerText='Add To Cart'
        cart_btn.className='cart_btn'

        cart_btn.onclick=()=>{//this fn will store the clicked data in the form of array of obj as "cart" as a key. 
            cart_data.push(el)
            localStorage.setItem('cart',JSON.stringify(cart_data))
            pop_img.src='https://cdn0.iconfinder.com/data/icons/social-messaging-ui-color-shapes/128/check-circle-green-64.png'
            msg.innerText="Product Added To Cart!"
            popup_div.style.border='1px solid black'
            popup_div.style.backgroundColor='#5edfa2'
            popup_div.style.display='flex'
            Hide_popup()
            
        }



        let show_price=document.createElement('p')
        show_price.innerText=el.show_price;

        wishlist_div.append(wishlist_img,show_price)


        card.append(image,name,rating_div,wishlist_div,cart_btn)

        container.append(card)

    })

}

getData(1) // by default showing first page
getAllData() // for craeting paginate btns


//Sorting 




let select_budget=document.getElementById('range')
select_budget.oninput=()=>{
    if(select_budget.value=='high'){
        Sort_by_range('gte=1001')
    }
    else{
        Sort_by_range('lte=1000')
    }
   
}


const Sort_by_range=async(order)=>{

    try{
        let res=await fetch(`http://localhost:8080/business?price_${order}`)
        let data=await res.json()
        console.log(data)
        appendData(data)

    }catch(error){
       console.log(error)
    }
}



let sort=document.getElementById('sort-low-high')
sort.oninput=()=>{
    if(sort.value=='l-t-h'){
        Sort('asc')
    }
    else if(sort.value=='h-t-l'){
        Sort('desc')
    }else{
        getData(1)
    }
}




const Sort=async(order)=>{

    try{
        let res=await fetch(`http://localhost:8080/business?_sort=price&_order=${order}`)
        let data=await res.json()
        appendData(data)

    }catch(error){
       console.log(error)
    }
}



let rating_btn=document.getElementById('rating-low-high')
rating_btn.oninput=()=>{
    
    if(rating_btn.value=='less'){
        Sort_by_rating('asc')
    }
    else if(rating_btn.value=="high"){
        Sort_by_rating('desc')
    }
    else{
        getData(1)
    }
}



const Sort_by_rating=async(order)=>{
     try{
        let res=await fetch(`http://localhost:8080/business?_sort=rating&_order=${order}`)
        let data=await res.json()
        appendData(data)

     }catch(error){
        console.log(error)
     }
   

}



// let cat=document.querySelectorAll('#category>div') // Adding onclick event on category div
// for(let i=0;i<cat.length;i++){
//     cat[i].onclick=()=>{
//         getData(i+1)
//     }
// }

// let prev_btn=document.getElementById('prev')

// let first_div=document.querySelector('#category>:nth-child(1)')
// let second_div=document.querySelector('#category>:nth-child(2)')
// let third_div=document.querySelector('#category>:nth-child(3)')
// let fourth_div=document.querySelector('#category>:nth-child(4)')

// let next_btn=document.getElementById('next')
// next_btn.onclick=()=>{
//     first_div.style.display='none'
//     second_div.style.display='none'
//     third_div.style.display='block'
//     fourth_div.style.display='block'

//     next_btn.style.display='none'
//     prev_btn.style.display='block'
    
// }

// prev_btn.onclick=()=>{
//     first_div.style.display='block'
//     second_div.style.display='block'
//     third_div.style.display='none'
//     fourth_div.style.display='none'

//     next_btn.style.display='block'
//     prev_btn.style.display='none'
    
// }


//****************************Below Code is for Bug fixing  ***********************************/


// const mediaQuery = window.matchMedia('(min-width: 768px)')
// function handleTabletChange(e) {
//   // Check if the media query is true
//   if (e.matches) {
//     console.log('Media Query Matched!')

//     next_btn.style.display='none'
//     prev_btn.style.display='none'


//   let cat_div=document.querySelector('#category>div')
//   cat_div.style.display='block'
//   }
//   else{
//     next_btn.style.display='block'
//     prev_btn.style.display='none'

//   }
// }
// // Register event listener
// mediaQuery.addListener(handleTabletChange)

// // Initial check
// handleTabletChange(mediaQuery)








let Hide_popup=()=>{

    let i=0
let x=setInterval(() => {
    popup_div.style.display='none'
  i++
  if(i==1){
    clearInterval(x)
  }


      
}, 3000);

}



document.querySelector("#CartPg").addEventListener("click", function (){
    window.location.href = "../Cart/cart.html"
})

document.getElementById("loginPage").addEventListener("click", function(){
    window.location.href = "../login-signup/Sign-up.html"
})