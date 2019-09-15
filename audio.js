// Imports modules.
const fs = require(`fs`),
  path = require(`path`);
const AudioRecorder = require('node-audiorecorder');

// Initialize recorder and file stream.
const audioRecorder = new AudioRecorder({
  program: process.platform === `win32` ? `sox` : `rec`,
  silence: 0
}, console);

// Create file path with random name.
const fileName = "recording.wav";
console.log(`Writing new recording file at: `, fileName);

// Create write stream.
const fileStream = fs.createWriteStream(fileName, { encoding: `binary` });

//start recording when the record button is pressed
function start_clicked() {
  audioRecorder.start().stream().pipe(fileStream);
}

// stop recording when you press the stop button
function stop_clicked(){
  audioRecorder.stop();
}

function wait(ms){
   var start = new Date().getTime();
   var end = start;
   while(end < start + ms) {
     end = new Date().getTime();
  }
}
start_clicked();
wait(7000);
stop_clicked();