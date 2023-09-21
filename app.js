var bxMenu=document.getElementById("bx-menu");
var bxCate=document.querySelector(".box-cate");
var closePad=document.querySelector(".close-pad")
var shopping=document.getElementById("shopping");
var boxCart=document.querySelector(".box-cart");

//Bar Here
bxMenu.addEventListener("click",()=>{
    bxCate.style.transform="translateX(0%)";
    bxCate.style.transition=".3s";
    boxCart.style.transform="translateX(350%)"
    closePad.style.display="block";
})
closePad.addEventListener("click",()=>{
    bxCate.style.transform="translateX(-110%)";
    bxCate.style.transition=".3s";
    closePad.style.display="none";
    boxCart.style.transform="translateX(350%)"
})

//API of each Items Here
const api=[
    {
        nextProduct:"first",
        category:"hoodie",
        image:"b3-removebg-preview.png",
        price:"$11",
        h5:"FADDY NATIVE Naruto Anime Sensei 07 Chidori"
    },
    {
        nextProduct:"first",           
        category:"hoodie",
        image:"d4-removebg-preview.png",
        price:"$11",
        h5:"FADDY NATIVE Naruto Anime Sensei 07 Chidori"
    },
    {
        nextProduct:"first",
        category:"tShirt",
        image:"a6-removebg-preview.png",
        price:"$11",
        h5:"FADDY NATIVE Naruto Anime Sensei 07 Chidori"
    },
    {
        nextProduct:"first",
        category:"hoodie",
        image:"b4-removebg-preview.png",
        price:"$11",
        h5:"FADDY NATIVE Naruto Anime Sensei 07 Chidori"
    },
    {
        nextProduct:"first",
        category:"hoodie",
        image:"b2-removebg-preview.png",
        price:"$11",
        h5:"FADDY NATIVE Naruto Anime Sensei 07 Chidori"
    },
    {
        nextProduct:"first",
        category:"tShirt",
        image:"a8-removebg-preview.png",
        price:"$11",
        h5:"FADDY NATIVE Naruto Anime Sensei 07 Chidori"
    },
    {
        nextProduct:"first",
        category:"tShirt",
        image:"a5-removebg-preview.png",
        price:"$11",
        h5:"FADDY NATIVE Naruto Anime Sensei 07 Chidori"
    },
    {
        nextProduct:"first",
        category:"hoodie",
        image:"b1-removebg-preview.png",
        price:"$11",
        h5:"FADDY NATIVE Naruto Anime Sensei 07 Chidori"
    },
    {
        nextProduct:"first",
        category:"tShirt",
        image:"a9-removebg-preview.png",
        price:"$11",
        h5:"FADDY NATIVE Naruto Anime Sensei 07 Chidori"
    },
    {
        nextProduct:"first",
        category:"tShirt",
        image:"p3.png",
        price:"$11",
        h5:"FADDY NATIVE Naruto Anime Sensei 07 Chidori"
    },
    {
        nextProduct:"first",
        category:"tShirt",
        image:"a10-removebg-preview.png",
        price:"$11",
        h5:"FADDY NATIVE Naruto Anime Sensei 07 Chidori"
    },
    {
        nextProduct:"first",
        category:"sports",
        image:"c1-removebg-preview.png",
        price:"$11",
        h5:"FADDY NATIVE Naruto Anime Sensei 07 Chidori"
    },
    {
        nextProduct:"first",
        category:"sports",
        image:"c2-removebg-preview.png",
        price:"$11",
        h5:"FADDY NATIVE Naruto Anime Sensei 07 Chidori"
    },
    {
        nextProduct:"first",
        category:"sports",
        image:"c5-removebg-preview.png",
        price:"$11",
        h5:"FADDY NATIVE Naruto Anime Sensei 07 Chidori"
    },
    {
        nextProduct:"first",
        category:"hoodie",
        image:"d1-removebg-preview.png",
        price:"$11",
        h5:"FADDY NATIVE Naruto Anime Sensei 07 Chidori"
    },
    {
        nextProduct:"first",
        category:"hoodie",
        image:"d2-removebg-preview.png",
        price:"$11",
        h5:"FADDY NATIVE Naruto Anime Sensei 07 Chidori"
    },
    {
        nextProduct:"first",
        category:"sports",
        image:"c6-removebg-preview.png",
        price:"$11",
        h5:"FADDY NATIVE Naruto Anime Sensei 07 Chidori"
    },
    {
        nextProduct:"first",
        category:"sports",
        image:"c7-removebg-preview.png",
        price:"$11",
        h5:"FADDY NATIVE Naruto Anime Sensei 07 Chidori"
    },
    {
        nextProduct:"first",
        category:"hoodie",
        image:"d3-removebg-preview.png",
        price:"$11",
        h5:"FADDY NATIVE Naruto Anime Sensei 07 Chidori"
    },
    {
        nextProduct:"first",
        category:"sports",
        image:"c8-removebg-preview.png",
        price:"$11",
        h5:"FADDY NATIVE Naruto Anime Sensei 07 Chidori"
    },
    {
        nextProduct:"first",
        category:"sports",
        image:"c9-removebg-preview.png",
        price:"$11",
        h5:"FADDY NATIVE Naruto Anime Sensei 07 Chidori"
    },
    {
        nextProduct:"first",
        category:"hoodie",
        image:"d5-removebg-preview.png",
        price:"$11",
        h5:"FADDY NATIVE Naruto Anime Sensei 07 Chidori"
    },
    {
        nextProduct:"first",
        category:"hoodie",
        image:"d6-removebg-preview.png",
        price:"$11",
        h5:"FADDY NATIVE Naruto Anime Sensei 07 Chidori"
    },
    {
        nextProduct:"first",
        category:"hoodie",
        image:"d7-removebg-preview.png",
        price:"$11",
        h5:"FADDY NATIVE Naruto Anime Sensei 07 Chidori"
    },
    {
        nextProduct:"first",
        category:"sports",
        image:"c10-removebg-preview.png",
        price:"$11",
        h5:"FADDY NATIVE Naruto Anime Sensei 07 Chidori"
    },
]
const api2=[
    {
        nextProduct:"second",
        category:"sports",
        image:"c1-removebg-preview.png",
        price:"$11",
        h5:"FADDY NATIVE Naruto Anime Sensei 07 Chidori"
    },
    {
        nextProduct:"second",
        category:"sports",
        image:"c2-removebg-preview.png",
        price:"$11",
        h5:"FADDY NATIVE Naruto Anime Sensei 07 Chidori"
    },
    {
        nextProduct:"second",
        category:"sports",
        image:"c5-removebg-preview.png",
        price:"$11",
        h5:"FADDY NATIVE Naruto Anime Sensei 07 Chidori"
    },
    {
        nextProduct:"second",
        category:"sports",
        image:"c6-removebg-preview.png",
        price:"$11",
        h5:"FADDY NATIVE Naruto Anime Sensei 07 Chidori"
    },
    {
        nextProduct:"second",
        category:"sports",
        image:"c7-removebg-preview.png",
        price:"$11",
        h5:"FADDY NATIVE Naruto Anime Sensei 07 Chidori"
    },
    {
        nextProduct:"second",
        category:"sports",
        image:"c8-removebg-preview.png",
        price:"$11",
        h5:"FADDY NATIVE Naruto Anime Sensei 07 Chidori"
    },
    {
        nextProduct:"second",
        category:"sports",
        image:"c9-removebg-preview.png",
        price:"$11",
        h5:"FADDY NATIVE Naruto Anime Sensei 07 Chidori"
    },
    {
        nextProduct:"second",
        category:"hoodie",
        image:"d6-removebg-preview.png",
        price:"$11",
        h5:"FADDY NATIVE Naruto Anime Sensei 07 Chidori"
    },
    {
        nextProduct:"second",
        category:"sports",
        image:"c10-removebg-preview.png",
        price:"$11",
        h5:"FADDY NATIVE Naruto Anime Sensei 07 Chidori"
    },
    {
        nextProduct:"second",
        category:"hoodie",
        image:"d1-removebg-preview.png",
        price:"$11",
        h5:"FADDY NATIVE Naruto Anime Sensei 07 Chidori"
    },
    {
        nextProduct:"second",
        category:"hoodie",
        image:"d2-removebg-preview.png",
        price:"$11",
        h5:"FADDY NATIVE Naruto Anime Sensei 07 Chidori"
    },
    {
        nextProduct:"second",
        category:"hoodie",
        image:"d3-removebg-preview.png",
        price:"$11",
        h5:"FADDY NATIVE Naruto Anime Sensei 07 Chidori"
    },
    {
        nextProduct:"second",
        category:"hoodie",
        image:"d4-removebg-preview.png",
        price:"$11",
        h5:"FADDY NATIVE Naruto Anime Sensei 07 Chidori"
    },
    {
        nextProduct:"second",
        category:"hoodie",
        image:"d5-removebg-preview.png",
        price:"$11",
        h5:"FADDY NATIVE Naruto Anime Sensei 07 Chidori"
    },
]
const api3=[
    {
        nextProduct:"third",
        category:"sports",
        image:"c1-removebg-preview.png",
        price:"$11",
        h5:"FADDY NATIVE Naruto Anime Sensei 07 Chidori"
    },
    {
        nextProduct:"third",
        category:"sports",
        image:"c1-removebg-preview.png",
        price:"$11",
        h5:"FADDY NATIVE Naruto Anime Sensei 07 Chidori"
    },
    {
        nextProduct:"third",
        category:"sports",
        image:"c1-removebg-preview.png",
        price:"$11",
        h5:"FADDY NATIVE Naruto Anime Sensei 07 Chidori"
    },
    {
        nextProduct:"third",
        category:"sports",
        image:"c1-removebg-preview.png",
        price:"$11",
        h5:"FADDY NATIVE Naruto Anime Sensei 07 Chidori"
    },
    {
        nextProduct:"third",
        category:"sports",
        image:"c1-removebg-preview.png",
        price:"$11",
        h5:"FADDY NATIVE Naruto Anime Sensei 07 Chidori"
    },
    {
        nextProduct:"third",
        category:"sports",
        image:"c1-removebg-preview.png",
        price:"$11",
        h5:"FADDY NATIVE Naruto Anime Sensei 07 Chidori"
    },
    {
        nextProduct:"third",
        category:"sports",
        image:"c1-removebg-preview.png",
        price:"$11",
        h5:"FADDY NATIVE Naruto Anime Sensei 07 Chidori"
    },
    {
        nextProduct:"third",
        category:"sports",
        image:"c1-removebg-preview.png",
        price:"$11",
        h5:"FADDY NATIVE Naruto Anime Sensei 07 Chidori"
    },
    {
        nextProduct:"third",
        category:"sports",
        image:"c1-removebg-preview.png",
        price:"$11",
        h5:"FADDY NATIVE Naruto Anime Sensei 07 Chidori"
    },
    {
        nextProduct:"third",
        category:"sports",
        image:"c1-removebg-preview.png",
        price:"$11",
        h5:"FADDY NATIVE Naruto Anime Sensei 07 Chidori"
    },
    {
        nextProduct:"third",
        category:"sports",
        image:"c1-removebg-preview.png",
        price:"$11",
        h5:"FADDY NATIVE Naruto Anime Sensei 07 Chidori"
    },
]

