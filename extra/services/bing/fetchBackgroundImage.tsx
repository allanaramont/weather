//Redux
import {AppDispatch} from "./../../redux/store";

//Utils
import {ErrorGeneric} from "../../utils/errorGeneric";

//Constants
import {baseBingAPI} from "../../config/services";
import {Dispatch, SetStateAction} from "react";

export function FetchBackgroundImage (language:string,dispatch:AppDispatch,setImg:Dispatch<SetStateAction<string>>){
    fetch(
        baseBingAPI
        + language
    )
        .then(res => res.json())
        .then(data => {
            setImg('https://www.bing.com/' + data.images[0].url + '.png')
        })
        .catch((error)=>{
            dispatch(ErrorGeneric(String(error.response.status) + ' - ' + error.response.data))
        })
}