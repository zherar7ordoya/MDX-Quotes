import React from "react";
import { MDXProvider } from "@mdx-js/react";
// import '../styles/globals.css'
import "../styles/classless.css";

const App = ({ Component, pageProps }) => (
  <MDXProvider>
    <Component {...pageProps} />
  </MDXProvider>
);

export default App;
