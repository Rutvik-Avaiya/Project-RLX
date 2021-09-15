

/**
 * Listen to all the errors occuring in DOM and 
 * on error trigger api call
 * 
 *
*/
import { forEach } from 'lodash'
import { browserInfo } from './browserinfo'
import { toBold } from './formator'
export function attach(rlx){
    window.onerror = function (message, url, lineNo, colNo, error){
        const data = browserInfo()
        console.log(data)
        if(window._rlx.isadvanced == true)
            rlx.sendMessage(JSON.stringify(data,null,4)).then(res => console.log(res)).catch(e => console.log(e))
               
        toBold(error).then(data => {
            rlx.sendMessage(data)
            .then((res) => console.log(res))
        }).catch(e => console.log(e))
    }
}
