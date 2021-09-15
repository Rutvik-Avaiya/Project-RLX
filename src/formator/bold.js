import StackTrace from 'stacktrace-js';
import _ from 'lodash';

export async function toBold(stacktrace){
    const frames = await StackTrace.fromError(stacktrace);
    let stringified = _.map(frames, (frame) => `
    *Error:*  
    *at File:* ${frame.fileName}
    *at line: ${frame.lineNumber}*  
    *at Column: ${frame.columnNumber}*
    *Source:* ${frame.source}
    `);
    stringified = _.join(stringified, '\n');
    return `${stringified}`;
}