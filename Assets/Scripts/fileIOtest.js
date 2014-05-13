#pragma strict

import System.IO;

function Start () {
	//Debug.Log(Application.persistentDataPath + "/test.txt");
	var line : String;
	var fileName : String  = Application.persistentDataPath + "/test.txt";
	var fileWriter = File.OpenText(fileName);
	line = fileWriter.ReadLine();
	while(line !== null){
		Debug.Log(line);
		line = fileWriter.ReadLine();
	}
	//line = fileWriter.ReadToEnd();	
	fileWriter.Close();	
}