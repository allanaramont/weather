import React from "react";
import { useTheme } from "@material-ui/core";
import { alpha } from "@material-ui/core/styles";

//Components
import { Grid12 , GridNumber } from '../extra/components/common/grid'
import { ImageBackgroundInit } from "../extra/components/pages/init/components/imageBackgroud";
import { FindLocation } from "../extra/components/pages/init/components/findLocation";
import { useWindowSize } from "../extra/hooks/useWindowsSize";
import { TodayWeather } from "../extra/components/pages/init/components/todayWeather";

export default function Home(){
    const size = useWindowSize();
    const theme = useTheme();

    return(
        <ImageBackgroundInit>
            <GridNumber number={size.mobile? 11 : 6}
                        justifyContent={'center'}
                        style={{
                            backgroundColor: alpha(theme.palette.background.paper, 0.15),
                            borderRadius:10,
                            marginTop:theme.spacing(3)
                        }}>
                    <FindLocation/>
                    <TodayWeather/>
            </GridNumber>
        </ImageBackgroundInit>
    )
}