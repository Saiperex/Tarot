const botonMenu=document.querySelector(".menu")
const menu=document.querySelector(".sliderMenu")
botonMenu.addEventListener("click", function()
{
    botonMenu.classList.toggle("change")
    validar()
})
function validar()
{
    if(botonMenu.classList.contains("change"))
    {
        menu.style.transform = "scale(1)";
        menu.style.transformOrigin = "top left";
    }
    else
    {
        menu.style.transform = "scale(0)";
        menu.style.transformOrigin = "top left";
    }
}