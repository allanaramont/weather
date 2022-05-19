import React, {useEffect, useState} from 'react'
import {AppProps} from "next/app";

//REDUX
import {Provider} from "react-redux";
import {store} from "../extra/redux/store";

//CSS
import {MuiThemeProvider} from "@material-ui/core";
import CssBaseline from '@material-ui/core/CssBaseline';
import Theme from "../styles/theme";
import '../styles/app.css';

//Components
import CustomizedSnackbars from "../extra/components/common/snack";

function MyApp({Component, pageProps}: AppProps): JSX.Element {
  const [isMounted, setIsMounted] = useState(false)
  const theme = Theme()

  //Validation Theme
  useEffect(() => {
    if (theme !== undefined) {
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
