import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {


  static async getInitialProps(ctx) {
  

    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {

    return (
      <Html>
        <Head>
        <link
            rel="preload"
            href="/fonts/LazenbyComp/LazenbyComp-Liquid.ttf"
            as="font"
            crossOrigin=""
          />
        <link
            rel = "preload"
            href = "/fonts/Zig/zig.ttf"
            as = "font"
            crossOrigin = ""
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

export default MyDocument