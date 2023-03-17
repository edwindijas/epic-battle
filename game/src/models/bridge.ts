export const invoke = (fun: string, payload?: any) => {
    const prom = new Promise((res, rej) => {
        rej('Running local build')
    });

    return prom;
}

export const requestJira = invoke
