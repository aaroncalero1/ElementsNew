#pragma strict

var cam : GameObject;

function Update () {
	transform.position = cam.camera.main.ScreenToViewportPoint(Input.mousePosition);
}