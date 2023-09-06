import requests



def city_name(a):
    url = f"http://api.weatherstack.com/current?access_key=2ea5af54b4e1a0a0239d2f554e0a7c6d&query={a}"

    payload = {}
    headers = {}

    response = requests.request("GET", url, headers=headers, data=payload)

    return (response.json())["current"]["temperature"]