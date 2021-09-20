import { Grid12 , Grid4 , Grid8 } from "../../../common/grid";
import { TypographyCustom } from "../../../common/typography";
import intl from "react-intl-universal";
import { useTheme } from "@material-ui/core";

export function TodayWeather(){
    const theme = useTheme();

    return(
        <Grid12 style={{marginTop:theme.spacing(2)}}>
            <Grid4 justifyContent={'center'}>
                <p>Entra o ICON aqui</p>
            </Grid4>
            <Grid8>
                <Grid12>
                    <TypographyCustom variant={'h2'}>
                        {intl.get('today')}
                    </TypographyCustom>
                </Grid12>
                <Grid12>
                    <TypographyCustom variant={'h1'}
                                      style={{cursor:'pointer'}}
                                      onClick={()=>{

                                      }}>
                        temperatura
                    </TypographyCustom>
                </Grid12>
                <Grid12>
                    <TypographyCustom variant={'h1'}>
                        {intl.get('today')}
                    </TypographyCustom>
                </Grid12>
            </Grid8>
        </Grid12>
    )
}