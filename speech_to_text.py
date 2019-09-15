from rev_ai import apiclient

# create your client
client = apiclient.RevAiAPIClient("02kiXlheeVr0xkYA-oZTevxPeuEWjwVGtyogDlUHyfqmIgFMtR4eX8etW2qyBGTyAoBfjrY6uPBIgZmLuyA4F0nf_g5Hc")
# you can send a local file
job = client.submit_job_local_file("recording.wav")
job_details = client.get_job_details(job.id)
print(repr(job_details), job.id)

# transcript_text = client.get_transcript_text(job.id)
# print(transcript_text)
# client.delete_job(job.id)

