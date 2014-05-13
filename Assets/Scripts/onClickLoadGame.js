#pragma strict


var level: String;
function OnMouseDown () {

//	Application.LoadLevel(level);
	PlayerPrefs.SetString("level","water");
    LevelLoadFade.FadeAndLoadLevel(level, Color.black, 2);

}