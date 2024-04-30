const axios = require('axios');
import { OPENAI_API_KEY, OPENAI_ENDPOINT } from '../config';


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
            const response = await axios.post(
                OPENAI_ENDPOINT, 
                reqBody,
                {
                    headers:  {
                        'Access-Control-Allow-Origin': '*',
                        'Access-Control-Allow-Headers': '*',
                        'Content-Type': 'application/json',
                        'api-key': OPENAI_API_KEY // openai primary key
                    },
                });
            console.log(response);
            return response.choices[0].message.content;
        } catch (error) {
            console.error(error);
            return '--'
        }
}
