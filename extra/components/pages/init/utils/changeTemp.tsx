import {Dispatch, SetStateAction} from "react";

//Interface
import {ResultTempInterface} from "../../../../interfaces/resultTemp";

export function ChangeTemp(value:ResultTempInterface,setValue:Dispatch<SetStateAction<ResultTempInterface>>){
    if(value.unit === 'c'){
        const result = value.temp * 1.8 + 32
        setValue({
            temp: result,
            unit: 'f'
        })
    }
    else{
        const result = (value.temp - 32)/1.8
        setValue({
            temp: result,
            unit: 'c'
        })
    }
}