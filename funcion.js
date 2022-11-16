const canvas = document.getElementById("canvas"); //llamamos al elemento canvas por su id
const ctx = canvas.getContext("2d"); // Creamos una variable a la cual se le adjudique el contexto en formato 2d
var x = canvas.width/2; //Variable que data la mitad del ancho 
var y = canvas.height-160; // Variable que data la altura de caida de las piezas
var dx = 0; //Variable que indica la cantidad de espacio que se movera la ficha hacia la X
var dy = 1; //Varible que indica la "Velocidad con la que baja la pieza por el eje y"
var left = 37; //Variable adjudicada a la tecla que corre hacia la derecha
var right = 39; //Variable adjudicada a la tecla que corre hacia la izquierda
var down = 40; //Variable adjudicada a la tecla que corre hacia abajo
var pressing = [];

//Dibujando el tablero
function paint(){
    if(ctx === canvas.getContext("2d")){ //Se coloca un condicional en el cual se realiza un comparación del contexto en pro de ejecutar una serie de pasos que daran vida al tablero
        ctx.strokeStyle = "#000";//Da el color a la linea del contexto
        ctx.lineWidth = 1; //Da el grosor de la linea
        for (var i = 0; i <= canvas.width; i+=10){//Se implementa un ciclo for en el cual se inicializa la variable i en el pto 0, la condicion a ejecutar indica que se a realizar algo expuesto posteriormente hasta que se llegue al maximo del ancho; el aumento se realizara de 15 en 15
            ctx.beginPath(); //Se indica que comience a dibujar
            ctx.moveTo(i, 0);//El punto i = x en cuanto sistema de coordenadas, y el 0 = y
            ctx.lineTo(i , ctx.canvas.height); //Se indica que dibuje una linea en cada una de las posiciones que tome i hasta llegar al limite del tablero
            ctx.stroke();//Esta función trazara las lineas
            ctx.closePath();
        }
        for (var j = 0; j <= canvas.height; j+=10){//Se implementa un ciclo for en el cual se inicializa la variable i en el pto 0, la condicion a ejecutar indica que se a realizar algo expuesto posteriormente hasta que se llegue al maximo del alto; el aumento se realizara de 15 en 15
            ctx.beginPath();//Se indica que comience a dibujar
            ctx.moveTo(0, j);//El punto j = y en cuanto sistema de coordenadas, y el 0 = x
            ctx.lineTo(ctx.canvas.width, j);  //Se indica que dibuje a lo ancho del contexto una linea en cada una de las posiciones que tome j hasta llegar al limite del tablero
            ctx.stroke(); //Esta función trazara las lineas
            ctx.closePath();
}}}

// Función que crea la pieza cuadrado
function squareDraw()
{
    ctx.beginPath(); //Indica el inicio del dibujo
    ctx.fillRect(x,y,10,10); // Se determinan las coordenadas o "espacios" que ocupara la pieza 
    ctx.fillStyle='#51005D'; //Le damos color a la ficha
    ctx.fill(); //Le indicamos que se rellene del tono dado
    ctx.closePath(); //Cerramos el dibujo
}

//Función para brindar movimiento de caida a la pieza cuadrado
function square()
{
    ctx.clearRect(0, 0, canvas.width, canvas.height); //Indicamos al canva que limpie los fotogramas "Recuerda que el movimiento generado esta dado por una serie de duplicados de la pieza que dejaran marcas de color"
    squareDraw(); //Llamamos la pieza a dibujar
    //MOVIMIENTO CON TECLAS 
    if(pressing[right]) //Si se presiona la flecha para la derecha
    [x+=10, x_1+=10]; //La figura se movera hacia la derecha con espacios de 10
    if(pressing[down]) //Si se presiona la flecha para abajo
    [y+=10,y_1+=10, y_2+=10];//La figura se movera hacia abajo con espacios de 10
    if(pressing[left]) //Si se presiona la flecha a la izquierda
    [x-=10, x_1-=10]; 
    if(x > canvas.width - 10){ //Si x(eje horizontal) es mayor que el ancho del canvas -10(Se adjudica este valor para simular el espacio de la figura)
      x=canvas.width-10; //Esto nos permite que el fotograma quede estatico al llegar al final del ancho del canvas
    }
    if(y > canvas.height - 10){//Si y (eje vertical) se pasa del alto del canvas -10(Se adjudica este valor para simular el espacio de la figura) la figura se detendra
    y=canvas.height-10; ////Esto nos permite que el fotograma quede estatico al llegar al final del alto del canvas
    }
    //Nos permite delimitar el canvas hacia los lados 
    if(x<0)
        x=0;  //x como coordenada 0
    if(y<0)
        y=0;  //x como coordenada 0
    x += dx; //Le indicamos el aumento dado para la X
    y += dy; //Le indicamos el aumento dado para la Y
}
document.addEventListener('keydown',function(evt){ // Estamos indicando que escuche el evento 'keydown'(Tecla Oprimida), ejecute (true) la funcion indicada por la el arreglo pressing de lo contrario no se ejecutara
    pressing[evt.keyCode]=true;
},false); 
document.addEventListener('keyup',function(evt){ // Estamos indicando que escuche el evento 'keyup'(Tecla No Oprimida),  No ejecute (false) la funcion indicada por la el arreglo pressing
    pressing[evt.keyCode]=false;
},false);
setInterval(square, 60);//setInterval es una función que nos permite llamar otra función y ejecutarla cada ciertos milisegundos, es directamente proporcional a nuestra variable dy



