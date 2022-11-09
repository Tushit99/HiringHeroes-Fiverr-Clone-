//************Complete*******************************/

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

        btn.onclick=()=>{
            getData(i)
        }

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
    let flag=false

    data.forEach((el)=>{
        let card=document.createElement('div')

        let image=document.createElement('img')
        image.src=el.image

        let name=document.createElement('p')
        name.innerText=el.name;


        let rating_div=document.createElement('div')
        rating_div.className="rating_div"

        let rating=document.createElement('p')
        let star=document.createElement('img')
        star.className='star'
        star.src='https://cdn1.iconfinder.com/data/icons/vote-reward-7/24/award_reward_rate_rating_star_empty-64.png'

        rating.innerText=el.rating

        rating_div.append(star,rating)

        let wishlist_div=document.createElement('div')
        wishlist_div.className='wishlist_div'

        let wishlist_img=document.createElement('img')
        wishlist_img.src='https://cdn4.iconfinder.com/data/icons/evil-icons-user-interface/64/heart-64.png'
         
        wishlist_img.className='wishlist_img'
        wishlist_img.onclick=()=>{
            if(flag==false){
                wishlist_img.src='https://cdn4.iconfinder.com/data/icons/twitter-29/512/166_Heart_Love_Like_Twitter-64.png'
                flag=true
            }
            else{
                wishlist_img.src='https://cdn4.iconfinder.com/data/icons/evil-icons-user-interface/64/heart-64.png'
                flag=false;
            }
           
        }


        let show_price=document.createElement('p')
        show_price.innerText=el.show_price;

        wishlist_div.append(wishlist_img,show_price)


        card.append(image,name,rating_div,wishlist_div)

        container.append(card)

    })

}

getData(1)
getAllData()