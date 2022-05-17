import {Grid} from "@material-ui/core";

//Interface
import { ImageBackgroundInitInterface } from "../../../../interfaces/imageBackground";

export function ImageBackgroundInit(props:ImageBackgroundInitInterface){
    return(
        <Grid
            container
            spacing={0}
            direction="column"
            alignItems="center"
            justifyContent="center"
            style={{
                minHeight: '100vh',
                backgroundImage: `url("https://i.gyazo.com/9fc37a34004ad411e566f2d7ef916b3d.jpg")`,
                backgroundSize: 'cover',
                backgroundPosition: 'center'
            }}
        >
                {props.children}
        </Grid>
    )
}