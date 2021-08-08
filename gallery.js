let modal= document.querySelector(".modal");
let caption= document.querySelector(".caption");
let image= document.querySelector(".full-img");
let arr= document.querySelectorAll(".preview");

arr.forEach(i => {
    i.addEventListener("click", ()=> {
        modal.classList.add("open");
        // console.log(i);
        const path= i.getAttribute("data-original");
        const name= i.alt;
        // console.log("path: ", path);
        image.src= `${path}`;
        caption.textContent= name;
    });
});

modal.addEventListener('click', (e)=> {
    if(e.target.classList.contains("modal")) {
        modal.classList.remove("open");
    }
});