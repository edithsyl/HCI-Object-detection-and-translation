import Head from "next/head";
import Yolo from "../components/models/Yolo";
import dynamic from "next/dynamic";
import SpeechTranslator from "../components/speech_recognition/SpeechTranslate"

console.log(`Starting in env ${process.env.NEXT_PUBLIC_ENDPOINT_AWS}`);

export default function Home() {
  return (
    <>
      <main className="font-mono flex flex-col justify-center items-center  w-screen">
        <h1 className="m-5 text-xl font-bold">Real-Time Object Detection</h1>
        <Yolo />
        <SpeechTranslator/>
      </main>
    </>
  );
}
