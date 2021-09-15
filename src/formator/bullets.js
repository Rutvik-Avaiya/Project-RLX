

import StackTrace from 'stacktrace-js';
import _ from 'lodash';
export async function toBullets(stacktrace){
    const frames = await StackTrace.fromError(stacktrace);
    let stringified = _.map(frames, (frame) => `Error:  
    at File: ${frame.fileName} 
    at line: ${frame.lineNumber}  
    at Column: ${frame.columnNumber}
    Source: ${frame.source}
    `);
    stringified = _.join(stringified);
    return '*'+' '+stringified;
}

// export async function toBullets(){
//     const info = browserInfo()
//     let stringified = _.map(info, (data) => console.log(data));
//     stringified = _.join(stringified);
//    console.log(stringified)
// }