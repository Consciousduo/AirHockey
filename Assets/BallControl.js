#pragma strict


var ballSpeed : float = 100;

function Start () {
//yield WaitForSeconds(1);
var random = Random.Range(0,2);
if(random>=0.5){
transform.position.x=3;
transform.position.y=0;
}else{
transform.position.x=-3;
transform.position.y=0;
}

//PlayBall();
}

function OnCollisionEnter2D (colInfo:Collision2D) {
if(colInfo.collider.tag=="Hockey"){
//rigidbody2D.velocity.y = rigidbody2D.velocity.y/2+colInfo.collider.rigidbody2D.velocity.y/3;
audio.pitch = Random.Range(0.7f, 1.3f);
audio.Play();
}else{

audio.pitch = Random.Range(0.7f, 1.3f);
audio.Play();
}
rigidbody2D.velocity.x = rigidbody2D.velocity.x*0.8;
rigidbody2D.velocity.y = rigidbody2D.velocity.y*0.8;

}


function Reset(){
//yield WaitForSeconds(0.39);
rigidbody2D.velocity.x=0;
rigidbody2D.velocity.y=0;

var random = Random.Range(0,2);
if(random>=0.5){
transform.position.x=3;
transform.position.y=0;
}else{
transform.position.x=-3;
transform.position.y=0;
}
//yield WaitForSeconds(0.39);
//PlayBall();

}

function PlayBall(){
var random = Random.Range(0,2);
if(random>=0.5){
rigidbody2D.AddForce(new Vector2(ballSpeed,10));
}else{
rigidbody2D.AddForce(new Vector2(-ballSpeed,-10));
}
}