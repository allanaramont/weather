import React, {useEffect, useState} from 'react'
import Head from 'next/head'
import {AppProps} from "next/app";

//REDUX
import {Provider} from "react-redux";
import {store} from "../extra/redux/store";

//I18N
import intl from 'react-intl-universal';
import {locales} from '../extra/config/language'

//CSS
import {MuiThemeProvider} from "@material-ui/core";
import CssBaseline from '@material-ui/core/CssBaseline';
import Theme from "../styles/theme";
import '../styles/app.css';

//Helpers
import {useNavigator} from "../extra/hooks/useNavigator";

//Components
import CustomizedSnackbars from "../extra/components/common/snack";

const defaultTitle = 'Weather Forecast';
const defaultDescription = 'Project consumes Bing API, OpenCageData, OpenWeatherMap.';
const defaultOGURL = 'https://weather.allanmonth.vercel.app/';
const defaultOGImage = 'https://i.gyazo.com/c65e613d70215054da3e2ce1593968c9.png';

function MyApp({Component, pageProps}: AppProps) {
  const [isMounted, setIsMounted] = useState(false)
  const [isI18N, setIsI18N] = useState(false)
  const theme = Theme()
  const language = useNavigator()

  //Init I18N
  useEffect(()=>{
    const currentLocale = language
    if(language !== ''){
      intl.init({
        currentLocale,
        locales
      }).then(() => {
        setIsI18N(true);
      });
    }
  },[language])

  //Validation I18N and Theme
  useEffect(() => {
    if (theme !== undefined && isI18N) {
      setIsMounted(true)
    }
  }, [theme])

  return (
      <>
        <Head>
          <meta charSet="UTF-8" />
          <title>{defaultTitle}</title>
          <meta name="description" content={ defaultDescription} />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="shortcut icon" href="/favicon.ico?" type="image/x-icon"/>
          <meta name="msapplication-TileColor" content="#1A1E22" />
          <meta name="theme-color" content="#0070f3" />
          <meta property="og:url" content={defaultOGURL} />
          <meta property="og:title" content={defaultTitle} />
          <meta property="og:description" content={defaultDescription} />
          <meta name="twitter:site" content={defaultOGURL} />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:image" content={defaultOGImage} />
          <meta name="twitter:description" content={defaultDescription} />
          <meta name="twitter:creator" content={'@allanmonth'} />
          <meta name="twitter:title" content={defaultTitle} />
          <meta property="og:image" content={defaultOGImage} />
          <meta property="og:image:width" content="1200" />
          <meta property="og:image:height" content="630" />
          <link
              rel="preload"
              href="/fonts/MeteoconsRegular/meteocons-webfont.ttf"
              as="font"
              crossOrigin=""
          />
        </Head>
        {isMounted && (
            <Provider store={store}>
              <MuiThemeProvider theme={theme}>
                <CssBaseline/>
                <CustomizedSnackbars/>
                <Component {...pageProps} />
              </MuiThemeProvider>
            </Provider>
        )}
      </>
  )
}

export default MyApp
