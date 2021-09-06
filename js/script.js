function playSong(){
    var song = document.getElementById('song');
    song.play();
    song.volume = 0.5; 
}

function escribir(str){
    let contenedor = document.getElementById("h1-hw");
    let arrFormStr = str.split('');
    let i = 0;
    let printStr = setInterval(function(){
        if(arrFormStr[i] === ' '){
            contenedor.innerHTML += arrFormStr[i];
            contenedor.innerHTML += arrFormStr[i+1];
            i += 2;
        }else{
            contenedor.innerHTML += arrFormStr[i];
            i++;
        }         
        if(i== arrFormStr.length){
            clearInterval(printStr);
            parpadear();
        }
    },600)
    
}

function parpadear(){
    let contenedor = document.getElementById("hola-mundo");
    let content = document.getElementById("h1-hw");
    let cadena = content.innerHTML;
    let i = cadena.length - 1 ;
    let printStr = setInterval(function(){
        if(contenedor.style.visibility == "hidden"){
            contenedor.style.visibility = "visible";
            i--;
        }else{
            contenedor.style.visibility = "hidden";      
            if(cadena.slice(i-1,i)===' '){
                cadena = cadena.slice(0,i-1);
                i--;
            }else{
                cadena = cadena.slice(0,i);
            }            
            content.innerHTML = cadena;
        }        
        if(i == -1){
            clearInterval(printStr);
            list('HOLA MUNDO');
        }
    },500)
}

function list(str){
    let contenedor = document.getElementById("hola-mundo");
    let cant = str.length;    
    let i = 0;
    let top = 19;
    let print =  setInterval(()=>{
        contenedor.innerHTML += '<h1 class="list">'+str.slice(i,i+1)+'</h1>';
        contenedor.style.top = top + 'em';
        top -=2;
        i++;
        if(i === cant){
            clearInterval(print);
            reducirOpacidad();
        }
    },700)
}

function reducirOpacidad(){
    let contenedor = document.getElementById("hola-mundo");
    let opacidad = 1;
    let print = setInterval(()=>{
        contenedor.style.opacity = opacidad;
        opacidad -= 0.001;
        if(opacidad < 0){
            clearInterval(print);
            regresar();
        }
    },15)
}

function regresar(){
    let contenedor = document.getElementById("hola-mundo");
    contenedor.style.top = '11em';
    contenedor.style.opacity = 1;
    contenedor.innerHTML = '<h1 id="h1-hw2">HOLA MUNDO</h1>';
    contenedor.innerHTML += '<h1 id="h1-gpv">gracias por ver</h1>';
    let hw = document.getElementById("h1-hw2");
    let opacidad = 0;
    let opacidadGPV = 0;
    let gpv = document.getElementById("h1-gpv");
    const printHW = setInterval(()=>{
        if (opacidad < 1) {
            hw.style.opacity = opacidad;
            opacidad += 0.001;
        }
        if(opacidad > 0.5){
            gpv.style.opacity = opacidadGPV;
            opacidadGPV += 0.001;
        }
        if(opacidadGPV > 1){
            clearInterval(printHW);
        }
    },20)   
}

playSong();
escribir('HOLA MUNDO');