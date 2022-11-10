import { navbar,navbar2 } from './components/navbar.js';
import { footer,footer2 } from './components/footer.js'

let nav1 = document.getElementById("header1");
nav1.innerHTML = navbar();
let nav2 = document.getElementById("nav");
nav2.innerHTML = navbar2();
let foot = document.querySelector("#footer");
foot.innerHTML = footer();
let foot2 = document.querySelector("#last");
foot2.innerHTML = footer2();




window.addEventListener("scroll", function(){
    if(window.pageYOffset < 96.5){
       //document.querySelector("#header2").style.visibility="hidden";
       document.querySelector("#nav").style.display="none"
        document.querySelector("#header1").style.backgroundColor="#ac3f5b";
        document.querySelector(".input").style.visibility="hidden";
        
    }else{
        //document.querySelector("#header2").style.visibility="visible";
        document.querySelector("#nav").style.display="block"
       //
       //document.querySelector("#nav").style.position="relative"
       document.querySelector("#nav").style.position="sticky"
       document.querySelector("#nav").style.top = "89px"
        document.querySelector("#header1").style.backgroundColor="white";
        document.querySelector(".input").style.visibility="visible";
    }
    
});




//let carousel_div = document.querySelector("#carousel");

// let carousel = () => {
//     //	https://img1.hotstarext.com/image/upload/f_auto,t_web_m_1x/sources/r1/cms/prod/4252/1364252-h-e470328888ed
//     //	https://img1.hotstarext.com/image/upload/f_auto,t_web_m_1x/sources/r1/cms/prod/5361/1395361-h-a9af817e06df
//     //https://fiverr-res.cloudinary.com/q_auto,f_auto,w_1400,dpr_1.0/v1/attachments/generic_asset/asset/50218c41d277f7d85feeaf3efb4549bd-1599072608122/bg-signup-1400-x1.png

//     let imgArr = [`https://fiverr-res.cloudinary.com/q_auto,f_auto,w_1400,dpr_1.0/v1/attachments/generic_asset/asset/50218c41d277f7d85feeaf3efb4549bd-1599072608122/bg-signup-1400-x1.png`,`https://img1.hotstarext.com/image/upload/f_auto,t_web_m_1x/sources/r1/cms/prod/5361/1395361-h-a9af817e06df`,`https://img1.hotstarext.com/image/upload/f_auto,t_web_m_1x/sources/r1/cms/prod/4252/1364252-h-e470328888ed`];

//     let imgElement = document.createElement('img');
//     imgElement.src = imgArr[0];
//     carousel_div.append(imgElement);

//     let i = 1;
//     setInterval(() => {
//         if(i==imgArr.length){
//             i=0;
//         }
//         imgElement.src = imgArr[i];
//         carousel_div.append(imgElement);
//         i++;
//     },5000)
// }
// carousel()

