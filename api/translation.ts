const axios = require('axios');
/**
 * https://cloud.google.com/translate/docs/reference/rest/v3beta1/projects/translateText
 */
export async function getTranslation(text: String): Promise<String>{
    try {
            const reqBody = {
                    messages:[
                        {role: "system", content: "You are a professor."},
                        {role: "user", content: `Please translate the following word or sentences: ${text}`}
                    ]
                };
            const response = await axios.post(
                'https://hkust.azure-api.net/openai/deployments/gpt-35-turbo/chat/completions?api-version=2023-05-15', 
                reqBody,
                {
                    headers:  {
                        'Content-Type': 'application/json',
                        'api-key': '56120e26c7bb4bc5a55387b76eefc1d6' // openai primary key
                    },
                });
            console.log(response);
            return 'response';
        } catch (error) {
            console.error(error);
            return ''
        }
}