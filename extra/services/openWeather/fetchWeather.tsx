import {Dispatch, SetStateAction} from "react";

//Redux
import {AppDispatch} from "./../../redux/store";

//Utils
import {ErrorGeneric} from "../../utils/errorGeneric";

//Constants
import {baseOpenWeatherAPI, keyOpenWeatherAPI} from "../../config/services";

export function FetchWeather (city:string,dispatch:AppDispatch,setWeather:Dispatch<SetStateAction<Array<any>>>){
    fetch(
        baseOpenWeatherAPI
        + city
        + '&units=metric&APPID='
        + keyOpenWeatherAPI
    ).then(res=>res.json())
        .then((data)=>{
            if(data.list.length > 0){
                setWeather(data.list)
            }
            else{
                setWeather([])
            }
        })
        .catch(error=>{
            dispatch(ErrorGeneric(String(error.response.status) + ' - ' + error.response.data))
        })
}