

import {navbar} from "../components/navbar.js"
let nvd=document.querySelector("#main");
nvd.innerHTML=navbar()
import { footer } from '../components/footer.js';
let footer_div = document.getElementById('footer');
// console.log(footer())
footer_div.innerHTML = footer();
let lsd = JSON.parse(localStorage.getItem("dproducts"));
let cartitem = JSON.parse(localStorage.getItem("cart_product_info")) || [];


const getdata = async () => {
    try {
        let res = await fetch(`db.json`);
        let data = await res.json()
      //console.log(data.posts)
      localStorage.setItem("dproducts",JSON.stringify(data.posts))
      //console.log(lsd)
    } catch (error) {
        console.log(error)
    }
}

getdata()

let append_div = document.getElementById("dappend_div")
const Append_Produts = (data,location) => {
    let total_product_show = document.getElementById("dtotal_count_product");
    total_product_show.innerHTML=data.length+"    Products"
    location.innerHTML = null
    
    data.forEach((el) => {
      



        let one_product_div = document.createElement("div");
      one_product_div.className = "done_product_div";



        let img_div = document.createElement("div");
      img_div.className = "dimg_div";
      
        let img = document.createElement("img");
        img.src = el.mainimg;
        img_div.append(img);
        img_div.addEventListener("click", () => {
          
          window.location.href = "product_info.html"
          let clicked_product_info_arr = []
          clicked_product_info_arr.push(el)
          //console.log(clicked_product_info_arr)
          localStorage.setItem("clicked_product_info",JSON.stringify(clicked_product_info_arr))
        })

        let price_div = document.createElement("div");
        price_div.className="dprice_div"
        let price = document.createElement("p");
      price.innerText = "₹" + el.price;
      
        let pricecut_lable = document.createElement("label");
        pricecut_lable.innerHTML = "<del>₹5000</del>"
        price_div.append(price,pricecut_lable);

        let name_div = document.createElement("div");
        let name = document.createElement("p")
        name.innerText = el.name;
        name_div.className = "dname_div";
        name_div.append(name);

        let combo_of_size_color_div = document.createElement("div");
        combo_of_size_color_div.id="dcombo_of_size_color_div"

        let color_div = document.createElement("div");
        let color = document.createElement("p")
        color.innerText = el.color;
        let color_img=document.createElement("img");
        color_img.src=el.mainimg
        color_div.append(color_img,color);
        let size_div = document.createElement("div");
        let size = document.createElement("p")
        size.innerText = "size  "+el.size
        size_div.append(size)
        combo_of_size_color_div.append(color_div,size_div)
        let addtocart_btn_div = document.createElement("div");
        let addtocart_btn = document.createElement("button");
        addtocart_btn.innerHTML = "ADD TO BASKET";
        addtocart_btn.style.cursor = "pointer";
        addtocart_btn_div.append(addtocart_btn);
        addtocart_btn.className = "addtocart_btn";
        addtocart_btn.addEventListener("click", () => {
          cartitem.push(el)
       
          localStorage.setItem("cart_product_info",JSON.stringify(cartitem))
          //console.log(cartitem)
        });
        
        // let random_div = document.createElement("div");
        // this is optional div 
      
        one_product_div.append(img_div,price_div,name_div,combo_of_size_color_div,addtocart_btn_div)
        location.append(one_product_div)
        
    });
}


Append_Produts(lsd, append_div);


document.getElementById("dsorting_div").addEventListener("change",sortname)

