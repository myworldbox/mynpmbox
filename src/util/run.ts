export const Run = {
    async sequential(functions: Function[]) {
        await functions.reduce((promise, func) => {
            return promise.then(() => func());
        }, Promise.resolve());
    },

    async concurrent(functions: Function[]) {
        await Promise.all(functions.map(func => func()));
    }
};