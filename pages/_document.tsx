import React from 'react'
// eslint-disable-next-line @next/next/no-document-import-in-page
import Document, {
    Html,
    Head,
    Main,
    NextScript,
    DocumentContext
} from 'next/document'

const defaultTitle = 'Weather Forecast';
const defaultDescription = 'Project consumes Bing API, OpenCageData, OpenWeatherMap.';
const defaultOGURL = 'https://weather.allanmonth.vercel.app/';
const defaultOGImage = 'https://i.gyazo.com/c65e613d70215054da3e2ce1593968c9.png';

export default class MyDocument extends Document {

    static async getInitialProps(ctx: DocumentContext) {
        const initialProps = await Document.getInitialProps(ctx)
    
        return initialProps
      }

    render() {
        return (
            <Html lang={'en'}>
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
                <body>
                <Main />
                <NextScript />
                </body>
            </Html>
        )
    }
}
