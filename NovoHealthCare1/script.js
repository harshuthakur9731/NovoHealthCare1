/* 
   NoveHealthcare Website JavaScript
   Developed for premium pharmaceutical website
*/


// ===============================
// Smooth Scroll Navigation
// ===============================

document.querySelectorAll('a[href^="#"]').forEach(link => {

    link.addEventListener("click", function(e){

        const target =
        document.querySelector(this.getAttribute("href"));

        if(target){

            e.preventDefault();

            target.scrollIntoView({

                behavior:"smooth"

            });

        }

    });

});




// ===============================
// Product WhatsApp Enquiry
// ===============================


const enquiryButtons =
document.querySelectorAll(".product-card button");


enquiryButtons.forEach(button => {


    button.addEventListener("click",function(){


        const product =
        this.parentElement.querySelector("h3").innerText;


        const message =
        `Hello NoveHealthcare,%0A
I want information about ${product}.%0A
Please share details.`;


        const whatsappNumber =
        "91XXXXXXXXXX";


        window.open(

        `https://wa.me/${whatsappNumber}?text=${message}`,

        "_blank"

        );


    });


});





// ===============================
// Scroll Animation
// ===============================


const cards =
document.querySelectorAll(".box,.product-card");


window.addEventListener("scroll",()=>{


cards.forEach(card=>{


const position =
card.getBoundingClientRect().top;


const screen =
window.innerHeight;


if(position < screen - 100){

card.style.opacity="1";

card.style.transform="translateY(0)";

}


});


});





// Initial animation state


cards.forEach(card=>{


card.style.opacity="0";

card.style.transform="translateY(40px)";

card.style.transition="all .7s ease";


});





// ===============================
// Dynamic Copyright Year
// ===============================


const footer =
document.querySelector("footer");


if(footer){


const year =
new Date().getFullYear();


footer.innerHTML +=
`
<p>
Website maintained by NoveHealthcare
</p>
`;


}






// ===============================
// Welcome Message
// ===============================


window.addEventListener("load",()=>{


console.log(

"Welcome to NoveHealthcare Website"

);


});