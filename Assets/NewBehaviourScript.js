#pragma strict

var block : Transform;
var speed1 : float = 0.5;


function Start () {
block = GameObject.FindGameObjectWithTag("block").transform;	
}

function Update () {
if(block.position.y<=3 && block.position.y>=-3){
rigidbody2D.velocity.y=speed1;
}else {
speed1=speed1*-1;
if(block.position.y>=3){
block.position.y=3;
}else{
block.position.y=-3;

}
}

}