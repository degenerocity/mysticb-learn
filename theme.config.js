export default {
  github: 'https://github.com/degenerocity/mysticb-learn/',
  docsRepositoryBase: 'https://github.com/degenerocity/mysticb-learn/blob/master',
  titleSuffix: ' – MB',
  logo: (
    <>
      <span className="mr-2 font-extrabold hidden md:inline">Mystic Boutique Reference Guide</span>
	</>
  ),
  head: (
    <>
      <meta name="msapplication-TileColor" content="#ffffff" />
      <meta name="theme-color" content="#ffffff" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta httpEquiv="Content-Language" content="en" />
      <meta name="description" content="Mystic Boutique - Reference Guide" />
      <meta name="og:description" content="Best Practices, Common Problems, Important Links" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:image" content="https://mb.6blocks.io/og.png" />
      <meta name="twitter:site:domain" content="https://mb.6blocks.io" />
      <meta name="twitter:url" content="https://mb.6blocks.io/" />
      <meta name="og:title" content="Mystic Boutique - Reference Guide" />
      <meta name="og:image" content="https://mb.6blocks.io/og.png" />
      <meta name="apple-mobile-web-app-title" content="Mystic Boutique - Reference Guide" />
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/apple-icon-180x180.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="192x192"
        href="/android-icon-192x192.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="96x96"
        href="/favicon-96x96.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicon-16x16.png"
      />
      <meta name="msapplication-TileImage" content="/ms-icon-144x144.png" />
    </>
  ),
  search: true,
  prevLinks: true,
  nextLinks: true,
  footer: true,
  footerEditLink: 'Curious',
  footerText: (
     <>
	    Mystic Boutique {new Date().getFullYear()} © Reference Guide
	 </>
  ),
  unstable_faviconGlyph: '📜',
}
