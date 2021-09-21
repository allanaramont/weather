import React, {useMemo, useState} from "react";
import { useTheme } from "@material-ui/core";
import { alpha } from "@material-ui/core/styles";

//Components
import { Grid12 , GridNumber } from '../extra/components/common/grid'
import { ImageBackgroundInit } from "../extra/components/pages/init/components/imageBackgroud";
import { FindLocation } from "../extra/components/pages/init/components/findLocation";
import { TodayWeather } from "../extra/components/pages/init/components/todayWeather";

//Hooks
import { useWindowSize } from "../extra/hooks/useWindowsSize";
import {AfterWeather} from "../extra/components/pages/init/components/afterWeather";
import {ChangeTemp} from "../extra/components/pages/init/utils/changeTemp";

export default function Home(){
    const size = useWindowSize();
    const theme = useTheme();
    const [weather,setWeather] = useState([]);
    const [today,setToday]:any = useState({});
    const [tomorrow,setTomorrow] = useState({
        temp: 0,
        unit: 'c'
    });
    const [afterTomorrow,setAfterTomorrow] = useState({
        temp: 0,
        unit: 'c'
    });

    console.log('today',today)
    console.log('tomorrow',tomorrow)
    console.log('afterTomorrow',afterTomorrow)

    useMemo(() =>{
        if(weather.length > 0){
            setToday(weather[0])
            const todayDate = new Date().getDate();
            weather.map(function(item:any) {
                const itemDate = new Date(item.dt_txt).getDate();
                if( itemDate === parseInt(String(todayDate)) + 1){
                    setTomorrow({
                        temp: item.main.temp,
                        unit: 'c'
                    });
                }
                if( itemDate === parseInt(String(todayDate)) + 2){
                    setAfterTomorrow({
                        temp: item.main.temp,
                        unit: 'c'
                    });
                }
            });
        }
    },[weather]);

    return(
        <ImageBackgroundInit>
            <GridNumber number={size.mobile? 11 : 6}
                        justifyContent={'center'}
                        style={{
                            backgroundColor: alpha(theme.palette.background.paper, 0.15),
                            borderRadius:10,
                            marginTop:theme.spacing(3)
                        }}>
                <FindLocation setWeather={setWeather}/>
                {Object.keys(today).length > 0 && Object.keys(tomorrow).length > 0 && Object.keys(afterTomorrow).length > 0 ?
                    <>
                        <TodayWeather temp={today.main.temp} typeTemp={'c'}/>
                        <AfterWeather title={'tomorrow'}
                                      temp={tomorrow.temp}
                                      typeTemp={tomorrow.unit}
                                      backgroundPotion={0.3}
                                      click={()=>{ChangeTemp(tomorrow,setTomorrow)}}/>
                        <AfterWeather title={'afterTomorrow'}
                                      temp={afterTomorrow.temp}
                                      typeTemp={afterTomorrow.unit}
                                      backgroundPotion={0.5}
                                      click={()=>{ChangeTemp(afterTomorrow,setAfterTomorrow)}}/>
                    </>
                    :
                    null
                }

            </GridNumber>
        </ImageBackgroundInit>
    )
}