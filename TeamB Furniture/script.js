// DEMO PRODUCT DATA
const products=[
 {name:"Modern Sofa",price:15000},
 {name:"Luxury Bed",price:30000},
 {name:"Dining Table",price:20000},
 {name:"Office Chair",price:8000}
];

let cart=0;
let wishlist=0;

// RENDER PRODUCTS
function renderProducts(maxPrice=50000){
 const grid=document.getElementById("productGrid");
 grid.innerHTML="";
 products.filter(p=>p.price<=maxPrice).forEach(p=>{
  grid.innerHTML+=`
   <div class="product">
    <h3>${p.name}</h3>
    <p>₹${p.price}</p>
    <button onclick="addCart()">Add to Cart</button>
    <button onclick="addWishlist()">Wishlist</button>
   </div>`;
 });
}
renderProducts();

// CART & WISHLIST
function addCart(){
 cart++;
 document.getElementById("cartCount").innerText=cart;
}
function addWishlist(){
 wishlist++;
 document.getElementById("wishlistCount").innerText=wishlist;
}
function openCart(){alert("Cart Items: "+cart)}
function openWishlist(){alert("Wishlist Items: "+wishlist)}

// PROFILE
function signIn(){alert("Sign In Clicked")}
function signUp(){alert("Sign Up Clicked")}

// SEARCH FUNCTIONALITY
const searchInput=document.getElementById("searchInput");
const results=document.getElementById("searchResults");

searchInput.addEventListener("keyup",()=>{
 let val=searchInput.value.toLowerCase();
 let filtered=products.filter(p=>p.name.toLowerCase().includes(val));
 results.style.display="block";
 results.innerHTML=filtered.map(p=>`<div>${p.name}</div>`).join("");
 if(val==="") results.style.display="none";
});

// PRICE RANGE FILTER
document.getElementById("priceRange").addEventListener("input",e=>{
 document.getElementById("priceValue").innerText="₹"+e.target.value;
 renderProducts(e.target.value);
});
// hover delay like real ecommerce
let timer;
document.querySelectorAll(".has-mega").forEach(item=>{
  item.addEventListener("mouseenter",()=>{
    clearTimeout(timer);
    item.querySelector(".mega-menu").style.display="block";
  });
  item.addEventListener("mouseleave",()=>{
    timer=setTimeout(()=>{
      item.querySelector(".mega-menu").style.display="none";
    },200);
  });
});
// SLIDER FUNCTIONALITY
let slides=document.querySelectorAll(".slide");
let index=0;

function showSlide(i){
  slides.forEach(s=>s.classList.remove("active"));
  slides[i].classList.add("active");
}

function nextSlide(){
  index=(index+1)%slides.length;
  showSlide(index);
}
function prevSlide(){
  index=(index-1+slides.length)%slides.length;
  showSlide(index);
}

document.querySelector(".next").onclick=nextSlide;
document.querySelector(".prev").onclick=prevSlide;

// AUTO PLAY
let autoSlide=setInterval(nextSlide,4000);

