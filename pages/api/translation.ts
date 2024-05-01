const axios = require('axios');
const aws4 = require('aws4')
// const dotenv = require('dotenv');
// dotenv.config()

import { OPENAI_API_KEY, OPENAI_ENDPOINT, AWS_ENDPOINT, AWS_ACCESS_KEY, AWS_SECRET_KEY, AWS_SESSION_TOKEN } from '../../config';

// more details on openai_endpoint: https://hkust.developer.azure-api.net/api-details#api=azure-openai-2023-05-15&operation=ChatCompletions_Create


export async function getTranslation(text: string, targetLang: string): Promise<string>{
    try {
            

            console.log('getTranslation run')
            const prompt = `Please translate the following word or sentences into ${targetLang}: ${text}. Provide the answer only. Remove the '.' at the end. If you could not provide a translation due to inappropriate content or other reasons, please return 'N/A'.`
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
                url: AWS_ENDPOINT,
                headers:  {
                    // 'Access-Control-Allow-Origin': '*',
                    // 'Access-Control-Allow-Headers': '*',
                    'Content-Type': 'application/json',
                    // 'api-key': OPENAI_API_KEY // openai primary key
                },
                body: JSON.stringify(reqBody),
            }

            // aws4.sign() will sign and modify these options, ready to pass to http.request
            let signed = aws4.sign(request,
                {
                secretAccessKey: AWS_SECRET_KEY,
                accessKeyId: AWS_ACCESS_KEY,
                sessionToken:AWS_SESSION_TOKEN
                })
            
            const r = await axios({
                    ...signed,
                    url: AWS_ENDPOINT,
                    data: reqBody,
            })
            console.log('r: ', r.data);
            return r.data.choices[0].message.content || 'na';
            // const response = await axios.post(
            //     AWS_ENDPOINT, //OPENAI_ENDPOINT, 
            //     reqBody,
            //     {
            //         headers:  {
            //             'Access-Control-Allow-Origin': '*',
            //             'Access-Control-Allow-Headers': '*',
            //             'Content-Type': 'application/json',
            //             'api-key': OPENAI_API_KEY // openai primary key
            //         },
            //     });
            // console.log(response);
            // return response.choices[0].message.content;
        } catch (error) {
            console.error(error);
            return '--'
        }
}
