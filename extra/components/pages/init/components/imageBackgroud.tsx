//Interface
import { ImageBackgroundInitInterface } from "../../../../interfaces/imageBackground";

//Components
import { Grid12 } from "../../../common/grid";

export function ImageBackgroundInit(props:ImageBackgroundInitInterface){
    return(
        <Grid12 justifyContent={'center'}>
            {/*construir o backgroundImage nessa div*/}
                {props.children}
        </Grid12>
    )
}