// PAUSE ON HOVER
document.querySelector(".hero-slider").addEventListener("mouseenter",()=>clearInterval(autoSlide));
document.querySelector(".hero-slider").addEventListener("mouseleave",()=>autoSlide=setInterval(nextSlide,4000));
const categoryData = {

  all:[
    {img:"https://images.unsplash.com/photo-1550581190-9c1c48d21d6c?q=80&w=1200",title:"Sofa Sets"},
    {img:"https://images.unsplash.com/photo-1505693416388-ac5ce068fe85",title:"Beds"},
    {img:"https://images.unsplash.com/photo-1617806118233-18e1de247200",title:"Dining"},
    {img:"https://images.unsplash.com/photo-1600607687939-ce8a6c25118c",title:"TV Units"},
    {img:"https://images.unsplash.com/photo-1565791380713-1756b9a05343?w=400",title:"Coffee Tables"},
    {img:"https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf",title:"Mattress"},
    {img:"https://images.unsplash.com/photo-1618220179428-22790b461013",title:"Decor"},
    {img:"https://images.unsplash.com/photo-1615874959474-d609969a20ed",title:"Cabinets"},
  ],

  living:[
    {img:"https://images.unsplash.com/photo-1550581190-9c1c48d21d6c?q=80&w=1200",title:"Sofa Sets"},
    {img:"https://images.unsplash.com/photo-1565791380713-1756b9a05343?w=400",title:"Coffee Tables"},
    {img:"https://images.unsplash.com/photo-1600607687939-ce8a6c25118c",title:"TV Units"},
    {img:"https://images.unsplash.com/photo-1592078615290-033ee584e267?q=80&w=1200",title:"Lounge Chairs"},
    {img:"https://images.unsplash.com/photo-1617806118233-18e1de247200",title:"Side Tables"},
    {img:"https://images.unsplash.com/photo-1618220179428-22790b461013",title:"Wall Shelves"},
    {img:"https://images.unsplash.com/photo-1600210492493-0946911123ea",title:"Shoe Racks"},
    {img:"https://images.unsplash.com/photo-1615874959474-d609969a20ed",title:"Cabinets"},
  ],

  bedroom:[
    {img:"https://images.unsplash.com/photo-1505693416388-ac5ce068fe85",title:"Beds"},
    {img:"https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf",title:"Mattress"},
    {img:"https://images.unsplash.com/photo-1615874959474-d609969a20ed",title:"Wardrobes"},
    {img:"https://images.unsplash.com/photo-1618220179428-22790b461013",title:"Bedside Tables"},
    {img:"https://images.unsplash.com/photo-1600210492493-0946911123ea",title:"Dressers"},
    {img:"https://images.unsplash.com/photo-1616486338812-3dadae4b4ace",title:"Night Lamps"},
    {img:"https://images.unsplash.com/photo-1549488344-1f9b8d2bd1f3?q=80&w=1200",title:"Benches"},
    {img:"https://ganpatiarts.com/cdn/shop/products/Ganpati-Arts-2.jpg?v=1756641940&width=1214",title:"Storage Beds"},
  ],

  dining:[
    {img:"https://images.unsplash.com/photo-1617806118233-18e1de247200",title:"Dining Sets"},
    {img:"https://media.landmarkshops.in/cdn-cgi/image/h=750,w=750,q=85,fit=cover/homecentre/1000013984272-1000013984272-2208_02-2100.jpg",title:"Dining Chairs"},
    {img:"https://m.media-amazon.com/images/I/81UHNzgqOVL._AC_UF894,1000_QL80_.jpg",title:"Bar Cabinets"},
    {img:"https://images.unsplash.com/photo-1618220179428-22790b461013",title:"Crockery Units"},
    {img:"https://images.unsplash.com/photo-1600210492493-0946911123ea",title:"Sideboards"},
    {img:"https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf",title:"Dining Benches"},
    {img:"https://images.unsplash.com/photo-1615874959474-d609969a20ed",title:"Console Tables"},
    {img:"https://m.media-amazon.com/images/I/61X2zLGGkeL._AC_UF894,1000_QL80_.jpg",title:"Serving Tables"},
  ],

  mattress:[
    {img:"https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf",title:"Foam Mattress"},
    {img:"https://images.unsplash.com/photo-1617806118233-18e1de247200",title:"Spring Mattress"},
    {img:"https://images.unsplash.com/photo-1618220179428-22790b461013",title:"Latex Mattress"},
    {img:"https://tse2.mm.bing.net/th/id/OIP.scyvpLJ5nAfEWJh0K5jYXAHaE4?rs=1&pid=ImgDetMain&o=7&rm=3",title:"Orthopedic"},
    {img:"https://images.unsplash.com/photo-1600210492493-0946911123ea",title:"Pillow Top"},
    {img:"https://images.unsplash.com/photo-1615874959474-d609969a20ed",title:"Kids Mattress"},
    {img:"https://woodentwist.com/cdn/shop/products/untitled.1274.jpg?v=1743288748",title:"Queen Size"},
    {img:"https://tse4.mm.bing.net/th/id/OIP.RKcA6crdz66XIC6QzVDuKwHaFj?rs=1&pid=ImgDetMain&o=7&rm=3",title:"King Size"},
  ],

  decor:[
    {img:"https://images.unsplash.com/photo-1618220179428-22790b461013",title:"Wall Decor"},
    {img:"https://m.media-amazon.com/images/I/612svXJnJrL._AC_UF1000,1000_QL80_.jpg",title:"Lighting"},
    {img:"https://tse3.mm.bing.net/th/id/OIP.eaP4EKvD2-w9drs6fWRNhQHaHa?rs=1&pid=ImgDetMain&o=7&rm=3",title:"Mirrors"},
    {img:"https://images.unsplash.com/photo-1600210492493-0946911123ea",title:"Vases"},
    {img:"https://blog.society6.com/app/uploads/2023/02/bedroom-rug-placement-middle-of-bed-768x672.png",title:"Rugs"},
    {img:"https://images.unsplash.com/photo-1615874959474-d609969a20ed",title:"Wall Shelves"},
    {img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ10XVkbbD6mN9u4-BaXV1YM5ZV3kJ1Bt--ZQ&s",title:"Clock"},
    {img:"https://images.unsplash.com/photo-1617806118233-18e1de247200",title:"Planters"},
  ]
};



// RENDER FUNCTION
function renderCategory(cat){
  const grid=document.getElementById("catGrid");
  grid.innerHTML="";

  categoryData[cat].forEach(item=>{
    grid.innerHTML+=`
      <div class="cat-card">
        <img src="${item.img}">
        <h4>${item.title}</h4>
      </div>
    `;
  });
}

// INITIAL LOAD
renderCategory("all");


// TAB CLICK FUNCTIONALITY
document.querySelectorAll(".tab").forEach(tab=>{
  tab.addEventListener("click",()=>{
    document.querySelectorAll(".tab").forEach(t=>t.classList.remove("active"));
    tab.classList.add("active");

    const category=tab.dataset.filter;

    document.getElementById("catGrid").style.opacity="0";
    setTimeout(()=>{
      renderCategory(category);
      document.getElementById("catGrid").style.opacity="1";
    },200);
  });
});
const productsTrend=[
 {name:"Modern Sofa",price:25999,old:35999,disc:"28%",img1:"https://www.estre.in/cdn/shop/files/2-min_d2bc49bf-1893-4118-bab5-8d0848d4d3fb.jpg?v=1743762905",img2:"https://images.unsplash.com/photo-1600607687939-ce8a6c25118c"},
 {name:"Queen Bed",price:30999,old:40999,disc:"25%",img1:"https://images.unsplash.com/photo-1505693416388-ac5ce068fe85",img2:"https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf"},
 {name:"Dining Set",price:19999,old:27999,disc:"30%",img1:"https://images.unsplash.com/photo-1617806118233-18e1de247200",img2:"https://cdn2.bigcommerce.com/server5600/42eba/products/3776/images/17419/California_Rustic_Oak_Expandable_Round_Dining_Table__04717.1448060644.1280.1280.png?c=2"},
 {name:"TV Unit",price:14999,old:19999,disc:"20%",img1:"https://images.livspace-cdn.com/plain/https://d3gq2merok8n5r.cloudfront.net/abhinav/ond-1634120396-Obfdc/jas-1657179080-NnXAg/tv-unit-1657603921-6y6tm/sc-10-1-1-1663178015-D0u0q.jpg",img2:"https://images.unsplash.com/photo-1615874959474-d609969a20ed"},
 {name:"Coffee Table",price:8999,old:11999,disc:"25%",img1:"https://images.unsplash.com/photo-1618220179428-22790b461013",img2:"https://images.thdstatic.com/productImages/de8462ea-b8de-400d-9df2-5577c43a7d30/svn/white-gold-tribesigns-way-to-origin-coffee-tables-hd-ny148-hyf-64_600.jpg"},
 {name:"Wardrobe",price:28999,old:37999,disc:"24%",img1:"https://images.unsplash.com/photo-1615874959474-d609969a20ed",img2:"https://images.unsplash.com/photo-1600210492493-0946911123ea"},
];

const slider=document.getElementById("productSlider");

productsTrend.forEach((p,i)=>{
 slider.innerHTML+=`
  <div class="product-card">
   <span class="badge">${p.disc} OFF</span>
   <div class="wishlist" onclick="toggleWish(this)">♡</div>

   <div class="img-wrap">
     <img src="${p.img1}" class="img1">
     <img src="${p.img2}" class="img2">
   </div>

   <h4>${p.name}</h4>
   <div class="rating">⭐⭐⭐⭐☆</div>
   <div class="price">₹${p.price} <span class="old-price">₹${p.old}</span></div>
   <button class="add-cart" onclick="addCart()">Add to Cart</button>
  </div>`;
});

// SCROLL BUTTONS
document.getElementById("nextTrend").onclick=()=>slider.scrollLeft+=300;
document.getElementById("prevTrend").onclick=()=>slider.scrollLeft-=300;

// WISHLIST TOGGLE
function toggleWish(el){
 el.innerHTML= el.innerHTML=="♡" ? "❤️" : "♡";
 addWishlist();
}
const trustItems=document.querySelectorAll(".trust-item");

function revealTrust(){
  const trigger=window.innerHeight * 0.85;

  trustItems.forEach(item=>{
    const top=item.getBoundingClientRect().top;
    if(top < trigger){
      item.classList.add("show");
    }
  });
}

window.addEventListener("scroll",revealTrust);
revealTrust();


const roomCards=document.querySelectorAll(".room-card");

function revealRooms(){
  const trigger=window.innerHeight * 0.85;

  roomCards.forEach(card=>{
    const top=card.getBoundingClientRect().top;
    if(top < trigger){
      card.classList.add("show");
    }
  });
}

window.addEventListener("scroll",revealRooms);
revealRooms();


// PRODUCTS
const dealsData=[
 {img:"https://www.comfortfurniture.com.sg/image/catalog/banners/sharer-sale-page.jpg",price:19999,old:29999,disc:"35%"},
 {img:"https://images.unsplash.com/photo-1505693416388-ac5ce068fe85",price:24999,old:34999,disc:"30%"},
 {img:"https://images.unsplash.com/photo-1617806118233-18e1de247200",price:14999,old:21999,disc:"32%"},
 {img:"https://static.povison.com/media/wysiwyg/new_menu/LimitedOffer-100.jpg",price:9999,old:14999,disc:"33%"},
 {img:"https://images.unsplash.com/photo-1618220179428-22790b461013",price:7999,old:11999,disc:"30%"},
];

const dealsSlider=document.getElementById("dealsSlider");

dealsData.forEach(d=>{
 dealsSlider.innerHTML+=`
  <div class="deal-card">
    <span class="deal-badge">${d.disc} OFF</span>
    <img src="${d.img}">
    <div class="deal-price">₹${d.price} <span class="deal-old">₹${d.old}</span></div>
    <button>Add to Cart</button>
  </div>`;
});

// SCROLL
document.getElementById("dealNext").onclick=()=>dealsSlider.scrollLeft+=300;
document.getElementById("dealPrev").onclick=()=>dealsSlider.scrollLeft-=300;


// CREATIVE COUNTDOWN TIMER
let totalTime=24*60*60;
let remaining=totalTime;

const hEl=document.getElementById("hours");
const mEl=document.getElementById("minutes");
const sEl=document.getElementById("seconds");
const progress=document.getElementById("progressBar");

setInterval(()=>{
 let h=Math.floor(remaining/3600);
 let m=Math.floor((remaining%3600)/60);
 let s=remaining%60;

 hEl.textContent=String(h).padStart(2,'0');
 mEl.textContent=String(m).padStart(2,'0');
 sEl.textContent=String(s).padStart(2,'0');

 let percent=(remaining/totalTime)*100;
 progress.style.width=percent+"%";

 remaining--;
},1000);
const reviewCards=document.querySelectorAll(".review-card");

function revealReviews(){
  const trigger=window.innerHeight * 0.85;
  reviewCards.forEach(card=>{
    if(card.getBoundingClientRect().top < trigger){
      card.style.opacity="1";
      card.style.transform="translateY(0)";
    }
  });
}

reviewCards.forEach(c=>{
  c.style.opacity="0";
  c.style.transform="translateY(50px)";
  c.style.transition=".6s";
});

window.addEventListener("scroll",revealReviews);
revealReviews();


function subscribe(){
 const email=document.getElementById("emailInput").value;
 const msg=document.getElementById("subscribeMsg");

 if(email.includes("@") && email.includes(".")){
   msg.innerHTML="🎉 Subscribed successfully!";
   msg.style.color="#7CFC00";
 }else{
   msg.innerHTML="❌ Please enter a valid email.";
   msg.style.color="red";
 }
}
const sliderData = [
    {
        label: "Tycoon Sofa Set",
        mainImg: "https://interio.com/media/wysiwyg/B2C-Homepage/Tycoon.jpg",
        products: [
            { name: "3-Seater Sofa", price: "₹42,990", old: "₹55,000", disc: "22% Off", x: "45%", y: "45%", img: "https://interio.com/media/catalog/product/cache/2b4b38e9d603c4d4320b4afc3c533cbe/5/6/56101502sd04777_01_413x440.jpg" },
             { name: "2-Seater Sofa", price: "₹42,990", old: "₹55,000", disc: "22% Off", x: "26%", y: "60%", img: "https://interio.com/media/catalog/product/cache/2b4b38e9d603c4d4320b4afc3c533cbe/5/6/56101502sd04776_01_413x440.jpg" },
            { name: "1-Seater Sofa", price: "₹11,990", old: "₹27,000", disc: "56% Off", x: "65%", y: "60%", img: "https://interio.com/media/catalog/product/cache/2b4b38e9d603c4d4320b4afc3c533cbe/5/6/56101502sd04775_01_413x440.jpg" },
            { name: "1-Seater Sofa", price: "₹11,990", old: "₹27,000", disc: "56% Off", x: "50%", y: "65%", img: "https://interio.com/media/catalog/product/cache/2b4b38e9d603c4d4320b4afc3c533cbe/5/6/56121403sd00253_01_413x440.jpg" }
        ]
    },
    {
        label: "Dining Collection",
        mainImg: "https://www.rajwadafurnish.com/cdn/shop/files/Belfort-Solid-Wood-6-Seater-Dining-Table-Sets-teak-rajawada-furnish.webp?v=1737973523&width=1000",
        products: [
            { name: "Dining Chair", price: "₹31,690", old: "₹37,474", disc: "15% Off", x: "8%", y: "70%", img: "https://www.rajwadafurnish.com/cdn/shop/files/Belfort-Solid-Wood-6-Seater-Dining-Table-Sets-by-rajwada-online-furniture.webp?v=1737973523&width=1000" },
            { name: "Dining Table", price: "₹45,000", old: "₹52,000", disc: "12% Off", x: "41%", y: "61%", img: "https://www.rajwadafurnish.com/cdn/shop/files/Belfort-Solid-Wood-6-Seater-Dining-Table-Sets-by-rajwada-b2b.webp?v=1737973523&width=1000" }
        ]
    }
];

let currentSlide = 0;
const track = document.getElementById("sliderTrack");
const nav = document.getElementById("lineNav");

sliderData.forEach((data, i) => {
    const slide = document.createElement("div");
    slide.className = "hero-slider__slide";
    slide.innerHTML = `<img src="${data.mainImg}" class="hero-slider__image"><div class="hero-slider__label">${data.label}</div>`;

    data.products.forEach(p => {
        const dot = document.createElement("div");
        dot.className = "pin";
        dot.style.left = p.x; dot.style.top = p.y;
        dot.onclick = e => { e.stopPropagation(); showProduct(p, dot); }
        slide.appendChild(dot);
    });

    track.appendChild(slide);

    const seg = document.createElement("div");
    seg.className = "progress-bar__segment" + (i === 0 ? " progress-bar__segment--active" : "");
    seg.onclick = () => goToSlide(i);
    nav.appendChild(seg);
});

function goToSlide(i) {
    currentSlide = i;
    track.style.transform = `translateX(-${i * 100}%)`;
    document.querySelectorAll(".progress-bar__segment").forEach((s, idx) => 
        s.classList.toggle("progress-bar__segment--active", idx === i)
    );
    closePanel();
}

function showProduct(p, dot) {
    document.querySelectorAll(".pin").forEach(d => d.classList.remove("pin--active"));
    dot.classList.add("pin--active");
    
    document.getElementById("p-img").src = p.img;
    document.getElementById("p-title").innerText = p.name;
    document.getElementById("p-curr").innerText = p.price;
    document.getElementById("p-old").innerText = p.old;
    document.getElementById("p-disc").innerText = p.disc;
    document.getElementById("revealPanel").style.display = "flex";
}

function closePanel() { 
    document.getElementById("revealPanel").style.display = "none";
    document.querySelectorAll(".pin").forEach(d => d.classList.remove("pin--active"));
}

/* WHEEL NAVIGATION */
let wheelLocked = false;
document.getElementById("sliderMain").addEventListener("wheel", (e) => {
    e.preventDefault();
    if (wheelLocked) return;

    wheelLocked = true;
    const direction = e.deltaY > 0 ? 1 : -1;
    let newSlide = currentSlide + direction;

    if (newSlide >= 0 && newSlide < sliderData.length) {
        goToSlide(newSlide);
    }

    setTimeout(() => wheelLocked = false, 600);
}, { passive: false });

function signIn(){
 document.getElementById("authOverlay").style.display="flex";
 showLogin();
}
function signUp(){
 document.getElementById("authOverlay").style.display="flex";
 showSignup();
}
function closeAuth(){
 document.getElementById("authOverlay").style.display="none";
}

function showLogin(){
 document.getElementById("authTitle").innerText="Welcome Back";
 document.getElementById("signupForm").style.display="none";
 document.getElementById("loginForm").style.display="block";
}
function showSignup(){
 document.getElementById("authTitle").innerText="Create an Account";
 document.getElementById("signupForm").style.display="block";
 document.getElementById("loginForm").style.display="none";
}

function registerUser(){
 let user={
  fname:fname.value,
  lname:lname.value,
  email:email.value,
  phone:phone.value,
  pass:password.value
 };

 if(password.value !== confirmPassword.value){
   alert("Passwords do not match");
   return;
 }

 localStorage.setItem("user",JSON.stringify(user));
 alert("Account Created Successfully!");
 showLogin();
}

function loginUser(){
 let stored=JSON.parse(localStorage.getItem("user"));

 if(!stored){
   alert("No account found. Please Sign up.");
   return;
 }

 if(loginEmail.value===stored.email && loginPass.value===stored.pass){
   alert("Login Successful 🎉");
   closeAuth();
 }else{
   alert("Invalid Credentials");
 }
}


/* AUTO OPEN SIGNUP AFTER PAGE LOAD */
window.addEventListener("load", () => {

  // Do not show again if user already logged in
  const user = localStorage.getItem("user");
  if(user) return;

  setTimeout(() => {
    document.getElementById("authOverlay").style.display = "flex";
    showLogin(); // open signup view by default
  }, 3000);

});