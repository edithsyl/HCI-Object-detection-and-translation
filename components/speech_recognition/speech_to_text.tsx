"use client";
import  useSpeechRecognition  from "./hooks/useSpeechRecognitionHook";
import { useEffect, useState } from "react";
import React from "react";

const VoiceRecognition = () => {

  // for fixing react-hydration-error (https://nextjs.org/docs/messages/react-hydration-error)
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, []);

  

  const {
    isListening,
    text,
    startListening,
    stopListening,
    hasRecognitionSupport} = useSpeechRecognition();

  return <>{
      (isClient)?
      (<div id="voice-recog" className="flex flex-row flex-wrap  justify-evenly align-center w-full">
        {
          hasRecognitionSupport ? (
            <div className="flex gap-1 flex-row flex-wrap justify-center items-center m-5">
              <div className="flex gap-1 justify-center items-center items-stretch">
                  <button 
                    onClick={startListening}
                    className="p-2  border-dashed border-2 rounded-xl hover:translate-y-1 "
                  >start</button>
              </div>
              <div className="flex gap-1 justify-center items-center items-stretch">
                  <button 
                    onClick={stopListening}
                    className="p-2  border-dashed border-2 rounded-xl hover:translate-y-1 "
                  >stop</button>
              </div>
              {isListening ? (
                  <p>browser is listening</p>
              ): null}
              {text}
            </div>
          ): 
          <div>
              <p>Your browser version does not support this feature: </p>
          </div>
        }
    </div>) : <h1>'Prerendered'</h1>
  }</>
};

export default VoiceRecognition;
