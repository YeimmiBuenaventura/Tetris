const canvas = document.getElementById("canvas"); //llamamos al elemento canvas por su id
var ctx = canvas.getContext("2d"); // Creamos una variable a la cual se le adjudique el contexto en formato 2d
var dx = canvas.width;
var dy= canvas.height;
//Dibujando el tablero
if(ctx === canvas.getContext("2d")){ //Se coloca un condicional en el cual se realiza un comparación del contexto en pro de ejecutar una serie de pasos que daran vida al tablero
ctx.strokeStyle = "#5e5e5e50";//Da el color a la linea del contexto
ctx.lineWidth = 1; //Da el grosor de la linea
i = dx;
j = dy;
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
} 

setInterval(square, 10);
}
//Trayendo figuras sobre el tablero: se indica una variable global a la cual se le brinda un nombre especifico de c/u de las figuras, indicando que es un nuevo Path2D el cual nos permite traer trazos realizados en svg a js como objeto
//https://www.tutorialesprogramacionya.com/pythonya/detalleconcepto.php?punto=78&codigo=78&inicio=75
//https://www.tutorialesprogramacionya.com/pythonya/detalleconcepto.php?punto=76&codigo=76&inicio=75
var direccion = 0;
var dx = 0;
function square()
{
    ctx.beginPath();
    ctx.moveTo( 0, 0);
    ctx.lineTo(10, 0);
    ctx.lineTo(10, 10);
    ctx.lineTo(0, 10);
    ctx.lineTo(0, 0);
    ctx.fillStyle = "blueviolet";
    ctx.fill();
    ctx.closePath();
    x += 10;
    y += 10;
//var square = new Path2D('M 0 0 L 15 0 V 15 15 L 0 15'); 
}
function el(){
    ctx.beginPath();
    ctx.moveTo( 0, 0);
    ctx.lineTo(10, 0);
    ctx.lineTo(10, 20);
    ctx.lineTo(20, 20);
    ctx.lineTo(20, 30);
    ctx.lineTo(0 , 30);
    ctx.fillStyle = "red";
    ctx.fill();
    ctx.closePath();
    x += 10;
    y += 10;
}
//var el = new Path2D('M 0 0 L 15 0 V 15 30 L 30 30 V 30 45 L 0 45');
function barra()
{
    ctx.beginPath();
    ctx.moveTo( 0, 0);
    ctx.lineTo(10, 0);
    ctx.lineTo(10, 40);
    ctx.lineTo(0, 40);
    ctx.fillStyle = "purple";
    ctx.fill();
    ctx.closePath();
    x += 10;
    y += 10;
}
//var barra = new Path2D('M 0 0 L 15 0 L 15 60 L 0 60'); 
function zeta()
{
    ctx.beginPath();
    ctx.moveTo( 0, 0);
    ctx.lineTo(20, 0);
    ctx.lineTo(20, 10);
    ctx.lineTo(30, 10);
    ctx.lineTo(30, 20);
    ctx.lineTo(10, 20);
    ctx.lineTo(10, 10);
    ctx.lineTo(0, 10);
    ctx.fillStyle = "green";
    ctx.fill();
    ctx.closePath();
    x += 10;
    y += 10;
}
//var zeta = new Path2D('M 0 0 L 30 0 V 30 15 L 45 15 V 45 30 L 15 30 V 15 15 L 0 15');

function poli()
{
    ctx.beginPath();
    ctx.moveTo( 0, 0);
    ctx.lineTo(30, 0);
    ctx.lineTo(30, 10);
    ctx.lineTo(20, 10);
    ctx.lineTo(20, 20);
    ctx.lineTo(10, 20);
    ctx.lineTo(10, 10);
    ctx.lineTo(0, 10);
    ctx.fillStyle = "orange";
    ctx.fill();
    ctx.closePath();
    x += 10;
    y += 10;
}
//var poli = new Path2D('M 0 0 L 45 0 L 45 15 L 30 15 V 30 30 L 15 30 L 15 15 L 0 15');
function ese()
{
    ctx.beginPath();
    ctx.moveTo(10, 0);
    ctx.lineTo(30, 0);
    ctx.lineTo(30, 10);
    ctx.lineTo(20, 10);
    ctx.lineTo(20, 20);
    ctx.lineTo(0, 20);
    ctx.lineTo(0, 10);
    ctx.lineTo(10 , 10);
    ctx.fillStyle = "yellow";
    ctx.fill();
    ctx.closePath();
    x += 10;
    y += 10;
}
//var ese = new Path2D('M 15 0 L 45 0 L 45 15 L 30 15 L 30 30 L 0 30 L 0 15 L 15 15');
function jota()
{
    ctx.beginPath();
    ctx.moveTo(20, 0);
    ctx.lineTo(20, 20);
    ctx.lineTo(0, 20);
    ctx.lineTo(0, 10);
    ctx.lineTo(10, 10);
    ctx.lineTo(10, 0);
    ctx.fillStyle = "white";
    ctx.fill();
    ctx.closePath();
    x += 10;
    y += 10;
}
//var jota = new Path2D('M 15 0 L 30 0 L 30 45 L 0 45 L 0 30 L 15 30');


square();
