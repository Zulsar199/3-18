import { ContextProvider } from "@/components/context";
import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  return (<ContextProvider><Component {...pageProps} /></ContextProvider>);
}