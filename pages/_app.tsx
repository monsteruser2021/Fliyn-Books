import "@/styles/globals.css";
import type { AppProps } from "next/app";
import AOS from "aos";
import "aos/dist/aos"

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
