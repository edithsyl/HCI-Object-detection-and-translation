const axios = require('axios');
const aws4 = require('aws4')
const dotenv = require('dotenv')
dotenv.config()
// require('@next/env').loadEnvConfig('./');
// dotenv.config({ path: __dirname+'/.env.local' })

// import { OPENAI_API_KEY, OPENAI_ENDPOINT, ENDPOINT_AWS, ACCESS_KEY_AWS, SECRET_KEY_AWS, SESSION_TOKEN_AWS } from '../../config';

// more details on openai_endpoint: https://hkust.developer.azure-api.net/api-details#api=azure-openai-2023-05-15&operation=ChatCompletions_Create


export async function getTranslation(text: string, targetLang: string): Promise<string>{
    try {
            console.log('getTranslation run: ', process.env.NEXT_PUBLIC_ENDPOINT_AWS)
            console.log('local: ', process.env.local)
            const prompt = `Please translate the following word or sentences into ${targetLang}: ${text}. Provide the answer only. Remove all punctuation. If you could not provide a translation due to inappropriate content or other reasons, please return 'N/A'.`
            const reqBody = {
                    messages:[
                        {role: "system", content: "You are a translating machine."},
                        {role: "user", content: prompt}
                    ]
                };

            // aws4 will sign an options object as you'd pass to http.request, with an AWS service and region
            var request = { 
                host: 'https://bu1ik0gj36.execute-api.us-east-1.amazonaws.com', 
                method: 'POST',
                path: '/openai-dev/myHttpProxy', 
                region: 'us-esat-1',
                // url: ENDPOINT_AWS,
                url: process.env.NEXT_PUBLIC_ENDPOINT_AWS,
                headers:  {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(reqBody),
            }

            // aws4.sign() will sign and modify these options, ready to pass to http.request
            let signed = aws4.sign(request,
                {
                secretAccessKey: process.env.NEXT_PUBLIC_SECRET_KEY_AWS,
                accessKeyId: process.env.NEXT_PUBLIC_ACCESS_KEY_AWS,
                sessionToken:process.env.NEXT_PUBLIC_SESSION_TOKEN_AWS
                })
            
            const r = await axios({
                    ...signed,
                    url: process.env.NEXT_PUBLIC_ENDPOINT_AWS,
                    data: reqBody,
            })
            console.log('r: ', r.data);
            return r.data.choices[0].message.content || 'na';
        } catch (error) {
            console.error(error);
            return '--'
        }
}