function sortname() {
  let selcted = document.querySelector("#dsort").value;
  if (selcted === "Revelence") {
    Append_Produts(lsd, append_div);
  }else if (selcted === "Low") {
    let products_arr=lsd.sort(function (a, b) {
          
      if (a.price > b.price) return 1;
      if (a.price < b.price) return -1;
      return 0;
    });
   
   
    Append_Produts(products_arr, append_div);
  } else if (selcted === "High") {
    let products_arr=lsd.sort(function (a, b) {
      console.log(a.price)
      if (a.price > b.price) return -1;
      if (a.price < b.price) return 1;
      return 0;
            
      return 0;
           
    });
    // console.log(lsd)
    Append_Produts(products_arr, append_div);
  } else if (selcted === "Alphabetical") {
    let products_arr=lsd.sort(function (a, b) {
          
      if (a.name > b.name) return 1;
      if (a.name < b.name) return -1;
      return 0;
       
    });
    
    
    Append_Produts(products_arr, append_div);
  }
}


// const selected = document.querySelector(".selected");
// const optionsContainer = document.querySelector(".options-container");

// const optionsList = document.querySelectorAll(".option");

// selected.addEventListener("click", () => {
//   optionsContainer.classList.toggle("active");
// });

// optionsList.forEach((o) => {
//   o.addEventListener("change", () => {
//     selected.innerHTML = o.querySelector("label").innerHTML;
//       let selected_value = selected.innerHTML;
//       if (selected_value) {
//           let filterdata = lsd.filter(function (el) {
        
//               return el.color === selected_value
              
//           })
//           if (filterdata.length === 0) {
//             alert("NO Result Found")
//         }
//         Append_Produts(filterdata, append_div);
//       }
//     optionsContainer.classList.remove("active");
//   });
// });

let bt = document.querySelector(".selected");
  bt.addEventListener("click", () => {
    const selected = document.querySelector(".selected");
    const optionsContainer = document.querySelector(".options-container");

    const optionsList = document.querySelectorAll(".option");

    selected.addEventListener("click", () => {
      optionsContainer.classList.toggle("active");
    });

    optionsList.forEach((o) => {
      o.addEventListener("change", () => {
        selected.innerHTML = o.querySelector("label").innerHTML;
        let selected_value = selected.innerHTML;
        if (selected_value) {
          let filterdata = lsd.filter(function (el) {
            return el.color === selected_value;
          });
          if (filterdata.length === 0) {
            alert("NO Result Found");
          }
          Append_Produts(filterdata, append_div);
        }
        optionsContainer.classList.remove("active");
      });
    });
  });
  let btns = document.querySelector(".selected2");
  btns.addEventListener("click", () => {
    const selected2 = document.querySelector(".selected2");
    const optionsContainer2 = document.querySelector(".options-container2");

    const optionsList2 = document.querySelectorAll(".option2");

    selected2.addEventListener("click", () => {
      optionsContainer2.classList.toggle("active");
    });

    optionsList2.forEach((k) => {
      k.addEventListener("click", () => {
        selected2.innerHTML = k.querySelector("label").innerHTML;
        let selected_va = selected2.innerHTML;

        if (selected_va) {
          let filterdata = lsd.filter(function (el) {
           
            return el.fabric === selected_va;
          });
          if (filterdata.length === 0) {
            alert("NO Result Found");
            }
            
          Append_Produts(filterdata, append_div);
        }
        optionsContainer2.classList.remove("active");
      });
    });
  });


  let btn3 = document.querySelector(".selected3");
  btn3.addEventListener("click", () => {
    const selected3 = document.querySelector(".selected3");
    const optionsContainer3 = document.querySelector(".options-container3");

    const optionsList3 = document.querySelectorAll(".option3");

    selected3.addEventListener("click", () => {
      optionsContainer3.classList.toggle("active");
    });

    optionsList3.forEach((k) => {
      k.addEventListener("click", () => {
        selected3.innerHTML = k.querySelector("label").innerHTML;
        let selected_va = selected3.innerHTML;

        if (selected_va) {
          let filterdata = lsd.filter(function (el) {
           
            return el.brand === selected_va;
          });
          if (filterdata.length === 0) {
            alert("NO Result Found");
            }
            
          Append_Produts(filterdata, append_div);
        }
        optionsContainer3.classList.remove("active");
      });
    });
  });