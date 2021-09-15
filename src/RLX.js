import 'babel-polyfill';

const axios = require('axios')
import { constants } from './api/constants'
const { BASE_URL } = constants;
import { attach } from './attach'
import { browserInfo } from './browserinfo'


axios.interceptors.request.use((config) => {
    console.info("✉️ ", config); 
    return config;
}, (error) => {
    console.error("✉️ ", error);
    return Promise.reject(error);
});

axios.interceptors.response.use((response) => {
    console.log(response)
    return response;
}, (error) => {
    return Promise.reject(error.message);
});


export  class initiate{
    /**
     * The Core RLX class
     * @constructor
     * @param { string } token - The Bot Token Reterived from Slack
     * @param { string } channelId - The Primary channel of slack to send the log/trace remotely
     * 
    */
    constructor(token , channelId,isadvanced){
        this.token = token
        this.channelId = channelId
        this.isadvanced = isadvanced
        this.client = axios.create({
            BASE_URL
        });
        window._rlx = this
        attach(this);

    }
//    static getInstance(){
//         return new initiate(this.token);
            
//     }
    async sendMessage(content){
        return new Promise((resolve, reject) => {
            this.client.post(`${constants.BASE_URL}/talk`, {
                channel: this.channelId,
                token: this.token,
                text: content
            }).then(data => resolve(data)).catch(e => reject(e))
        })
    }

}