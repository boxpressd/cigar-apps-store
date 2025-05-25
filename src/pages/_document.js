import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <link rel="icon" href="/favicon.png" />
          <link rel="apple-touch-icon" href="/apple-touch-icon-180.png" />
          <link rel="manifest" href="/manifest.json" />

          <meta httpEquiv="x-ua-compatible" content="ie=edge" />
          <meta name="title" content="Cigar App Store – Cigar PWA Listings" />
          <meta
            name="description"
            content="Enjoy the convenience of accessing high-quality cigar PWAs…"
          />
          <meta name="keywords" content="cigars,cigar apps,..." />
          <meta name="robots" content="index, follow" />
          <meta property="og:type" content="website" />
          <meta property="og:site_name" content="Cigar App Store" />
          <meta property="og:url" content="https://cigarappstore.com" />
          <meta
            property="og:image"
            content="https://appstore.boxpressd.com/android-launchericon-512-512.png"
          />

          <link
            rel="stylesheet"
            href="https://cdn.boxpressd.com/lib/boxpressd-marketplace-style.css"
          />

          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org/",
                "@type": "WebSite",
                name: "Cigar Apps Store",
                url: "https://appstore.boxpressd.com",
                potentialAction: {
                  "@type": "SearchAction",
                  target: "https://appstore.boxpressd.com/?q={search_term_string}",
                  "query-input": "required name=search_term_string",
                },
              }),
            }}
          />

          <script
            async
            src="https://platform-api.sharethis.com/js/sharethis.js#property=648b27386fc24400124f299d&product=inline-share-buttons"
          ></script>
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
