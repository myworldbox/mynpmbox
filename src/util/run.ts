export const Run = {
    sequential: async (functions: Function[]) => {
        await functions.reduce((promise, func) => promise.then(() => func()), Promise.resolve());
    },
    concurrent: async (functions: Function[]) => {
        await Promise.all(functions.map(func => func()));
    }
}

export const { sequential, concurrent } = Run