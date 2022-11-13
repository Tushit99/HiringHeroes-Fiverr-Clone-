// global variable  
 
let opt_data = "Logo"; 

// logo fetching data function
logodata();
async function logodata() {
  try {
    let res = await fetch(`http://localhost:8080/${opt_data}`);
    let data = await res.json(); 
    appendData(data); 
  } catch (err) {
    console.log(err);
  }  
}

//   append function
function appendData(arr) {
  document.getElementById("data_append").innerHTML = "";
  arr.forEach((e) => {
    let d1 = document.createElement("div");

    let image = document.createElement("img");
    image.src = e.image;

    let name = document.createElement("h3");
    name.innerText = e.name;

    let show_price = document.createElement("p");
    show_price.innerText = e.show_price;

    let rating = document.createElement("p");
    rating.innerText = e.rating;

    let del = document.createElement("button");
    del.innerText = "Delete"; 
    del.className = "del_bt"
    del.addEventListener("click", function () {
      delme(e.id);
    });

    d1.append(image, name, show_price, del);
    document.getElementById("data_append").append(d1);
  });
}

// ================================
//   delete function
async function delme(id) {
  let res = await fetch(`http://localhost:8080/${opt_data}/${id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  });
  logodata();
}

//   ==============================
// sort Low to high
document.getElementById("low").addEventListener("click", function () {
  sortLow();
});

async function sortLow() {
  try {
    let res = await fetch(
      `http://localhost:8080/${opt_data}?_sort=price&_order=asc`
    );
    let data = await res.json();
    //   console.log(data);
    appendData(data);
  } catch (err) {
    console.log(err);
  }
}

//  sort high to low
document.getElementById("high").addEventListener("click", function () {
  sortHigh();
});

async function sortHigh() {
  try {
    let res = await fetch(
      `http://localhost:8080/${opt_data}?_sort=price&_order=desc`
    );
    let data = await res.json();
    //   console.log(data);
    appendData(data);
  } catch (err) {
    console.log(err);
  }
}
// ===========================
//  price less than and more than
document.getElementById("priceSort").addEventListener("change", function () {
  let sel = document.getElementById("priceSort").value;
  if (sel == "more") {
    priceMorethan(sel);
  } else {
    priceless(sel);
  }
});

//   price less than
async function priceless(sel) {
  try {
    let res = await fetch(`http://localhost:8080/${opt_data}?price_lte=${sel}`);
    let data = await res.json();
    //   console.log(data);
    appendData(data);
  } catch (err) {
    console.log(err);
  }
}

//   price more than
async function priceMorethan(sel) {
  try {
    let res = await fetch(`http://localhost:8080/${opt_data}?price_gte=10000`);
    let data = await res.json();
    //   console.log(data);
    appendData(data);
  } catch (err) {
    console.log(err);
  }
}

// ===============================
// option To change localhost data of Logo

function optionToLogo() {
  opt_data = "Logo";
  logodata();
}

function optionTofont() {
  opt_data = "fonts";
  logodata();
}

// ===============================
// Saving data ;

document.getElementById("create_btn").addEventListener("click", goon ); 

function goon(){
    let na = document.getElementById("name").value;
    let img = document.getElementById("image").value;
    let show = document.getElementById("Show_price").value;
    let pri = document.getElementById("price").value;
    let rating = document.getElementById("rating").value;
    if(na=="" || img=="" || show=="" || pri=="" || rating=="" ){
        swal({
            title: "Fill all !",
            text: "Please fill all required fields!",
            icon: "info",
            button: "OK!",
          });
    }
    else{
        SaveDataType(); 
    }
}

async function SaveDataType() {
  let na = document.getElementById("name").value;
  let img = document.getElementById("image").value;
  let Show = document.getElementById("Show_price").value;
  let pri = document.getElementById("price").value;
  let rating = document.getElementById("rating").value;
  let Data_type = document.getElementById("Data_type").value;

  let obj = {
    id: Data.now(),
    name: na,
    image: img,
    show_price: Show,
    price: pri,
    rating: rating,
  };

  let res = await fetch(`http://localhost:8080/${Data_type}`, {
    method: "POST",
    body: JSON.stringify(obj),
    headers: {
      "Content-Type": "application/json",
    },
  });
}
