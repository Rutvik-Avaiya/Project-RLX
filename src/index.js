import { initiate } from './RLX'

let rlx = undefined;

/**
 * 
 * @param {*} token 
 */

export function setup(token){
    return rlx ? rlx : new initiate(token);
}