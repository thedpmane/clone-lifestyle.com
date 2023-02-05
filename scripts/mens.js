// code for importing footer
import {navbar} from "../components/navbar.js"
let nvd=document.querySelector("#main");
nvd.innerHTML=navbar()


import { footer } from '../components/footer.js';

let footer_div = document.getElementById('footer');
footer_div.innerHTML = footer();


// data for the slide show 1 hard-coded here

const SlideShowData = [
    {
        img: 'https://lmsin.net/cdn-cgi/image/w=1232,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/HP_LS_Men_Desktop-1-03Oct2022.gif',
    },
    {
        img: 'https://lmsin.net/cdn-cgi/image/w=1232,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/HP_LS_MEN_Desktop-2-03Oct2022.jpg',
    },
    {
        img : 'https://lmsin.net/cdn-cgi/image/w=1232,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/HP_LS_MEN_Desktop-3-03Oct2022.jpg',
    },
    {
        img: 'https://lmsin.net/cdn-cgi/image/w=1232,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/HP_LS_MEN_Desktop-4-03Oct2022.jpg',
    },
    {
        img: 'https://lmsin.net/cdn-cgi/image/w=1232,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/LS-Banner5-desktop-MEN-03Oct2022.gif',
    },
    {
        img : 'https://lmsin.net/cdn-cgi/image/w=1232,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/LS-Banner6-desktop-MEN-03Oct2022.jpg',
    },

];


// data for the top trending brands here

const TopTrendingData = [
    {
        img: 'https://lmsin.net/cdn-cgi/image/w=288,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/PC5-Banner1-men-Desktop-31Aug2022.jpg',
        offer: 'Up To 50% Off',
    },
    {
        img: 'https://lmsin.net/cdn-cgi/image/w=288,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/PC5-Banner2-men-Desktop-02Sep2022.jpg',
        offer: 'Up To 50% Off',
    },
    {
        img: 'https://lmsin.net/cdn-cgi/image/w=288,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/PC5-Banner3-men-Desktop-02Sep2022.jpg',
        offer: 'Up To 50% Off',
    },
    {
        img: 'https://lmsin.net/cdn-cgi/image/w=288,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/PC5-Banner4-men-Desktop-31Aug2022.jpg',
        offer: 'Up To 50% Off',
    },
    {
        img: 'https://lmsin.net/cdn-cgi/image/w=288,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/PC5-Banner6-men-Desktop-31Aug2022.jpg',
        offer: 'Up To 50% Off',
    },
    {
        img: 'https://lmsin.net/cdn-cgi/image/w=288,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/PC5-Banner5-men-Desktop-31Aug2022.jpg',
        offer: 'Up To 50% Off',
    },
    {
        img: 'https://lmsin.net/cdn-cgi/image/w=288,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/PC5-Banner7-men-Desktop-16Sep2022.png',
        offer: 'Up To 50% Off',
    },
    {
        img: 'https://lmsin.net/cdn-cgi/image/w=288,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/PC5-Banner8-men-Desktop-16Sep2022.jpg',
        offer: 'Up To 60% Off',
    },
    {
        img: 'https://lmsin.net/cdn-cgi/image/w=288,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/PC5-Banner9-men-Desktop-16Sep2022.jpg',
        offer: 'Up To 55% Off',
    },
    {
        img: 'https://lmsin.net/cdn-cgi/image/w=288,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/PC5-Banner10-men-Desktop-16Sep2022.jpg',
        offer: 'Up To 60% Off',
    },
    {
        img: 'https://lmsin.net/cdn-cgi/image/w=288,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/PC5-Banner11-men-Desktop-23Sep2022.jpg',
        offer: 'Up To 75% Off',
    },
    {
        img: 'https://lmsin.net/cdn-cgi/image/w=288,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/PC5-Banner12-men-Desktop-16Sep2022.jpg',
        offer: 'Up To 50% Off',
    },
];


// data for the actiwear essentials here

const ActiwearData = [
    {
        src: 'https://lmsin.net/cdn-cgi/image/w=500,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/desktop-Men-15modularblock-1-oneBythree-16Sep2022.jpg',
    },
    {
        src: 'https://lmsin.net/cdn-cgi/image/w=500,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/desktop-Men-15modularblock-2-oneBythree-16Sep2022.jpg',
    },
    {
        src: 'https://lmsin.net/cdn-cgi/image/w=500,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/desktop-Men-15modularblock-3-oneBythree-16Sep2022.jpg',
    },
];


// data for the trending add-ons here

const AddonData = [
    {
        img: 'https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/PC-B-1-Women-Desktop-2AUG22.jpg',
        offer: 'Up To 40% Off',
    },
    {
        img: 'https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/PC-B-2-Women-Desktop-2AUG22.jpg',
        offer: 'Up To 70% Off',
    },
    {
        img: 'https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/PC-B-3-Women-Desktop-2AUG22.jpg',
        offer: 'Up To 50% Off',
    },
    {
        img: 'https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/PC-B-4-Women-Desktop-2AUG22.jpg',
        offer: 'Up To 60% Off',
    },
    {
        img: 'https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/PC-B-5-Women-Desktop-2AUG22.jpg',
        offer: 'Up To 50% Off',
    },
    {
        img: 'https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/PC-B-6-Women-Desktop-2AUG22.jpg',
        offer: 'Up To 50% Off',
    },
];

// data for the wardrobe essentials here

const WardrobeData = [
    {
        src: 'https://lmsin.net/cdn-cgi/image/w=500,q=60,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/desktop-Men-4modularblock-3-oneBythree-24June2022.gif',
    },
    {
        src: 'https://lmsin.net/cdn-cgi/image/w=500,q=60,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/desktop-Men-4modularblock-2-oneBythree-19July2022.jpg',
    },
    {
        src: 'https://lmsin.net/cdn-cgi/image/w=500,q=60,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/desktop-Men-4modularblock-1-oneBythree-24June2022.jpg',
    },
];

