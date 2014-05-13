    /*
    Usage:
     
    // Load my level
    LevelLoadFade.FadeAndLoadLevel("mylevel", Color.white, 0.5);
     
    // Reset the current level
    LevelLoadFade.FadeAndLoadLevel(Application.loadedLevel, Color.white, 0.5);
    */
     
static function FadeAndLoadLevel (level : String, color : Color, fadeLength : float){
    var fadeTexture = new Texture2D (1, 1);
    fadeTexture.SetPixel(0, 0, color);
    fadeTexture.Apply();
     
    var fade = new GameObject ("Fade");
    fade.AddComponent(LevelLoadFade);
    fade.AddComponent(GUITexture);
    fade.AddComponent(DestroyOnLoad);
    fade.transform.position = Vector3 (0.5, 0.5, 1000);
    fade.guiTexture.texture = fadeTexture;
     
    DontDestroyOnLoad(fadeTexture);
    DontDestroyOnLoad(fade);
    fade.guiTexture.color.a = 0;
    var time = 0.0;
    while (time < fadeLength){
	    time += Time.deltaTime;
	    fade.guiTexture.color.a = Mathf.InverseLerp(0.0, fadeLength, time);
	    yield;
    }
    fade.guiTexture.color.a = 1;
    yield;
    Application.LoadLevel(level);     
}