const canvas = document.getElementById('#canvas');
const cxt = canvas.getContext('2D');

var path = new Path2D('M 0 0 L 80 0 V 80 80 L 0 80 ');
cxt.fill(path);
//context.path([('b', 'm', 0, 0, 'l', 80, 0, 'l', 80, 80, 'l', 0, 80, 'c', 'f', 'red')]);
