import { Html, Head, Main, NextScript } from "next/document";
import Header from './header'

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body>
        <Header>
        <Main />

        </Header>
        <NextScript />
      </body>
    </Html>
  );
}
