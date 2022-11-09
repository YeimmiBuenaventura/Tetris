const canvas = document.getElementById('#canvas');
var cxt = canvas.getContext("2d");
//Dibujando el tablero
tablero(){
    if( cxt === canvas.getContext){
        var disX = 40;
        var disY = 40;
        cxt.strokeStyle = "#ffffff";
        cxt.strokeWidth = 0.5;

        for (let i = disX; i < canvas.width; i+=disX){
            cxt.beginPath();
            cxy.moveTo(i, 0);
            cxt.lineTo(i , cxt.canvas.height);
            cxt.stroke();
        }
        for (let i = disY; i < canvas.height; i+=disY){
            cxt.beginPath();
            cxt.moveTo(0, i);
            cxt.lineTo(xt.canvas.width, i);  
            cxt.stroke(); 
        }      
        }
        else{
            alert('No se ha creado el contexto, error!');
        }
}
var path = new Path2D('M 0 0 L 80 0 V 80 80 L 0 80 ');
cxt.fill(path);
//context.path([('b', 'm', 0, 0, 'l', 80, 0, 'l', 80, 80, 'l', 0, 80, 'c', 'f', 'red')]);
