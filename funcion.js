const canvas = document.getElementById("canvas"); //llamamos al elemento canvas por su id
var ctx = canvas.getContext("2d"); // Creamos una variable a la cual se le adjudique el contexto en formato 2d
//Dibujando el tablero
console.log("cxt", ctx);

if(ctx === canvas.getContext("2d")){
ctx.strokeStyle = "#272727";
ctx.strokeWidth = 0.001;

for (var i = 0; i <= canvas.width; i+=15){
    ctx.beginPath();
    ctx.moveTo(i, 0);
    ctx.lineTo(i , ctx.canvas.height);
    ctx.stroke();
}

for (var j = 0; j <= canvas.height; j+=15){
    ctx.beginPath();
    ctx.moveTo(0, j);
    ctx.lineTo(ctx.canvas.width, j);  
    ctx.stroke(); 
}      
}
var square = new Path2D('M 0 0 L 20 0 V 20 20 L 0 20 ');
ctx.fill(square)
var el = new Path2D('M 0 0 L 40 0 V 40 80 L80 80 V 80 120 L 0 120');
ctx.fill();
var barra = new Path2D('M 0 0 L 40 0 L 40 160 L 0 160'); 
ctx.fill();
var zeta = new Path2D('M 0 0 L 80 0 V 80 40 L 120 40 V120 80 L 40 80 V 80 40 L 0 40');
ctx.fill();
var poli = new Path2D('M 0 0 L 120 0 L 120 40 L 80 40 V 80 80 L 40 80 L40 40 L 0 40');
ctx.fill();
var ese = new Path2D('M 40 0 L 120 0 L 120 40 L 80 40 L 80 80 L 0 80 L 0 40 L 40 40');
ctx.fill();
var jota = new Path2D('M 40 0 L 80 0 L 80 120 L 0 120 L 0 80 L 40 80');



//context.path([('b', 'm', 0, 0, 'l', 80, 0, 'l', 80, 80, 'l', 0, 80, 'c', 'f', 'red')]);
