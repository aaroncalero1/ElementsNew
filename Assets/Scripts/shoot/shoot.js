#pragma strict

var shot : Transform;
private var delay : float = 0.2;
private var passed : float = 0;

function Update () {

if(passed < delay){
	passed += Time.deltaTime;
}

if(Input.GetMouseButtonDown(0) ) {
	if(passed > delay){
//		var instance = Instantiate(shot,transform.position, Quaternion.identity);

		var hit : RaycastHit;
		var vektor = Vector3(Input.mousePosition.x,Input.mousePosition.y,0f);
		var ray : Ray = this.gameObject.camera.ScreenPointToRay (vektor);
		var targetpos : Vector3;
		
		if(Physics.Raycast(ray, hit, Mathf.Infinity)){
			targetpos = hit.collider.gameObject.transform.position - (transform.position- Vector3(0,8,0));
		} else {
			targetpos = Vector3(0,8,0) + this.gameObject.camera.ScreenToWorldPoint(Vector3(Input.mousePosition.x,Input.mousePosition.y,200));
		}
		var instance = Instantiate(shot,transform.position - Vector3(0,8,0), Quaternion.identity);
		instance.gameObject.rigidbody.AddForce(targetpos*200);
		passed = 0;
	}
}


//		var hit : RaycastHit;
//		var vektor = Vector3(Input.mousePosition.x,Input.mousePosition.y,0f);
//		var ray : Ray = this.gameObject.camera.ScreenPointToRay (vektor);
//		var targetpos = Vector3;
//		
//		if (Physics.Raycast(ray, hit, Mathf.Infinity)) {
//			targetpos = hit.collider.gameObject.transform.position - transform.position;
//			var instance = Instantiate(shot,targetpos, Quaternion.identity);
//		} else {
//			targetpos = Vector3(Input.mousePosition.x,Input.mousePosition.y,Mathf.Infinity);              
//    	}                          
//				


}