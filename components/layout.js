import Head from 'next/head'
import Link from 'next/link'
import stylesheet from 'styles/index.scss'

export default ({ children, title = 'React Vancouver' }) => (
  <div>
    <Head>
      <meta charset="utf-8" />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, shrink-to-fit=no"
      />

      <title>{title}</title>

      {/* Bootstrap 4 */}
      <link
        rel="stylesheet"
        href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-alpha.6/css/bootstrap.min.css"
        integrity="sha384-rwoIResjU2yc3z8GV/NPeZWAv56rSmLldC3R/AZzGRnGxQQKnKkoFVhFQhNUwEyJ"
        crossOrigin="anonymous"
      />

      {/* Font Awesome Icons */}
      <script src="https://use.fontawesome.com/003c3f5408.js" />

      {/* Material Design Lite */}
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/icon?family=Material+Icons"
      />
      <link rel="stylesheet" href="https://code.getmdl.io/1.3.0/material.indigo-deep_purple.min.css" />

      {/* Google Roboto Font */}
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css?family=Roboto:100,300,400,500"
      />
    </Head>
    <style dangerouslySetInnerHTML={{ __html: stylesheet }} />

    {children}

    <footer />
    <script defer src="https://code.getmdl.io/1.3.0/material.min.js" />
  </div>
)
