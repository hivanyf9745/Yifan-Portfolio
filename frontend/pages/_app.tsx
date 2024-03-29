import "@/styles/globals.css";
import type { AppProps } from "next/app";

// import bootstrap
import "bootstrap/dist/css/bootstrap.css";
// import own css file
import "../styles/customize.scss";

// import local font to the file
import localFont from "@next/font/local";
import Layout from "@/components/header/layout";
import Head from "next/head";
import { Fragment } from "react";

// All the fonts that we need to make this thing work
const okuda = localFont({
  src: [
    {
      path: "../public/fonts/Okuda.otf",
      weight: "500",
    },
    {
      path: "../public/fonts/Okuda-Bold.otf",
      weight: "700",
    },
  ],
});

const cygun = localFont({
  src: [{ path: "../public/fonts/CYGUN-Regular.ttf" }],
});

const oxanium = localFont({
  src: [{ path: "../public/fonts/Oxanium-VariableFont_wght.ttf" }],
});

const avalon = localFont({
  src: [{ path: "../public/fonts/Avalon.otf" }],
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Fragment>
      <Head>
        <title>Ivan Huang&apos;s Portfolio</title>
        <meta
          name='viewport'
          content='width=device-width, initial-scale=1.0'></meta>
      </Head>
      <Layout>
        <style jsx global>
          {`
            html {
              font-size: 62.5%;
            }

            @media only screen and (max-width: 610px) {
              html {
                font-size: 35%;
              }
            }

            :root {
              --oxanium-font: ${oxanium.style.fontFamily};
              --okuda-font: ${okuda.style.fontFamily};
              --avalon-font: ${avalon.style.fontFamily};
              --cygun-font: ${cygun.style.fontFamily};
              --main-yellow: #fef900;
              --main-purple: #a0a0c0;
            }

            // Just to get the default fontFamily set up straight

            body {
              font-family: var(--oxanium-font);
              font-weight: 300;
            }
          `}
        </style>
        <Component {...pageProps} />
      </Layout>
    </Fragment>
  );
}
