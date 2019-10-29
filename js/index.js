//variables
let nav = document.getElementById("nav");
let menu = document.getElementById("enlaces");
let abrir = document.getElementById("open");
let cerrado = true;
var color1 = document.querySelectorAll("div a");
let fondo = document.getElementById("fondo");
var imglogo = document.getElementById("imglogo");

console.log(imglogo);

//cuando recarga pagina.
window.addEventListener("load", function() {
    menus();
    $("#onload").fadeOut();
    $("body").removeClass("hidden");
})



//colocar nav1 o nav2 con evento scroll
window.addEventListener("scroll", function() {
    //console.log(window.pageYOffset);
    //--pageYOffset: regresa tamaño de la pantalla.
    menus();


})

function menus() {
    let desplazamiento_actual = window.pageYOffset;
    if (desplazamiento_actual <= 320) {
        nav.classList.remove("nav2");
        nav.classList = ("nav1");
        nav.style.transition = "1s";
        menu.style.top = "80px";

        for (let i = 0; i < color1.length; i++) {
            color1[i].style.color = "#c195a1";
        }
        imglogo.style.cssText += "width: 100px; height:100px  transition: 1s;"
    } else {
        nav.classList.remove("nav1");
        nav.classList = ("nav2");
        nav.style.transition = "1s";
        menu.style.top = "100px";

        for (let i = 0; i < color1.length; i++) {
            color1[i].style.color = "rgba(236, 235, 239, 0.96)";
        }

        imglogo.style.cssText += "width: 80px; height: 80px  transition:1s;"
    }
}





//dar click en icono.
abrir.addEventListener("click", function() {
    apertura();
})

function apertura() {
    if (cerrado) {
        menu.style.width = "45vw";
        fondo.classList.add("fondo");
        cerrado = false;
    } else {
        menu.style.width = "0%";
        menu.style.overflow = "hidden";
        cerrado = true;
    }
}

//evento para cerrar el nav con dar cualquier click en la pantalla
window.addEventListener("click", function(e) {
    console.log(e.target);
    if (cerrado == false) {
        let span = document.querySelector("span");
        if (e.target !== span && e.target !== abrir) {
            menu.style.width = "0%";
            menu.style.overflow = "hidden";
            cerrado = true;
        }
    }
})

window.addEventListener("resize", function() {
    if (screen.width >= 700) {
        cerrado = true;
        menu.style.removeProperty("overflow");
        menu.style.removeProperty("width");
    }

})