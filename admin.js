let btn=document.getElementById('submit')
let form=document.querySelector('form')

btn.onclick=()=>{
    let obj={
        name:form.name.value,
        image:form.image.value,
        show_price:form.show_price.value,
        price:+form.price.value,
        rating:+form.rating.value,
    }
   

    postData(obj)
}


const postData=async(obj)=>{
    
    let res=await fetch('http://localhost:8080/business',{
        method:'POST',
        body:JSON.stringify(obj),
        headers:{
            'Content-Type':'application/json'
        }
    })
}