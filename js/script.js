/* ==========================
   ANIMATION AU CHARGEMENT
========================== */

window.addEventListener("load", () => {

    document.body.classList.add("loaded");

});



/* ==========================
   APPARITION AU SCROLL
========================== */


const elements = document.querySelectorAll(
    ".card, .objectif, .cta"
);


const observer = new IntersectionObserver((entries)=>{


    entries.forEach(entry=>{


        if(entry.isIntersecting){


            entry.target.style.opacity = "1";

            entry.target.style.transform = "translateY(0)";


        }


    });


},{

    threshold:0.15

});



elements.forEach(element=>{


    element.style.opacity="0";

    element.style.transform="translateY(50px)";

    element.style.transition="0.8s ease";


    observer.observe(element);


});





/* ==========================
   EFFET MACHINE A ECRIRE
   SUR LE TITRE
========================== */


const title = document.querySelector(".hero h1");


if(title){


    const text = "Lofty Benfo";


    title.innerHTML="";


    let index = 0;



    function typing(){


        if(index < text.length){


            title.innerHTML += text.charAt(index);


            index++;


            setTimeout(typing,120);


        }


    }


    typing();


}






/* ==========================
   CURSEUR LUMINEUX
========================== */


const cursor = document.createElement("div");


cursor.classList.add("cursor");


document.body.appendChild(cursor);



document.addEventListener("mousemove",(e)=>{


    cursor.style.left = e.clientX + "px";


    cursor.style.top = e.clientY + "px";


});