//Show Product Here
const products=document.getElementById("products")
window.addEventListener("DOMContentLoaded",()=>{
    const showingProducts=DisplayProduct();
    products.innerHTML=showingProducts;
});
    const allbtns=document.querySelectorAll(".option");
    const btnContain=document.querySelector(".btnContain");
    btnContain.addEventListener("click",(e)=>{
        const btnId=e.target.dataset.id;
        console.log(btnId);
        if(btnId){
            allbtns.forEach(btn=>{
                btn.classList.remove("active");
                e.target.classList.add("active");
            })
        }
    });
    allbtns.forEach(btn=>{
        btn.addEventListener("click",(e)=>{
            const id= e.currentTarget.dataset.id;
            const filterMenu=api.filter(item=>{
                return item.category==id;
            });
            const displayMenu=filterMenu.map(p=>{
                return `<div class="card col-12 col-xl-3 col-lg-4 col-md-6 col-sm-12 mb-3">
            <div class="main-box-item">
                <div class="box-image">
                    <img src="images/${p.image}">
                    <div class="price">
                        <span>${p.price}</span>
                    </div>
                </div>
                <div class="box-text">
                    <h6>${p.h5}</h6>
                    <div class="select btn form-control mt-2 text-white">Add To Chart</div>
                </div>
            </div>
        </div>`
        }).join("");
        if(id=="all"){
            products.innerHTML=DisplayProduct();
        }
        else{   
            products.innerHTML=displayMenu;
        }
        })
    })

    //Function of each Products Here
    const DisplayProduct=()=>{
        return api.map(p=>{
            return `<div class="card col-12 col-xl-3 col-lg-4 col-md-6 col-sm-12 mb-3">
            <div class="main-box-item">
                <div class="box-image">
                    <img src="images/${p.image}">
                    <div class="price">
                        <span>${p.price}</span>
                    </div>
                </div>
                <div class="box-text">
                    <h6>${p.h5}</h6>
                    <div class="select btn form-control mt-2 text-white">Add To Chart</div>
                </div>
            </div>
        </div>`
        }).join("");
    }
    const DisplaySecondProduct=()=>{
        return api2.map(p=>{
            return `<div class="card col-12 col-xl-3 col-lg-4 col-md-6 col-sm-12 mb-3">
            <div class="main-box-item">
                <div class="box-image">
                    <img src="images/${p.image}">
                    <div class="price">
                        <span>${p.price}</span>
                    </div>
                </div>
                <div class="box-text">
                    <h6>${p.h5}</h6>
                    <div class="select btn form-control mt-2 text-white">Add To Chart</div>
                </div>
            </div>
        </div>`
        }).join("");
    }
    const DisplayThirdProduct=()=>{
        return api3.map(p=>{
            return `<div class="card col-12 col-xl-3 col-lg-4 col-md-6 col-sm-12 mb-3">
            <div class="main-box-item">
                <div class="box-image">
                    <img src="images/${p.image}">
                    <div class="price">
                        <span>${p.price}</span>
                    </div>
                </div>
                <div class="box-text">
                    <h6>${p.h5}</h6>
                    <div class="select btn form-control mt-2 text-white">Add To Chart</div>
                </div>
            </div>
        </div>`
        }).join("");
    }

    //Swap Products Here
    const swapItem=document.querySelector(".swap-items");
    const allBtnSwap=document.querySelectorAll(".option2");
    swapItem.addEventListener('click',e=>{
        const nextPage=e.target.dataset.id;
        console.log(nextPage);
        if(nextPage){
            allBtnSwap.forEach(btn=>{
                btn.classList.remove("active");
                e.target.classList.add("active");
            })
        }
    })
    allBtnSwap.forEach(btn=>{
        btn.addEventListener('click',(e)=>{
            const secondId=e.currentTarget.dataset.id;
            const filterSecondMenu=api2.filter(item=>{
                return item.nextProduct==secondId;
            })
            if(secondId=="first"){
                products.innerHTML=DisplayProduct();
                btnContain.style.display="flex";
            }
            else if(secondId=="second"){
                products.innerHTML=DisplaySecondProduct();
                btnContain.style.display="none";
                
            }
            else if(secondId=="third"){
                products.innerHTML=DisplayThirdProduct();
                btnContain.style.display="none";
            }
        })
    })
    //Search Products Here!
    document.getElementById("search-input").addEventListener("keyup",()=>{
        let searchInput=document.getElementById("search-input").value;
        const filterMenu=api.filter(item=>{
            if(item.category.includes(searchInput)){
                return item.category;
            }
        });
        const displayMenu=filterMenu.map(p=>{
            return `<div class="card col-12 col-xl-3 col-lg-4 col-md-6 col-sm-12 mb-3">
        <div class="main-box-item">
            <div class="box-image">
                <img src="images/${p.image}">
                <div class="price">
                    <span>${p.price}</span>
                </div>
            </div>
            <div class="box-text">
                <h6>${p.h5}</h6>
                <div class="select btn form-control mt-2 text-white">Add To Chart</div>
            </div>
        </div>
    </div>`
    }).join("");
        if(this.value==""){
            products.innerHTML=DisplayProduct();
        }
        else{
                if(filterMenu==""){
                    products.innerHTML="";
                }
                else{
                    products.innerHTML=displayMenu;
                }
        }

    })  