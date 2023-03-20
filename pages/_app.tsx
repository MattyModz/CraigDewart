import "../styles/globals.css";
import { ThemeProvider } from "next-themes";
// import { useState, useEffect } from "react";
import { AnimatePresence } from "framer-motion";
import { GlobalStatusContextProvider } from "../Context/status";
import { useRouter } from "next/router";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
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
        <GlobalStatusContextProvider>
          <Navbar />

          <Component {...pageProps} />
          <Footer />
        </GlobalStatusContextProvider>
      </ThemeProvider>
    </AnimatePresence>
  );
}

export default MyApp;
// <Loading loading={loading} />;
