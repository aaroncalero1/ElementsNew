

function OnLevelWasLoaded (level : int) {
	var time = 0.0;
	var fadeLength = 1.5;
	while (time < fadeLength){
		time += Time.deltaTime;
		guiTexture.color.a = Mathf.InverseLerp(fadeLength, 0.0, time);
		yield;
	}
	Destroy(gameObject);
}