var Cycloid = function(angle, radius, strokeStyle, fillColor, parentcircleObj){
    fillColor = fillColor || "red";
    strokeStyle = strokeStyle || 1;
    this.cycloid = new createjs.Shape();
    this.cycloid.graphics.setStrokeStyle(strokeStyle,"round").beginFill(fillColor).drawCircle(0,0,radius);
    this.cycloid.x = null;
    this.cycloid.y = null;
    this.angle = angle;
    this.addToStage = function(){
        stage.addChild(this.cycloid);
    };
};

var Circle = function(x,y,radius,strokeStyle,fillColor){
};

var animateCycloid = function(circleObj, cycloidObj, startangle, endangle, nsamples){
};

var rollCircle = function(circleObj){
    
};

var stage = new createjs.Stage("testCanvas");
var circle = new createjs.Shape();
circle.graphics.beginFill("DeepSkyBlue").drawCircle(0, 0, 50);
circle.x = 100;
circle.y = 100;
stage.addChild(circle);
var cycloid = new Cycloid(0,4,10,"black",circle);
cycloid.addToStage();
/*   line.graphics.setStrokeStyle(1).beginStroke("#00ff00").moveTo(220,60).lineTo(300,60);
   line.graphics.endStroke();
*/
createjs.Ticker.addEventListener("tick", tick);
circle.radius = 50;
var angle = 0;
var angler = 0;
var x, y;
var container = new createjs.Container();
stage.addChild(container);
function tick(event){
    circle.x = circle.radius*angler + 100;
    cycloid.cycloid.x = circle.radius*(angler + Math.sin(-angler)) + 100;
    cycloid.cycloid.y = -circle.radius*(1 - Math.cos(angler)) + 100 + circle.radius;
/*    stage.removeChild(line);
     line.graphics.beginStroke("black");
         line.graphics.moveTo(circle.x,circle.y);
         line.graphics.lineTo(cycloid.cycloid.x,cycloid.cycloid.y);
     line.graphics.endStroke();
    stage.addChild(line);
*/  
    var v = new createjs.Shape();
    v.graphics.setStrokeStyle(1,"round").beginFill("red").drawCircle(0,0,1);
    v.x = cycloid.cycloid.x;
    v.y = cycloid.cycloid.y;
    container.addChild(v);
    angle = (angle + 1)%720;
    angler = angle*2*Math.PI/360;
    if(angle == 0){
        var children = container.children;
        container.removeAllChildren();
        stage.removeChild(container);
        for(var child in children){
            stage.removeChild(child);
        }
        stage.addChild(container);
        
    }
	stage.update();
}	


console.log(stage);
console.log(circle);