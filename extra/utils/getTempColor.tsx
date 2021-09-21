import {blueColor, redColor, yellowColor} from "../config/colors";

//Interface
import {ResultTempInterface} from "../interfaces/resultTemp";

//Utils
import {ConvertTemp} from "./convertTemp";

export const getTempColor = (value: ResultTempInterface) => {
    if(value.temp > ConvertTemp({temp: 35,unit:value.unit})){
        return redColor
    }
    else if (value.temp < ConvertTemp({temp: 15,unit:value.unit})){
        return blueColor
    }
    else{
        return yellowColor
    }
}