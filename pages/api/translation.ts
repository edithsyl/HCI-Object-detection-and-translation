const axios = require('axios');
const aws4 = require('aws4');
const dotenv = require('dotenv');
dotenv.config()

import { HOST_AWS, ENDPOINT_AWS, ACCESS_KEY_AWS, SECRET_KEY_AWS, SESSION_TOKEN_AWS } from '../../config';

// more details on openai_endpoint: https://hkust.developer.azure-api.net/api-details#api=azure-openai-2023-05-15&operation=ChatCompletions_Create


export async function getTranslation(text: string, targetLang: string): Promise<string>{
    try {
            console.log('getTranslation run: ', ENDPOINT_AWS)
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
                host: HOST_AWS, 
                method: 'POST',
                path: '/openai-dev/myHttpProxy', 
                region: 'us-esat-1',
                // url: ENDPOINT_AWS,
                url: ENDPOINT_AWS,
                headers:  {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(reqBody),
            }

            // aws4.sign() will sign and modify these options, ready to pass to http.request
            let signed = aws4.sign(request,
                {
                secretAccessKey: SECRET_KEY_AWS,
                accessKeyId: ACCESS_KEY_AWS,
                sessionToken: SESSION_TOKEN_AWS
                })
            
            const r = await axios({
                    ...signed,
                    url: ENDPOINT_AWS,
                    data: reqBody,
            })
            console.log('r: ', r.data);
            return r.data.choices[0].message.content || 'na';
        } catch (error) {
            console.error(error);
            return '--'
        }
}
