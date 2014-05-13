﻿#pragma strict

import System.IO;

function Start () {

	Debug.Log(Application.persistentDataPath);
	Debug.Log(Application.dataPath);
	Debug.Log(Application.streamingAssetsPath);
//	var line : String;
//	var fileName : String  = Application.persistentDataPath + "/test.txt";
//	var fileWriter = File.OpenText(fileName);
//	line = fileWriter.ReadLine();
//	while(line !== null){
//		Debug.Log(line);
//		line = fileWriter.ReadLine();
//	}
//	//line = fileWriter.ReadToEnd();	
//	fileWriter.Close();	

	// print the path to the streaming assets folder
	var filePath = Path.Combine(Application.streamingAssetsPath, "LevelSettings");
	var result = "";
	if (filePath.Contains("://")){
		var www = new WWW (filePath);
		yield www;
		result = www.text;
	} else {
		result = File.ReadAllText(filePath);
	}
	Debug.Log(result);
	
	var lines : String[] = result.Split('>'[0]);

	var i: int = 0;
	var levelFound = false;
	var levelEnd = false;
//	while(!levelFound && i<lines.length){
//	print(lines[i]);
//		if(lines[i].StartsWith("#LEVEL "+PlayerPrefs.GetString('level'))){
//			levelFound = true;
//		}
//		i++;
//	}
//	while(!levelEnd){
//		if(lines[i].StartsWith("ELEMENTS")){
//			i++;
//			while(!lines[i].StartsWith("ELEMENTSEND")){
//				if(lines[i].StartsWith("ELM")){
//					print(lines[i]);
//					var el : String[] = lines[i].Split();
//					print(el.length);
//					//el[0] contiene #ELM, el[1] contienen el nombre del elemento, y el[2] contiene la probabilidad (o deberia)
//					//Acciones a realizar:
//					//decirle al spawner que utilice el elemento con probabilidad p
//				}
//			}
//		} else {
//		
//		}
//		levelEnd=true;
//	}
}
