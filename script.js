
for(i=0;i<document.querySelectorAll(".card").length;i++){

    document.querySelectorAll(".card")[i].addEventListener("click",function(){
        let card=this
        card.classList.add("animation");
        setTimeout(function(){card.classList.remove("animation")}, 500);
    });
}
