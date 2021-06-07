import React from 'react'
import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head />
        <body className="bg-gray-100 text-black dark:bg-darkmode dark:text-white">
          <Main />
          <NextScript />
          <script
            defer
            src="https://static.cloudflareinsights.com/beacon.min.js"
            data-cf-beacon='{"token": "e47e8f4579594248a5ef26248020280f"}'
          ></script>
        </body>
      </Html>
    )
  }
}

export default MyDocument
