
// const canvas = document.getElementById("canvas"); //llamamos al elemento canvas por su id
// var ctx = canvas.getContext("2d"); // Creamos una variable a la cual se le adjudique el contexto en formato 2d
// //Dibujando el tablero
// if(ctx === canvas.getContext("2d")){ //Se coloca un condicional en el cual se realiza un comparación del contexto en pro de ejecutar una serie de pasos que daran vida al tablero
//   ctx.strokeStyle = "#272727";//Da el color a la linea del contexto
//   ctx.strokeWidth = 0.001; //Da el grosor de la linea
  
//   for (var i = 0; i <= canvas.width; i+=15){//Se implementa un ciclo for en el cual se inicializa la variable i en el pto 0, la condicion a ejecutar indica que se a realizar algo expuesto posteriormente hasta que se llegue al maximo del ancho; el aumento se realizara de 15 en 15
//       ctx.beginPath(); //Se indica que comience a dibujar
//       ctx.moveTo(i, 0);//El punto i = x en cuanto sistema de coordenadas, y el 0 = y
//       ctx.lineTo(i , ctx.canvas.height); //Se indica que dibuje una linea en cada una de las posiciones que tome i hasta llegar al limite del tablero
//       ctx.stroke();//Esta función trazara las lineas
//   }
  
//   for (var j = 0; j <= canvas.height; j+=15){//Se implementa un ciclo for en el cual se inicializa la variable i en el pto 0, la condicion a ejecutar indica que se a realizar algo expuesto posteriormente hasta que se llegue al maximo del alto; el aumento se realizara de 15 en 15
//       ctx.beginPath();//Se indica que comience a dibujar
//       ctx.moveTo(0, j);//El punto j = y en cuanto sistema de coordenadas, y el 0 = x
//       ctx.lineTo(ctx.canvas.width, j);  //Se indica que dibuje a lo ancho del contexto una linea en cada una de las posiciones que tome j hasta llegar al limite del tablero
//       ctx.stroke(); //Esta función trazara las lineas
//   }      
//   }

// //Trayendo figuras sobre el tablero: se indica una variable global a la cual se le brinda un nombre especifico de c/u de las figuras, indicando que es un nuevo Path2D el cual nos permite traer trazos realizados en svg a js como objeto

// ctx.fillStyle = 'blue';
// var square = new Path2D('M 0 0 L 30 0 V 30 30 L 0 30 '); 
// ctx.fill(square); //Rellena la forma del contexto adjudicado
// ctx.fillStyle = 'red';
// var el = new Path2D('M 0 0 L 15 0 V 15 30 L 30 30 V 30 45 L 0 45');
// ctx.fill();
// ctx.fillStyle = 'purple';
// var barra = new Path2D('M 0 0 L 15 0 L 15 60 L 0 60'); 
// ctx.fill();
// ctx.fillStyle = 'green';
// var zeta = new Path2D('M 0 0 L 30 0 V 30 15 L 45 15 V 45 30 L 15 30 V 15 15 L 0 15');
// ctx.fill();
// ctx.fillStyle = 'orange';
// var poli = new Path2D('M 0 0 L 45 0 L 45 15 L 30 15 V 30 30 L 15 30 L 15 15 L 0 15');
// ctx.fill();
// ctx.fillStyle = 'yellow';
// var ese = new Path2D('M 15 0 L 45 0 L 45 15 L 30 15 L 30 30 L 0 30 L 0 15 L 15 15');
// ctx.fill();
// ctx.fillStyle = 'white';
// var jota = new Path2D('M 15 0 L 30 0 L 30 45 L 0 45 L 0 30 L 15 30');
// ctx.fill();

