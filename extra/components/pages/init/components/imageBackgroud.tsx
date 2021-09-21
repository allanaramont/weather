import {useState} from "react";
import {Grid} from "@material-ui/core";

//Interface
import { ImageBackgroundInitInterface } from "../../../../interfaces/imageBackground";

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
        <Grid
            container
            spacing={0}
            direction="column"
            alignItems="center"
            justifyContent="center"
            style={{ minHeight: '100vh' }}
        >
            {/*construir o backgroundImage nessa div*/}
                {props.children}
        </Grid>
    )
}