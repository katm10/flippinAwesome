const RevAiApiClient = require('revai-node-sdk');
 
// Initialize your client with your revai access token
var accessToken = "02kiXlheeVr0xkYA-oZTevxPeuEWjwVGtyogDlUHyfqmIgFMtR4eX8etW2qyBGTyAoBfjrY6uPBIgZmLuyA4F0nf_g5Hc";
console.log(typeof(RevApiClient));
var client = new RevAiApiClient(accessToken);

// you can submit a local file
async function submitFile(fileName)
{
	await client.submitJobLocalFile(fileName);
}

async function getTranscript(id)
{
	await client.getTranscriptText(id);
}
var job = submitFile("recording.wav");
var transcriptText = getTranscript(job.id);
console.log(transcriptText);
client.deleteJob(job.id);
