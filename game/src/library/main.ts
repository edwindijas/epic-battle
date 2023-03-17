import { PositionProperty, PromiseResolve } from "./main.types"

/**
 * Creates a style for the absolute or relative position.
 * 
 * @param {nummber} offset Offeset position in em
 * @param {PositionProperty[]} omit
 * @param {string} units Units to use defaults em
 * @returns 
 */
export const uniPos = (offset: number, omit: PositionProperty[] = [], units: string = 'em' ) => {
    const props: PositionProperty[] = ['top', 'right', 'bottom', 'left'];

    let str = '';

    props.forEach((pos) => {
        if (omit && omit.indexOf(pos) > -1) {
            return;
        }
        str += `${pos}: ${offset}${units};`
    })

    return str
}


export const getPromiseFunc = <A, B = A> ()  => {
    let resolve: PromiseResolve<A> = (() => {}) as PromiseResolve<A>
        , reject: PromiseResolve<B> = (() => {}) as PromiseResolve<B>;
    const promise = new Promise<A>((res, rej) => {
        resolve = res;
        reject = rej;
    });

    return {resolve, reject, promise}
}