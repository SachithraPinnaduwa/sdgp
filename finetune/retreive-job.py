import requests

def get_fine_tuning_job(job_id):
    url = f"https://api.openai.com/v1/fine_tuning/jobs/{job_id}"
    headers = {
        "Authorization": "Bearer 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"
    }

    response = requests.get(url, headers=headers)
    return response.json()

job_id = "ftjob-7UmdMcNVBgs3Xbl90KMLt3Xp"
job_details = get_fine_tuning_job(job_id)
print(job_details)
