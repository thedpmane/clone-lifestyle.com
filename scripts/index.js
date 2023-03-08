import { navbar } from "../components/navbar.js"
let nvd = document.querySelector("#main");
nvd.innerHTML = navbar()


import { footer } from '../components/footer.js';

let footer_div = document.getElementById('footer');
footer_div.innerHTML = footer();
const getdata = async () => {
    try {
        let res = await fetch(`db.json`);
        let data = await res.json()
        //console.log(data.posts)
        localStorage.setItem("dproducts", JSON.stringify(data.posts))
        //console.log(lsd)
    } catch (error) {
        console.log(error)
    }
}

getdata()