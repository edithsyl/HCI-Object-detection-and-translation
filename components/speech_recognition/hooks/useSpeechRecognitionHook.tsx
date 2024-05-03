// import { useEffect, useState } from "react";
// import * as _ from "dom-speech-recognition";

// interface SpeechRecognitionProps {
//   isListening: boolean;
//   text?: string;
//   startListening: () => void;
//   stopListening: () => void;
//   hasRecognitionSupport: boolean;
// }

// const useSpeechRecognition = (): SpeechRecognitionProps => {
//   let recognition: any = null;
//   try{
//     console.log('-- useSpeechRecognition start --')
//     recognition = new webkitSpeechRecognition();
//     recognition.continuos = true;
//     // reset();
//     // recognition.onend = reset;

    

//     recognition.lang = "pt-BR";
//     console.log('-- useSpeechRecognition done --');
//     console.log(recognition);
    
//   }catch(err: any){
//     console.error('webkitSpeechRecognition failed: ', err.messages)
//   }

//   if(recognition != null){
//     recognition.onresult =  (event: SpeechRecognitionEvent)=>{
//       console.log("onresult")
//       if (event.results.length > 0) {
//         console.log("event: ", event.results[0][0].transcript);
//         setText(event.results[0][0].transcript);
//     };
//   }

//   // ("");
//   const [text, setText] = useState("");
//   const [isListening, setIsListening] = useState(false);

//   useEffect(() => {
//     if(isListening) {
//       console.log('UE-isListening: ', isListening)
//       recognition.onresult = function (event: SpeechRecognitionEvent) {
//         console.log("onresult")
//         if (event.results.length > 0) {
//           console.log("event: ", event.results[0][0].transcript);
//           setText(event.results[0][0].transcript);
//         }
//         // setIsListening(false);
//       };
//       // recognition.start()
//     }else{
//       recognition.stop();
//     }
//   }, [isListening]);

//   const startListening = () => {
//     setText("");
//     setIsListening(true);
//     recognition.start();
//   };

//   const stopListening = () => {
//     setIsListening(false);
//     recognition.stop();
//   };

//   return {
//     isListening,
//     text,
//     startListening,
//     stopListening,
//     hasRecognitionSupport: !!recognition,
//   };
// };
// export default useSpeechRecognition;
