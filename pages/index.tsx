import React, {useMemo, useState} from "react";
import { useTheme } from "@material-ui/core";
import { alpha } from "@material-ui/core/styles";

//Components
import { GridNumber } from '../extra/components/common/grid'
import { ImageBackgroundInit } from "../extra/components/pages/init/components/imageBackgroud";
import { FindLocation } from "../extra/components/pages/init/components/findLocation";
import { TodayWeather } from "../extra/components/pages/init/components/todayWeather";

//Hooks
import { useWindowSize } from "../extra/hooks/useWindowsSize";
import {AfterWeather} from "../extra/components/pages/init/components/afterWeather";
import {ChangeTemp} from "../extra/utils/changeTemp";

//Interfaces
import {ResultTempInterface} from "../extra/interfaces/resultTemp";
import {useNavigator} from "../extra/hooks/useNavigator";

export default function Home(){
    const size = useWindowSize();
    const theme = useTheme();
    const language = useNavigator();
    const unitInit = language === 'pt-BR' ? 'c' : 'f';
    const [weather,setWeather]:any = useState([]);
    const [today,setToday]:any = useState({temp: 0,description: "", typeTemp: "", windDeg: 0, windSpeed: 0, humidity: 0, pressure: 0});
    const [tomorrow,setTomorrow] = useState<ResultTempInterface>({temp: 0, unit: ""});
    const [afterTomorrow,setAfterTomorrow] = useState<ResultTempInterface>({temp: 0, unit: ""});

    console.log('today',today)
    console.log('tomorrow',tomorrow)
    console.log('afterTomorrow',afterTomorrow)

    useMemo(() =>{
        if(weather.length > 0){
            setToday({
                temp: weather[0].main.temp,
                description: weather[0].weather[0].description,
                typeTemp: unitInit,
                windDeg: weather[0].wind.deg,
                windSpeed: weather[0].wind.speed,
                humidity: weather[0].main.humidity,
                pressure: weather[0].main.pressure
            })
            const todayDate = new Date().getDate();
            weather.map(function(item:any) {
                const itemDate = new Date(item.dt_txt).getDate();
                if( itemDate === parseInt(String(todayDate)) + 1){
                    setTomorrow({
                        temp: item.main.temp,
                        unit: unitInit
                    });
                }
                if( itemDate === parseInt(String(todayDate)) + 2){
                    setAfterTomorrow({
                        temp: item.main.temp,
                        unit: unitInit
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
                {Object.keys(today).length > 0 && tomorrow.temp > 0 && afterTomorrow.temp > 0 ?
                    <>
                        <TodayWeather temp={today.temp}
                                      typeTemp={'c'}
                                      description={today.description}
                                      windDeg={today.windDeg}
                                      windSpeed={today.windSpeed}
                                      humidity={today.humidity}
                                      pressure={today.pressure}
                                      click={()=>{ChangeTemp(today,setToday)}}/>
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