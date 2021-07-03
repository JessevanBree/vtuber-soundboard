import Document, { Html, Head, Main, NextScript } from 'next/document'
import { ServerStyleSheet } from 'styled-components'

class AppDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <meta name="description" content="A soundboard website with sounds of various vtubers." />
          <meta name="keywords" content="vtuber-soundboard, vtuber soundboard, vtuber, soundboard, Vtuberサウンドボード, sound, board, Small cat Moco, Crim Benizono, Elio Yatsurugi, Suzuno Haremiya, 晴宮鈴乃, 八劔えりお, 子猫もこ, 紅園くりむ, fan project, fan, Jesse van Bree, van Bree, Jesse" />
          <meta name="author" content="Jesse van Bree" />
          <meta property="og:title" content="vtuber-soundboard" />
          <meta property="og:description" content="A soundboard website with sounds of various vtubers." />
          <meta property="og:url" content="https://https://vtuber-soundboard.nl/" />
          <meta property="og:type" content="website" />

          <link rel="manifest" href="/manifest.json" />
          <link rel="icon" href="/favicon.ico" />
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
          <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@300;400;500&display=swap" rel="stylesheet"></link>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }

  static async getInitialProps(ctx) {
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
      sheet.seal()
    }
  }
}

export default AppDocument