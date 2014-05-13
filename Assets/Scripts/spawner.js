#pragma strict

var oxygen: GameObject;
var hydrogen: GameObject;
var nitrogen: GameObject;
var probO: float;
var probH: float;
var probN: float;
var time: float = 2;
var startTime: float = 0;
var startNumberOfParticles: int=2;
var numberOfParticles: int=0;
var maxNumberOfParticles: int=7;
private var probabilities : Hashtable = new Hashtable();
private static var pid: int=0;
private var e : Elements;
private var playTime : float = 0;
var blackhole : GameObject;
function Start(){
	
	var filePath = Path.Combine(Application.streamingAssetsPath, "LevelSettings");
	var result = "";
	if (filePath.Contains("://")){
		var www = new WWW (filePath);
		yield www;
		result = www.text;
	} else {
		result = File.ReadAllText(filePath);
	}

	var lines : String[] = result.Split('\n'[0]);
	
	var i: int = 0;
	var levelFound = false;
	var levelEnd = false;
	while(!levelFound && i<lines.length){
		if(lines[i].StartsWith("#LEVEL "+PlayerPrefs.GetString('level').ToLower())){
		print("LEVEL FOUND");
			levelFound = true;
		}
		i++;
	}
    if(i>=lines.length){
        print("LEVEL NOT FOUND");
    }
	while(!levelEnd && i<lines.length){
		if(lines[i].StartsWith("#ELEMENTS")){
			i++;
			while(!lines[i].StartsWith("#ENDELEMENTS")){
				if(lines[i].StartsWith("#ELM")){
					var el : String[] = lines[i].Split();
				    probabilities[el[1]] = float.Parse(el[2]);
            	}
                i++;
			}
		} else if(lines[i].StartsWith("#SKYBOX")){
			var tokens : String[] = lines[i].Split();
			PlayerPrefs.SetString("skybox",tokens[1]);
		} else if(lines[i].StartsWith("#ENDLEVEL")){
            levelEnd = true;
		}
        i++;
	}

	var totprob : float = 0;
	var thisprob : float;
	var probclone = probabilities.Clone();
	for (var entry : DictionaryEntry in probclone){
		thisprob = entry.Value;
		probabilities[entry.Key] = totprob + thisprob;
		totprob += thisprob;
	}
	probclone = probabilities.Clone();
	for (var entry : DictionaryEntry in probclone){
		thisprob = entry.Value;
		probabilities[entry.Key] = thisprob/totprob;
	}

	i=0;
	e = this.GetComponent(Elements);

	var skyboxset=false;
	while(i<startNumberOfParticles){
		if(e.loaded && !skyboxset){
			RenderSettings.skybox = e.skyboxes[PlayerPrefs.GetString("skybox")];
			skyboxset = true;
		}
		if(e.loaded){
			randomInstance();
			numberOfParticles++;
			i++;
		} else {
			yield WaitForSeconds(0.2);
		}
	}



}

function Update () {
	playTime +=Time.deltaTime;
	startTime += Time.deltaTime;
	if(startTime>time && numberOfParticles<maxNumberOfParticles){
		randomInstance();
		startTime=0;
		numberOfParticles++;
	}
}

function randomInstance(){
	var r = Random.Range(0.0,1.0);
	var instance : GameObject;
	var maxEl : GameObject;
	var maxprob : float = 1;
	var thisprob : float;
	for (var entry : DictionaryEntry in probabilities){
		thisprob = entry.Value;
		if(thisprob >=r && thisprob <= maxprob){
			maxEl = e.elements[entry.Key];
			maxprob = thisprob;
		}
	}
	instance = Instantiate(maxEl,new Vector3(Random.Range(-8.0,8.0),Random.Range(-4.0,4.0),Random.Range(-6.0,6.0)),Quaternion.identity);
	instance.AddComponent('destroy');
	var particleID : pid = instance.gameObject.GetComponent("pid");
	particleID.pid = pid++;
	var moveComp: move2 = instance.gameObject.GetComponent("move2");
	var ps : Transform = instance.transform.GetChild(0);
	moveComp.timeToLive = ps.GetComponent(ParticleSystem).duration + 1;
	moveComp.cam = this.gameObject;
}
