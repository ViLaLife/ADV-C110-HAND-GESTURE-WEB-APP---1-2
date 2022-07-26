Webcam.set({
    width:350,
    height:300,
    image_format : 'png',
    png_quality:"90"
});

var camera = document.getElementById("camera");

Webcam.attach("#camera");

function take_snap(){
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML='<img id="capimg" src="'+data_uri+'"/>';
    });
}

console.log("ml5 version-", ml5.version);

Classifier=ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/93Sb1iMLL/model.json", modelLoaded);

function modelLoaded(){
    console.log("model Loaded");
}

function speak(){
    var synth=window.speechSynthesis;
    var speak_data_1="The First Prediction is  " + prediction_1;
    var speak_data_2="The Second Prediction is  " + prediction_2;
    var utterThis=new SpeechSynthesisUtterance(speak_data_1 + speak_data_2);
    synth.speak(utterThis);
}