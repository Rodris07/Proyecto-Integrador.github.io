let imgArray = ['Imagenes/Playstation carrusel.jpg', 'Imagenes/xbox carrusel.webp','Imagenes/Nintendo carrusel.jpg'] ;
let indiceActual = 0;

let boton = document.getElementById('Siguiente');
let botonI = document.getElementById('Anterior');
let img = document.getElementById("imgCarrusel");


function Derecha() {
indiceActual++;
if (indiceActual >= imgArray.length) {
    indiceActual = 0;
    
}

img.src = imgArray[indiceActual];   
}
function Izquierda() {
    indiceActual--;
    if (indiceActual <0) {
        indiceActual = imgArray.length -1;
        
    }
    
    img.src = imgArray[indiceActual];      
    }   
  
boton.addEventListener("click" ,Derecha);
botonI.addEventListener("click", Izquierda);
setInterval(Derecha , 9000); 
