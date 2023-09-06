# import weather as w
# a=w.get_weather_time()
# print(a)
import api.weather_city as wc
# city=input("Enter Your city name : ")
# print(wc.city_name(city))

import streamlit as st
# st.markdown()
st.markdown(
    """

    <header style="color:red">Hi hello</header>
    """
,unsafe_allow_html=True)
st.title("hieee")

city=st.text_input("City Name")
if city:
    st.write(f"Temp is {wc.city_name(city)}")
