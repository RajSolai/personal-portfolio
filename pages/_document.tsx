import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <link rel="preconnect" href="https://fonts.gstatic.com"></link>
          <link
            href="https://fonts.googleapis.com/css2?family=Inter:wght@400;700;800&display=swap"
            rel="stylesheet"
          ></link>
          <link
            rel="stylesheet"
            href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"
          />
          <meta
            name="description"
            content="This is meta description Sample. We can add up to 158."
          ></meta>
          <link rel="canonical" href="http://solairaj.rf.gd/" />
          <meta name="robots" content="index, follow" />
          <meta property="og:type" content="profile" />
          <meta property="og:title" content="RajSolai - Developer" />
          <meta
            property="og:description"
            content="Solai Raj's Profile. A Student , Web ,Mobile Developer IoT and AI enthusiast
                IoT, Linux Guy"
          />
          <meta property="og:image" content="LINK TO THE IMAGE FILE" />
          <meta property="og:url" content="http://solairaj.rf.gd/" />
          <meta property="og:site_name" content="RajSolai" />
          <meta name="twitter:title" content="RajSolai - Developer" />
          <meta
            name="twitter:description"
            content="Student , Web ,Mobile Developer IoT and AI enthusiast
            IoT, Linux Guy"
          />
          {/* TODO: add image for twitter card */}
          <meta name="twitter:image" content="LINK TO IMAGE" />
          <meta name="twitter:site" content="@RajSolai2" />
          <meta name="twitter:creator" content="@RajSolai2" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
