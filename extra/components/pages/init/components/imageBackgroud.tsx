import {useState} from "react";

//Interface
import { ImageBackgroundInitInterface } from "../../../../interfaces/imageBackground";

//Components
import { Grid12 } from "../../../common/grid";

//Redux
import {useDispatch} from "react-redux";

//Services
import {FetchBackgroundImage} from "../../../../services/bing/fetchBackgroundImage";

//Hooks
import {useNavigator} from "../../../../hooks/useNavigator";

export function ImageBackgroundInit(props:ImageBackgroundInitInterface){
    const dispatch = useDispatch();
    const language = useNavigator();
    const [img,setImg] = useState('');
    //FetchBackgroundImage(language,dispatch,setImg)

    console.log('img',img)

    return(
        <Grid12 justifyContent={'center'}>
            {/*construir o backgroundImage nessa div*/}
                {props.children}
        </Grid12>
    )
}