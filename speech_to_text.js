const revai = require('revai-node-sdk');
const fs = require('fs');
 
// Initialize your client with your revai access token
const audioConfig = new revai.AudioConfig(
    /* contentType */ "audio/x-raw", 
    /* layout */      "interleaved", 
    /* sample rate */ 16000,
    /* format */      "S16LE",
    /* channels */    1
);

var token = "02kiXlheeVr0xkYA-oZTevxPeuEWjwVGtyogDlUHyfqmIgFMtR4eX8etW2qyBGTyAoBfjrY6uPBIgZmLuyA4F0nf_g5Hc";


var client = new revai.RevAiStreamingClient(token, audioConfig);

// Create your event responses
client.on('close', (code, reason) => {
    console.log(`Connection closed, ${code}: ${reason}`);
});
client.on('httpResponse', code => {
    console.log(`Streaming client received http response with code: ${code}`);
})
client.on('connectFailed', error => {
    console.log(`Connection failed with error: ${error}`);
})
client.on('connect', connectionMessage => {
    console.log(`Connected with message: ${connectionMessage}`);
})

// Begin streaming session
var stream = client.start();

// Read file from disk
var file = fs.createReadStream("recording.wav");

stream.on('data', data => {
    console.log(data);
});
stream.on('end', function () {
    console.log("End of Stream");
});

file.on('end', () => {
    client.end();
});

// Stream the file
file.pipe(stream);

// Forcibly ends the streaming session
// stream.end();






