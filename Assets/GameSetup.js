#pragma strict

//Reference the camera
var mainCam : Camera;

//Reference the colliders we are going to adjust
var TopWall : BoxCollider2D;
var BottomWall : BoxCollider2D;
var LeftWall : BoxCollider2D;
var RightWall : BoxCollider2D;

var leftScoreWall : BoxCollider2D;
var rightScoreWall : BoxCollider2D;

var Hockey01 : Transform;
var Hockey02 : Transform;




function Start () { //Only set this to Update if you know the screen size can change during a playsession.

	leftScoreWall.size = new Vector2(1f, mainCam.ScreenToWorldPoint(new Vector3(0f, Screen.height*2f, 0f)).y*0.22f);
	leftScoreWall.center = new Vector2(mainCam.ScreenToWorldPoint(new Vector3(0f, 0f, 0f)).x - 0.4f, 0f);
	
	rightScoreWall.size = new Vector2(1f, mainCam.ScreenToWorldPoint(new Vector3(0f, Screen.height*2f, 0f)).y*0.22f);
	rightScoreWall.center = new Vector2(mainCam.ScreenToWorldPoint(new Vector3(Screen.width, 0f, 0f)).x + 0.4f, 0f);

	//Move each wall to its edge location:
	TopWall.size = new Vector2 (mainCam.ScreenToWorldPoint (new Vector3 (Screen.width * 2f, 0f, 0f)).x, 1f);
	TopWall.center = new Vector2 (0f, mainCam.ScreenToWorldPoint (new Vector3 ( 0f, Screen.height, 0f)).y + 0.5f);
	
	BottomWall.size = new Vector2 (mainCam.ScreenToWorldPoint (new Vector3 (Screen.width * 2, 0f, 0f)).x, 1f);
	BottomWall.center = new Vector2 (0f, mainCam.ScreenToWorldPoint (new Vector3( 0f, 0f, 0f)).y - 0.5f);
	
	LeftWall.size = new Vector2(1f, mainCam.ScreenToWorldPoint(new Vector3(0f, Screen.height*2f, 0f)).y);
	LeftWall.center = new Vector2(mainCam.ScreenToWorldPoint(new Vector3(0f, 0f, 0f)).x - 0.5f, 0f);
	
	RightWall.size = new Vector2(1f, mainCam.ScreenToWorldPoint(new Vector3(0f, Screen.height*2f, 0f)).y);
	RightWall.center = new Vector2(mainCam.ScreenToWorldPoint(new Vector3(Screen.width, 0f, 0f)).x + 0.5f, 0f);

	//Move the players to a fixed distance from the edges of the screen:
	
	Hockey01.position.x = mainCam.ScreenToWorldPoint (new Vector3 (100f, 0f, 0f)).x;
	Hockey02.position.x = mainCam.ScreenToWorldPoint (new Vector3 (Screen.width -100f, 0f, 0f)).x;
}