import StackTrace from 'stacktrace-js';

export const toCodeblock = (stacktrace) => {
    StackTrace.fromError(stacktrace).then(function(frames) {
        let stringifiedStack = frames.map(function(sf) {
            return sf.toString();
        }).join('\n');
        return '```' + stringifiedStack + '```';

    })
}