import "../styles/globals.css";
import VoiceRecognition from "../components/speech_recognition/speech_to_text";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <Component {...pageProps} />
      <VoiceRecognition/>
    </>
  );
}
