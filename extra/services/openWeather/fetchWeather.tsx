import {Dispatch, SetStateAction} from "react";

//Redux
import {AppDispatch} from "./../../redux/store";

//Utils
import {ErrorGeneric} from "../../utils/errorGeneric";

//Constants
import {baseOpenWeatherAPI, keyOpenWeatherAPI} from "../../config/services";

export function FetchWeather (city:string,dispatch:AppDispatch,setWeather:Dispatch<SetStateAction<any>>){
    fetch(
        baseOpenWeatherAPI
        + city
        + '&APPID='
        + keyOpenWeatherAPI
    ).then(res=>res.json())
        .then((data)=>{
            setWeather(data)
        })
        .catch(error=>{
            dispatch(ErrorGeneric(String(error.response.status) + ' - ' + error.response.data))
        })
}