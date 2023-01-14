export const invoke = (fun: string, payload?: any) => {
    const prom = new Promise((res, rej) => {
        rej('Local run')
    });

    return prom;
}

export const requestJira = invoke
