#pragma strict

private var drawList = false;
private var drawIt = true;
function OnGUI () {

var levels = ["Water", "Ammonia"];
var numberOfButtons = levels.length + 1;

//box dimensions:
var boxWidth = 0.3 * Screen.width;
var boxHeight = 0.8 * Screen.height;
var boxXCorner = Screen.width/2 - boxWidth/2;
var boxYCorner = Screen.height/2 - boxHeight/2;

//button dimensions:
var buttonSeparation = boxHeight/(2.5*numberOfButtons + 1) ;

var buttonWidth = 0.7 * boxWidth;
var buttonHeight = 1.5 * buttonSeparation;

var buttonXCorner = boxXCorner + (boxWidth-buttonWidth)/2;
var buttonYCorner = boxYCorner;

//Starting Menu:::
	if(drawIt){
		if(!drawList){
			if(GUI.Button(Rect ((1.0/7.5)*Screen.width,(1.5/4.0)*Screen.height,(2.0/7.5)*Screen.width,(1.0/4.0)*Screen.height),"Play")){
				drawList = true;
			}
			if(GUI.Button(Rect ((4.5/7.5)*Screen.width,(1.5/4.0)*Screen.height,(2.0/7.5)*Screen.width,(1.0/4.0)*Screen.height),"Exit")){
				Application.Quit();
			}
		} else {
		//GUI Painting::::
			// Make a background box
			GUI.Box (Rect (boxXCorner,boxYCorner,boxWidth,boxHeight), "Niveles Disponibles: ");
			var i : int;
			for (i=1; i<numberOfButtons; i++){
				if (GUI.Button (Rect (buttonXCorner,buttonYCorner + i*buttonSeparation + (i-1)*buttonHeight,buttonWidth,buttonHeight), "Level "+i)) {
					drawIt = false;
					PlayerPrefs.SetString("level",levels[i-1]);
		    		LevelLoadFade.FadeAndLoadLevel("waterlevel", new Color(0,0.5,0), 2);
				}	
			}
			if (GUI.Button (Rect (buttonXCorner,boxYCorner + boxHeight - (buttonSeparation+buttonHeight),buttonWidth,buttonHeight), "Back")) {
				drawList = false;
			}	
		}
	}
}