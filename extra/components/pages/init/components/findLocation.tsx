import {Dispatch, SetStateAction, useEffect, useState} from "react";
import { InputBase } from "@material-ui/core";
import {useDispatch} from "react-redux";

//Components
import { Grid7 } from "../../../common/grid";

//I18N
import intl from "react-intl-universal";

//CSS
import { useFindLocationCSS } from "../style/findLocation";

//Hooks
import {useNavigator} from "../../../../hooks/useNavigator";

//Icons
 import SearchIcon from '@material-ui/icons/Search';

//Utils
import { FindLocationService } from "../utils/findLocationService";
import {usePosition} from "../../../../hooks/useGeoLocation";

//Services
import {FetchCityName} from "../../../../services/openCage/fetchCityName";
import {FetchWeather} from "../../../../services/openWeather/fetchWeather";

export function FindLocation(props:{setWeather:Dispatch<SetStateAction<Array<any>>>}){
    const classes = useFindLocationCSS();
    const geo = usePosition();
    const language = useNavigator();
    const [city,setCity] = useState('');
    const dispatch = useDispatch();

    //init
    useEffect(()=>{
        if(geo.latitude !== 0 && geo.longitude !== 0){
            FetchCityName(geo.latitude,geo.longitude,String(language.split("-", 1)), dispatch,setCity)
        }
    },[geo])

    //Change temp
    useEffect(()=>{
        if(city !== ''){
            FetchWeather(city,dispatch,props.setWeather,String(language.split("-", 1)))
        }
    },[city])

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
                        setCity(event.target.value)
                    }}
                    inputProps={{ 'aria-label': 'search' }}
                />
                <SearchIcon style={{cursor:'pointer'}}
                            onClick={()=>{FindLocationService(city)}}/>
            </div>

        </Grid7>
    )
}