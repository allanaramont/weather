import React from 'react';

//Interface
import {ContainerInterface} from "../../interfaces/container";

export function Container({children}: ContainerInterface){
    return(
        <div>
            {children}
        </div>
    )
}
