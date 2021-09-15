import StackTrace from 'stacktrace-js';

export const toCode = (stacktrace) => {
    StackTrace.fromError(stacktrace).then(function(frames) {
        var stringifiedStack = frames.map(function(sf) {
            return sf.toString();
        }).join('\n');
        return '`' + stringifiedStack + '`';
    })
}