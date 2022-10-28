
const typelist = document.getElementById("Tipos")
const convertlistum = document.querySelector(".List_convert_um")

const listas = {
    "Area":["centimeros","metros","milimetros"],
    "Forca":["Kilo Newton","Joule","Kgf"],
    "Velocidade":["Nos","m/s","m/h"],
    "Volume":["m³","litros","hectares"]
}

console.log(typeof(typelist))

typelist.addEventListener("change",function(event){
    
    console.log("OK")
})




