const canvas = document.getElementById("canvas"); //llamamos al elemento canvas por su id
const ctx = canvas.getContext("2d"); // Creamos una variable a la cual se le adjudique el contexto en formato 2d
var x = canvas.width/2; //Variable que data la mitad del ancho 
var y = canvas.height-150; // Variable que data la altura de caida de las piezas y
var x_1 = (canvas.width/2) +10;//Variable que data la ubicación de la pieza en mitad del ancho de la pantalla más 10 px
var y_1 = canvas.height-130;//Variable que data la altura de la caida de las piezas y_1
var y_2 = canvas.height-140;//Variable que data la altura de la caida de las piezas y_2
var dx = 0; //Variable que indica la cantidad de espacio que se movera la ficha hacia la X
var dy = 1; //Varible que indica la "Velocidad con la que baja la pieza por el eje y"
var up=38;
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

// Función que crea la pieza j
function jDraw(){
    ctx.beginPath();//Se inicializa el comienzo del dibujo
    ctx.fillStyle='white';//Se indica el color que tendra el tetromino o pieza L
    ctx.fillRect(x,y_1,10,10);//Se dibuja un rectangulo, teniendo en cuenta que los dos primeros valores indican la coordenada en donde se empieza a dibujar la figura, valores antes preestablecidos en las variables x, y_1
    ctx.fillRect(x_1,y,10,30);//Se dibuja un rectangulo, teniendo en cuenta que los dos primeros valores indican la coordenada en donde se empieza a dibujar la figura, valores antes preestablecidos en las variables x_1, y
    ctx.fill();
}

function squareDraw(){
    ctx.fillStyle='blue';
    ctx.beginPath();
    ctx.fillRect(x,y,20,20);
    ctx.fill(); 
}
 function lDraw(){
    ctx.fillStyle='red';
    ctx.beginPath();
    ctx.fillRect(x,y,10,30);
    ctx.fillRect(x_1,y_1,10,10);
    ctx.fill();
}

function iDraw(){
    ctx.fillStyle='purple';
    ctx.beginPath();
    ctx.fillRect(x,y,10,40);
    ctx.fill();
} 

function zDraw(){
    ctx.fillStyle='green';
    ctx.beginPath();
    ctx.fillRect(x,y,20,10);
    ctx.fillRect(x_1,y_2,20,10);
    ctx.fill();
}
 
function tDraw(){
    ctx.fillStyle='orange';
    ctx.beginPath();
    ctx.fillRect(x,y,30,10);
    ctx.fillRect(x_1,y_2,10,10);
    ctx.fill();
}

function sDraw(){
    ctx.fillStyle='yellow';
    ctx.beginPath();
    ctx.fillRect(x,y_2,20,10);
    ctx.fillRect(x_1,y,20,10);
    ctx.fill();
}        


//Función para brindar movimiento de caida a la pieza cuadrado
function square()
{
    ctx.clearRect(0, 0, canvas.width, canvas.height); //Indicamos al canva que limpie los fotogramas "Recuerda que el movimiento generado esta dado por una serie de duplicados de la pieza que dejaran marcas de color"
    lDraw(); //Llamamos la pieza a dibujar
    //MOVIMIENTO CON TECLAS 
    if(pressing[up])//Si se presiona la flecha para arriba
    [ctx.translate(x+15, y+25),/*Se llama a la figura donde se crea una matriz para que su punto de giro sea en el centro de la figura
    tendra punto de inicio de giro en la esquina inferior izquierda*/
    ctx.rotate(90*Math.PI/360),//La figura rotara 45 grados multiplicados por el radio del circulo y dividido en 180 grados
    ctx.translate(-x-15, -y-25),dx=0,dy=0];//Es necesario cerrar la matriz para que la figura gire para el opuesto de su centro 
    if(pressing[right]) //Si se presiona la flecha para la derecha
    [x+=10, x_1+=10]; //La figura se movera hacia la derecha con espacios de 10
    if(pressing[down]) //Si se presiona la flecha para abajo
    [y+=10,y_1+=10, y_2+=10];//La figura se movera hacia abajo con espacios de 10
    if(pressing[left]) //Si se presiona la flecha a la izquierda
    [x-=10, x_1-=10]; //La figura se movera hacia la izquierda con espacios de 10
    if(x > canvas.width - 10 || x_1 > canvas.width - 10){ //Si x o x_1(eje horizontal) es mayor que el ancho del canvas -10(Se adjudica este valor para simular el espacio de la figura)
      [x=canvas.width-20, x_1=canvas.width-10]; //Esto nos permite que el fotograma quede estatico al llegar al final del ancho del canvas
    }
    if(y > canvas.height - 10 || y_1 > canvas.height - 10 || y_2 > canvas.height - 10){//Si y o y_1 o y_2 (eje vertical) se pasa del alto del canvas respectivamente (Se adjudica este valor para simular el espacio de la figura) la figura se detendra
    [y=canvas.height-30, y_1=canvas.height-10,y_2=canvas.height-10]; ////Esto nos permite que el fotograma quede estatico al llegar al final del alto del canvas
    }
    //Nos permite delimitar el canvas hacia los lados 
    if(x<0 || x_1<0)
        [x=0,x_1=10];  //x como coordenada 0
    if(y<0 || y_1<0 || y_2<0)
        [y=0,y_1=0,y_2=0];  //x como coordenada 0
    x += dx; //Le indicamos el aumento dado para la X
    y += dy; //Le indicamos el aumento dado para la Y
    x_1 += dx;//Le indicamos el aumento dado para la X_1
    y_1 += dy;//Le indicamos el aumento dado para la y_1
    y_2 += dy;//Le indicamos el aumento dado para la y_2
}
document.addEventListener('keydown',function(evt){ // Estamos indicando que escuche el evento 'keydown'(Tecla Oprimida), ejecute (true) la funcion indicada por la el arreglo pressing de lo contrario no se ejecutara
    pressing[evt.keyCode]=true;
},false); 
document.addEventListener('keyup',function(evt){ // Estamos indicando que escuche el evento 'keyup'(Tecla No Oprimida),  No ejecute (false) la funcion indicada por la el arreglo pressing
    pressing[evt.keyCode]=false;
},false);
setInterval(square, 60);//setInterval es una función que nos permite llamar otra función y ejecutarla cada ciertos milisegundos, es directamente proporcional a nuestra variable dy

















