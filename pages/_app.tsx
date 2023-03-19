import "../styles/globals.css";
import { ThemeProvider } from "next-themes";
// import { useState, useEffect } from "react";
import { AnimatePresence } from "framer-motion";

import { useRouter } from "next/router";
// import Loading from "../components/Loading";
function MyApp({ Component, pageProps }) {
  // const [loading, setLoading] = useState(true);
  const routers = useRouter();

  // useEffect(() => {
  //   setTimeout(() => {
  //     setLoading(false);
  //   }, 5000);
  // }, []);

  return (
    <AnimatePresence exitBeforeEnter>
      <ThemeProvider defaultTheme="light" attribute="class">
        <Component {...pageProps} />
      </ThemeProvider>
    </AnimatePresence>
  );
}

export default MyApp;
// <Loading loading={loading} />;
