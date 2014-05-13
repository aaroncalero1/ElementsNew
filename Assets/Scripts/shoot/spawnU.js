#pragma strict

var uranium : GameObject;
private var instance : GameObject;
function Start () {
var i : int;
var j : int;
var k : int;
	for(i=-2;i<=2;i++){
		for(j=-2;j<=2;j++){
			for(k=-2;k<=2;k++){
				instance = Instantiate(uranium,new Vector3(i,j,k),Quaternion.identity);
				instance.transform.parent = this.transform;
				instance.AddComponent("fission");
			}
		}
	}
}
