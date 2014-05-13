static var elements : Hashtable = new Hashtable();
static var skyboxes : Hashtable = new Hashtable();
var hydrogen : GameObject;
var oxygen : GameObject;
var nitrogen : GameObject;
var h2 : GameObject;
var h22 : GameObject;
var o2 : GameObject;
var h2o : GameObject;
var n2 : GameObject;
var h23 : GameObject;
var nh3 : GameObject;
//var fire : GameObject;

var water : Material;
var water2 : Material;
var water3 : Material;
var water4 : Material;
var water5 : Material;
static var loaded = false;

function Start(){
//Initial Elements load
	elements["hydrogen"] = hydrogen;
	elements["oxygen"] = oxygen;
	elements["nitrogen"] = nitrogen;
	elements["h2"] = h2;
	elements["h22"] = h22;
	elements["o2"] = o2;
	elements["h2o"] = h2o;
	elements["n2"] = n2;
	elements["h23"] = h23;
	elements["nh3"] = nh3;

//Initial Skyboxes load
	skyboxes["water"] = water;
	skyboxes["water2"] =  water2;	
	skyboxes["water3"] =  water3;
	skyboxes["water4"] =  water4;
	skyboxes["water5"] =  water5;
	//skyboxes["ammonia"] =

	loaded=true;
}