import {blueColor, redColor, yellowColor} from "../config/colors";

export const getTempColor = (temp: number) => {
    if(temp > 35){
        return redColor
    }
    else if (temp < 15){
        return blueColor
    }
    else{
        return yellowColor
    }
}