// data for the curated here

const CuratedData = [
    {
        src: 'https://lmsin.net/cdn-cgi/image/w=500,q=60,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/desktop-Men-2modularblock-1-oneBythree-16Sep2022.jpg',
    },
    {
        src: 'https://lmsin.net/cdn-cgi/image/w=500,q=60,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/desktop-Men-2modularblock-2-oneBythree-16Sep2022.jpg',
    },
    {
        src: 'https://lmsin.net/cdn-cgi/image/w=500,q=60,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/desktop-Men-2modularblock-3-oneBythree-16Sep2022.jpg',
    },
];

// data for the mostloved here

const MostLovedData = [
    {
        src: 'https://lmsin.net/cdn-cgi/image/w=616,q=60,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/desktop-LS-MEN-5modularblock-oneBytwo1C-Men-14July2022.jpg',
    },
    {
        src: 'https://lmsin.net/cdn-cgi/image/w=616,q=60,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/desktop-LS-MEN-5modularblock-oneBytwo1D-Men-14July2022.jpg',
    },
  
];

// data for the editor list here

const EditorListData = [
    {
        src: 'https://lmsin.net/cdn-cgi/image/w=616,q=60,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/desktop-LS-MEN-10modularblock-oneBythree-A-Men-12Sept2022.jpg',
    },
    {
        src: 'https://lmsin.net/cdn-cgi/image/w=616,q=60,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/desktop-LS-MEN-10modularblock-oneBythree-B-Men-06Mar2022.jpg',
    },
 
];

// data for the shop by dept here

const ShopByDeptData = [
    {
        src: "https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/desktop-dept-11modblock-oneBythree-A-Women-04March2022A.jpg",
    },
    {
        src: "https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/desktop-dept-11modblock-oneBythree-B-Women-12April2022.jpg",
    },
    {
        src: "https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/desktop-dept-11modblock-oneBythree-C-Women-04March2022A.jpg",
    },
];



// code for slide show 1 with the delay of 3 seconds starts here

let aslideshow1 = document.getElementById('aslideshow1');
aslideshow1.innerHTML = null;

let i = 0;
let image = document.createElement('img');
image.src = SlideShowData[0].img;
aslideshow1.append(image);
i++;

setInterval(function () {
    if (i === SlideShowData.length) {
        i = 0;
    }
    image.src = SlideShowData[i].img;
    aslideshow1.append(image);
    i++;
}, 3000);

// code for slide show 1 with the delay of 3 seconds ends here



// code for top trending brands section starts here

const TopTreData = () => {

    let container = document.getElementById('atoptrendingbrands');
    container.innerHTML = null;

    TopTrendingData.forEach(function (el) {

        let div = document.createElement('div');
        let image = document.createElement("img");
        image.src = el.img;
        let offer = document.createElement("p");
        offer.innerText = el.offer;

        div.append(image, offer);
        container.append(div);
    });
};

TopTreData();

// code for top trending brands section ends here



// code for activwear essentials section starts here

const Activwear = () => {

    let container = document.getElementById('aatv');
    container.innerHTML = null;

    ActiwearData.forEach(function (el) {

        let div = document.createElement('div');
        let image = document.createElement("img");
        image.src = el.src;

        div.append(image);
        container.append(div);
    });
};

Activwear();

// code for activwear essentials section ends here



// code for trending addons section starts here

// const TreAdd = () => {

//     let container = document.getElementById('atao');
//     container.innerHTML = null;

//     AddonData.forEach(function (el) {

//         let div = document.createElement('div');
//         let image = document.createElement("img");
//         image.src = el.img;
//         let offer = document.createElement("p");
//         offer.innerText = el.offer;

//         div.append(image, offer);
//         container.append(div);
//     });
// };

// TreAdd();

// code for trending addons section ends here



// code for wardrobe essentials section starts here

const Wardrobe = () => {

    let container = document.getElementById('awaess');
    container.innerHTML = null;

    WardrobeData.forEach(function (el) {

        let div = document.createElement('div');
        let image = document.createElement("img");
        image.src = el.src;

        div.append(image);
        container.append(div);
    });
};

Wardrobe();

// code for wardrobe essentials section ends here



// code for curated section starts here

const Curated = () => {

    let container = document.getElementById('acur');
    container.innerHTML = null;

    CuratedData.forEach(function (el) {

        let div = document.createElement('div');
        let image = document.createElement("img");
        image.src = el.src;

        div.append(image);
        container.append(div);
    });
};

Curated();

// code for curated section ends here



// code for most loved section starts here

const Loved = () => {

    let container = document.getElementById('amolo');
    container.innerHTML = null;

    MostLovedData.forEach(function (el) {

        let div = document.createElement('div');
        let image = document.createElement("img");
        image.src = el.src;

        div.append(image);
        container.append(div);
    });
};

Loved();

// code for most loved section ends here



// code for editor list section starts here

const EdList = () => {

    let container = document.getElementById('aeli');
    container.innerHTML = null;

    EditorListData.forEach(function (el) {

        let div = document.createElement('div');
        let image = document.createElement("img");
        image.src = el.src;

        div.append(image);
        container.append(div);
    });
};

EdList();

// code for editor list section ends here



// code for eshop by dept section starts here

const ShopByDept = () => {

    let container = document.getElementById('ashpdept');
    container.innerHTML = null;

    ShopByDeptData.forEach(function (el) {

        let div = document.createElement('div');
        let image = document.createElement("img");
        image.src = el.src;

        div.append(image);
        container.append(div);
    });
};

ShopByDept();

// code for shop for dept section ends here