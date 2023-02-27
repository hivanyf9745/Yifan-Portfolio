import "@/styles/globals.css";
import type { AppProps } from "next/app";

// import bootstrap
import "bootstrap/dist/css/bootstrap.css";
// import own css file
import "../styles/customize.scss";

// importing font properties
import localFont from "@next/font/local";

// Local Fonts Declarations
const okuda = localFont({
  src: [
    { path: "../public/fonts/Okuda.otf", weight: "500" },
    { path: "../public/fonts/Okuda-Bold.otf", weight: "700" },
  ],
});

const oxanium = localFont({
  src: [{ path: "../public/fonts/Oxanium-VariableFont_wght.ttf" }],
});

const avalon = localFont({
  src: [{ path: "../public/fonts/Avalon.otf" }],
});

const cygun = localFont({
  src: [{ path: "../public/fonts/CYGUN-Regular.ttf" }],
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <style jsx global>
        {`
          :root {
            --okuda-font: ${okuda.style.fontFamily};
            --oxanium-font: ${oxanium.style.fontFamily};
            --avalon-font: ${avalon.style.fontFamily};
            --cygun-font: ${cygun.style.fontFamily};
          }

          body {
            background-color: var(--bs-body-bg);
            color: #fff;
            font-family: var(--oxanium-font);
          }
        `}
      </style>
      <Component {...pageProps} />
    </>
  );
}
