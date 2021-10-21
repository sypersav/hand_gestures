Webcam.set({
    height: 300,
    width: 350,
    image_format: 'png',
    png_quality: 90

});
camera = document.getElementById("camera");
Webcam.attach(camera);

function takesnapshot() {
    Webcam.snap(function(data_uri) {
        document.getElementById("result").innerHTML = '<img id="captured_image" src="' + data_uri + '"/>'

    });

}
console.log("ml5 ", ml5.version)
classifier = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/Z9KxivTB9/model.json", modelloaded)

function modelloaded() {
    console.log(modelloaded)
}
var prediction_1 = "";


function speak() {
    var synth = window.speechSynthesis;
    speak_data_1 = "the first prediction is" + prediction_1;
    var utterthis = new SpeechSynthesisUtterance(speak_data_1);
    synth.speak(utterthis);
}