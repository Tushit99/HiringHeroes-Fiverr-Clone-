let card = document.getElementById("card");

function openRegister(){
    card.style.transform ="rotateY(-180deg)"
}

function openLogin(){
    card.style.transform ="rotateY(0deg)"
}


let form = document.getElementById('form');
form.addEventListener('submit',function(){
    addDetails(event);
});


const addDetails = async (event)=>{
    event.preventDefault();

    let form = document.getElementById("form");
    
    let name = form.name.value;
    let email = form.email.value;
    let password = form.password.value;


    const send_this_data ={
        name,
        email,
        password,
    };

    let response = await fetch(`http://localhost:8080/user`,{


        method:"POST",
        body: JSON.stringify(send_this_data),
        headers: {
            'Content-Type': 'application/json'
        },

    });

    let data = await response.json()
    console.log(data);
}

let login_form = document.getElementById('login_form');
login_form.addEventListener('submit',function(){
    getData(event)
})


let admin =[
    {
        "email": "tushit@gmail.com",
        "password": "masai@1234"
    },
    {
        "email": "anik@gmail.com",
        "password": "masai@1234"
    },
    {
        "email": "faisal@gmail.com",
        "password": "masai@1234"
    },
    {
        "email": "ritik@gmail.com",
        "password": "masai@1234"
    }
]
const getData =async (event)=>{

    event.preventDefault();
    let email = login_form.login_email.value;

    let password = login_form.login_password.value;

    let user = false;
    data.filter(function(e){
        if(e.email == email && e.password==password){
            user = true
        }
    })
    let res = await fetch(' http://localhost:8080/user')

    let details = await res.json();
    console.log(details)
    
    if(password = "masai@1234"){
        admin.filter((e)=>{
            if(e.email === email){
                console.log("OK");
                // window.location.href=""
            }
        })
    }else if(user == true) {
        // window.location.href=""
    }else{
        alert("invalid user")
    }
}