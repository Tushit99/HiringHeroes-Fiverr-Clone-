//************INCOMPLETE *******************************/

const getAllData=async()=>{
    let res=await fetch('http://localhost:8080/fonts')
    let data=await res.json()

    Create_btn(data.length)
}

const Create_btn=(total_data)=>{

    let no_of_btn=Math.ceil(total_data/12)
    let Paginate_btn_div=document.getElementById('p_btn')

    for(let i=1;i<=no_of_btn;i++){
        let btn =document.createElement('button')
        btn.innerText=i

        Paginate_btn_div.append(btn)

    }
}

const getData=async(page_id)=>{
    let res=await fetch(`http://localhost:8080/fonts?_page=${page_id}&_limit=12`)
    let data=await res.json()

    appendData(data)
}


const appendData=(data)=>{
    let container=document.getElementById('container')
    container.innerHTML=null;

    data.forEach((el)=>{
        let card=document.createElement('div')

        let image=document.createElement('img')
        image.src=el.image

        let name=document.createElement('p')
        name.innerText=el.name;

        let rating=document.createElement('p')
        rating.innerText=el.rating

        let show_price=document.createElement('p')
        show_price.innerText=el.show_price;

        


    })


}