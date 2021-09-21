import {Dispatch, SetStateAction, useEffect, useState} from "react";
import {InputBase, useTheme} from "@material-ui/core";
import {useDispatch} from "react-redux";
import {alpha} from "@material-ui/core/styles";

//Components
import {Grid10, Grid12, GridNumber} from "../../../common/grid";

//I18N
import intl from "react-intl-universal";

//CSS
import { useFindLocationCSS } from "../style/findLocation";

//Hooks
import {useNavigator} from "../../../../hooks/useNavigator";
import {usePosition} from "../../../../hooks/useGeoLocation";

//Icons
 import SearchIcon from '@material-ui/icons/Search';

//Services
import {FetchCityName} from "../../../../services/openCage/fetchCityName";
import {FetchWeather} from "../../../../services/openWeather/fetchWeather";

export function FindLocation(props:{setWeather:Dispatch<SetStateAction<Array<any>>>}){
    const classes = useFindLocationCSS();
    const geo = usePosition();
    const theme = useTheme();
    const language = useNavigator();
    const [city,setCity] = useState('');
    const [name,setName] = useState('');
    const dispatch = useDispatch();

    //init
    useEffect(()=>{
        if(geo.latitude !== 0 && geo.longitude !== 0 && language !== ''){
            FetchCityName(geo.latitude,geo.longitude,String(language.split("-", 1)), dispatch,setCity)
        }
    },[geo])

    //Change temp
    useEffect(()=>{
        if(city !== ''  && language !== ''){
            setName(city)
            FetchWeather(city,dispatch,props.setWeather,String(language.split("-", 1)))
        }
    },[city])

    return(
        <Grid12 justifyContent={'center'}
                style={{
            paddingTop:theme.spacing(2),
            paddingBottom:theme.spacing(2),
            backgroundColor:alpha('#FFFFFF', 0.5)
        }}>
            <Grid10>
                <div className={classes.grow}>
                    <div className={classes.search}>
                        <Grid12>
                            <GridNumber number={1}>
                                <SearchIcon className={classes.inputIcon}
                                    onClick={()=>{setCity(name)}}/>
                            </GridNumber>
                            <GridNumber number={10}>
                                <InputBase
                                    defaultValue={name}
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
                            </GridNumber>
                        </Grid12>
                    </div>
                </div>
            </Grid10>
        </Grid12>
    )
}