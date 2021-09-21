import { useTheme } from "@material-ui/core";
import {alpha} from "@material-ui/core/styles";

//Components
import { Grid12 , Grid6  } from "../../../common/grid";
import { TypographyCustom } from "../../../common/typography";

//I18N
import intl from "react-intl-universal";

//Utils
import {getTempColor} from "../../../../utils/getTempColor";
import {getTempUnit} from "../../../../utils/getTempUnit";

//Interface
import {TodayWeatherInterface} from "../../../../interfaces/todayWeather";
import {getWindSpeedInKilometers} from "../../../../utils/getWindSpeedInKilometers";
import {getWindDirection} from "../../../../utils/getWindDirection";

export function TodayWeather(props:TodayWeatherInterface){
    const theme = useTheme();

    return(
        <Grid12 style={{
            paddingTop:theme.spacing(2),
            paddingBottom:theme.spacing(2),
            backgroundColor:alpha(getTempColor({temp:props.temp,unit:props.typeTemp}), 0.5)
        }}>
            <Grid6 justifyContent={'center'}>
                {}
            </Grid6>
            <Grid6>
                <Grid12>
                    <TypographyCustom variant={'h2'}>
                        {intl.get('today')}
                    </TypographyCustom>
                </Grid12>
                <Grid12>
                    <TypographyCustom variant={'h1'}
                                      style={{
                                          cursor:'pointer'
                                      }}
                                      onClick={props.click}>
                        {Number(props.temp).toFixed(0)}{getTempUnit(props.typeTemp)}
                    </TypographyCustom>
                </Grid12>
                <Grid12>
                    <TypographyCustom variant={'h2'}
                                      style={{
                                          paddingTop:theme.spacing(2),
                                          paddingBottom:theme.spacing(2)
                                      }}>
                        {props.description[0].toUpperCase() + props.description.substr(1)}
                    </TypographyCustom>
                </Grid12>
                <Grid12>
                    <TypographyCustom variant={'h3'}>
                        {intl.get('wind')}: {getWindDirection(props.windDeg)} {getWindSpeedInKilometers(props.windSpeed)}{intl.get('windUnit')}
                    </TypographyCustom>
                </Grid12>
                <Grid12>
                    <TypographyCustom variant={'h3'}>
                        {intl.get('humidity')}: {props.humidity}%
                    </TypographyCustom>
                </Grid12>
                <Grid12>
                    <TypographyCustom variant={'h3'}>
                        {intl.get('pressure')}: {props.pressure}hPA
                    </TypographyCustom>
                </Grid12>
            </Grid6>
        </Grid12>
    )
}