import { useState } from "react";
import { InputBase } from "@material-ui/core";

//Components
import { Grid7 } from "../../../common/grid";

//I18N
import intl from "react-intl-universal";

//CSS
import { useFindLocationCSS } from "../style/findLocation";

//Icons
 import SearchIcon from '@material-ui/icons/Search';

//Utils
import { FindLocationService } from "../utils/findLocationService";

export function FindLocation(){
    const classes = useFindLocationCSS();
    const [name,setName] = useState('')

    return(
        <Grid7>
            <div className={classes.search}>
                <InputBase
                    placeholder={intl.get('search')}
                    classes={{
                        root: classes.inputRoot,
                        input: classes.inputInput,
                    }}
                    onChange={(event)=>{
                         setName(event.target.value)
                    }}
                    inputProps={{ 'aria-label': 'search' }}
                />
                <SearchIcon style={{cursor:'pointer'}}
                            onClick={()=>{FindLocationService(name)}}/>
            </div>

        </Grid7>
    )
}