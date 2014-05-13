#pragma strict

function OnCollisionEnter (theCollision : Collision) {
Debug.Log("Hit!!");
if(theCollision.gameObject.name == "Neutron(Clone)"){
  Destroy(gameObject);
 }
}