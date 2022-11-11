
let card_detail=document.getElementById('card_number')
let expiry_inp=document.getElementById('expiry')
let cvv_inp=document.getElementById('cvv')
let first_name=document.getElementById('f_name')
let last_name=document.getElementById('l_name')
let pay_btn=document.getElementById('pay')
let pop_img=document.getElementById('pop_img')
let msg=document.getElementById('msg')
let msg_2=document.getElementById('msg-2')
let popup_div=document.getElementById('popup')
pay_btn.onclick=()=>{
    if(card_detail.value.length<16){

        pop_img.src='https://cdn0.iconfinder.com/data/icons/small-n-flat/24/678069-sign-error-64.png'
        msg.innerText="Invalid Card Details"
        msg_2.innerText=null
        popup_div.style.backgroundColor='#ffff'
        popup_div.style.border='5px solid #d9114e'
        popup_div.style.display='flex'
        Hide_popup()
    }else if(expiry_inp.value=='' || +expiry_inp.value.length<4){
        pop_img.src='https://cdn0.iconfinder.com/data/icons/small-n-flat/24/678069-sign-error-64.png'
        msg.innerText="Invalid Expiry Date"
        msg_2.innerText=null
        popup_div.style.display='flex'
        popup_div.style.backgroundColor='#ffff'
        popup_div.style.border='5px solid #d9114e'
        Hide_popup()
    }else 
    if(cvv_inp.value==''|| +cvv_inp.value.length<3){
        pop_img.src='https://cdn0.iconfinder.com/data/icons/small-n-flat/24/678069-sign-error-64.png'
        msg.innerText="Invalid CVV Details"
        msg_2.innerText=null
        popup_div.style.display='flex'
        popup_div.style.backgroundColor='#ffff'
        popup_div.style.border='5px solid #d9114e'
        Hide_popup()
    }else
    if(first_name.value==''|| last_name.value=='' ){
        pop_img.src='https://cdn0.iconfinder.com/data/icons/small-n-flat/24/678069-sign-error-64.png'
        msg.innerText="Please Enter a valid name!"
        msg_2.innerText=null
        popup_div.style.display='flex'
        popup_div.style.backgroundColor='#ffff'
        popup_div.style.border='5px solid #d9114e'
        Hide_popup()
    }else{
        pop_img.src='https://cdn0.iconfinder.com/data/icons/social-messaging-ui-color-shapes/128/check-circle-green-64.png'
        msg.innerText="Payment Successful"
        msg_2.innerText='A receipt was sent to your email address'
        popup_div.style.display='flex'
        popup_div.style.backgroundColor='#5edfa2'
        popup_div.style.border='1px solid black'
        Hide_popup()
    }
    
   

}

card_detail.oninput=()=>{
    console.log('anything')
    if(card_detail.value.length>16){
       card_detail.value= card_detail.value.substr(0,16)
    }
}

expiry_inp.oninput=()=>{
    if(expiry_inp.value.length>4){
        expiry_inp.value=expiry_inp.value.substr(0,4)
    }
}

cvv_inp.oninput=()=>{
    if(cvv_inp.value.length>3){
        cvv_inp.value=cvv_inp.value.substr(0,3)
    }
}


let cart_data=JSON.parse(localStorage.getItem('cart'))
let price_span=document.getElementById('price')
let total_span=document.querySelector('.total')
let total_span_2=document.getElementById('total-2')
let promo_inp=document.getElementById('promo')
let apply_btn=document.getElementById('apply')
let img=document.getElementById('image')


const Total=()=>{
    let sum=0
    let no_of_item=0
    cart_data.forEach((el)=>{
        sum=sum+(+el.price)
        img.src=el.image
    })
    console.log(sum)

    price_span.innerText=sum;

    apply_btn.onclick=()=>{
        
    if(promo_inp.value=='FIRSTHERO'){
        sum=sum-(20/100)*sum
        total_span.innerText=sum+265.42
        total_span_2.innerText=Math.round(sum+265.42)

        pop_img.src='https://cdn3.iconfinder.com/data/icons/wedding-89/64/Celebration-congratulation-party-anniversary-64.png'
        msg.innerText="Hurray! You Got 20% Discount"
        msg_2.innerText=null
        popup_div.style.display='flex'
        popup_div.style.backgroundColor='#5edfa2'
        popup_div.style.border='1px solid black'
        Hide_popup()
    }else{
        total_span.innerText=sum+265.42
        total_span_2.innerText=Math.round(sum+265.42)
        pop_img.src='https://cdn0.iconfinder.com/data/icons/small-n-flat/24/678069-sign-error-64.png'
        msg.innerText="Oops! Invalid Coupon Code"
        msg_2.innerText=null
        popup_div.style.display='flex'
        popup_div.style.backgroundColor='#ffff'
        popup_div.style.border='5px solid #d9114e'
        Hide_popup()

    }

    }


    total_span.innerText=sum+265.42
    total_span_2.innerText=Math.round(sum+265.42)
}

Total()


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