(function(){
  'use strict';
  window.addEventListener('load',init,false);
  var KEY_ENTER=13;
  var KEY_LEFT=37;
  var KEY_UP=38;
  var KEY_RIGHT=39;
  var KEY_DOWN=40;
  var square = new Path2D('M 0 0 L 20 0 V 20 20 L 0 20 ');

  var canvas=null,ctx=null;
  var x=0, y=0, x_1=10, y_1=20, y_2=10;
  var lastPress=null;
  var pressing=[];
  var pause=true;

  function init(){
      canvas=document.getElementById('canvas');//llamamos al elemento canvas por su id
      ctx=canvas.getContext('2d');// Creamos una variable a la cual se le adjudique el contexto en formato 2d
      
      run();
      repaint();
  }

  function run(){
      setTimeout(run,50);
      act();
  }

  function repaint(){
      requestAnimationFrame(repaint);
      paint(ctx);
  }

  function act(){
      if(!pause){
          // Move Rect
          if(pressing[KEY_UP])
              [y-=10, y_1-=10, y_2-=10];
          if(pressing[KEY_RIGHT])
              [x+=10,
              x_1+=10];
          if(pressing[KEY_DOWN])
              [y+=10,
              y_1+=10, y_2+=10];
          if(pressing[KEY_LEFT])
              [x-=10,
              x_1-=10];

          // Out Screen
          if(x>canvas.width)
              x=0;
          if(y>canvas.height)
              y=0;
          if(x<0)
              x=canvas.width;
          if(y<0)
              y=canvas.height;
        
      }
      // Pause/Unpause
      if(lastPress==KEY_ENTER){
          pause=!pause;
          lastPress=null;
      }
  }

  function paint(ctx){
    //Dibujando el tablero
    if(ctx === canvas.getContext("2d")){ //Se coloca un condicional en el cual se realiza un comparación del contexto en pro de ejecutar una serie de pasos que daran vida al tablero
        ctx.strokeStyle = "#272727";//Da el color a la linea del contexto
        ctx.strokeWidth = 0.001; //Da el grosor de la linea
        
        for (var i = 0; i <= canvas.width; i+=10){//Se implementa un ciclo for en el cual se inicializa la variable i en el pto 0, la condicion a ejecutar indica que se a realizar algo expuesto posteriormente hasta que se llegue al maximo del ancho; el aumento se realizara de 15 en 15
            ctx.beginPath(); //Se indica que comience a dibujar
            ctx.moveTo(i, 0);//El punto i = x en cuanto sistema de coordenadas, y el 0 = y
            ctx.lineTo(i , ctx.canvas.height); //Se indica que dibuje una linea en cada una de las posiciones que tome i hasta llegar al limite del tablero
            ctx.stroke();//Esta función trazara las lineas
        }
        
        for (var j = 0; j <= canvas.height; j+=10){//Se implementa un ciclo for en el cual se inicializa la variable i en el pto 0, la condicion a ejecutar indica que se a realizar algo expuesto posteriormente hasta que se llegue al maximo del alto; el aumento se realizara de 15 en 15
            ctx.beginPath();//Se indica que comience a dibujar
            ctx.moveTo(0, j);//El punto j = y en cuanto sistema de coordenadas, y el 0 = x
            ctx.lineTo(ctx.canvas.width, j);  //Se indica que dibuje a lo ancho del contexto una linea en cada una de las posiciones que tome j hasta llegar al limite del tablero
            ctx.stroke(); //Esta función trazara las lineas
        }      
        }

        // ctx.fillStyle='blue';
        // ctx.beginPath();
        // ctx.fillRect(x,y,20,20);
        // ctx.fill();

        // ctx.fillStyle='red';
        // ctx.beginPath();
        // ctx.fillRect(x,y,10,30);
        // ctx.fillRect(x_1,y_1,10,10);
        // ctx.fill();

        // ctx.fillStyle='purple';
        // ctx.beginPath();
        // ctx.fillRect(x,y,10,40);
        // ctx.fill();

        // ctx.fillStyle='green';
        // ctx.beginPath();
        // ctx.fillRect(x,y,20,10);
        // ctx.fillRect(x_1,y_2,20,10);
        // ctx.fill();

        // ctx.fillStyle='orange';
        // ctx.beginPath();
        // ctx.fillRect(x,y,30,10);
        // ctx.fillRect(x_1,y_2,10,10);
        // ctx.fill();

        // ctx.fillStyle='yellow';
        // ctx.beginPath();
        // ctx.fillRect(x,y_2,20,10);
        // ctx.fillRect(x_1,y,20,10);
        // ctx.fill();

        ctx.fillStyle='white';
        ctx.beginPath();
        ctx.fillRect(x,y_1,10,10);
        ctx.fillRect(x_1,y,10,30);
        ctx.fill();


    //   ctx.fillStyle = 'blue';
    //   ctx.square; 
    //   ctx.fill(square) 
      ctx.fillStyle='#fff';
      //ctx.fillText('Last Press: '+lastPress,0,20);
      if(pause){
          ctx.textAlign='center';
          ctx.fillText('PAUSE',150,75);
          ctx.textAlign='left';
      }
  }

  document.addEventListener('keydown',function(evt){
      lastPress=evt.keyCode;
      pressing[evt.keyCode]=true;
  },false);

  document.addEventListener('keyup',function(evt){
      pressing[evt.keyCode]=false;
  },false);

  window.requestAnimationFrame=(function(){
      return window.requestAnimationFrame || 
          window.webkitRequestAnimationFrame || 
          window.mozRequestAnimationFrame || 
          function(callback){window.setTimeout(callback,17);};
  })();
})();


















