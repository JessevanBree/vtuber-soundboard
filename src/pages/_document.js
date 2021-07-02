import Document, { Html, Head, Main, NextScript } from 'next/document'
const GA_TRACKING_ID = "G-KX78BDWV2N";

class AppDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <meta name="description" content="A soundboard website with sounds of various vtubers." />
          <meta property="og:title" content="vtuber-soundboard" />
          <meta property="og:description" content="A soundboard website with sounds of various vtubers." />
          <meta property="og:url" content="https://https://vtuber-soundboard.nl/" />
          <meta property="og:type" content="website" />

          <link rel="manifest" href="/manifest.json" />
          <link rel="icon" href="/favicon.ico" />
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
          <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@300;400;500&display=swap" rel="stylesheet"></link>

          <script
            async
            src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
          />
          <script
            dangerouslySetInnerHTML={{
              __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_TRACKING_ID}', {
              page_path: window.location.pathname,
            });
          `,
            }}
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

export default AppDocument