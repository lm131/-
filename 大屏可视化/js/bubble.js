var canvas = document.querySelector('canvas');
var ctx = canvas.getContext('2d');

var w = 1920;//window.innerWidth;//获取屏幕宽高
var h = 1080;//window.innerHeight*2/2;

canvas.width = w;//将屏幕宽高赋值给canvas
canvas.height = h;
// canvas.style.cssText += `;width:${w}px;height:${h}px;`;

var dots = [];
var minScale = 1;//设置圆点的最小缩放
var maxScale = 3;//设置圆点的最大缩放
var bei = 1;
for(var i = 0;i < 300; i += 1){  //设置白圆点的个数
  dots.push(new Dot())
}

render = function() {
  ctx.clearRect(0,0,w,h);
  // ctx.fillStyle = 'rgb(26,94,199)';
  // ctx.fillRect(0,0,w,h);//描绘底层蓝色背景
  for(var i = 0;i < dots.length;i += 1){
    var dot = dots[i];
    dot.update();
    dot.paint();

  }
  requestAnimationFrame(render)
}
render();


function Dot(){
  this.radius = Math.floor(Math.random() * 3 + 1);//在选一个随机数为圆点半径
  this.d = Math.random() * 2 * Math.PI;//在0-2π之间随机一个弧度值
  this.rx = Math.random() * w*(Math.random()>0.6?2/3:1/4) ;// 选一个随机数，作为椭圆长轴顶点a的数值,也就是椭圆中心的x轴坐标，此处的x,y,是相对于椭圆圆心为中心点建立的直角坐标系。
  this.ry = Math.random() * h - h / 2;//选一个随机数作为椭圆短轴顶点b的数值，也就是椭圆中心的y轴坐标，此处的x,y,是相对于椭圆圆心为中心点建立的直角坐标系。这两个值可以根据自已需求来定。
  this.x = Math.cos(this.d) * this.rx + w / 2;
  this.y = Math.sin(this.d) * this.ry + h / 2;//根据椭圆x,y求值公式，x=a*cosα，y=a*sinα.求出圆点在椭圆上的x,y轴坐标.后面加w/2,h/2只是为了居中显示。此处的x,y是相对于canvas建立的直角坐标系的，按canvas约定，其中心点（0,0）点在左上角
  this.z = (Math.pow(Math.pow(this.rx,2) + Math.pow(this.ry,2),0.5) / Math.pow(Math.pow(w / 2,2) + Math.pow(h / 2,2),0.5))//求白色圆点离椭圆中心点的距离，可视为一个点到圆心的距离，用x平方+y平方=c平方求得。此处的x,y,是相对于椭圆圆心为中心点建立的直角坐标系。此处Z值只是一个比值
  this.scale = (Math.cos(this.d)+1) * (maxScale - minScale) / 2 + minScale;//圆点的缩放大小,根据余弦函数公式y=cosα.标准的余弦函数最大值和最小值分别为1，-1.这里要自行设置最大值和最小值，所以要进行改写
  // this.speed = Math.random() * 0.0005 + 0.0005;
  this.speed = Math.random() * 0.0004 + 0.0004;//圆点运动的速度
  this.alpha = this.scale / maxScale * 0.1 + 0.1;//圆点运动的透明度
  this.count = 0;
  this.paint = function() {
    ctx.fillStyle = 'rgba(255,255,255,' + this.alpha + ')';
    ctx.beginPath();
    ctx.arc(this.x,this.y,this.radius*this.scale*this.z,0,Math.PI*2);
    ctx.fill();
  }
  this.update = function() {
    this.count +=0.01;
    if(Math.floor(this.count)%12===0&&Math.floor(this.count)!=0){
      this.d += 0.008;
      if(this.count>Math.floor(this.count)+0.5){
        this.d -= 0.008;
      }
      console.log(this.count)
    }


    this.x = Math.sin(this.d) * this.rx + w / 2;
    this.y = Math.cos(this.d) * this.ry + h / 2;
    this.d -= this.speed;//通过改变它的弧度值来改变圆点在椭圆中运动
    this.scale = (Math.cos(this.d) + 1) * (maxScale - minScale) / 2 + minScale;
    this.alpha = this.scale / maxScale * 0.3 + 0.1;
  }
}