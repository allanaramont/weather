import { useTheme } from "@material-ui/core";

//Components
import { Grid12 , Grid6 } from "../../../common/grid";
import { TypographyCustom } from "../../../common/typography";

//I18N
import intl from "react-intl-universal";

//Interface
import {AfterWeatherInterface} from "../../../../interfaces/afterWeather";

//Utils
import {getTempColor} from "../../../../utils/getTempColor";
import {alpha} from "@material-ui/core/styles";
import {getTempUnit} from "../../../../utils/getTempUnit";

export function AfterWeather(props:AfterWeatherInterface){
    const theme = useTheme();

    return(
        <Grid12 style={{
            paddingTop:theme.spacing(2),
            paddingBottom:theme.spacing(2),
            backgroundColor:alpha(getTempColor(props.temp), props.backgroundPotion)
        }}>
            <Grid6/>
            <Grid6>
                <Grid12>
                    <TypographyCustom variant={'h2'}>
                        {intl.get(props.title)}
                    </TypographyCustom>
                </Grid12>
                <Grid12>
                    <TypographyCustom variant={'h1'}
                                      style={{cursor:'pointer'}}
                                      onClick={props.click}>
                        {Number(props.temp).toFixed(0)}{getTempUnit(props.typeTemp)}
                    </TypographyCustom>
                </Grid12>
            </Grid6>
        </Grid12>
    )
}