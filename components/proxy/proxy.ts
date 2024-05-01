import * as http from 'http';
import { HttpProxyAgent } from 'http-proxy-agent';
import { PUBLIC_EC2_ADD } from '../../config';
const axios = require('axios');

const agent = new HttpProxyAgent(PUBLIC_EC2_ADD);

http.get('http://nodejs.org/api/', { agent }, (res) => {
  console.log('"response" event!', res.headers);
  res.pipe(process.stdout);
});

const axios_instance = axios.create()