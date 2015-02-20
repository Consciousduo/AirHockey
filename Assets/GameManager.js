#pragma strict
static var mode : int =0;
static var PlayerScore01 : int =0;
static var PlayerScore02 : int =0;
var theSkin : GUISkin;

var theBall : Transform;
function Start () {
	theBall = GameObject.FindGameObjectWithTag("Ball").transform;
}


static function Score (wallName : String) {
	if(wallName == "RightScoreWall"){
	PlayerScore01+=1;
	}else{
	PlayerScore02+=1;
	}
}


function OnGUI (){
GUI.skin = theSkin;
GUI.Label (new Rect(Screen.width/2-150-12, 20, 100, 100), ""+PlayerScore01);
GUI.Label (new Rect(Screen.width/2+150-12, 20, 100, 100), ""+PlayerScore02);
GUI.Label (new Rect(Screen.width/2+399, 20, 300, 100), "mode:"+mode);


if(GUI.Button(new Rect(Screen.width/2-121/2, 0, 121, 53), "RESET")) {
PlayerScore01 = 0;
PlayerScore02 = 0;
theBall.gameObject.SendMessage("Reset");
}

if(GUI.Button(new Rect(Screen.width/2-121/2, 39, 121, 53), "Mode")) {
if(mode==0){
mode=1;
}else if(mode ==1){
mode=2;
}else if(mode==2){
mode=0;
}
}

if(GUI.Button(new Rect(Screen.width/2-121/2, 1000, 121, 53), "Quit")) {
Application.Quit();
}
}





