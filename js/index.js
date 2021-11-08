//variables
let nav = document.getElementById("nav");
let menu = document.getElementById("enlaces");
let robot = document.getElementById("robot");
// Phone
let abrir = document.getElementById("open");
let cerrado = true;
let fondo = document.getElementById("fondo");

//cuando recarga pagina. 
//remueve el atributo hidden del body
window.addEventListener("load", function() {
    menus();
    $("#onload").fadeOut();
    $("body").removeClass("hidden");
})

//colocar nav1 o nav2 con evento scroll
window.addEventListener("scroll", function() {
    //pageYOffset: regresa un numero en donde se ubica el scrollbar
    //console.log(window.pageYOffset);
    menus();
})

function menus() {
    let desplazamiento_actual = window.pageYOffset;
    if (desplazamiento_actual <= 320) {
        nav.classList.remove("nav2");
        nav.classList = ("nav1");
        menu.style.top = "80px";
        robot.style.color = "white";
    } else {
        nav.classList.remove("nav1");
        nav.classList = ("nav2");
        menu.style.top = "100px";
        robot.style.color = "#918585";
    }
}

//dar click en icono cuando se minimiza el body.
abrir.addEventListener("click", function() {
    apertura();
})

function apertura() {
    if (cerrado) {
        menu.style.width = "45vw";
        fondo.classList.add("fondo");
        cerrado = false;
        console.log(cerrado);
    } else {
        menu.style.width = "0%";
        menu.style.overflow = "hidden";
        cerrado = true;
        console.log(cerrado);
    }
}

//evento para cerrar el nav con dar cualquier click en la pantalla
window.addEventListener("click", function(e) {
    // console.log(e.target);
    if (cerrado == false) {
        let span = document.querySelector(".icono span");
        console.log(span);
        if (e.target !== span && e.target !== abrir) {
            menu.style.width = "0%";
            menu.style.overflow = "hidden";
            cerrado = true;
            console.log(cerrado);
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