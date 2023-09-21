var bx=document.getElementById("bx-menu");
var boxLink=document.querySelector(".box-link")
let bool=true;
bx.addEventListener("click",()=>{
    bool=!bool;
    bx.classList.toggle("bx-x");
    if(bool===false){
        boxLink.style.transform="translateX(50%)";
        boxLink.style.transition="transform .3s";
    }
    else{
        boxLink.style.transform="translateX(150%)";
        boxLink.style.transition="transform .3s";
    }
})
var rowBox=document.getElementById("row-box-p2");
var api1=
    [
        {
            image:"image/717YVQkI9LL._UF1000_1000_QL80_-removebg-preview.png",
            h1:"Mens",
            p:"10 items",
            i:`class="ri-arrow-right-line"`,
        },

        {
            image:"image/p5.png",
            h1:"Mens",
            p:"10 items",
            i:`class="ri-arrow-right-line"`,
        },
        
        {
            image:"image/p6.png",
            h1:"Mens",
            p:"10 items",
            i:`class="ri-arrow-right-line"`,
        },
        
        {
            image:"image/p7.png",
            h1:"Mens",
            p:"10 items",
            i:`class="ri-arrow-right-line"`,
        },
        
        {
            image:"image/p8.png",
            h1:"Mens",
            p:"10 items",
            i:`class="ri-arrow-right-line"`
        },
        
        {
            image:"image/p2.png",
            h1:"Mens",
            p:"10 items",
            i:`class="ri-arrow-right-line"`
        }, 
    ]
    var api2=[
        {
            imageNew:"image/anime unisex.png",
            h5:"Anime Unisex Long Steeve",
            span1:"$18.99",
            span2:"$16.69",
        },
        {
            imageNew:"image/p12.png",
            h5:"Harajuku Cartoon Anime",
            span1:"$15.99",
            span2:"$14.69",
        },
        {
            imageNew:"image/p13.png",
            h5:"Akame Ga Kill Leone",
            span1:"$14",
            span2:"$12",
        },
        {
            imageNew:"image/p11.png",
            h5:"Fan Art DragonBall Sweetshirt",
            span1:"$25.99",
            span2:"$20",
        },
    ]
    let text="";
    for(let i in api1){
        text+=`
        <div class="col-12 col-xl-4 col-lg- col-md-6 col-sm-12 pb-3">
            <div class="box-p2">
                <div class="box-text">
                    <h5>${api1[i]["h1"]}</h1>
                        <p>${api1[i]["p"]}</p>
                        <i ${api1[i]["i"]}></i>
                </div>
                <div class="box-img">
                    <img src="${api1[i]["image"]}">
                </div>
            </div>
        </div>
        `
        rowBox.innerHTML=text;
    }
    var newRow=document.getElementById("new-row");
    let news= "";
    for(let j in api2){
        news+=`
        <div class="col-12 col-xl-3 col-lg-6 col-md-6 col-sm-12 mb-3">
        <div class="new-main-box">
            <div class="new-box-img">
                <img src="${api2[j]["imageNew"]}">
            </div>
            <div class="new-box-text">
                <h5>${api2[j]["h5"]}</h5>
                <div class="price">
                    <del><span>${api2[j]["span1"]}</span></del>
                    <span>${api2[j]["span2"]}</span>
                </div>
                <a href="#" class="btn btn-danger form-control mt-4 text-light">Select Option</a>
            </div>
        </div>
        </div>
        `
        newRow.innerHTML=news;
    }
    var collection=document.getElementById("collection");
    collection.onclick=()=>{
        location.href="/SecondPage/index.html"
    }
const sr=ScrollReveal({
    distance:"40px",
    duration:1500,
    reset:true
})
sr.reveal(".body,.p2,.discount,New,#new-row,.contact",{delay:170, origin:"bottom"})
    
