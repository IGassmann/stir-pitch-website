import Document, { Html, Head, Main, NextScript, DocumentContext } from 'next/document'
import { ServerStyleSheet } from 'styled-components';

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const sheet = new ServerStyleSheet()
    const originalRenderPage = ctx.renderPage

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) =>
            sheet.collectStyles(<App {...props} />),
        })

      const initialProps = await Document.getInitialProps(ctx)
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      }
    } finally {
      sheet.seal();
    }
  }

  render() {
    return (
      <Html lang="en-US">
        <Head>
          <link rel="apple-touch-icon" sizes="57x57" href="/favicon/apple-icon-57x57.png" />
          <link rel="apple-touch-icon" sizes="60x60" href="/favicon/apple-icon-60x60.png" />
          <link rel="apple-touch-icon" sizes="72x72" href="/favicon/apple-icon-72x72.png" />
          <link rel="apple-touch-icon" sizes="76x76" href="/favicon/apple-icon-76x76.png" />
          <link rel="apple-touch-icon" sizes="114x114" href="/favicon/apple-icon-114x114.png" />
          <link rel="apple-touch-icon" sizes="120x120" href="/favicon/apple-icon-120x120.png" />
          <link rel="apple-touch-icon" sizes="144x144" href="/favicon/apple-icon-144x144.png" />
          <link rel="apple-touch-icon" sizes="152x152" href="/favicon/apple-icon-152x152.png" />
          <link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-icon-180x180.png" />
          <link rel="icon" type="image/png" sizes="192x192" href="/favicon/android-icon-192x192.png" />
          <link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png" />
          <link rel="icon" type="image/png" sizes="96x96" href="/favicon/favicon-96x96.png" />
          <link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon-16x16.png" />
          <link rel="manifest" href="/favicon/manifest.json" />
          <meta name="msapplication-TileColor" content="#ffffff" />
          <meta name="msapplication-TileImage" content="/favicon/ms-icon-144x144.png" />
          <meta name="theme-color" content="#ffffff" />
          <title>Igor &lt;&gt; Stir</title>
          <meta name="title" content="Igor <> Stir" />
          <meta name="description" content="Igor Gassmann's pitch website for Stir." />
          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://igor4stir.com" />
          <meta property="og:title" content="Igor <> Stir" />
          <meta property="og:image" content="https://igor4stir.com/og-image.png" />
          <meta property="twitter:card" content="summary_large_image" />
          <meta property="twitter:url" content="https://igor4stir.com" />
          <meta property="twitter:title" content="Igor <> Stir" />
          <meta property="twitter:description" content="Igor Gassmann's pitch website for Stir." />
          <meta property="twitter:image" content="https://igor4stir.com/twitter-image" />
        </Head>
        <body>
        <Main />
        <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument;
