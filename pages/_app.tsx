import React, {useEffect, useState} from 'react'
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

function MyApp({Component, pageProps}: AppProps): JSX.Element {
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
