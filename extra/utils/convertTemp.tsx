//Interface
import {ResultTempInterface} from "../interfaces/resultTemp";

export function ConvertTemp(value:ResultTempInterface){
    if(value.unit === 'c'){
        return value.temp
    }
    else{
        return (value.temp - 32)/1.8
    }
}