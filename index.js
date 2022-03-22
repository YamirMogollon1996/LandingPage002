const buton = document.getElementById("buton")
buton.addEventListener("click" ,e =>{
        window.scrollTo({
            top:0,
         behavior:"smooth"
        })


})
const Butones =  document.getElementById("botuon__header")
const Inyectables =  document.querySelectorAll(".inyectables")
const Contendor =  document.getElementById("header__trascion")


Butones.addEventListener("click" ,e =>{
    if (!document.body.classList.contains("dark")){
           document.body.classList.remove("ligth")
        document.body.classList.add("dark")
        const Inyectables2 = [...Inyectables]
        Inyectables2.forEach(element => {
            element.style.color = "white"
            
        });
        Contendor.style.background ="whiteSmoke"
        Butones.style.transform = "translateX(20px)"
        
    }else{
        document.body.classList.remove("dark")
        document.body.classList.add("ligth")
        const Inyectables2 = [...Inyectables]
        Inyectables2.forEach(element => {
            element.style.color = "black"
            
        });
        Butones.style.transform = "translateX(-20px)"
        // Contendor.style.background ="#444"
    }
})