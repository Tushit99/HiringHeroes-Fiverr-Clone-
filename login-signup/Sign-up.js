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

    let response = await fetch(`http://localhost:3000/user`,{


        method:"POST",
        body: JSON.stringify(send_this_data),
        headers: {
            'Content-Type': 'application/json'
        },

    });

    let data = await response.json()
    console.log(data);
}