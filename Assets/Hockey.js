#pragma strict

var moveUp : KeyCode;
var moveDown : KeyCode;
var moveLeft : KeyCode;
var moveRight : KeyCode;
var test : KeyCode;

var speed : float = 10;


var Hockey1 : Transform;
var Hockey2 : Transform;

var track : int =0;


function Start () {
	Hockey1 = GameObject.FindGameObjectWithTag("Hockey1").transform;	
	Hockey2 = GameObject.FindGameObjectWithTag("Hockey2").transform;
}


function Update () {


if(GameManager.mode==1 && Hockey1.position.y>4.009){
Hockey1.position.y=-4.009;

}else if(GameManager.mode==1 && Hockey1.position.y<-4.009){
Hockey1.position.y=4.009;

}else if(GameManager.mode==1 && Hockey2.position.y>4.009){
Hockey2.position.y=-4.009;

}else if(GameManager.mode==1 && Hockey2.position.y<-4.009){
Hockey2.position.y=4.009;

}else if(Hockey1.position.x>0 && GameManager.mode!=2){
Hockey1.position.x=0;
rigidbody2D.velocity.y=0;
rigidbody2D.velocity.x=0;

}else if(Hockey2.position.x<0 && GameManager.mode!=2){
Hockey2.position.x=0;
rigidbody2D.velocity.y=0;
rigidbody2D.velocity.x=0;

}else if(Input.GetKey(moveUp) && Input.GetKey(moveRight)){

if(GameManager.mode==2){
var temp1 : int =1;
if (track==temp1){
speed=speed*1.01;
}else{
speed = 5;
}
track = temp1;
}
rigidbody2D.velocity.y=speed/1.5;
rigidbody2D.velocity.x=speed/1.5;

}else if(Input.GetKey(moveUp) && Input.GetKey(moveLeft)){

if(GameManager.mode==2){
var temp2 : int =2;
if (track==temp2){
speed=speed*1.01;
}else{
speed = 5;
}
track = temp2;
}

rigidbody2D.velocity.y=speed/1.5;
rigidbody2D.velocity.x=speed/-1.5;

}else if(Input.GetKey(moveDown) && Input.GetKey(moveLeft)){

if(GameManager.mode==2){
var temp3 : int =3;
if (track==temp3){
speed=speed*1.01;
}else{
speed = 5;
}
track = temp3;
}

rigidbody2D.velocity.y=speed/-1.5;
rigidbody2D.velocity.x=speed/-1.5;

}else if(Input.GetKey(moveDown) && Input.GetKey(moveRight)){

if(GameManager.mode==2){
var temp4 : int =4;
if (track==temp4){
speed=speed*1.01;
}else{
speed = 5;
}
track = temp4;
}

rigidbody2D.velocity.y=speed/-1.5;
rigidbody2D.velocity.x=speed/1.5;

}else if(Input.GetKey(moveUp)){

if(GameManager.mode==2){
var temp5 : int =5;
if (track==temp5){
speed=speed*1.01;
}else{
speed = 5;
}
track = temp5;
}

rigidbody2D.velocity.y=speed;
rigidbody2D.velocity.x=0;

}else if(Input.GetKey(moveDown)){

if(GameManager.mode==2){
var temp6 : int =6;
if (track==temp6){
speed=speed*1.01;
}else{
speed = 5;
}
track = temp6;
}

rigidbody2D.velocity.y=speed*-1;
rigidbody2D.velocity.x=0;

}else if(Input.GetKey(moveLeft)){

if(GameManager.mode==2){
var temp7 : int =7;
if (track==temp7){
speed=speed*1.01;
}else{
speed = 5;
}
track = temp7;
}

rigidbody2D.velocity.x=speed*-1;
rigidbody2D.velocity.y=0;

}else if(Input.GetKey(moveRight)){

if(GameManager.mode==2){
var temp8 : int =8;
if (track==temp8){
speed=speed*1.01;
}else{
speed = 5;
}
track = temp8;
}

rigidbody2D.velocity.x=speed;
rigidbody2D.velocity.y=0;

}else{
rigidbody2D.velocity.y=0;
rigidbody2D.velocity.x=0;

}

if(GameManager.mode!=2){
speed=8;
}

}