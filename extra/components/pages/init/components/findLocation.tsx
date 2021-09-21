import {Dispatch, SetStateAction, useEffect, useState} from "react";
import {Grid, InputBase, useTheme} from "@material-ui/core";
import {useDispatch} from "react-redux";
import {alpha} from "@material-ui/core/styles";

//Components
import {Grid12, GridNumber} from "../../../common/grid";

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
    const [name,setName] = useState(intl.get('loading'));
    const dispatch = useDispatch();

    //init
    useEffect(()=>{
        if(geo.latitude !== 0 && geo.longitude !== 1 && language !== ''){
            FetchCityName(geo.latitude,geo.longitude,String(language.split("-", 1)), dispatch,setCity)
        }
        else if(geo.latitude === 0 && geo.longitude === 0){
            setName(intl.get('notFoundLocation'))
        }
    },[geo])

    //Change temp
    useEffect(()=>{
        if(city !== ''  && language !== ''){
            setName(city)
            FetchWeather(city,dispatch,props.setWeather,String(language.split("-", 1)))
        }
        else if (name === intl.get('notFoundLocation')){
            props.setWeather([])
        }
    },[city])

    return(
        <Grid12 justifyContent={'center'}
                style={{
                    paddingTop:theme.spacing(2),
                    paddingBottom:theme.spacing(2),
                    backgroundColor:alpha('#FFFFFF', 0.95),
                    borderTopRightRadius: theme.shape.borderRadius,
                    borderTopLeftRadius: theme.shape.borderRadius
        }}>
            <GridNumber number={10}>
                <div className={classes.grow}>
                    <div className={classes.search}>
                        <Grid12>
                            <Grid>
                                <SearchIcon className={classes.inputIcon}
                                    onClick={()=>{setCity(name)}}/>
                            </Grid>
                            <GridNumber number={11}>
                                <InputBase
                                    value={name}
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
            </GridNumber>
        </Grid12>
    )
}