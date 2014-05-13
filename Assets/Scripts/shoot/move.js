#pragma strict

function Start () {

}

function Update () {
transform.position += 15 * Time.deltaTime * new Vector3(1,0,0);
}