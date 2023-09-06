import requests
def get_weather_temp():
    url = "https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&current_weather=true&hourly=temperature_2m,relativehumidity_2m,windspeed_10m"

    payload = {}
    headers = {}

    response = requests.request("GET", url, headers=headers, data=payload)

    myjson = response.json()
    return (myjson["current_weather"]["temperature"])

def get_weather_time():
    url = "https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&current_weather=true&hourly=temperature_2m,relativehumidity_2m,windspeed_10m"

    payload = {}
    headers = {}

    response = requests.request("GET", url, headers=headers, data=payload)

    myjson = response.json()
    return (myjson["hourly"]["time"][0])
