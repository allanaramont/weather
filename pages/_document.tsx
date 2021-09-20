import React from 'react'
// eslint-disable-next-line @next/next/no-document-import-in-page
import Document, {
    Html,
    Head,
    Main,
    NextScript,
    DocumentContext
} from 'next/document'
import {ServerStyleSheet} from 'styled-components'

export default class MyDocument extends Document {
    static async getInitialProps(
        ctx: DocumentContext
    ) {
        const sheet = new ServerStyleSheet()
        const originalRenderPage = ctx.renderPage
        try {
            ctx.renderPage = () =>
                originalRenderPage({
                    // eslint-disable-next-line react/display-name
                    enhanceApp: App => props => sheet.collectStyles(<App {...props} />)
                })
            const initialProps = await Document.getInitialProps(ctx)
            return {
                ...initialProps,
                styles: (
                    <>
                        {initialProps.styles}
                        {sheet.getStyleElement()}
                    </>
                )
            }
        } finally {
            sheet.seal()
        }
    }

    render() {
        return (
            <Html>
                <Head>
                    <link rel="shortcut icon" href="/icon.png" />
                    <meta charSet="utf-8" />
                    <link href='//fonts.googleapis.com/css?family=Montserrat:thin,extra-light,light,100,200,300,400,500,600,700,800'
                          rel='stylesheet' type='text/css'/>
                    <link
                        href="https://fonts.googleapis.com/css2?family=Krona+One&display=optional"
                        rel="stylesheet"
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
